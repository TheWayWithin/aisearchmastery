#!/usr/bin/env bash
#
# build-site.sh - assemble the directory Netlify publishes.
#
# Netlify used to publish the repository root. That meant every file in the repo
# was a public URL: the old Kit email sequences with their upgrade links and
# monthly price, the 2026 PRD with the original price list, progress.md, the
# ideation folder, the agent framework files and .env.example. None of it was
# linked from a page, all of it was fetchable, and robots.txt allowed the lot.
#
# This script copies the site and nothing else. Anything not named here is never
# deployed, so a note dropped in the repo root cannot become a public page.
#
# Netlify builds from a clean checkout, so _site is always fresh there. Locally,
# delete _site by hand if you want a clean rebuild; this script never deletes.
#
# Run:  bash scripts/build-site.sh   (Netlify runs it on every deploy)
#
set -euo pipefail

cd "$(dirname "$0")/.."
OUT="_site"
mkdir -p "$OUT"

# Pages. Listed one by one, not globbed, so a stray .html in the repo root is
# not silently published.
PAGES=(
  index.html
  about.html
  contact.html
  framework.html
  products.html
  privacy.html
  terms.html
  404.html
)

for p in "${PAGES[@]}"; do
  cp "$p" "$OUT/$p"
done

# Directories served as they are.
for d in blog css js images; do
  if [ -d "$d" ]; then
    mkdir -p "$OUT/$d"
    cp -R "$d/." "$OUT/$d/"
  fi
done

# Root files the web needs.
for f in robots.txt sitemap.xml llms.txt llms-full.txt _redirects; do
  if [ -f "$f" ]; then cp "$f" "$OUT/$f"; fi
done

# Belt and braces: the directory copies above should not have carried anything
# that is not a web asset. If they did, it does not ship.
find "$OUT" -type f \
  \( -name '*.md' -o -name '*.py' -o -name '.env*' -o -name '*.zip' \
     -o -name '*.log' -o -name '.DS_Store' -o -name '.gitkeep' \) -print -delete

echo "build-site: $(find "$OUT" -type f | wc -l | tr -d ' ') files published to $OUT/"
echo "build-site: $(find "$OUT" -name '*.html' | wc -l | tr -d ' ') HTML pages"
