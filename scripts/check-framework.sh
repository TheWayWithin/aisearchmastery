#!/usr/bin/env bash
#
# check-framework.sh - the site's MASTERY-AI numbers must match the repository.
#
# Pass 1 of the sceptical review found an article stating "Version 3.2.0 of the
# framework has 8 pillars and 149 atomic factors" and then listing six pillar
# names that do not exist in the framework: Sentiment & Reviews, Technical
# Foundations, Entity Recognition, Relevance & Accuracy, Youthfulness &
# Recency. The framework page had them right. Nothing caught the contradiction
# because the version and the total were correct and only the names were wrong.
#
# This checks three things across every published file:
#   1. No superseded factor count (27 or 148) is attributed to the framework.
#   2. No superseded version (3.1.1, 3.1.0, v3.1) is named as current.
#   3. No retired pillar name appears.
# And on framework.html specifically, that the per-pillar counts still sum to
# 149 and the weights to 100.
#
# The expected values are pinned below from the repository README at v3.2.0:
#   https://github.com/TheWayWithin/mastery-ai-framework
# If the framework is ever revised, change them here on purpose.
#
# Exit 0: clean. Exit 1: a claim does not match the source.
#
# Run:  bash scripts/check-framework.sh
#
set -uo pipefail

cd "$(dirname "$0")/.."

FILES=()
while IFS= read -r f; do
  case "$f" in
    *.html|*.txt|*.xml) FILES+=("$f") ;;
  esac
done < <(bash scripts/published-files.sh)

fail=0

report() {
  echo "FAIL: $1"
  echo "$2" | sed 's/^/    /'
  echo
  fail=1
}

# 1. A superseded count stated as what the framework IS, in the present tense.
# Historical sentences about what the scanner checked ("evaluated sites against
# 27 factors drawn from the framework") are true and are not caught.
hits=$(grep -n -i -E '(framework|MASTERY-AI)[^.]{0,40} (has|is|defines|contains|evaluates|covers)[^.]{0,25}(27|148)|(27|148) (atomic )?factors (across|in) 8 pillars|8-pillar, (27|148)-factor' "${FILES[@]}" 2>/dev/null || true)
[ -n "$hits" ] && report "a superseded factor count stated as what the framework is (it has 149 at v3.2.0)" "$hits"

# 2. A superseded version named as the current one.
hits=$(grep -n -i -E 'v?3\.1\.[01]|version 3\.1' "${FILES[@]}" 2>/dev/null || true)
[ -n "$hits" ] && report "a superseded framework version (current is v3.2.0)" "$hits"

# 3. Pillar names that are not in the framework.
# Only where the phrase is used AS a pillar label: a MASTERY letter, then a
# separator, then the name. Ordinary prose using "entity recognition" or
# "AI-specific optimisation" as plain English is not a claim about the pillars.
NAMES='Structured Data|Entity Recognition|Technical Foundations?|Your Content Quality|Sentiment (&(amp;)?|and) Reviews|Relevance (&(amp;)?|and) Accuracy|Youthfulness[^|]*|Machine Readability(?!( &(amp;)? | and )Technical)|Authority Signals|Reputation (&(amp;)?|and) Citations|AI-Specific Optimisation'
hits=$(grep -n -i -E "\b(M|A|S|T|E|R|Y|AI)[[:space:]]*(:|—|&mdash;|-)[[:space:]]*($NAMES)\b" "${FILES[@]}" 2>/dev/null || true)
[ -n "$hits" ] && report "a pillar name that does not appear in the framework README" "$hits"

# 4. framework.html must still add up.
sums=$(python3 - <<'PY'
import re, sys
s = open('framework.html', encoding='utf-8').read()
pairs = re.findall(r'(\d+) factors, (\d+\.\d)%', s)
if not pairs:
    print('NOFACTORS'); sys.exit()
f = sum(int(a) for a, _ in pairs)
w = round(sum(float(b) for _, b in pairs), 1)
print('%d %d %s' % (len(pairs), f, w))
PY
)
if [ "$sums" = "NOFACTORS" ]; then
  report "framework.html no longer lists per-pillar factor counts" "expected 8 badges of the form '<n> factors, <w>%'"
else
  set -- $sums
  if [ "$1" != "8" ] || [ "$2" != "149" ] || [ "$3" != "100.0" ]; then
    report "framework.html pillars do not add up" "found $1 pillars, $2 factors, $3% of weight; expected 8, 149, 100.0"
  fi
fi

if [ "$fail" -eq 0 ]; then
  echo "check-framework: MASTERY-AI claims match the repository at v3.2.0, 8 pillars, 149 factors. PASS"
  exit 0
fi

echo "check-framework: FAILED."
echo "Every MASTERY-AI number on this site has to match github.com/TheWayWithin/mastery-ai-framework."
echo "If the framework itself changed, update the pinned values in this script deliberately."
exit 1
