# AI Search Mastery - Website Redesign Progress Log

**Mission**: Website Redesign Build
**Started**: 2026-02-21

---

### 2026-02-21 - Mission Initiated

**Context**: Complete redesign of aisearchmastery.com per new PRD v1.0
**Decision**: Keep static HTML/CSS/JS stack (no framework needed)
**Rationale**: 7 pages + 6 blog articles, no dynamic content, <500KB budget, simplest deployment

**Foundation Documents Reviewed**:
- PRD v1.0: 20 P0 features, 25 total
- Brand Style Guide v1.0: Complete design tokens
- Vision & Mission v5.0
- Client Success Blueprint, Market Research, Marketing Bible

**Starting Phase 1: Foundation (Brand System & Core Components)**

### 2026-02-21 20:07 — Phase 1 Complete

**Files Created**:
- `/css/styles.css` (35KB) — Complete brand design system with 22 sections: tokens, reset, typography, layout, grid, buttons, cards, badges, forms, accordion, skip-nav, external links, sections, hero, header, footer, earn-the-ask CTA, trust signals, utilities, responsive, homepage components, accessibility
- `/js/main.js` (8.9KB) — Sticky header, mobile nav, active page detection, accordion, GDPR consent management, GA4 analytics (consent-gated), scroll tracking, CTA tracking, contact form
- `/index-new.html` (21KB) — Complete homepage with hero, trust strip, problem section (3-card grid), framework teaser, products section, credibility, Earn the Ask full CTA, footer, GDPR banner

**Verification**: `ls -lh` confirmed all 3 files on filesystem

**Key Decisions**:
- Named new homepage `index-new.html` to avoid overwriting existing site during development
- Used CSS custom properties for all brand tokens (zero hardcoded values)
- External link icons only on inline text links, not on buttons (prevents visual clutter)
- Footer external link icons hidden (too noisy on dark background)
- Consent banner is `position: fixed` at bottom, doesn't obscure hero on mobile
- GTM dataLayer initialized but scripts NOT loaded until consent accepted

### 2026-02-21 21:00 — Phase 2 Complete

**Files Created**:
- `/products-new.html` (22KB) — Products page: LLM.txt Mastery (lead) + AImpactScanner (upsell), Earn the Ask Full for each, value callout, FAQ accordion (5 Qs), Product JSON-LD x2, FAQPage JSON-LD
- `/framework-new.html` (26KB) — Framework page: MASTERY-AI v3.1.1, 8-pillar overview grid with SVG icons + factor badges, open methodology, 8 detailed pillar sections, mid-page compact CTA (AImpactScanner), contextual LLM.txt CTA, final full CTA, CreativeWork JSON-LD
- `/about-new.html` (18KB) — About page: Jamie's story (Guide archetype), photo placeholder, origin story, 5-milestone timeline, mission statement, 5 value cards, compact Earn the Ask → /products, trust strip, Person JSON-LD
- `/contact-new.html` (12KB) — Contact page: topic select, honeypot field, name/email/message validation, success state, 48hr response note, BreadcrumbList JSON-LD
- `/404-new.html` (9.9KB) — 404 page: noindex/nofollow, no canonical, search form, 5 popular page links, data-page-type="404", BreadcrumbList JSON-LD

**CSS Updated**:
- `/css/styles.css` — Added Section 20 "Page-Specific Components": timeline (vertical line + dots), about photo, product preview, search form layout, popular pages grid (responsive 1→2→3 cols), form success state

**Verification**: `ls -lh` confirmed all 5 HTML files + CSS update on filesystem

**Key Decisions**:
- All pages normalized to exact header/footer/consent banner from index-new.html (prevents template drift)
- Products page follows BR-019: LLM.txt Mastery displayed first as lead product
- Framework page shows v3.1.1 with 8 pillars / 27 factors (NOT v2.1 / 132 factors)
- About page uses Guide archetype voice (avoids "guru", "authority", "dominate")
- 404 page is recovery-focused (search + links), not conversion-focused (no CTAs)
- Contact form has honeypot + time-based spam prevention (handled in main.js)
- All pages have BreadcrumbList JSON-LD; additional schemas per PRD (Product, FAQPage, CreativeWork, Person)

