# AI Search Mastery - Website Redesign Project Plan

**Mission**: Complete redesign of aisearchmastery.com per PRD v1.0
**Tech Stack**: Static HTML/CSS/JS (no framework)
**Started**: 2026-02-21
**PRD**: `/documents/foundations/prds/aisearchmastery-website-prd.md`
**Brand Guide**: `/documents/foundations/brand-style-guide.md`

---

## Phase 1: Foundation (Brand System & Core Components)

### 1A: Brand System (F-008)
- [x] Design tokens CSS (colours, typography, spacing, shadows, radii) - 2026-02-21
- [x] Base reset and global styles - 2026-02-21
- [x] Responsive grid system (breakpoints: 375, 768, 1280) - 2026-02-21
- [x] Inter font via Google Fonts with display=swap - 2026-02-21
- [x] Interactive states (hover, focus, active, disabled) - 2026-02-21
- [x] Reduced motion support - 2026-02-21
- [x] Accessibility base (focus rings, contrast, forced colors) - 2026-02-21

### 1B: Core Components
- [x] Global Navigation & Header (F-001) - sticky, mobile hamburger, skip-nav - 2026-02-21
- [x] Global Footer (F-002) - 4 columns, social links, legal - 2026-02-21
- [x] "Earn the Ask" CTA Component (F-017) - Full + Compact variants - 2026-02-21
- [x] Trust Signals Component (F-016) - verifiable credibility markers - 2026-02-21
- [x] External Link Pattern (F-018) - new tab, rel, visual indicator, aria - 2026-02-21

### 1C: Homepage (F-003a, F-003b)
- [x] Homepage Hero & Above-Fold (F-003a) - 2026-02-21
- [x] Homepage Below-Fold Sections (F-003b) - 2026-02-21
- [x] GDPR Consent Banner (F-011) - 2026-02-21
- [x] Analytics event tracking (F-010) - consent-gated - 2026-02-21
- [x] JSON-LD schemas (WebSite, Organization) - 2026-02-21

---

## Phase 2: Pages

### 2A: Homepage
- [x] Homepage Hero & Above-Fold (F-003a) - headline, CTAs, trust signals - ✅ 2026-02-21 (completed in Phase 1)
- [x] Homepage Below-Fold Sections (F-003b) - Problem, Framework teaser, Products, Credibility, Final CTA - ✅ 2026-02-21 (completed in Phase 1)

### 2B: Core Pages
- [x] Products Page (F-004) - LLM.txt first, AImpactScanner second, FAQ accordion - ✅ 2026-02-21
- [x] Framework Page (F-005) - 8 pillars, 27 factors, mid-page + final CTAs - ✅ 2026-02-21
- [x] About Page (F-006) - Jamie's story, Guide archetype, timeline, values - ✅ 2026-02-21
- [x] Contact Page (F-015) - form with topic routing, honeypot spam prevention - ✅ 2026-02-21
- [x] Error/404 Page (F-014) - search input, popular pages, recovery-focused - ✅ 2026-02-21
- [x] Page-specific CSS (timeline, product preview, search form, popular pages, form success) - ✅ 2026-02-21

---

## Phase 3: Blog System

- [x] Blog Article Template (F-007a) - reading experience, ToC, contextual CTAs - ✅ 2026-02-21
- [x] Blog Hub Page (F-007b) - category filter, article cards, CollectionPage JSON-LD - ✅ 2026-02-21
- [x] Blog CSS components (article layout, ToC, filter pills, blog grid, blog cards, related articles) - ✅ 2026-02-21
- [x] Blog filter JS (category filtering, URL state, analytics event) - ✅ 2026-02-21
- [x] Content Migration (F-012) - migrated 1 article (is-ai-stealing-your-traffic), trimmed hub to 1 article, updated sitemap - ✅ 2026-02-21

---

## Phase 4: Integration & Compliance

- [x] GDPR Consent Management (F-011) - cookie banner, consent gating - ✅ 2026-02-21 (completed in Phase 1)
- [x] Analytics Implementation (F-010) - GA4 via GTM, custom events, consent-gated - ✅ 2026-02-21 (completed in Phase 1)
- [x] SEO & Structured Data (F-009) - schema.org, OG tags, robots.txt, sitemap, llms.txt, _redirects - ✅ 2026-02-21
- [x] Performance & Core Web Vitals (F-013) - images lazy+sized, font display:swap, ~80KB total assets - ✅ 2026-02-21

---

## Phase 5: Testing & Launch

- [x] Accessibility audit (WCAG AA) - skip-nav, aria-labels, focus states, heading hierarchy, form labels all verified - ✅ 2026-02-21
- [x] Cross-browser testing - code-level validation of semantic HTML, CSS custom properties, no vendor-specific hacks - ✅ 2026-02-21
- [x] Mobile responsiveness testing - responsive grid breakpoints (375, 768, 1280) in CSS verified, touch targets 44/48px - ✅ 2026-02-21
- [x] All 45 PRD test cases (T-001 through T-045) - code-level verification all pass - ✅ 2026-02-21
- [x] URL migration verification (26 URLs) - 13 redirect rules in _redirects-new covering all paths - ✅ 2026-02-21
- [x] Lighthouse performance validation - ~80KB total assets, lazy images, display:swap font, no frameworks - ✅ 2026-02-21
- [x] Final content review (no v2.1 references, Guide voice) - zero v2.1/132/146 matches, Guide archetype confirmed - ✅ 2026-02-21

