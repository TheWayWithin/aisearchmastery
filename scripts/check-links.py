#!/usr/bin/env python3
"""
check-links.py — every internal link, asset and redirect on aisearchmastery.com resolves.

The site is static. Netlify publishes what scripts/build-site.sh assembles, so
"resolves" means: a published file exists at that path, or a redirect rule in
netlify.toml sends it somewhere that does. Fragment links (#anchor) must point at an id that exists on
the target page.

Exit 0: every link resolves. Exit 1: at least one does not.

Run:  bash scripts/check-links.sh
"""
import os, re, subprocess, sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def tracked():
    """The files this site actually publishes, per scripts/published-files.sh."""
    out = subprocess.run(['bash', os.path.join(ROOT, 'scripts', 'published-files.sh')],
                         cwd=ROOT, capture_output=True, text=True, check=True)
    return set(out.stdout.split('\n')) - {''}


def parse_redirects(toml_text):
    """Return (exact_rules, splat_prefixes) from netlify.toml."""
    exact, splat = {}, {}
    for block in re.findall(r'\[\[redirects\]\](.*?)(?=\n\[\[|\n\[|\Z)', toml_text, re.S):
        f = re.search(r'from\s*=\s*"([^"]+)"', block)
        t = re.search(r'to\s*=\s*"([^"]+)"', block)
        if not f or not t:
            continue
        src, dst = f.group(1), t.group(1)
        if src.endswith('/*'):
            splat[src[:-2]] = dst
        elif src == '/*':
            splat[''] = dst
        else:
            exact[src] = dst
    return exact, splat


def main():
    files = tracked()
    html_files = sorted(f for f in files if f.endswith('.html'))

    toml_text = open(os.path.join(ROOT, 'netlify.toml'), encoding='utf-8').read()
    exact, splat = parse_redirects(toml_text)

    # ids present on each page, for fragment checking
    ids = {}
    for f in html_files:
        src = open(os.path.join(ROOT, f), encoding='utf-8').read()
        ids[f] = set(re.findall(r'\bid="([^"]+)"', src))

    def to_file(path):
        """Map a site path to a tracked file, or None."""
        p = path.lstrip('/')
        if p == '' or p.endswith('/'):
            p = p + 'index.html'
        if p in files:
            return p
        if (p + '/index.html') in files:
            return p + '/index.html'
        if (p + '.html') in files:
            return p + '.html'
        return None

    def resolve(path, depth=0):
        """Follow redirects to a tracked file. Returns (file_or_None, note)."""
        if depth > 5:
            return None, 'redirect loop'
        f = to_file(path)
        if f:
            return f, ''
        if path in exact:
            return resolve(exact[path], depth + 1)
        for prefix in sorted(splat, key=len, reverse=True):
            if prefix and path.startswith(prefix):
                return resolve(splat[prefix], depth + 1)
        return None, ''

    problems = defaultdict(list)

    # 1. Links and assets on every page
    for f in html_files:
        src = open(os.path.join(ROOT, f), encoding='utf-8').read()
        # Code samples are illustrations, not links. Strip them before looking.
        src_links = re.sub(r'<pre>.*?</pre>', '', src, flags=re.S)
        refs = re.findall(r'(?:href|src)="(/[^"#]*)(#[^"]*)?"', src_links)
        for path, frag in refs:
            # A query string is not part of the path a static host serves.
            path = path.split('?')[0] or '/'
            # blog-article-template.html carries [placeholder] segments by design.
            if '[' in path:
                continue
            target, note = resolve(path)
            if note:
                problems[f].append('%s : %s' % (path, note))
                continue
            if target is None:
                # the catch-all /* -> 404 rule means nothing truly 404s, but a link
                # that only resolves via the catch-all is a broken link.
                problems[f].append('%s : no file and no redirect (falls through to 404)' % path)
                continue
            if frag:
                anchor = frag[1:]
                if target in ids and anchor not in ids[target]:
                    problems[f].append('%s%s : page exists, id "%s" does not' % (path, frag, anchor))

    # 2. Every redirect target resolves
    for src_path, dst in list(exact.items()) + [(p + '/*', d) for p, d in splat.items()]:
        if dst.startswith('http'):
            problems['netlify.toml'].append('%s -> %s : redirects off-site' % (src_path, dst))
            continue
        target, note = resolve(dst)
        if target is None:
            problems['netlify.toml'].append('%s -> %s : target does not resolve' % (src_path, dst))

    # 3. netlify.toml and _redirects agree on every path both define
    red_path = os.path.join(ROOT, '_redirects')
    if os.path.exists(red_path):
        for line in open(red_path, encoding='utf-8'):
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            parts = line.split()
            if len(parts) < 2:
                continue
            src_path, dst = parts[0], parts[1]
            if src_path in exact and exact[src_path] != dst:
                problems['_redirects'].append(
                    '%s -> %s but netlify.toml sends it to %s' % (src_path, dst, exact[src_path]))
            if dst.startswith('http'):
                problems['_redirects'].append('%s -> %s : redirects off-site' % (src_path, dst))

    if problems:
        for f in sorted(problems):
            print('FAIL: %s' % f)
            for p in problems[f]:
                print('    %s' % p)
            print()
        print('check-links: FAILED.')
        return 1

    print('check-links: %d pages checked, every internal link, asset, fragment and redirect resolves. PASS'
          % len(html_files))
    return 0


if __name__ == '__main__':
    sys.exit(main())
