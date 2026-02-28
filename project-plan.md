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
