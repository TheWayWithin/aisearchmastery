# Sprint 1: Entity Alignment — LLM.txt Mastery Canonical Descriptions

**Date:** 2026-03-14
**Source:** `/Ideation/agent-11-aisearchmastery-brief.md`
**Property:** aisearchmastery.com
**Status:** COMPLETE

---

## Brief Requirements & Validation

### Requirement 1: LLM.txt Mastery description matches canonical
**Status:** DONE

**Old description (index.html):**
> "Validate and generate the file that tells AI models how to read your site. Think of it as robots.txt for the AI era."

**New canonical description (deployed to index.html, products.html, framework.html, llms-full.txt):**
> "Generate and validate llms.txt files. Discovers JavaScript-rendered pages that crawl-only tools miss, then quality-scores content so the output prioritises what matters."

**Files changed:**
- `index.html` line 286 — product card body text
- `products.html` line 87 — Product JSON-LD description (expanded canonical)
- `products.html` line 320 — section subtitle text
- `products.html` line 344 — earn-the-ask description
- `framework.html` line 354 — earn-the-ask description
- `llms-full.txt` line 22 — product table description
- `llms-full.txt` lines 121-128 — LLM.txt Mastery section (full canonical + differentiators list)

### Requirement 2: CTA text is descriptive of what the tool does
**Status:** DONE

**Old CTA text:** "Check your LLM.txt" / "Check My LLM.txt" / "Free LLM.txt Check"

**New CTA text:** "Generate & Validate Your llms.txt"

**Files changed:**
- `index.html` line 148 — hero secondary CTA
- `index.html` line 290 — mid-page product card CTA
- `products.html` line 355 — earn-the-ask CTA button
- `framework.html` line 360 — framework pillar CTA button
- All aria-labels updated to match

### Requirement 3: At least one link to llmtxtmastery.com homepage
**Status:** DONE

**Previously:** All CTAs linked to `/validator`. Footer already linked to homepage.

**Changed:** 4 CTA links now point to `https://llmtxtmastery.com` (homepage) instead of `/validator`:
- `index.html` hero CTA
- `index.html` mid-page product card CTA
- `products.html` earn-the-ask CTA
- `framework.html` pillar M CTA

**Kept on /validator:** Footer "Free Validator" link and products.html text reference (these correctly describe the validator specifically).

### Requirement 4: AImpactMonitor status
**Status:** NO CHANGE NEEDED

"Coming Soon" is consistently applied across all 22 pages. Still accurate.

### Requirement 5: sameAs schema includes all ecosystem properties
**Status:** ALREADY COMPLETE (done in Phase 11)

Organization schema in `index.html` already includes:
```json
"sameAs": [
  "https://x.com/Jamie_within",
  "https://linkedin.com/in/jamie-watters-solo",
  "https://jamiewatters.work",
  "https://aimpactscanner.com",
  "https://llmtxtmastery.com",
  "https://aisearcharena.com"
]
```

---

## Success Criteria Checklist

- [x] LLM.txt Mastery description matches canonical (includes JS rendering, quality scoring, validation)
- [x] At least one link to llmtxtmastery.com homepage (not just /validator) — 4 CTAs now link to homepage
- [x] CTA text is descriptive of what the tool does — "Generate & Validate Your llms.txt"
- [x] sameAs links in Organization schema include all ecosystem properties — already done

---

## Files Modified

| File | Changes |
|------|---------|
| `index.html` | Product card description, hero CTA text + link, mid-page CTA text + link |
| `products.html` | JSON-LD Product description, section subtitle, earn-the-ask description, CTA text + link + aria-label |
| `framework.html` | Earn-the-ask description, CTA text + link + aria-label |
| `llms-full.txt` | Product table description, LLM.txt Mastery section text + differentiators |

## Deployment

Committed and pushed to `main` — auto-deployed via Netlify.
