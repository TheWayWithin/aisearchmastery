#!/usr/bin/env bash
#
# check-copy.sh — the gate that keeps prices and dead products off aisearchmastery.com.
#
# aisearchmastery.com sells nothing. AImpactScanner and LLM.txt Mastery were switched
# off on 25 to 26 August 2026; AImpactMonitor never opened. This script fails the build
# if any served page starts offering them again, or quotes a price.
#
# Exit 0: clean. Exit 1: a banned pattern is on a served page.
#
# Run:  bash scripts/check-copy.sh
#
set -uo pipefail

cd "$(dirname "$0")/.."

# Every .html this site actually serves. Netlify publishes ".", so "served" means
# every .html tracked in git. Untracked and gitignored files are never deployed.
# bash 3.2 on macOS has no mapfile, so read the list the portable way.
FILES=()
while IFS= read -r f; do
  FILES+=("$f")
done < <(git ls-files '*.html')

if [ ${#FILES[@]} -eq 0 ]; then
  echo "check-copy: found no tracked .html files. Refusing to pass a check that checked nothing."
  exit 1
fi

fail=0

# Each rule is "label|extended-regex". Matching is case-insensitive.
RULES=(
  'a price ending 9.95, the old tool pricing|\$?9\.95'
  'the Free Site Scan call to action|free site scan'
  'a coming-soon promise|coming soon'
  'the unverified 67x value-gap claim|67x|67×'
  'a free-signup call to action|start free|start your free|no credit card|free first scan'
  'a checkout|checkout'
  'a subscription ask|subscribe to'
  'a link to the dead AImpactScanner site|href="https?://(www\.)?aimpactscanner\.com'
  'a link to the dead LLM.txt Mastery site|href="https?://(www\.)?llmtxtmastery\.com'
  'a link to the never-launched AImpactMonitor site|href="https?://(www\.)?aimpactmonitor\.com'
  'a link to the AI Search Arena site, which returns HTTP 500|href="https?://(www\.)?aisearcharena\.com'
)

# Deliberately NOT a rule: a dollar figure on its own.
# Several articles report other companies' prices as journalism (ChatGPT advertising
# at a $200,000 minimum, a benchmark table of competing llms.txt tools). Quoting what
# someone else charges is reporting. This site charging for something is the failure
# this gate exists to catch, and 9.95 was the price it charged.

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
  echo "check-copy: ${#FILES[@]} served pages checked, no prices and no dead products. PASS"
  exit 0
fi

echo "check-copy: FAILED. See the hits above."
echo "This site is a static hub for the MASTERY-AI framework, the guides and the articles."
echo "It has nothing to sell. If a price or a retired product belongs on a page, the gate is"
echo "wrong and should be changed deliberately, not worked around."
exit 1