**Proceeding to Phase 3: Blog System**

### 2026-02-21 21:30 — Phase 3 (Blog Templates) Complete

**Files Created**:
- `/blog-article-template-new.html` (17KB) — Reusable blog article template (F-007a): article header with category/author/date/read-time, Table of Contents (details/summary for native collapse), article body with reading typography (680px max-width), CTA mapping (AImpactScanner default, LLM.txt alternative for How-To), related articles grid, Article + BreadcrumbList JSON-LD
- `/blog-hub-new.html` (15KB) — Blog hub page (F-007b): category filter pills (All/Fundamentals/How-To/Industry Updates), 6 article cards with data-category attributes, CollectionPage + ItemList JSON-LD, BreadcrumbList JSON-LD

**CSS Updated**:
- `/css/styles.css` (47KB) — Added Section 20c "Blog Components": article-header, article body reading typography (h2/h3/p/ul/ol/blockquote/code/table), Table of Contents with details/summary toggle, blog filter pills (44px touch targets, active state), blog grid (1→2→3 responsive), blog card with category badges (teal/blue/amber), related articles grid, card--article variant

**JS Updated**:
- `/js/main.js` (11KB) — Added Section 8 "Blog Category Filter": click handler for filter pills, show/hide cards by data-category, URL update via replaceState (no pageview), blog_filter analytics event, URL param parsing on page load

**Verification**: `ls -lh` confirmed all files on filesystem

**Key Decisions**:
- Blog article template uses [square bracket] placeholders for all variable content — easy find-and-replace
- Table of Contents uses native `<details>/<summary>` — no JS needed for collapse
- Category filter uses `history.replaceState` not pushState (AC-007b-05: no pageview on filter)
- Canonical on hub always points to `/blog` regardless of category filter (AC-007b-04)
- 6 articles listed in hub match existing old site articles (minus fake case study)
- Content migration (F-012) deferred — requires migrating actual article content into new template

**Remaining for Phase 3**:
- Content migration of existing articles into new template
- 26-URL redirect audit
- Fake case study 301 redirect configuration

### 2026-02-21 22:15 — Phase 4 (Integration & Compliance) Complete

**GDPR (F-011)**: Already implemented in Phase 1 — consent banner in all HTML pages, consent management in main.js Section 5, analytics consent-gated.

**Analytics (F-010)**: Already implemented in Phase 1 — main.js Section 6: CTA click tracking (`data-track-cta`), scroll depth (25/50/75/100%), 404 tracking (`data-page-type="404"`), outbound link tracking (`target="_blank"`). All consent-gated via `trackEvent()`.

**SEO & Structured Data (F-009)**:
- JSON-LD on every page: WebSite, Organization (homepage), Product ×2 + FAQPage (products), CreativeWork (framework), Person (about), Article (blog template), CollectionPage + ItemList (blog hub), BreadcrumbList (all pages)
- OG tags + Twitter Cards on all 7 pages + blog template
- Canonical URLs on all pages
- `/robots-new.txt` — Allow all for *, GPTBot, ClaudeBot, PerplexityBot, Google-Extended; Disallow /test/; Sitemap ref
- `/sitemap-new.xml` — 14 URLs with priorities (1.0 homepage → 0.3 legal)
- `/llms-new.txt` — Business summary, MASTERY-AI v3.1.1 pillars, products, key pages, contact
- `/_redirects-new` — 13 Netlify 301 rules covering 26-URL migration audit (path changes, merged pages, retired content, external product redirect, category→query param conversions)

**Performance (F-013)**:
- Total page assets: ~80KB (21KB HTML + 48KB CSS + 11KB JS) — well under 500KB budget
- All images: `width`/`height` explicit, `loading="lazy"` (except above-fold), descriptive `alt`
- Font: Google Fonts Inter with `display=swap` + `preconnect` — no FOUT layout shift
- No JS frameworks, no build step overhead
- CSS custom properties — no duplicate declarations

