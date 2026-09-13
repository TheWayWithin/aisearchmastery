#!/usr/bin/env bash
#
# published-files.sh - the single list of what this site publishes.
#
# Sourced by build-site.sh (which copies these files) and by check-copy.sh
# (which checks them). One list, so the thing that ships and the thing that
# gets checked cannot drift apart.
#
# Prints one repo-relative path per line.
#
set -euo pipefail

cd "$(dirname "$0")/.."

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

ROOT_FILES=(
  robots.txt
  sitemap.xml
  llms.txt
  llms-full.txt
  _redirects
)

DIRS=(blog css js)

# images/ is NOT published wholesale. The repo holds source assets that no page
# references, and two of them are screenshots of the retired scanner showing it
# signed in, with an Upgrade button, a plan tier, and the superseded framework
# version and weights rendered into the pixels. A gate that only reads text
# cannot see that, so the images are kept out of the deploy instead.
IMAGE_DIRS=(images/favicon images/og images/blog)
IMAGE_FILES=(
  images/jamie-watters.jpg
  images/logo/logo-primary.png
)

for p in "${PAGES[@]}"; do
  if [ -f "$p" ]; then echo "$p"; fi
done

for f in "${ROOT_FILES[@]}"; do
  if [ -f "$f" ]; then echo "$f"; fi
done

for d in "${DIRS[@]}" "${IMAGE_DIRS[@]}"; do
  if [ -d "$d" ]; then
    find "$d" -type f \
      ! -name '*.md' ! -name '*.py' ! -name '*.txt' ! -name '.env*' ! -name '*.zip' \
      ! -name '*.log' ! -name '.DS_Store' ! -name '.gitkeep'
  fi
done

for f in "${IMAGE_FILES[@]}"; do
  if [ -f "$f" ]; then echo "$f"; fi
done