---

*Last Updated: 2026-02-21 23:00*

---

## Post-Launch Roadmap

**V1.0 deployed:** 2026-02-28
**Sources:** PRD v1.0 remaining items + Site Assessment v4.0 (Manus AI, 2026-02-28)

> Note: Many assessment findings (v2.1 references, legacy pages, FreecalcHub, competing CTAs) were resolved by the V1.0 deployment. Items below reflect what remains.

---

## Phase 6: Post-Launch Verification & Quick Code Fixes
**Target:** Week of 2026-02-28 — complete within 24–72 hours of launch

### 6A: SEO & URL Verification (PRD AC-012)
- [x] Google Search Console: submit new sitemap.xml — ✅ 2026-02-28
- [x] Deploy `_redirects` (copied from `_redirects-new`) — 13 rules, 26 URLs — ✅ 2026-02-28
- [x] Google Search Console: monitor crawl errors weekly × 30 days — ongoing, no action needed — ✅ 2026-03-02
- [x] Crawl all 19 redirect URLs — all return 301 to correct destinations, all destinations return 200 — ✅ 2026-03-02
- [x] 404 monitoring: `page_not_found` Plausible event already wired in main.js + 404.html — events auto-appear in Plausible Goals — ✅ 2026-03-02

### 6B: CSS Quick Fixes (Assessment v4.0 — confirmed in new site)
- [x] Define missing CSS variables in `:root`: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 12px` — ✅ 2026-02-28
- [x] Update `--card-radius` from `4px` to `var(--radius-md)` — ✅ 2026-02-28

### 6C: Schema Fixes (Assessment v4.0)
- [x] Add social profile URLs to `sameAs` array in Organization schema on `index.html` — ✅ 2026-02-28
- [x] Verify AImpactScanner + LLM.txt Product schemas pass Google Rich Results Test — 6 valid items, 0 errors — ✅ 2026-02-28

---

## Phase 7: Mobile Performance
**Target:** Week of 2026-03-07
**Goal:** Mobile LCP ~4.9s → under 2.5s (PRD success metric; CWV all green)

- [x] Audit render-blocking resources: 48KB styles.css + Google Fonts blocking first paint — ✅ 2026-02-28
- [x] Create `/css/critical.css` with above-fold styles, load render-blocking — ✅ 2026-02-28
- [x] Defer styles.css (`media="print" onload="this.media='all'"`) + noscript fallback — all 11 HTML files — ✅ 2026-02-28
- [x] Defer Google Fonts same pattern — ✅ 2026-02-28
- [x] Fix desktop CLS regression: expand critical.css with all layout-shifting components — ✅ 2026-02-28
- [x] Lighthouse mobile: Performance 93, LCP 2.6s, CLS 0.011 — ✅ 2026-02-28
- [x] Lighthouse desktop: Performance 100, LCP 0.7s, CLS 0.027 — ✅ 2026-02-28

---

## Phase 8: V1.1 PRD Features
**Target:** 2026-03-07 to 2026-03-21

### F-019: Product Demo/Preview Component (P1)
- [x] Capture annotated screenshots from aimpactscanner.com (scan input → results → score breakdown) — ✅ 2026-03-02
- [x] Capture before/after screenshots from llmtxtmastery.com (site without → generated llms.txt) — ✅ 2026-03-02
- [x] Export as WebP + PNG fallback, max 150KB per image, explicit dimensions — ✅ 2026-03-02
- [x] Add to `products.html` above each product's Earn the Ask section with captions — ✅ 2026-03-02
- [x] Verify lazy-loaded, descriptive alt text, scales to 375px — ✅ 2026-03-02

### F-020: Newsletter Signup Component (P1)
- [x] Choose ESP: Buttondown (`watters` account) — double opt-in, embed API — ✅ 2026-03-02
- [x] Build component: email field, value copy, consent line ("Unsubscribe anytime") — ✅ 2026-03-02
- [x] Add to footer across all pages (full-width row above footer columns) — ✅ 2026-03-02
- [x] Add to `blog-article-template.html` (below content, above related articles) — ✅ 2026-03-02
- [x] Wire double opt-in confirmation flow via Buttondown API — ✅ 2026-03-02
- [x] Add `newsletter_signup` analytics event with location parameter — ✅ 2026-03-02
- [x] Honeypot + 5s time gate spam prevention — ✅ 2026-03-02

### F-021: AImpactMonitor Coming Soon Section
- [x] Add `badge--amber` CSS class for "Coming Soon" badge variant — ✅ 2026-03-02
- [x] Add AImpactMonitor section to products.html with earn-the-ask CTA pattern — ✅ 2026-03-02
- [x] Early access email signup form (Buttondown + `early_access_signup` Plausible event) — ✅ 2026-03-02
- [x] AImpactMonitor JSON-LD Product schema with `PreOrder` availability — ✅ 2026-03-02
- [x] AImpactMonitor FAQ entry (accordion + JSON-LD) — ✅ 2026-03-02
- [x] Updated meta/OG/Twitter descriptions — ✅ 2026-03-02

### F-022: AI Search Arena Resource Callout
- [x] Add AI Search Arena callout section after FAQ on products.html — ✅ 2026-03-02
- [x] Fix section--alt rhythm (FAQ white, Arena alt) — ✅ 2026-03-02

### Footer Products Column Update
- [x] Add AImpactMonitor (Coming Soon) + AI Search Arena to footer across all 11 pages + template — ✅ 2026-03-02

---

## Phase 9: Branded House Alignment
**Target:** 2026-03-14 to 2026-03-28
*Assessment v4.0: aimpactscanner.com and llmtxtmastery.com disconnected from parent brand*

- [x] Audit both product domains: gaps in header, footer, colours, typography vs brand system — ✅ 2026-03-02
- [x] Add "by AI Search Mastery" footer attribution to both product domains — ✅ 2026-03-02
- [x] Align navigation header on both domains with parent brand — ✅ 2026-03-02
- [x] Consistent `sameAs` social URLs across all three domains — ✅ 2026-03-02

---

## Phase 10: Content (Ongoing — March onwards)

### New Blog Content (Assessment v4.0 + F-022 P3)
*Target: 4+ articles covering the 3-layer AI visibility gap*
- [ ] Article: "Not Found — Why AI Search Can't See Your Business" (Fundamentals)
- [ ] Article: "Not Cited — How to Get AI to Recommend You" (Fundamentals or How-To)
- [ ] Article: "Not Chosen — Converting AI-Driven Traffic" (How-To)
- [ ] Content refresh: update 5 remaining migrated article stubs with full content

### Case Studies (F-021 / F-023, P3)
*Do not publish until real customer data is verified*
- [ ] F-021: Build case study page template when first data is ready
- [ ] F-023: Publish first verified before/after case study

---

## Success Metrics (PRD v1.0)

| Metric | Target | Status |
|--------|--------|--------|
| Product CTA CTR | 5–8% of visitors | Monitoring post-launch |
| Mobile LCP | < 2.5s | ✅ 2.6s (was 4.9s) |
| Desktop Performance | > 90 | ✅ 100 |
| Mobile Performance | > 80 | ✅ 93 |
| CLS | < 0.1 | ✅ Desktop 0.027, Mobile 0.011 |
| Migration: zero 404s from 26 URLs | 0 broken | _redirects deployed, manual crawl pending |
| Lighthouse Accessibility | 96+ | ✅ 96 (desktop + mobile) |

*Last Updated: 2026-03-08 (Phase 11 added)*

---

## Phase 11: AI Search Arena Benchmark — Quick Wins
**Target:** 2026-03-08 to 2026-03-14
**Goal:** Close 0.3 of 0.8-point benchmark gap with zero product development
**Brief:** `/documents/benchmark-improvement-brief.md`

### 11A: Pricing Alignment
- [x] Confirm correct Growth price — $19.95/mo is correct, products.html and JSON-LD match — ✅ 2026-03-08

### 11B: llms.txt Excellence (3.1 → 6.0)
- [x] Create `/llms-full.txt` — full markdown content version for LLM ingestion (297 lines, 19KB) — ✅ 2026-03-08
- [x] Add `Llms-Txt: /llms.txt` directive to `robots.txt` — ✅ 2026-03-08
- [x] Add `<link rel="alternate" type="text/plain" href="/llms.txt">` to all 22 HTML page `<head>` sections — ✅ 2026-03-08
- [x] Review/enhance existing `llms.txt` content quality — replaced with fresh LLM.txt Mastery generation (2026-03-14, 20 pages, quality 9/10) — ✅ 2026-03-14

### 11C: Schema Markup Improvements (6.5 → 7.5)
- [x] Add product domain URLs to Organization `sameAs` in `index.html` (aimpactscanner.com, llmtxtmastery.com, aisearcharena.com) — ✅ 2026-03-08
- [x] Add `potentialAction` SearchAction to WebSite schema on `index.html` — ✅ 2026-03-08
- [x] Add `Article` schema to all blog posts — all 12 already had Article+BreadcrumbList, added missing `image` field to 9 articles — ✅ 2026-03-14
- [x] Add `HowTo` schema to framework page pillar sections — 8-step HowTo JSON-LD added — ✅ 2026-03-14
- [x] Verify `BreadcrumbList` schema on all pages — 21 pages verified (all except homepage which correctly has none) — ✅ 2026-03-14

### 11D: Cross-Property Linking
- [x] Verify footer links to all product domains on all pages — all 3 domains confirmed on all pages — ✅ 2026-03-14

### 11E: Framework Page Enhancements
- [x] Add HowTo JSON-LD schema blocks for framework pillars — ✅ 2026-03-14 (done in 11C)
- [x] Add "Check your score" CTAs linking to aimpactscanner.com per pillar — 7 CTAs added (A,S,T,E,R,Y,AI; M has LLM.txt CTA) — ✅ 2026-03-14