**Key Decision**: Kept Google Fonts CDN rather than self-hosting. With `preconnect` + `display=swap`, performance matches self-hosting while simplifying maintenance. Can self-host in V1.1 if needed.

**Verification**: All Phase 4 files confirmed on filesystem. OG/Twitter tags verified on all 7 pages + template.

### 2026-02-21 22:45 — Content Migration (F-012) Complete

**Article Migrated**:
- `/blog/fundamentals/is-ai-stealing-your-traffic/index-new.html` (35KB) — Full article rewritten from old design system to new template. Updated v2.1/146 factors → v3.1.1/27 factors. Removed Font Awesome, inline CSS (~800 lines). Added proper Article + BreadcrumbList JSON-LD, OG + Twitter tags, consent-gated GTM, Earn the Ask compact CTA (AImpactScanner). Related articles section reserved (no other articles exist yet).

**Blog Hub Trimmed**:
- `/blog-hub-new.html` — Reduced from 6 article cards to 1 (only article with actual content). Updated filter pills (All: 1, Fundamentals: 1). Updated CollectionPage ItemList JSON-LD to match.

**Sitemap Updated**:
- `/sitemap-new.xml` — Removed 5 non-existent blog article URLs. Now 9 URLs (was 14): homepage, framework, products, about, blog, contact, privacy, terms, is-ai-stealing-your-traffic.

**Content Not Migrated (no pages exist)**:
- implementing-mastery-ai-framework (How-To) — content never created
- authority-trust-signals-mastery (How-To) — content never created
- understanding-machine-readability (Fundamentals) — content never created
- dynamic-eeat-implementation (How-To) — content never created
- december-ai-search-changes (Industry Updates) — content never created
- mastery-ai-framework-v2-1-announcement — 301 redirect to december-ai-search-changes per _redirects-new

**Key Decision**: Trimmed hub to only show articles with actual content rather than leaving broken links. Articles can be added back to hub as content is created post-launch.

**Phase 3 Now Fully Complete**: All tasks marked [x] in project-plan.md.

### 2026-02-21 23:00 — Phase 5 (Testing & Launch) Complete

**Testing Approach**: Code-level validation using two independent tester agents running in parallel, cross-referencing all 45 PRD test cases (T-001 through T-045).

**Accessibility (WCAG AA)**:
- Skip-nav link on all 8 pages (7 main + 1 blog article)
- All `<img>` tags have `alt` attributes, `width`/`height` explicit
- All external links have `rel="noopener noreferrer"` + `(opens in new tab)` via aria-label or visually-hidden span
- Form inputs have associated labels, required attributes, `type="email"` where applicable
- ARIA roles present (banner, contentinfo, dialog, navigation)
- Heading hierarchy logical (no skipped levels)
- Each page has exactly one `<h1>`, `<main id="main-content">`, `lang="en"` on html

**Functional Verification**:
- Header sticky positioning, mobile hamburger with aria-expanded/aria-controls
- Homepage 5 sections in correct order (Hero→Problem→Framework→Products→Credibility→Final CTA)
- Products page: LLM.txt Mastery first, AImpactScanner second (BR-019)
- FAQ accordion uses native `<details>/<summary>`
- Framework page: all 8 pillars present, mid-page CTA between pillar 4/5, final CTA
- 404 page: search input, popular pages, `data-page-type="404"`, noindex, no product CTAs
- Contact form: honeypot, topic select, required fields, email type
- Earn the Ask: Full variant with 5 slots (problem/evidence/fix/price/action), Compact variant used on framework/about/blog
- GDPR consent banner on all pages with `hidden` attribute, Cookie Settings button in footer
- GTM loaded only after consent via main.js (not hardcoded in HTML)
- `data-track-cta` on CTA buttons across all pages

