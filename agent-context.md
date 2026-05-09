# Handoff Notes

**Last Updated**: 2026-03-14
**Last Commits**: `e86f678` (Phase 11) + `4f749b2` (Sprint 1) — both deployed to production
**Branch**: main (pushed to origin)

---

## What Was Just Completed

### Phase 11: AI Search Arena Benchmark Quick Wins (commit `e86f678`)
Closed ~0.3 of 0.8-point benchmark gap with zero product development:

- **llms.txt**: Replaced with fresh 2026-03-14 generation (20 pages, quality 9/10)
- **llms-full.txt**: Created (297 lines, 19KB) — full markdown for LLM ingestion
- **Discovery mechanisms**: `Llms-Txt:` directive in robots.txt + `<link rel="alternate">` on all 22 HTML pages
- **Schema**: Organization sameAs (3 product domains), WebSite SearchAction, Article `image` field on 9 blog posts, HowTo JSON-LD on framework page (8 steps)
- **BreadcrumbList**: Verified on all 21 pages (all except homepage — correct)
- **Framework CTAs**: 7 "Check your score" buttons per pillar linking to aimpactscanner.com
- **Cross-property links**: All footer links verified across all pages

### Sprint 1: Entity Alignment (commit `4f749b2`)
Source: `/Ideation/agent-11-aisearchmastery-brief.md`

- **LLM.txt Mastery description**: Updated from generic "robots.txt for the AI era" to canonical version with differentiators (JS rendering, quality scoring, validation, deployment guidance) — 7 locations across 4 files
- **CTA text**: "Check your/My LLM.txt" → "Generate & Validate Your llms.txt" — 4 CTAs
- **CTA links**: 4 links changed from llmtxtmastery.com/validator to homepage
- **Product JSON-LD**: Updated in products.html with differentiators
- **sameAs**: Already included all ecosystem properties (no change needed)
- **AImpactMonitor**: "Coming Soon" confirmed accurate (no change needed)

**Live verification**: WebFetch confirmed all changes on production for both homepage and products page.

---

## Current State

### Deployed & Live
- Phase 11 benchmark quick wins — all tasks complete
- Sprint 1 entity alignment — all success criteria met
- Sprint document: `/sprints/sprint-1-entity-alignment.md`

### What Remains (from project-plan.md Phase 10)
- [ ] Article: "Not Found — Why AI Search Can't See Your Business" (Fundamentals)
- [ ] Article: "Not Cited — How to Get AI to Recommend You" (Fundamentals or How-To)
- [ ] Article: "Not Chosen — Converting AI-Driven Traffic" (How-To)
- [ ] Content refresh: update 5 remaining migrated article stubs with full content
- [ ] F-021: Build case study page template when first data is ready
- [ ] F-023: Publish first verified before/after case study

### Product Development (from benchmark-improvement-brief.md)
These require changes to individual products, not aisearchmastery.com:
- AImpactScanner: action lists, schema engine, readability scoring, competitive benchmarking
- LLM.txt Mastery: deep validation, multi-format, deployment guidance, drift monitoring
- AImpactMonitor: citation tracking, ROI attribution, competitive intel
- Shared API: REST API, webhooks, Zapier/Make integrations

---

## Key Warnings

- **Newsletter + early access forms share the same Buttondown list** (`watters`). Distinguished by Plausible event name (`newsletter_signup` vs `early_access_signup`) and `data-location` attribute.
- **No product screenshot for AImpactMonitor** — intentional (product in development).
- **AI Search Arena is a free resource callout**, not a product section.
- **LLM.txt Mastery CTAs now link to homepage** (not /validator). Footer "Free Validator" link still goes to /validator — this is intentional.
- **llms-full.txt is manually maintained** — must be updated when site content changes significantly.
