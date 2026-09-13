#!/usr/bin/env bash
# Thin wrapper so both gates are run the same way: bash scripts/check-links.sh
set -euo pipefail
exec python3 "$(dirname "$0")/check-links.py" "$@"