**Content Review**:
- Zero matches for "v2.1", "132 factors", "146 factors" across all new files
- Framework consistently references v3.1.1, 8 pillars, 27 factors
- Guide archetype voice maintained (no "guru", "authority", "dominate")

**SEO & Structured Data**:
- Every page has unique title, meta description, canonical URL, OG tags, Twitter Card
- JSON-LD per page: WebSite+Organization (homepage), Product×2+FAQPage (products), CreativeWork (framework), Person (about), Article (blog article), CollectionPage+ItemList (blog hub), BreadcrumbList (all pages)
- robots-new.txt allows GPTBot, ClaudeBot, PerplexityBot
- sitemap-new.xml has 9 URLs matching all real pages
- llms-new.txt has accurate business content

**URL Migration**:
- 13 redirect rules in _redirects-new covering all 26 original URLs
- Fake case study redirects to /blog
- v2.1 announcement redirects to december-ai-search-changes

**Performance**:
- Total assets: ~80KB (well under 500KB budget)
- All images: explicit dimensions + lazy loading
- Google Fonts: display=swap + preconnect
- No JS frameworks, no build step

**Result**: All 45 PRD test cases PASS at code level. Site is ready for browser-based testing and deployment.

### 2026-02-22 — Pricing Strategy Alignment

**Source Document**: `/documents/foundations/pricing-strategy.md` (1006 lines)

**Product Structure Change**:
- AImpactScanner is now the lead product (was LLM.txt Mastery)
- AImpactScanner Growth ($19.95/mo) includes all LLM.txt Mastery Growth features
- Pricing tiers: AImpactScanner Free/Solo $9.95/Growth $19.95/Scale $39.95
- Pricing tiers: LLM.txt Mastery Free/Solo $4.95/Growth $9.95/Scale $19.95
- 2x pricing ratio between products at every tier

**Files Updated**:

`/products-new.html`:
- Restructured: AImpactScanner now first (lead), LLM.txt second ("Included with Growth")
- Badge changes: AIS "Free scan available", LLM.txt "Included with Growth"
- Value callout: "One subscription. Everything included." at $19.95/mo
- JSON-LD Product prices: AIS Free + $19.95 Growth offers, LLM.txt Free offer
- FAQ Q1 rewritten: "What's included in AImpactScanner Growth?"
- Earn the Ask price slot: $19.95/mo (AIS Growth)
- LLM.txt price slot: $4.95/mo standalone
- Meta/OG/Twitter descriptions updated

`/index-new.html`:
- Value gap stat: 134× / $59.40/year → 67× / from $9.95/mo (AIS Solo starting price)
- Products heading: "Two Tools, One Goal" → "Diagnose. Optimise. Repeat."
- Product cards reordered: AImpactScanner first with "Free scan available" badge, LLM.txt second with "Included with Growth" badge
- Final CTA price: $14.95/mo → $9.95/mo

`/framework-new.html`:
- Earn the Ask CTA price: $14.95/mo → $9.95/mo

**Verification**: Searched all `-new` files for stale references ($14.95, $59.40, 134×, "Lead product", "Two Tools") — zero matches remaining.

### 2026-02-28 — Phase 6: Post-Launch Verification & Quick Code Fixes

**6A: SEO & URL Verification**:
- Deployed `_redirects` (copied from `_redirects-new`) — 13 Netlify 301 rules covering 26 URLs
- Google Search Console: set up URL prefix property for aisearchmastery.com
- Added `<meta name="google-site-verification" content="fKxwkHHRwo2WtZZXTkeILbcvoT33DUKK6UOaqU545EY" />` to index.html
- Submitted sitemap.xml — accepted, 9 URLs discovered
- GSC monitoring ongoing (crawl errors, indexing)

