#!/usr/bin/env bash
#
# check-copy.sh - the gate that keeps prices and dead products off aisearchmastery.com.
#
# aisearchmastery.com sells nothing. AImpactScanner and LLM.txt Mastery were
# switched off on 25 to 26 August 2026; AImpactMonitor never opened. This script
# fails if any PUBLISHED file starts offering them again, or quotes a price.
#
# "Published" means whatever scripts/published-files.sh lists, which is the same
# list scripts/build-site.sh copies into the deploy. It is not only the HTML:
# markdown notes and JavaScript in the repo were public URLs until the build
# allowlist landed, and one of them was a live sales sequence.
#
# Exit 0: clean. Exit 1: a banned pattern is on a published file.
#
# Run:  bash scripts/check-copy.sh
#
set -uo pipefail

cd "$(dirname "$0")/.."

FILES=()
while IFS= read -r f; do
  case "$f" in
    *.png|*.jpg|*.jpeg|*.gif|*.webp|*.ico|*.svg|*.woff|*.woff2|*.ttf|*.pdf) continue ;;
  esac
  FILES+=("$f")
done < <(bash scripts/published-files.sh)

if [ ${#FILES[@]} -eq 0 ]; then
  echo "check-copy: found no published files. Refusing to pass a check that checked nothing."
  exit 1
fi

fail=0

# Each rule is "label|extended-regex". Matching is case-insensitive.
RULES=(
  'a price ending 9.95, the old tool pricing|\$?9\.95'
  'the Free Site Scan call to action|free site scan'
  'a coming-soon promise|coming soon'
  'the unverified 67x value-gap claim|67x|67×'
  'a free-signup call to action|start free|start your free|no credit card|free first scan|upgrade to'
  'a checkout|checkout'
  'a subscription ask|subscribe to|/subscribe'
  'a link to the dead AImpactScanner site|https?://(www\.)?aimpactscanner\.com'
  'a link to the dead LLM.txt Mastery site|https?://(www\.)?llmtxtmastery\.com'
  'a link to the never-launched AImpactMonitor site|https?://(www\.)?aimpactmonitor\.com'
  'a link to the AI Search Arena site, which returns HTTP 500|https?://(www\.)?aisearcharena\.com'
)

# Deliberately NOT a rule: a dollar figure on its own.
# Several articles report other companies' prices as journalism: ChatGPT
# advertising at a $200,000 minimum, and a benchmark table of competing llms.txt
# tools. Quoting what someone else charges is reporting. This site charging for
# something is the failure the gate exists to catch, and 9.95 was its price.

for rule in "${RULES[@]}"; do
  label="${rule%%|*}"
  pattern="${rule#*|}"
  hits=$(grep -n -i -E "$pattern" "${FILES[@]}" 2>/dev/null || true)
  if [ -n "$hits" ]; then
    echo "FAIL: $label"
    echo "$hits" | sed 's/^/    /'
    echo
    fail=1
  fi
done

if [ "$fail" -eq 0 ]; then
  echo "check-copy: ${#FILES[@]} published files checked, no prices and no dead products. PASS"
  exit 0
fi

echo "check-copy: FAILED. See the hits above."
echo "This site is a static hub for the MASTERY-AI framework, the guides and the"
echo "articles. It has nothing to sell. If a price or a retired product genuinely"
echo "belongs on a page, change the gate deliberately rather than working around it."
exit 1