**6B: CSS Quick Fixes**:
- Added to `:root` in styles.css: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 12px`
- Updated `--card-radius` from `4px` to `var(--radius-md)` (8px per Brand Style Guide)

**6C: Schema Fixes**:
- Added `sameAs` social URLs to Organization schema on index.html (X, LinkedIn, Build in Public)
- Rich Results Test: 6 valid Product items, 0 errors on products page
- Non-critical: missing review/aggregateRating (skip — no real data) and priceValidUntil (skip — prices changing soon)

**Committed & pushed**: All Phase 6 code fixes in single commit

### 2026-02-28 — Phase 7: Mobile Performance

**Problem**: Mobile LCP 4.9s, Performance score 29. Root cause: 48KB styles.css + Google Fonts render-blocking.

**Fix 1 — Critical CSS extraction + deferred loading**:
- Created `/css/critical.css` with above-fold styles
- Updated all 11 HTML files: critical.css render-blocking, styles.css deferred (`media="print" onload`), Google Fonts deferred same pattern, noscript fallback
- **Result**: Mobile LCP 4.9s → 2.6s, Performance 29 → 91, CLS stayed at 0

**Issue — Desktop CLS regression**:
- Desktop CLS jumped 0.026 → 0.388 after CSS deferral
- Cause: On fast desktop connections, page renders with only critical.css, then styles.css loads and shifts layout

**Fix 2 — Expand critical.css (attempt 1)**:
- Added cards, grid breakpoints, homepage hero components, footer base, desktop typography
- **Result**: Desktop CLS 0.388 → 0.275 (better, still failing)

**Fix 3 — Expand critical.css (attempt 2)**:
- Added full card sub-components, badges, trust strip/block, earn-the-ask CTA (full + compact), complete footer grid with 4-column layout, consent banner, responsive breakpoints for footer/trust/consent
- **Result**: Desktop CLS 0.275 → 0.027 (passing), Performance 100

**Final scores**:
| | Performance | LCP | CLS | Accessibility | Best Practices | SEO |
|---------|-------------|-----|-----|---------------|----------------|-----|
| Desktop | 100 | 0.7s | 0.027 | 96 | 100 | 92 |
| Mobile | 93 | 2.6s | 0.011 | 96 | 100 | 92 |

**Key Learning**: When deferring CSS, all layout-contributing styles (not just above-fold visible content) must be in critical.css. Cards, grid, footer, badges — anything that establishes dimensions — causes CLS if deferred on fast connections.

### Phase 6 & 7 Complete — 2026-02-28 18:30
**Tasks Completed**: 11 tasks marked [x] across Phases 6-7
**Remaining Phase 6 manual tasks**: GSC monitoring (ongoing), 26-URL crawl verification, 404 monitoring setup
**Next**: Phase 8 (V1.1 PRD Features) or Phase 9 (Branded House Alignment)

### 2026-03-02 — Phase 8: F-019 Product Demo/Preview Component

**Screenshots Captured** (saved to `/Ideation/`):
- AImpactScanner: input page, results overview (score 77/100 + Top 3 Gaps), pillar breakdown (8 cards), factor details
- LLM.txt Mastery: generator input (email redacted), content review + page selection, generated file preview, full llms.txt output

**Images Selected for Products Page**:
- `aimpactscanner-preview` — results overview (score circle + Top 3 Gaps to Fix First)
- `llmtxt-preview` — generated file preview with Quality Assessment badges + Download button

**Files Updated**:
- `/images/products/aimpactscanner-preview.png` (269KB) — replaced 4.7KB mockup with real screenshot
- `/images/products/aimpactscanner-preview.webp` (29KB) — new WebP conversion at q80
- `/images/products/llmtxt-preview.png` (137KB) — replaced 10.6KB mockup with real screenshot
- `/images/products/llmtxt-preview.webp` (51KB) — new WebP conversion at q80
- `/products.html` — `<img>` replaced with `<figure>/<picture>` elements, WebP + PNG fallback, updated alt text, added `<figcaption>` captions, corrected dimensions (988x837, 843x764)
- `/css/styles.css` — `.product-preview` restyled for `<figure>`: centered 600px max-width, `<picture>` with border/radius/overflow, `<figcaption>` styling

**Key Decisions**:
- Used results screenshots (not input pages) as hero images — shows value, not effort
- Installed `cwebp` via Homebrew for PNG→WebP conversion
- WebP at quality 80 gives excellent compression (29KB, 51KB) while staying sharp
- PNG fallback kept for older browsers (Safari <14, IE) despite larger sizes
- Max-width 600px on `.product-preview` keeps images focused on desktop, scales naturally to mobile

**Committed & pushed**: `c72acbd` — deployed to Netlify

### 2026-03-02 — Phase 8: F-020 Newsletter Signup Component

**ESP Chosen**: Buttondown (`watters` account) — supports double opt-in, simple embed API, CORS-friendly.

**Files Updated**:
- All 11 HTML pages + `blog-article-template.html` — added newsletter signup form to footer (full-width row above footer columns)
- Blog article added inline newsletter CTA below content
- `/js/main.js` — Section 9: newsletter form handler with Buttondown API, honeypot check, 5s time gate, `newsletter_signup` Plausible event with location parameter, CORS fallback (native form submit to Buttondown)

**Committed & pushed**: `e7c9717` — deployed to Netlify

### 2026-03-02 — Phase 8: AImpactMonitor Coming Soon + AI Search Arena

**Products Page** (`products.html`):
- Added AImpactMonitor "Coming Soon" section after LLM.txt Mastery with `badge--amber` variant
- Earn-the-ask CTA block: problem/evidence/fix/price/action pattern
- Early access email signup form (reuses Buttondown `watters` newsletter + `early_access_signup` Plausible event with `location: aimpactmonitor`)
- Framework attribution: "Completes the Diagnose → Optimize → Track → Remediate loop"
- Added AI Search Arena resource callout section after FAQ
- Changed FAQ from `section--alt` to `section` to maintain alternating background rhythm
- Added AImpactMonitor FAQ accordion item + JSON-LD FAQ entry
- Added AImpactMonitor JSON-LD Product schema with `PreOrder` availability
- Updated meta/OG/Twitter descriptions to mention AImpactMonitor

**CSS** (`css/styles.css`):
- Added `badge--amber` class using `var(--color-action-amber)`

**JS** (`js/main.js`):
- Conditional event name: fires `early_access_signup` when form `data-location` is `aimpactmonitor`, otherwise `newsletter_signup`

**Footer** (all 11 HTML pages + template):
- Added "AImpactMonitor (Coming Soon)" linking to `/products#aimpactmonitor`
- Added "AI Search Arena" linking to `aisearcharena.com`

**Committed & pushed**: `db128c0` — deployed to Netlify

### 2026-03-02 — Phase 6: Remaining Tasks Complete

**Redirect Verification** (19 redirect URLs crawled against live site):
- All 19 redirect rules return 301 with correct destinations
- All destination pages resolve to 200 (including `/blog` paths that chain through Netlify trailing-slash 301)
- External redirect (`/tools/llms-txt-tool/` → llmtxtmastery.com) confirmed working

**404 Monitoring**:
- Already implemented: `data-page-type="404"` on 404.html triggers `page_not_found` Plausible event with `attempted_url`
- Plausible auto-surfaces custom events in Goals — no dashboard config needed

**GSC Monitoring**: Ongoing weekly check, no configuration needed beyond existing setup.

### 2026-03-02 — Phase 9: Branded House Alignment Complete

Phase 9 completed externally (aimpactscanner.com and llmtxtmastery.com domains). All tasks done:
- Both product domains audited for brand consistency
- "by AI Search Mastery" footer attribution added
- Navigation headers aligned with parent brand
- Consistent `sameAs` social URLs across all three domains

### 2026-03-08 — Phase 11: AI Search Arena Benchmark Quick Wins (In Progress)

**Context**: AI Search Arena benchmark shows AI Search Mastery at Rank #6 (Score 6.8). Gap to Top 3 is 0.5–0.8 points. Executing quick wins on aisearchmastery.com to close ~0.3 of the gap with zero product development.

**Brief created**: `/documents/benchmark-improvement-brief.md` — product-level requirements for AImpactScanner, LLM.txt Mastery, and AImpactMonitor teams.

**11B: llms.txt Discovery & Full Content**:
- Updated `robots.txt` — added `Llms-Txt: https://aisearchmastery.com/llms.txt` directive
- Added `<link rel="alternate" type="text/plain" href="/llms.txt">` to all 22 HTML files (verified with grep: 22 matches across 22 files)
- Created `/llms-full.txt` (297 lines, 19KB) — full markdown content version covering homepage, framework (8 pillars with full descriptions), products (all 3 + FAQ), about (story, journey, mission, values), and all 12 blog articles

**11C: Schema Improvements**:
- Added product domain URLs to Organization `sameAs` in `index.html`: aimpactscanner.com, llmtxtmastery.com, aisearcharena.com
- Added `potentialAction` SearchAction to WebSite schema on `index.html`

**Brief updated**: Added LT-2B (Deployment Guidance & Discovery Mechanisms) to benchmark improvement brief — covers post-generation deployment panel, verification checker, platform-specific guides for WordPress/Shopify/Squarespace/Wix/Webflow/Next.js, and deployment scoring

### 2026-03-14 — Phase 11 Complete

**11B: llms.txt Content Quality**:
- Replaced `/llms.txt` with fresh LLM.txt Mastery generation (2026-03-14, 20 pages, quality 9/10, ~9,448 words)
- Improved site description, better article descriptions, reordered content by impact

**11C: Schema Markup — Article & BreadcrumbList**:
- Verified all 12 blog posts already have Article + BreadcrumbList JSON-LD with author, datePublished, dateModified
- Added missing `image` field to 9 blog article schemas (using `/images/og/blog.jpg`)
- Verified BreadcrumbList on all 21 pages (all except homepage which correctly has none)

**11C: Schema Markup — HowTo on Framework Page**:
- Added HowTo JSON-LD schema with 8 steps (one per MASTERY-AI pillar) to `framework.html`
- Each step has name, description text, and deep link URL to pillar section

**11D: Cross-Property Linking**:
- Verified all pages have footer links to aimpactscanner.com, llmtxtmastery.com, aisearcharena.com

**11E: Framework Page Enhancements**:
- Added 7 "Check your score" CTAs linking to aimpactscanner.com (pillars A, S, T, E, R, Y, AI)
- Pillar M retains existing LLM.txt Mastery CTA
- All CTAs use `btn--outline` style with analytics tracking (`data-track-cta`, per-pillar `data-location`)

**Files Modified**:
- `/llms.txt` — replaced with 2026-03-14 generation
- `/framework.html` — HowTo schema + 7 per-pillar CTAs
- 9 blog article `index.html` files — added `image` field to Article schema
- `/project-plan.md` — all Phase 11 tasks marked [x]

**Phase 11 Status**: All tasks complete. Ready for deployment

### 2026-03-14 — Sprint 1: Entity Alignment (LLM.txt Mastery Canonical Descriptions)

**Source:** `/Ideation/agent-11-aisearchmastery-brief.md` (entity audit from Project Lighthouse Phase 0/1)

**Problem:** aisearchmastery.com described LLM.txt Mastery as "robots.txt for the AI era" — catchy but misses all differentiators (JS rendering, quality scoring, validation, deployment guidance). CTAs said "Check your LLM.txt" (vague). All CTA links went to /validator instead of homepage.

**Changes Made:**
- Updated LLM.txt Mastery description to canonical version across index.html, products.html, framework.html, llms-full.txt (7 locations)
- Changed CTA text from "Check your/My LLM.txt" to "Generate & Validate Your llms.txt" (4 CTAs)
- Changed 4 CTA links from llmtxtmastery.com/validator to llmtxtmastery.com homepage
- Updated Product JSON-LD description in products.html to include differentiators
- sameAs schema already included all ecosystem properties (no change needed)
- AImpactMonitor "Coming Soon" status confirmed accurate (no change needed)

**Sprint document:** `/sprints/sprint-1-entity-alignment.md`
**All 4 success criteria from brief met.**
