# aisearchmastery.com Website Redesign — Product Requirements Document

**Version:** 1.0
**Date:** 2026-02-21
**Author:** Jamie Watters / BOS-AI Coordinator
**Mode:** Engaged (section-by-section with founder approval)
**Status:** Approved
**Supersedes:** Website Realignment PRD v1.0 (August 2025)

---

## Section 0: At-a-Glance

### Dimension Table

| Dimension | Value |
|-----------|-------|
| **Product** | aisearchmastery.com Website Redesign |
| **Type** | Marketing Website (Branded House parent site) |
| **Target Users** | Solopreneurs, Growth-Stage Businesses, SEO Consultants |
| **Business Model** | Product-led acquisition → SaaS conversion on product domains |
| **MVP Scope** | 20 P0 features, 6-week implementation |
| **Post-MVP** | 5 planned features across V1.1, V1.2, V2.0 |
| **Tech Stack** | Agnostic (developer decides; existing stack assumed unless compelling reason to change) |
| **Compliance** | UK GDPR (Data Protection Act 2018) |

### One-Line Summary

Redesign aisearchmastery.com as the branded house parent site that establishes practitioner credibility, showcases two AI search products, and converts visitors to product trials through the "Earn the Ask" conversion pattern.

### Success Metrics (Top 3)

1. **Product CTA CTR:** 5-8% of visitors click through to a product domain
2. **Core Web Vitals:** All green (LCP <2.5s, CLS <0.1, INP <200ms)
3. **Migration success:** Zero 404s from original 26 URLs

### Scope Boundaries

| In Scope | Out of Scope |
|----------|-------------|
| aisearchmastery.com marketing site | Product domain changes (aimpactscanner.com, llmtxtmastery.com) |
| 7 pages + blog (hub + article template) | Product functionality (scans, validators) |
| SEO, structured data, llms.txt | Payment processing (handled on product domains) |
| Content migration from existing site | User authentication |
| GDPR consent management | Cross-domain tracking |
| Analytics (GA4 via GTM) | Email marketing automation (V2.0 roadmap) |

### Open Questions Summary

| ID | Question | Status | Resolution |
|----|----------|--------|------------|
| Q-001 | Tech stack? | RESOLVED | Agnostic -- developer decides. Existing stack assumed. |
| Q-002 | Embedded scan vs redirect? | RESOLVED | New tab to aimpactscanner.com |
| Q-003 | CMS/platform? | RESOLVED | Agnostic -- developer decides |
| Q-004 | Framework docs hosted where? | RESOLVED | `/framework` page on site, sourced from private repo |
| Q-005 | Analytics baselines? | RESOLVED | None available. Set targets, analytics is in scope. |
| Q-006 | FreecalcHub case study? | RESOLVED | Remove fake case study. Only publish verified data. |
| Q-007 | Blog content handling? | RESOLVED | Preserve URLs, redesign templates, update content post-launch (V1.1) |
| Q-008 | Newsletter page? | RESOLVED | Future consideration. No dedicated page in v1.0. |
| Q-009 | Social media URLs? | RESOLVED | Match footer links across all three domains |

---

## Section 1: Product Foundation

### 1.1 Vision Statement

From Vision & Mission v5.0:

> "Every business with genuine value is discoverable."

**BHAG:** Become the "Yoast of AI search" — the default tool solopreneurs reach for when they want AI search engines to find, understand, and recommend their business.

**Product Ecosystem:**
- **LLM.txt Mastery** ($4.95/mo) — Lead product. Makes websites AI-readable.
- **AImpactScanner** ($14.95/mo) — Upsell product. Diagnoses AI visibility across 27 factors.
- **aisearchmastery.com** (this PRD) — Parent marketing site. Establishes credibility, educates, converts.

### 1.2 Problem Statement

**The Three-Layer AI Visibility Gap:**

| Layer | Problem | Business Impact |
|-------|---------|----------------|
| **Not Found** | AI doesn't know your business exists | Zero AI-driven traffic |
| **Not Cited** | AI knows you but never recommends you | Competitors get the referrals |
| **Not Chosen** | AI mentions you but users pick others | Traffic without conversion |

**The Amplifier:** AI lowers the build barrier → flood of competitors → discoverability becomes the #1 determinant of business survival.

**The Value Gap:** $59.40/year (both tools) vs ~$8,000/year cost of being invisible to AI search (134x value gap).

### Gap Analysis: Current vs Required State

| Dimension | Current State (aisearchmastery.com) | Required State |
|-----------|-------------------------------------|----------------|
| Positioning | "AI Search Optimization Authority" (guru framing) | Guide archetype ("See how AI sees you") |
| Brand | Outdated colours, no consistent system | Brand Style Guide v1.1 (Mastery Blue, Signal Blue, Clarity Teal, Action Amber) |
| Products | Mentioned but not showcased | Dedicated Products page with Earn the Ask CTA pattern |
| Framework | Referenced as v2.1 / 132 factors | Updated to v3.1.1 / 8 pillars / 27 factors with dedicated page |
| Social proof | Fake case study (FreecalcHub) | Removed. Only verified data. Trust signals component. |
| SEO/Schema | Outdated Organization schema, missing OG tags, no llms.txt | Comprehensive schema, OG, Twitter cards, llms.txt at root |
| Conversion | No structured CTA pattern | Earn the Ask (Full + Compact variants) across all pages |
| Analytics | GTM exists but GA4 not properly configured | GA4 via GTM, gated behind GDPR consent, full event tracking |
| Compliance | No consent management | UK GDPR cookie consent, analytics gating |
| Content | 7 blog articles with outdated references | Preserved, redesigned templates, content refresh in V1.1 |

### 1.3 Target Users

#### Primary ICP: Solopreneurs ($50K–$500K revenue)

| Attribute | Value |
|-----------|-------|
| **Size** | Solo operator, no employees |
| **Revenue** | $50K–$500K annually |
| **Tech comfort** | Uses no-code tools (Framer, Webflow, WordPress) |
| **Pain point** | "I built something valuable but AI search doesn't know I exist" |
| **Decision driver** | Cost-conscious, needs self-service, values simplicity |
| **Entry product** | LLM.txt Mastery ($4.95/mo) or free validator |

#### Secondary ICP: Growth-Stage Businesses (2–10 people, $500K–$2M)

| Attribute | Value |
|-----------|-------|
| **Size** | 2–10 team members |
| **Revenue** | $500K–$2M annually |
| **Tech comfort** | Has a "tech person" but not a dedicated SEO team |
| **Pain point** | "We're losing traffic to AI answers and don't know how to adapt" |
| **Decision driver** | ROI-focused, needs diagnosis before action |
| **Entry product** | AImpactScanner ($14.95/mo) |

#### Tertiary ICP: SEO-Aware Consultants & Agencies

| Attribute | Value |
|-----------|-------|
| **Size** | Individual consultant or small agency |
| **Revenue** | Varies |
| **Tech comfort** | High — understands SEO, wants AI search methodology |
| **Pain point** | "My clients are asking about AI search and I don't have a framework" |
| **Decision driver** | Methodology credibility, open framework, client-facing tools |
| **Entry product** | Framework page → AImpactScanner for client sites |
| **Dual role** | Customer AND distribution channel |

### 1.4 Business Context

#### Business Chassis Impact

| Multiplier | Current State | Website Impact | Target Improvement |
|------------|--------------|----------------|-------------------|
| **Prospects** | Low organic discovery | SEO, blog, framework page, llms.txt drive organic traffic | +30% organic sessions (90 days) |
| **Lead Conversion** | No structured CTA pattern | Earn the Ask converts visitors to product trials | 5-8% CTA CTR |
| **Client Conversion** | No objection handling | FAQ, value gap, trust signals reduce friction | Measured on product domains |
| **Average Spend** | Single product awareness | Product funnel (LLM.txt → AImpactScanner) drives upsell | Measured on product domains |
| **Transaction Frequency** | No re-engagement mechanism | Newsletter (V1.1) keeps audience returning | Measured post-V1.1 |
| **Margin** | N/A for marketing site | Self-service model, site does the selling | No sales team required |

#### Revenue Model

| Product | Price | Role in Funnel |
|---------|-------|---------------|
| LLM.txt Mastery Validator | Free | Zero-commitment entry point |
| LLM.txt Mastery | $4.95/mo | Lead product |
| AImpactScanner | $14.95/mo | Upsell product |
| Combined | $19.90/mo ($238.80/yr) | Full suite |

**Break-even:** ~40 customers (per Market Research v2.0)
**Operating costs:** <$500/mo

### 1.5 Success Metrics

**North Star:** Product CTA click-through rate (% of visitors who click to a product domain)

#### Key Results (90-day)

| Metric | Target | Type |
|--------|--------|------|
| Product CTA CTR | 5-8% | Leading |
| Bounce rate (homepage) | <50% | Leading |
| Pages per session | >2.0 | Leading |
| Framework page visits | >15% of sessions | Leading |
| Contact form submissions | >10/month | Leading |
| Blog quality reads (75% scroll + 60s) | >40% | Leading |
| Core Web Vitals | All green | Technical |
| Schema validation | 100% valid | Technical |
| Migration success | Zero 404s from 26 URLs | Technical |

---

## Section 2: System Skeleton

### 2.1 Glossary

| Term | Definition |
|------|-----------|
| Earn the Ask | Brand's canonical CTA pattern: Problem → Evidence → Fix → Price (optional) → Single CTA |
| Full variant | 5-slot Earn the Ask for product/landing pages |
| Compact variant | 3-slot Earn the Ask (Problem, Fix, CTA) for blog/contextual placement |
| Three-Layer Gap | Not Found → Not Cited → Not Chosen (AI visibility problem model) |
| The Amplifier | AI lowers build barrier → more competitors → discoverability = #1 determinant |
| 134x Value Gap | $59.40/year (both tools) vs ~$8,000/year cost of inaction |
| Guide archetype | Brand voice: customer is the hero, we are the guide (not guru/authority) |
| Radical Transparency | Brand essence: show methodology, pricing, and limitations openly |
| MASTERY-AI Framework | v3.1.1, 8 pillars, 27 factors. Open methodology for AI search scoring. |
| Branded House | Architecture: AI Search Mastery (parent) + product sub-brands |
| ICP | Ideal Customer Profile |
| CTA | Call to Action |
| CLS | Cumulative Layout Shift (Core Web Vital) |
| LCP | Largest Contentful Paint (Core Web Vital) |
| INP | Interaction to Next Paint (Core Web Vital) |
| GTM | Google Tag Manager |

### 2.2 Conceptual Data Model

| Entity | Description | Key Attributes |
|--------|-------------|---------------|
| **Page** | A distinct URL on the site | path, title, meta_description, og_image, schema_type, status |
| **Section** | A content block within a page | heading, body, visual_treatment, position |
| **CTA** | Call-to-action element | type (full/compact), product_target, destination_url, location, show_price |
| **Product** | A tool in the product ecosystem | name, tagline, price, url, description, cta_text |
| **ICP** | Target user persona | name, revenue_range, pain_point, entry_product |
| **Analytics Event** | A tracked user interaction | event_name, parameters (product, location, variant, destination_url, link_text) |

#### Products

| Product | Domain | Price | CTA Text | Role |
|---------|--------|-------|----------|------|
| AImpactScanner | aimpactscanner.com | $14.95/mo | "Free Site Scan" | Diagnosis (upsell) |
| LLM.txt Mastery | llmtxtmastery.com | $4.95/mo | "Check My LLM.txt" | AI-readability (lead) |
| LLM.txt Validator | llmtxtmastery.com/validator | Free | "Check My LLM.txt" | Zero-commitment entry |

### 2.3 UI Structure / Sitemap

```
Public Routes
├── / (Homepage)
│   ├── Hero & Above-Fold (F-003a)
│   └── Below-Fold Sections (F-003b)
├── /products (Products Page - F-004)
│   ├── #llmtxtmastery (anchor)
│   └── #aimpactscanner (anchor)
├── /framework (Framework Page - F-005)
├── /about (About Page - F-006)
├── /blog (Blog Hub - F-007b)
│   └── /blog/[category]/[slug] (Blog Article - F-007a)
├── /contact (Contact Page - F-015)
├── /case-studies/[slug] (Case Study - F-021, V2.0)
│
Utility
├── /sitemap.xml (Auto-generated)
├── /robots.txt
├── /llms.txt
└── 404 (Error Page - F-014)

Global Components (all pages)
├── Header / Navigation (F-001)
├── Footer (F-002)
├── GDPR Consent Banner (F-011)
└── Analytics (F-010, gated behind F-011)
```

### 2.4 Business Rules

| Rule ID | Entity | Rule Description | Trigger | Action |
|---------|--------|-----------------|---------|--------|
| BR-001 | CTA | Primary CTA colour is Signal Blue (#2563EB) with shadow `0 2px 8px rgba(37, 99, 235, 0.25)` | Any CTA renders | Apply brand token |
| BR-002 | CTA | Single CTA button per Earn the Ask instance | Component renders | Enforce one button |
| BR-003 | CTA | All product CTAs open target domain in new tab | CTA click | `target="_blank"` + `rel="noopener noreferrer"` |
| BR-004 | CTA | Compact variant: no Price slot, no Evidence slot | Blog/contextual placement | Render 3 slots only |
| BR-005 | CTA | Full variant: Price slot is optional (configurable) | Product/landing pages | Show/hide price |
| BR-006 | CTA | Multiple Earn the Ask on same page: 80px separation, alternating backgrounds | Products page, homepage | Layout rule |
| BR-007 | Page | Typography: Inter variable font, self-hosted (~50KB), caption min 13px | Any text renders | Font loading |
| BR-008 | Page | Touch targets: 48px primary CTAs, 44px all other interactive elements | Any interactive element | Minimum sizing |
| BR-009 | Page | WCAG AA contrast: 4.5:1 body text, 3:1 large text | Any text/background | Colour validation |
| BR-010 | Page | One h1 per page. Sequential heading hierarchy (h2, h3). No skipped levels. | Any page | Semantic HTML |
| BR-011 | Page | All pages use landmark regions: `<main>`, `<nav>`, `<footer>` | Any page | Accessibility |
| BR-012 | Page | `prefers-reduced-motion`: all transitions reduced to instant or minimal | User preference detected | Respect setting |
| BR-013 | Analytics | No analytics scripts fire before GDPR consent is granted | Page load | Consent gate |
| BR-014 | Analytics | Each domain manages consent independently (no cross-domain) | Consent interaction | Domain isolation |
| BR-015 | External Link | All external links: `rel="noopener noreferrer"`, visual indicator, aria label "(opens in new tab)" | External link renders | F-018 pattern |
| BR-016 | Content | No social proof, testimonials, statistics, or case study data may be published without verifiable source data | Any trust content | Content validation |
| BR-017 | Content | Brand voice: Guide archetype. Never use "guru", "authority", "dominate", "crush". | Any copy | Messaging guardrails |
| BR-018 | Content | Outdated framework references (v2.1, 132 factors) must not appear on any page | Any content | Content validation |
| BR-019 | Product | Product funnel order: LLM.txt Mastery (lead) before AImpactScanner (upsell) on Products page | Products page renders | Display order |
| BR-020 | Footer | Social media links must be identical across aisearchmastery.com, aimpactscanner.com, llmtxtmastery.com | Footer renders | Cross-domain consistency |
| BR-021 | Footer | Brand attribution: "by AI Search Mastery" (not "Part of") | Footer renders | Copy rule |
| BR-022 | Page | Total page weight <500KB per page (excluding cached assets) | Any page | Performance budget |
| BR-023 | Page | LCP <2.5s, CLS <0.1, INP <200ms (mobile Lighthouse) | Any page | Core Web Vitals |
| BR-024 | Blog | Articles >1,200 words must include auto-generated Table of Contents | Article renders | ToC generation |
| BR-025 | Blog | Blog article URL pattern: `/blog/[category]/[slug]` | Article created | URL structure |
| BR-026 | Blog | Category filter uses query params (`/blog?category=x`), canonical points to `/blog` | Filter applied | URL strategy |

### 2.5 External API Dependencies

| Service | Purpose | Auth | Data In | Data Out | Fallback |
|---------|---------|------|---------|----------|----------|
| Google Analytics 4 | Site analytics | GTM container (GTM-PMQG5CBD) | Page views, events | Reports (via GA4 dashboard) | Site functions without analytics |
| GDPR Consent Manager | Cookie consent | N/A (client-side) | User preference | Consent state | Banner blocks all tracking |

**Note:** AImpactScanner and LLM.txt Mastery are NOT API dependencies. Product CTAs link to external domains in new tabs. No embedded functionality.

### 2.6 Data Privacy & Compliance (UK GDPR)

#### Data Processing Activities

| Activity | Data Collected | Legal Basis | Retention |
|----------|---------------|-------------|-----------|
| Analytics (GA4) | Page views, events, scroll depth (anonymised) | Consent (Art. 6(1)(a)) | 14 months (GA4 default) |
| Contact form | Name, email, topic, message | Legitimate interest (Art. 6(1)(f)) | Until inquiry resolved + 12 months |
| Newsletter signup (V1.1) | Email address | Consent (Art. 6(1)(a)) with double opt-in | Until unsubscribe |
| GDPR consent preference | Accept/reject flag | Legitimate interest | 12 months |

#### Implementation Requirements

| Requirement | Regulation | Implementation |
|-------------|-----------|----------------|
| Consent before tracking | UK GDPR / PECR | Cookie banner gates GA4/GTM. No scripts before consent. |
| Right to withdraw consent | GDPR Art. 7(3) | "Cookie Settings" link in footer reopens consent dialog |
| Privacy Policy | GDPR Art. 13 | Linked in footer. Plain-English language. |
| Data minimisation | GDPR Art. 5(1)(c) | Collect only what's needed. GA4 IP anonymisation enabled. |
| Cross-domain | N/A | Each domain manages consent independently |
| Contact form data | GDPR Art. 6(1)(f) | Legitimate interest. Response time stated. Data deleted after resolution + 12 months. |
| Newsletter (V1.1) | UK GDPR + PECR | Double opt-in required. Unsubscribe in every email. |

#### What's NOT Needed (Current Scope)

| Requirement | Why Not Needed |
|-------------|---------------|
| DPO appointment | <250 employees, no large-scale processing |
| DPIA | No high-risk processing |
| Data portability | No user accounts |
| Right to erasure mechanism | No persistent user data beyond contact form (manual deletion sufficient) |

### 2.7 Content Migration & URL Preservation

#### Assets to Preserve

| Asset | Current Location | Action |
|-------|-----------------|--------|
| GTM container | GTM-PMQG5CBD in `<head>` | Migrate to new site |
| Support email | support@aisearchmastery.com | Preserve across site |
| Blog articles (6) | /blog/[category]/[slug]/ | Preserve at same URLs, new template |
| Fake case study (1) | /blog/case-studies/freecalchub-innovation-laboratory/ | 301 redirect to /blog |

#### Metadata to Add (Currently Missing)

| Element | Status | Action |
|---------|--------|--------|
| OG tags | Missing | Add to all pages (per F-009) |
| Twitter cards | Missing | Add to all pages (per F-009) |
| Meta descriptions | Missing | Add unique per page |
| Canonical URLs | Missing | Add self-referencing to all pages |
| Viewport meta | Missing | Add to all pages |
| Favicon | Missing | Add ASM compact mark (16, 32, 180px) |
| llms.txt | Missing | Add to site root |
| Social media links | Missing from site | Add to footer (match other domains) |

#### Schema.org Updates

| Element | Current | Updated |
|---------|---------|---------|
| Organization name | "AI Search Mastery" | Preserve |
| Description | References "v2.1 Enhanced Edition" and "132 atomic factors" | Update to v3.1.1, 8 pillars, 27 factors |
| Schema types | Organization only | Organization, Person, Product×2, CreativeWork, Article, WebSite, CollectionPage, BreadcrumbList, SiteNavigationElement, FAQPage |

#### Redirect Map

All 26 existing sitemap URLs must be accounted for:

| Old Path | Action | Target |
|----------|--------|--------|
| `/` | Preserve | New homepage |
| `/blog` | Preserve | New blog hub (F-007b) |
| `/blog/fundamentals/*` (2 articles) | Preserve | Same paths, new template |
| `/blog/how-to-guides/*` (3 articles) | Preserve | Same paths, new template |
| `/blog/case-studies/freecalchub-innovation-laboratory/` | **301 redirect** | `/blog` (fake case study removed per Q-006) |
| `/blog/industry-updates/*` (1 article) | Preserve | Same path, new template |
| Remaining sitemap URLs | **Audit required** | Developer to map each: preserve / redirect / retire with justification |

**Redirect rules:**
- Server-level 301s (not JavaScript or meta refresh)
- No redirect chains (maximum one hop)
- Redirects must work regardless of query parameters on source URL
- Post-launch: crawl all 26 URLs within 24 hours, verify correct status codes
- Monitor `page_not_found` analytics events for 30 days post-launch

---

## Section 3: Features & Requirements

### 3.1 Feature Summary

**Feature Types:**
- `PAGE` — Full page with sections, content, CTAs
- `COMPONENT` — Reusable UI element across pages
- `INTEGRATION` — External service connection
- `ANALYTICS` — Tracking/measurement
- `COMPLIANCE` — Legal/regulatory requirement
- `CONTENT` — Content migration or update

| Feature ID | Feature Name | Type | Priority | Touched Entities | Est. Effort | Dependencies |
|------------|-------------|------|----------|-----------------|-------------|--------------|
| F-001 | Global Navigation & Header | COMPONENT | P0 | Page, Product, CTA | M | F-008 |
| F-002 | Global Footer | COMPONENT | P0 | Page, Product, CTA | S | F-008 |
| F-003a | Homepage: Hero & Above-Fold | PAGE | P0 | Page, Section, CTA, Product | L | F-001, F-002, F-008, F-016, F-018 |
| F-003b | Homepage: Below-Fold Sections | PAGE | P0 | Page, Section, CTA, Product, ICP | L | F-003a, F-008, F-017, F-016 |
| F-004 | Products Page | PAGE | P0 | Page, Section, CTA, Product | L | F-001, F-002, F-008, F-017, F-018, F-019 |
| F-005 | Framework Page | PAGE | P0 | Page, Section, CTA | L | F-001, F-002, F-008, F-017 |
| F-006 | About Page | PAGE | P0 | Page, Section, CTA | M | F-001, F-002, F-008, F-016 |
| F-007a | Blog Article Template | PAGE | P0 | Page, Section, CTA, Analytics Event | M | F-001, F-002, F-008, F-017 |
| F-007b | Blog Hub Page | PAGE | P0 | Page, Section, CTA | M | F-007a, F-001, F-002, F-008 |
| F-008 | Brand System & Responsive Design | COMPONENT | P0 | All | XL | — |
| F-009 | SEO, Structured Data & Social Cards | COMPONENT | P0 | Page, Product | L | F-003 through F-007 |
| F-010 | Analytics Implementation | ANALYTICS | P0 | Analytics Event, CTA | M | F-011 |
| F-011 | GDPR Consent Management | COMPLIANCE | P0 | Analytics Event | M | — |
| F-012 | Content Migration & Redirects | CONTENT | P0 | Page | M | F-003 through F-007 |
| F-013 | Performance & Core Web Vitals | COMPONENT | P0 | All | M | F-008 |
| F-014 | Error / 404 Page | PAGE | P0 | Page, CTA | S | F-001, F-002, F-008 |
| F-015 | Contact Page | PAGE | P0 | Page, CTA | S | F-001, F-002 |
| F-016 | Trust Signals Component | COMPONENT | P0 | Page, Section | S | F-008 |
| F-017 | "Earn the Ask" CTA Component | COMPONENT | P0 | CTA, Product | M | F-008 |
| F-018 | External Link Pattern | COMPONENT | P0 | CTA, Product | S | — |
| F-019 | Product Demo/Preview Component | COMPONENT | P1 | Product, Section | M | F-008 |
| F-020 | Newsletter Signup Component | COMPONENT | P1 | CTA, Analytics Event | S | F-011, F-008 |
| F-021 | Case Study Template | PAGE | P3 | Page, Section | M | F-001, F-002, F-008 |
| F-022 | Blog Content Refresh | CONTENT | P3 | Page | M | F-007a |
| F-023 | Published Case Studies | CONTENT | P3 | Page | M | F-021 |

**Summary:** 20 P0 (MVP), 2 P1 (V1.1), 3 P3 (V1.1/V2.0). 25 features total.

**Priority Definitions:**
- `P0` — Critical for launch (MVP blocker)
- `P1` — Important, ships in V1.1 (+2 weeks post-launch)
- `P3` — Post-launch enhancement (V1.1 or V2.0)

---

### 3.2 Feature Details

---

#### F-008: Brand System & Responsive Design

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P0 |
| **Touched Entities** | All |
| **Dependencies** | — |
| **Estimated Effort** | XL: 5+ days |

**Description:**
Design token system and component library implementing the Brand Style Guide v1.1. All colours, typography, spacing, and interactive states defined as reusable tokens. Built responsive-first with accessibility baked in, not bolted on.

**User Story:**
> As a developer, I want a single source of design tokens so that every page and component renders on-brand without guesswork.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-008-01 | Brand Style Guide v1.1 exists | Developer inspects colour tokens | Mastery Blue (#1E3A5F), Signal Blue (#2563EB), Clarity Teal (#0D9473), Action Amber (#D97706) defined as variables |
| AC-008-02 | Typography tokens defined | Any text renders | Inter variable font self-hosted (~50KB, single request), caption min 13px |
| AC-008-03 | Responsive breakpoints defined | Page viewed at 375px, 768px, 1280px | Layout adapts without horizontal scroll or content overflow |
| AC-008-04 | Interactive elements exist | User taps/clicks any button or link | 48px min touch target (primary CTA), 44px all others, visible focus state, mobile active-state feedback |
| AC-008-05 | Colour contrast checked | Any text/background combination | WCAG AA contrast ratio met (4.5:1 body, 3:1 large text) |
| AC-008-06 | CTA buttons render | Primary CTA displayed | Signal Blue with coloured shadow (`0 2px 8px rgba(37, 99, 235, 0.25)`), brand gradient available for hero |
| AC-008-07 | Any interactive element | Keyboard navigation | Visible focus indicator (e.g., 2px Signal Blue ring with 2px offset) on all focusable elements |
| AC-008-08 | Micro-interaction occurs | Button hover, toggle, menu open | Transition: 200ms ease-out |
| AC-008-09 | Layout transition occurs | Accordion, modal, page change | Transition: 300ms ease-in-out |
| AC-008-10 | User has `prefers-reduced-motion` | Any animation present | All transitions reduced to instant or minimal |
| AC-008-11 | Dark mode | Any page loads | Explicitly NOT in scope for v1.0 |
| AC-008-12 | Print stylesheet | User prints a page | Explicitly NOT in scope for v1.0 |

**UI/UX Requirements:**
- Design tokens source of truth: Brand Style Guide v1.1 (`/documents/foundation/brand-style-guide.md`)
- Spacing scale, border radii, shadow values consistent across all components
- Results metric cards (for case studies V2.0): visual format for baseline vs result comparisons defined in token system

**Out of Scope:**
- Display typeface (future brand investment — Fraunces, General Sans, or Satoshi)
- Dark mode
- Animation library
- Print stylesheets

---

#### F-011: GDPR Consent Management

| Attribute | Value |
|-----------|-------|
| **Type** | COMPLIANCE |
| **Priority** | P0 |
| **Touched Entities** | Analytics Event |
| **Dependencies** | — |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Cookie consent mechanism compliant with UK GDPR (Data Protection Act 2018). Must gate all non-essential tracking (GA4, GTM custom events) behind explicit consent. No tracking fires before consent is granted.

**User Story:**
> As a site visitor, I want to control what data is collected about me so that my privacy is respected and the site complies with UK law.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-011-01 | First-time visitor arrives | Page loads | Consent banner appears, no analytics scripts fire |
| AC-011-02 | Visitor clicks "Accept" | Consent granted | GA4 and GTM initialise, consent preference stored |
| AC-011-03 | Visitor clicks "Reject" / closes banner | Consent denied | No analytics scripts fire, site functions normally |
| AC-011-04 | Returning visitor with stored preference | Page loads | Previous preference applied, no banner shown |
| AC-011-05 | Visitor wants to change preference | Footer "Cookie Settings" clicked | Consent dialog reopens, preference can be updated |
| AC-011-06 | Consent crosses domains | Visitor navigates to aimpactscanner.com | Consent does NOT transfer — each domain manages independently |

**UI/UX Requirements:**
- Banner must not obscure primary CTA on mobile
- Clear, plain-English language (no legal jargon)
- Two options minimum: Accept / Reject (not just "Accept" with hidden settings)

**Out of Scope:**
- Granular category-level consent — single accept/reject sufficient
- Cookie policy page (link to simple statement in footer)

---

#### F-018: External Link Pattern

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P0 |
| **Touched Entities** | CTA, Product |
| **Dependencies** | — |
| **Estimated Effort** | S: <1 day |

**Description:**
Consistent behaviour and visual treatment for all links navigating away from aisearchmastery.com.

**User Story:**
> As a visitor, I want to know when a link will take me to a different site so that I don't lose my place.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-018-01 | Link to product domain | User clicks CTA | Opens in new tab with `rel="noopener noreferrer"` |
| AC-018-02 | Link to any external domain | Link renders | Visual indicator present (subtle external-link icon or treatment) |
| AC-018-03 | Internal link | User clicks | Same tab, no external indicator |
| AC-018-04 | External link exists | Screen reader encounters | Aria label includes "(opens in new tab)" |
| AC-018-05 | Social media link | User clicks | New tab with `rel="noopener noreferrer"` |

**Out of Scope:**
- Download link behaviour
- Outbound link click tracking (covered by F-010)

---

#### F-016: Trust Signals Component

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P0 |
| **Touched Entities** | Page, Section |
| **Dependencies** | F-008 |
| **Estimated Effort** | S: <1 day |

**Description:**
Reusable component for verifiable credibility markers. Replaces fabricated social proof with authentic signals. **Critical rule: no trust signal may be published without verifiable source data.**

**User Story:**
> As a solopreneur evaluating this product, I want to see real evidence of credibility so that I can trust the person and tools behind it.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-016-01 | Component renders | Visitor views | Only verifiable data displayed |
| AC-016-02 | No usage data exists yet | Component renders | Focus on practitioner credentials and open methodology — no placeholder numbers |
| AC-016-03 | Real metrics become available | Content updated | Metrics display with context (e.g., live count from API if available) |
| AC-016-04 | Different pages | Renders on Homepage, Products, About | Adapts content to page context, consistent visual treatment |

**UI/UX Requirements:**
- Launch signals: "Built by a practitioner, not a guru", Open Methodology (27 factors, 8 pillars), Practitioner credibility
- Future signals (when real): usage metrics, case study references, publication mentions
- Never: fabricated numbers, stock testimonials, unverified claims

**Out of Scope:**
- Testimonial/review collection system
- Third-party trust badges (only when verified)

---

#### F-013: Performance & Core Web Vitals

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P0 |
| **Touched Entities** | All |
| **Dependencies** | F-008 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Performance budget ensuring Core Web Vitals thresholds. An AI search optimisation site with poor performance undermines credibility.

**User Story:**
> As a visitor, I want pages to load fast so that I can evaluate the content without frustration.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-013-01 | Any page loads | Lighthouse mobile | LCP <2.5s |
| AC-013-02 | Any page loads | Lighthouse mobile | CLS <0.1 |
| AC-013-03 | User interacts | Lighthouse mobile | INP <200ms |
| AC-013-04 | Images on page | Page renders | WebP/AVIF, lazy loaded below fold, responsive srcset, explicit dimensions |
| AC-013-05 | Font loads | Page renders | Inter self-hosted, `font-display: swap`, no layout shift |
| AC-013-06 | Homepage loads | Transfer size measured | Total page weight <500KB (excluding cached assets) |

**Out of Scope:**
- CDN selection (developer decision)
- Server-side performance tuning
- Automated performance monitoring (post-launch)

---

#### F-001: Global Navigation & Header

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P0 |
| **Touched Entities** | Page, Product, CTA |
| **Dependencies** | F-008 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Persistent site header with navigation and primary CTA. Navigation order follows the visitor's awareness progression (understand → trust → evaluate → learn → connect).

**User Story:**
> As a visitor on any page, I want clear navigation so that I can find what I need and always know where I am.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-001-01 | Any page loads | Header renders | Logo (ASM wordmark) links to homepage, skip-navigation link present for keyboard/screen reader users |
| AC-001-02 | Nav links present | Visitor scans header | Links in order: Framework, About, Products, Blog, Contact (no "Home") |
| AC-001-03 | Primary CTA | Visitor views header | "Free Site Scan" button (Signal Blue, opens aimpactscanner.com in new tab) |
| AC-001-04 | Mobile (<768px) | Header renders | Hamburger menu, "Free Site Scan" CTA remains visible |
| AC-001-05 | Current page | Nav renders | Active page indicated visually (not colour alone) |
| AC-001-06 | Visitor scrolls | Past fold | Sticky header, compact state (logo mark, nav condensed, CTA persists) |
| AC-001-07 | Keyboard user | Tab on page load | Skip-nav is first focusable element, jumps to main content |

**UI/UX Requirements:**
- Logo: ASM compact mark at mobile, full wordmark at desktop
- 5 nav links + 1 CTA
- Nav order rationale: Framework (problem space) → About (trust) → Products (solutions) → Blog (proof) → Contact

**Out of Scope:**
- Search in header, authentication, announcement bar

---

#### F-002: Global Footer

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P0 |
| **Touched Entities** | Page, Product, CTA |
| **Dependencies** | F-008 |
| **Estimated Effort** | S: <1 day |

**Description:**
Site-wide footer with navigation, product links, social links, legal links, brand attribution, and trust line. Newsletter signup row reserved for F-020.

**User Story:**
> As a visitor who has scrolled to the bottom, I want quick access to key pages, products, and social channels.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-002-01 | Any page loads | Footer renders | Four columns: Navigate, Products, Connect, Legal |
| AC-002-02 | Product links | Visitor clicks | New tab to product domain (per F-018) |
| AC-002-03 | Social links | Visitor views Connect | Same platforms as aimpactscanner.com and llmtxtmastery.com footers |
| AC-002-04 | Social links clicked | Visitor clicks | New tab with `rel="noopener noreferrer"` |
| AC-002-05 | Legal links | Visitor views | Privacy Policy, Cookie Settings (reopens F-011), Terms, Sitemap |
| AC-002-06 | Attribution | Footer renders | "by AI Search Mastery" with verifiable trust line |
| AC-002-07 | Contact info | Footer renders | support@aisearchmastery.com visible |
| AC-002-08 | Newsletter row | F-020 implemented | Full-width row above columns with email capture |

**UI/UX Requirements:**
- Mastery Blue (#1E3A5F) background
- Copyright with current year
- Newsletter row placeholder reserved in layout

**Out of Scope:**
- Newsletter component (F-020, P1), back-to-top button

---

#### F-017: "Earn the Ask" CTA Component

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P0 |
| **Touched Entities** | CTA, Product |
| **Dependencies** | F-008 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Reusable conversion component. Two variants: Full (product/landing pages) and Compact (blog/contextual). Core conversion mechanism across the site.

**User Story:**
> As a solopreneur, I want to understand the problem, see evidence, and know the solution before being asked to act.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-017-01 | Full variant renders | Visitor views | Slots: Problem, Evidence, Fix, Price (if enabled), CTA |
| AC-017-02 | Compact variant renders | Blog/contextual | Three slots: Problem (one line), Fix (one line), CTA |
| AC-017-03 | Full for AImpactScanner | Content populated | Problem → Three-Layer Gap → AImpactScanner → $14.95/mo (optional) → "Free Site Scan" |
| AC-017-04 | Full for LLM.txt Mastery | Content populated | Problem → LLM.txt Mastery → $4.95/mo (optional) → "Check My LLM.txt" |
| AC-017-05 | Price off | Blog page | Problem, Evidence, Fix, CTA visible. No price. |
| AC-017-06 | CTA clicked | Visitor clicks | New tab (per F-018), brief active/pressed state |
| AC-017-07 | Mobile (375px) | Viewed | Stacks vertically, full-width CTA, 48px touch target |
| AC-017-08 | Two on same page | Products page | 80px separation, alternating backgrounds |
| AC-017-09 | Button states | User interacts | Hover, focus (visible ring), active, disabled states per F-008 |

**UI/UX Requirements:**
- Evidence slot accepts: bullet list (2-4 items), single stat with label, or paragraph (max 200 chars)
- Single CTA per instance
- Visual hierarchy draws eye through sequence to CTA

**Out of Scope:**
- A/B testing, personalisation by ICP, inline payment

---

#### F-003a: Homepage: Hero & Above-Fold

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, Section, CTA, Product |
| **Dependencies** | F-001, F-002, F-008, F-016, F-018 |
| **Estimated Effort** | L: 3-5 days |

**Description:**
First screen visitors see. Must communicate what, who, and what to do next before scrolling. Messaging from Positioning Statement v2.0.

**User Story:**
> As a solopreneur landing for the first time, I want to immediately understand what this is and whether it's for me.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-003a-01 | Visitor arrives | Page loads | Hero visible without scrolling at 1280px desktop and 375×667px mobile |
| AC-003a-02 | Hero renders | Visitor reads headline | h1, 6-12 words: what + who + outcome. No jargon. |
| AC-003a-03 | Hero renders | Sub-headline | 15-25 words, single sentence explaining how. Paragraph element. |
| AC-003a-04 | Hero renders | CTAs visible | Primary: "Free Site Scan" (full-width on mobile, 48px). Secondary: "Check your LLM.txt" text link below (44px tap, external indicator per F-018). Both visible without scrolling on mobile. |
| AC-003a-05 | Hero renders | Trust signals | Above fold: "Open methodology — see exactly what we measure" + "MASTERY-AI v3.1.1 — 8 pillars, 27 factors" badge. No fabricated metrics. Static text/badges, no JS. |
| AC-003a-06 | Hero visual | Brand treatment | CSS-only gradient (no image assets). Renders without JavaScript. |
| AC-003a-07 | Secondary CTA | Visitor views | Text link with underline on hover, external indicator per F-018, visually subordinate. |

**UI/UX Requirements:**
- DO: "See how AI sees you". DON'T: "Dominate AI search", "AI-powered platform"
- No auto-playing video, carousel, or animation delaying content
- Mobile: primary button full-width, secondary text link centred below with 12px gap

**Responsive / Accessibility:**
- Single column below 768px. No horizontal scroll from 320px up.
- One h1. All interactive elements keyboard accessible. Colour not sole information carrier.

**Out of Scope:**
- Interactive scan preview, personalisation, video hero, stock photography

---

#### F-003b: Homepage: Below-Fold Sections

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, Section, CTA, Product, ICP |
| **Dependencies** | F-003a, F-008, F-017, F-016 |
| **Estimated Effort** | L: 3-5 days |

**Description:**
Scrollable homepage body. Walks visitor through Earn the Ask at page level: Problem → Framework → Products → Credibility → CTA. Section navigation aids orientation.

**User Story:**
> As a visitor who scrolled past the hero, I want to understand the problem, see the methodology, and evaluate the tools.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-003b-01 | Scrolls past hero | Section nav | Sticky progress indicator or "Jump to" bar (desktop). Optional on mobile. |
| AC-003b-02 | Problem section | Visitor reads | Three sub-blocks: "Not Found", "Not Cited", "Not Chosen". Icon/visual + heading + 1-2 sentences each. |
| AC-003b-03 | Problem section | Callout | The Amplifier: "AI lowers the build barrier → more competitors → discoverability = #1 determinant" |
| AC-003b-04 | Problem section | Stat | 134x Value Gap: "$59.40/year to protect vs ~$8,000/year cost of being invisible" |
| AC-003b-05 | Framework teaser | Visitor scrolls | 8 pillars, 27 factors, open methodology. CTA: "Explore the Framework" → /framework |
| AC-003b-06 | Products section | Visitor scrolls | Both products, F-017 **compact variant**. "Learn more" text links → /products#llmtxtmastery, /products#aimpactscanner |
| AC-003b-07 | Credibility section | Visitor scrolls | Jamie's photo + 2-3 sentence excerpt + mission + one verifiable credential. CTA: "Read the full story" → /about |
| AC-003b-08 | Final CTA | Bottom | Earn the Ask full variant → AImpactScanner. Secondary text link: "Or start with a free LLM.txt check" → llmtxtmastery.com/validator |
| AC-003b-09 | Trust signals | Contextual | "Open methodology" near Framework. "Built by a practitioner" near Credibility. |
| AC-003b-10 | All sections | Page loads | No JS-dependent content. Explicit min-height/aspect-ratio on all sections for CLS. |

**Responsive / Accessibility:**
- Single column below 768px. 44px touch targets. Sequential h2/h3 headings. Landmark regions.

**Out of Scope:**
- Testimonials, pricing table, blog previews, full Earn the Ask for products section (compact used)

---

#### F-004: Products Page

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, Section, CTA, Product |
| **Dependencies** | F-001, F-002, F-008, F-017, F-018, F-019 |
| **Estimated Effort** | L: 3-5 days |

**Description:**
Primary conversion page. Both products with Earn the Ask full variant. LLM.txt Mastery first (funnel order). FAQ for objection handling. Product demo (F-019) shows tools in action.

**User Story:**
> As a solopreneur evaluating tools, I want to compare both products so I choose the right starting point.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-004-01 | /products loads | Page intro | 2-3 sentences framing why these tools exist |
| AC-004-02 | Page renders | LLM.txt Mastery FIRST | (id="llmtxtmastery"): "Start here if you want to make your website readable by AI systems." |
| AC-004-03 | LLM.txt section | Visitor reads | Demo/preview (F-019 or static fallback with alt text + explicit dimensions), then Earn the Ask full: Problem, Evidence, Fix, $4.95/mo, "Check My LLM.txt". Free validator highlighted. |
| AC-004-04 | Scrolls past | AImpactScanner section | (id="aimpactscanner"): "Start here if you want a complete diagnosis of how AI sees your business." |
| AC-004-05 | AImpactScanner section | Visitor reads | Demo/preview (F-019 or fallback), then Earn the Ask full: Problem, Evidence, Fix, $14.95/mo, "Free Site Scan" |
| AC-004-06 | Between products | Value callout | "Both tools together: $59.40/year. Cost of being invisible: ~$8,000/year." |
| AC-004-07 | AImpactScanner | Framework link | "Scored using the MASTERY-AI Framework" → /framework |
| AC-004-08 | LLM.txt Mastery | Framework link | "Addresses the Machine Readability pillar" → /framework |
| AC-004-09 | Below products | FAQ section | 4-6 collapsible Q&As: cancel anytime, need both?, free option?, results timeline? |
| AC-004-10 | CTAs clicked | Visitor clicks | New tab (per F-018) |
| AC-004-11 | F-019 not built | Section renders | Static screenshot with descriptive alt text, explicit width/height |

**UI/UX Requirements:**
- Products complementary, not competing: "Two tools, one goal"
- LLM.txt first (lead), AImpactScanner second (upsell)
- No comparison matrix. FAQ uses accessible accordion (aria-expanded, aria-controls).
- FAQPage schema (per F-009)

**Responsive / Accessibility:**
- Single column below 768px. 44px touch targets. One h1, product headings h2. Alt text on all images.

**Out of Scope:**
- Embedded product functionality, pricing page, product changelog

---

#### F-005: Framework Page

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, Section, CTA |
| **Dependencies** | F-001, F-002, F-008, F-017 |
| **Estimated Effort** | L: 3-5 days |

**Description:**
Public-facing MASTERY-AI Framework v3.1.1. Demonstrates "Open Methodology" differentiator. Problem framing for visitors without context. Pillar-to-outcome connections. Mid-page CTA. Content from private repo `TheWayWithin/mastery-ai-framework`.

**User Story:**
> As a solopreneur or SEO consultant, I want to understand the framework behind the tools so I trust the methodology.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-005-01 | /framework loads | Top of page | Problem framing: "Most businesses have no idea how AI search evaluates their website." |
| AC-005-02 | Below problem | Visualization | Visual summary of all 8 pillars (SVG, card grid, or equivalent) |
| AC-005-03 | Overview | Visitor reads | 8 pillars, 27 factors, scoring approach. Plain language. |
| AC-005-04 | Open Methodology | Statement + proof | "We show you exactly what we measure and why." Link to substantiate (public repo or /methodology page). |
| AC-005-05 | Pillar sections | Visitor scrolls | Each pillar: icon, heading (h2), 2-3 sentences, factor count, one sentence connecting to business outcome |
| AC-005-06 | After pillar 4 | Mid-page CTA | Compact: "Want to see how your site scores?" → "Free Site Scan" |
| AC-005-07 | Machine Readability | Contextual CTA | Compact for LLM.txt Mastery |
| AC-005-08 | End of page | Primary CTA | Full variant: "Now that you know what we measure..." → "Free Site Scan" |
| AC-005-09 | Below CTA | Cross-page link | "See our tools" text link → /products |
| AC-005-10 | Version info | Visitor checks | "MASTERY-AI Framework v3.1.1 — Last reviewed: [date]" |
| AC-005-11 | Content update | Framework changes | Markdown → build time. Update source → rebuild. No client-side fetch. |

**UI/UX Requirements:**
- Educational, transparent, accessible. No jargon, no raw JSON/code.
- Open methodology link substantiates the claim — without it, "open" contradicts Radical Transparency.
- CreativeWork schema (per F-009).

**Responsive / Accessibility:**
- Single column below 768px. Visualization adapts. 44px touch targets. One h1, pillar headings h2.

**Out of Scope:**
- Full 27-factor detail, downloadable PDF, interactive scoring, framework changelog

---

#### F-006: About Page

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, Section, CTA |
| **Dependencies** | F-001, F-002, F-008, F-016 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Jamie's story as practitioner (Guide archetype). Origin story, verifiable credentials, mission, values, timeline. Person schema. CTA to Products page.

**User Story:**
> As a solopreneur, I want to understand who built this and why so I feel confident in the methodology.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-006-01 | /about loads | Story renders | First-person Guide voice ("I" not "Jamie Watters is...") |
| AC-006-02 | Origin story | Visitor reads | Why AI search, what problem, what led to tools. "MASTERY-AI Framework" links to /framework. |
| AC-006-03 | Credentials | Visitor reads | Verifiable: "Built FreecalcHub.com" (link), "Developed MASTERY-AI Framework" (link to /framework). If limited, own it: "I'm not a big agency." |
| AC-006-04 | Timeline | Visitor scrolls | 3-5 milestones: noticed AI patterns, researched, built framework, launched AImpactScanner, launched LLM.txt Mastery |
| AC-006-05 | Mission | Visitor reads | "Every business with genuine value is discoverable" |
| AC-006-06 | Values | Visitor reads | Five named: Radical Transparency, Practitioner-First, Relentless Simplicity, Evidence Over Opinion, Accessible Excellence. One sentence each. |
| AC-006-07 | Story bridge | After story | "That experience led me to build these tools" → narrative completion |
| AC-006-08 | CTA | Bottom | Compact: "See the tools" → /products |
| AC-006-09 | Photo | Page renders | Professional, real (not AI-generated), descriptive alt text |
| AC-006-10 | Trust signals | Renders | F-016: open methodology, practitioner background |
| AC-006-11 | Structured data | Page source | Person schema: name, jobTitle, url, sameAs (social links), image, worksFor (Organization) |

**UI/UX Requirements:**
- No "guru", "authority", unverified claims
- Concise — trust page, not autobiography
- Timeline: simple visual, not CV

**Responsive / Accessibility:**
- Single column below 768px. Photo scales. One h1, section headings h2.

**Out of Scope:**
- Team page, press kit, detailed CV

---

#### F-007a: Blog Article Template

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, Section, CTA, Analytics Event |
| **Dependencies** | F-001, F-002, F-008, F-017 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Reusable blog article template optimised for reading, SEO, and contextual conversion. 6 existing articles migrated into this template (1 fake removed). Auto-generated ToC for long articles. Article schema with dateModified and speakable.

**User Story:**
> As a solopreneur who found this via search, I want a clean reading experience with relevant next steps.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-007a-01 | Article loads | Page renders | Title (h1), date, "Updated: [date]" (when dateModified differs), read time, category label (links to hub filtered), author "Jamie Watters" (links to /about) |
| AC-007a-02 | Article >1,200 words | Below intro | Auto-generated ToC with anchor links to each h2. Collapsible on mobile. |
| AC-007a-03 | Article renders | Typography | 55-75 char line length, Inter at readable size, comfortable line spacing |
| AC-007a-04 | Article footer | CTA | Compact variant (F-017), contextual to topic. CTA mapping: Fundamentals/Industry Updates → AImpactScanner, How-To Guides → LLM.txt Mastery. Per-article override via frontmatter. |
| AC-007a-05 | Desktop sidebar | CTA | Compact variant available. No Price. |
| AC-007a-06 | Mobile (<768px) | CTA | Sidebar moves to end. Compact inline between sections or at end. |
| AC-007a-07 | Article ends | Related articles | 2-3 from same category or related topics |
| AC-007a-08 | Article ends | Newsletter placement | Reserved for F-020. Renders when shipped. |
| AC-007a-09 | Schema | Page head | Article JSON-LD: headline, author (Person ref), datePublished, dateModified, description, image, publisher (Organization ref). Speakable on intro and summary. |
| AC-007a-10 | SEO | Page head | Title tag, meta description, canonical, OG tags, Twitter card |
| AC-007a-11 | Images | Render | Lazy loaded, WebP with fallback, responsive srcset, descriptive alt text, explicit dimensions |
| AC-007a-12 | Code blocks | Render | Syntax-highlighted, readable font, horizontal scroll on overflow |
| AC-007a-13 | How-To Guide category | Schema | Optional HowTo schema overlay alongside Article schema, via frontmatter step data |

**UI/UX Requirements:**
- Reading experience primary, conversion secondary
- CTA must not interrupt reading flow
- Date format: human-readable ("29 June 2024")
- Heading hierarchy: h1 (title), h2 (sections), h3 (subsections), no skipped levels
- Blog URL pattern: `/blog/[category]/[slug]`

**Responsive / Accessibility:**
- Single column below 768px. One h1. All images alt text. `<article>` landmark. Code blocks: aria labels.

**Out of Scope:**
- Comments, social sharing buttons, author bio box

---

#### F-007b: Blog Hub Page

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, Section, CTA |
| **Dependencies** | F-007a, F-001, F-002, F-008 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Blog index with category filtering. Simple for 7 articles — not over-engineered.

**User Story:**
> As a visitor exploring the blog, I want to browse by topic to find relevant content.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-007b-01 | /blog loads | Page renders | Title (h1), intro text, category filter, article list |
| AC-007b-02 | Article cards | Visitor scans | Title, category, date, read time, excerpt (120-160 chars). Newest first. |
| AC-007b-03 | Category filter | Visitor views | Pills: All, Fundamentals, How-To Guides, Industry Updates. Article count on each pill. Active filter indicated. (Case Studies hidden if 0 articles.) |
| AC-007b-04 | Filter clicked | Filter applied | List updates. URL: `/blog?category=x`. Canonical → `/blog`. |
| AC-007b-05 | Filter + analytics | URL changes | `blog_filter` event fires (not pageview). Uses `replaceState`. |
| AC-007b-06 | Card clicked | Visitor clicks | Navigates to article |
| AC-007b-07 | 6 articles | Page renders | Simple grid/list. No pagination. |
| AC-007b-08 | Schema | Page head | CollectionPage with ItemList (ListItem per article with url and position). Breadcrumb: Home > Blog. |
| AC-007b-09 | SEO | Page head | Title tag, meta description, canonical, OG tags |

**UI/UX Requirements:**
- Simple card layout for 6 articles
- Filter works without JS (progressive enhancement) or degrades gracefully
- No featured article hero, no search, no tags

**Responsive / Accessibility:**
- Cards stack below 768px. 44px touch targets. One h1, card titles h2. Keyboard-navigable filter.

**Out of Scope:**
- Pagination (<15 articles), search, RSS (V1.1 roadmap), tag system

---

#### F-009: SEO, Structured Data & Social Cards

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P0 |
| **Touched Entities** | Page, Product |
| **Dependencies** | F-003 through F-007 |
| **Estimated Effort** | L: 3-5 days |

**Description:**
Comprehensive SEO across all pages. For an AI search optimisation business, the site's own SEO must be exemplary. Includes schema entity graph, llms.txt, AI crawler rules, and social cards.

**User Story:**
> As a search engine (traditional or AI), I want properly structured metadata so I can accurately index and cite this site.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-009-01 | Any page | Title tag | Unique, 50-60 chars, pattern: "[Page Title] \| AI Search Mastery" |
| AC-009-02 | Any page | Meta description | Unique, 150-160 chars |
| AC-009-03 | Any page | Canonical | Self-referencing, absolute URL |
| AC-009-04 | Any page | Viewport | Meta viewport present |
| AC-009-05 | Shared on social | OG tags | og:title, og:description, og:image (1200×630), og:url, og:type |
| AC-009-06 | Shared on X | Twitter card | summary_large_image, title, description, image |
| AC-009-07 | Homepage | JSON-LD | WebSite schema (name, url, publisher → Organization). Organization schema (name, url, logo, sameAs, contactPoint) |
| AC-009-08 | About | JSON-LD | Person schema (per F-006 AC-006-11) |
| AC-009-09 | Products | JSON-LD | Product schema ×2 (name, description, url, offers). FAQPage schema for FAQ section. |
| AC-009-10 | Framework | JSON-LD | CreativeWork (name, description, author → Person, dateModified, version) |
| AC-009-11 | Blog articles | JSON-LD | Article schema (per F-007a AC-007a-09) |
| AC-009-12 | Blog hub | JSON-LD | CollectionPage with ItemList (per F-007b AC-007b-08) |
| AC-009-13 | All pages | JSON-LD | BreadcrumbList: Home > [Section] > [Page] |
| AC-009-14 | All pages | JSON-LD | SiteNavigationElement |
| AC-009-15 | Schema cross-references | Entity graph | Organization as publisher in Articles. Person as author in Articles. Organization as brand in Products. Person as author in CreativeWork. Organization references Person as founder. |
| AC-009-16 | /sitemap.xml | Accessible | All public pages, lastmod dates, auto-generated |
| AC-009-17 | /robots.txt | Accessible | Allow all public pages. Explicit User-agent rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended): Allow /. Disallow non-public paths. |
| AC-009-18 | /llms.txt | Accessible | Summarises business, links to key pages. Demonstrates the practice the business teaches. |
| AC-009-19 | Existing schema | Replaced | v2.1/132 factors → v3.1.1/27 factors/8 pillars |
| AC-009-20 | GTM | Preserved | GTM-PMQG5CBD functional |
| AC-009-21 | Favicon | Browser tab | ASM compact mark: 16, 32, 180px (apple-touch) |
| AC-009-22 | Blog OG images | Each article | Auto-generated: article title on brand gradient, Inter Bold white text, ASM logo mark. Built at build time. |

**F-009 is the single source of truth for all schema definitions.** Other feature specs reference F-009 for schema and provide page-specific data fields only.

**Out of Scope:**
- Dynamic OG generation, hreflang, AMP, product pricing tier schema

---

#### F-010: Analytics Implementation

| Attribute | Value |
|-----------|-------|
| **Type** | ANALYTICS |
| **Priority** | P0 |
| **Touched Entities** | Analytics Event, CTA |
| **Dependencies** | F-011 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
GA4 via GTM (GTM-PMQG5CBD), gated behind GDPR consent. Establishes baselines. All custom events use snake_case naming and `dataLayer.push()`.

**Note:** All analytics metrics represent consented users only. Estimated consent rate for UK audiences: 40-60%. Interpret all metrics accordingly.

**User Story:**
> As the site owner, I want to understand visitor behaviour so I can measure conversion and improve.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-010-01 | Consent granted | GA4 initialises | Page views tracked (path, title, referrer) |
| AC-010-02 | Consent denied | Page loads | No analytics. Site works normally. |
| AC-010-03 | Product CTA clicked | Event fires | `cta_click`: product, location, variant, destination_url, link_text |
| AC-010-04 | Internal nav clicked | Event fires | `internal_navigation`: destination |
| AC-010-05 | Contact form submitted | Event fires | `contact_form_submit`: topic |
| AC-010-06 | 404 page | Event fires | `page_not_found`: attempted_url |
| AC-010-07 | Scroll | Event fires | `scroll_depth`: 25%, 50%, 75%, 100% per page |
| AC-010-08 | External link clicked | Event fires | `outbound_click`: destination_url, link_text, link_location, destination_domain |
| AC-010-09 | Blog engagement | Composite event | `blog_engagement`: fires when scroll >75% AND time >60 seconds |
| AC-010-10 | Newsletter signup (F-020) | Event fires | `newsletter_signup`: location (footer, article, inline) |
| AC-010-11 | Blog filter clicked | Event fires | `blog_filter`: filter_category, results_count. Uses replaceState (not pushState). |
| AC-010-12 | 404 search used | Event fires | `internal_search`: search_term, location (404_page) |

**Enumerated CTA Location Values:**
`nav`, `hero`, `section_mid`, `section_end`, `article_footer`, `article_sidebar`, `page_footer`, `products_page`, `framework_page`, `404_page`

**GTM Data Layer:** All events use `dataLayer.push()` with parameter names matching the GA4 event parameter names listed above.

**Out of Scope:**
- Cross-domain tracking, A/B testing, heatmaps, session recording, server-side analytics, conversion funnels (post-launch)

---

#### F-012: Content Migration & Redirects

| Attribute | Value |
|-----------|-------|
| **Type** | CONTENT |
| **Priority** | P0 |
| **Touched Entities** | Page |
| **Dependencies** | F-003 through F-007 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Preserve URL equity, migrate assets, update metadata. 26 indexed URLs must be accounted for. Schema.org replacement owned by F-009 (not this feature).

**User Story:**
> As a returning visitor or search engine, I want existing URLs to still work.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-012-01 | URL exists in new site | Requested | Page loads at same path |
| AC-012-02 | URL path changed | Requested | 301 redirect to new location |
| AC-012-03 | URL retired | Requested | 301 to most relevant page |
| AC-012-04 | 6 blog articles | Requested | Load at existing paths with new template |
| AC-012-05 | Fake case study | Requested | 301 → /blog |
| AC-012-06 | GTM container | Page loads | GTM-PMQG5CBD functional |
| AC-012-07 | Support email | Site renders | support@aisearchmastery.com preserved |
| AC-012-08 | New sitemap | Generated | Includes all preserved + new pages. No orphans. |
| AC-012-09 | Redirect map | Developer reviews | Full 26-URL map documented (see Section 2.7) |
| AC-012-10 | Query params | Redirect with UTMs | 301 works regardless of query parameters. Params stripped. |
| AC-012-11 | Post-launch verification | 24 hours after launch | Crawl all 26 original URLs, verify 200 or 301. Monitor page_not_found events for 30 days. |
| AC-012-12 | Content integrity | Per article | Verify: title, body, images loading, internal links resolving, meta description, publish date match source. |
| AC-012-13 | Search Console | Post-launch | Remove old sitemap, submit new, request indexing. Monitor crawl errors weekly for 30 days. |

**Rules:**
- Server-level 301s (not JS/meta refresh)
- No redirect chains (max one hop)
- Schema.org replacement: owned by F-009 (ships simultaneously with F-012)

**Out of Scope:**
- Blog content rewriting (F-022), historical analytics migration, domain redirects

---

#### F-014: Error / 404 Page

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, CTA |
| **Dependencies** | F-001, F-002, F-008 |
| **Estimated Effort** | S: <1 day |

**Description:**
Branded 404 focused on recovery, not conversion. Search input as primary recovery. No product CTA in body.

**User Story:**
> As a visitor who hit a broken link, I want help finding what I was looking for.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-014-01 | Non-existent URL | 404 triggered | Branded page with header (F-001) and footer (F-002) |
| AC-014-02 | 404 renders | Message | "Page not found" — helpful, not cute |
| AC-014-03 | 404 renders | Search | Search input prominently placed as primary recovery |
| AC-014-04 | 404 renders | Popular pages | 3-5 most-visited pages below search |
| AC-014-05 | 404 event | Analytics | `page_not_found` with attempted URL (per F-010) |

**UI/UX Requirements:**
- Guide archetype tone: "Let's get you where you need to go"
- No product CTA in body (header CTA from F-001 is sufficient)
- Search reuses site search mechanism when available

**Out of Scope:**
- URL pattern matching suggestions, 500 error page

---

#### F-015: Contact Page

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P0 |
| **Touched Entities** | Page, CTA |
| **Dependencies** | F-001, F-002 |
| **Estimated Effort** | S: <1 day |

**Description:**
Simple contact page with topic routing. Trust signal for solopreneurs.

**User Story:**
> As a solopreneur considering the products, I want to know I can reach a real person.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-015-01 | /contact loads | Form visible | Topic (dropdown), Name, Email, Message |
| AC-015-02 | Topic dropdown | Options | General Inquiry (default), Product Question, Partnership, Press |
| AC-015-03 | Valid submission | Form submitted | Inline confirmation (no redirect). Restates response time. Secondary action: "While you wait, explore the blog" |
| AC-015-04 | Submission processed | Backend | Email to support@aisearchmastery.com with topic, name, email, message |
| AC-015-05 | Invalid submission | Fields missing | Inline per-field validation errors |
| AC-015-06 | Field constraints | Visitor types | Name: 2-100. Email: standard. Message: 10-2000. Topic: required. |
| AC-015-07 | Response time | Page renders | "I reply within 48 hours" stated |
| AC-015-08 | Direct email | Page renders | support@aisearchmastery.com visible as alternative |
| AC-015-09 | Spam prevention | Bot submits | Honeypot + time-based check (reject <3 seconds) |
| AC-015-10 | Below form | Not submitting | Secondary CTA: newsletter (when F-020) or blog link |

**UI/UX Requirements:**
- "Get in touch" not "Submit a ticket". Optional: UK timezone.
- Success: inline green confirmation replaces form.

**Out of Scope:**
- Live chat, ticket tracking, FAQ/knowledge base

---

#### F-019: Product Demo/Preview Component

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P1 |
| **Touched Entities** | Product, Section |
| **Dependencies** | F-008 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Visual preview showing each product in action before visitors click through. Placed on Products page above Earn the Ask. Solves core conversion gap.

**User Story:**
> As a solopreneur, I want to see what the product looks like so I know what I'm getting before leaving this site.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-019-01 | Products page | Product section | Preview visible above Earn the Ask |
| AC-019-02 | AImpactScanner | Visitor views | Annotated screenshots: scan input → results → score breakdown. One-line caption per screenshot. |
| AC-019-03 | LLM.txt Mastery | Visitor views | Before/after: site without → generated output. One-line caption. |
| AC-019-04 | Mobile (375px) | Viewed | Scales proportionally, annotations readable |
| AC-019-05 | Preview loads | Page renders | Lazy loaded, WebP with PNG fallback, max 150KB per image, explicit dimensions |
| AC-019-06 | Video variant | Auto-plays | Muted, loops, no controls. `prefers-reduced-motion` → static fallback. Video failure → static fallback. |
| AC-019-07 | Accessibility | Screen reader | Descriptive alt text for each screenshot communicating the product step |
| AC-019-08 | Annotations | Visual | Numbered callouts with labels, consistent style per F-008. Must not obscure UI. |

**UI/UX Requirements:**
- Real product UI, not mockups (Radical Transparency)
- Static screenshots are MVP; video is enhancement
- Captions required alongside each screenshot

**Out of Scope:**
- Interactive embeds, clickable prototypes, narrated walkthroughs

---

#### F-020: Newsletter Signup Component

| Attribute | Value |
|-----------|-------|
| **Type** | COMPONENT |
| **Priority** | P1 |
| **Touched Entities** | CTA, Analytics Event |
| **Dependencies** | F-011, F-008 |
| **Estimated Effort** | S: <1 day |

**Description:**
Email capture for list building. Footer, blog article, and optional inline placements. Double opt-in required (UK GDPR best practice, Radical Transparency alignment).

**User Story:**
> As a visitor not ready to buy, I want to subscribe to updates so I stay informed.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-020-01 | Component renders | Visitor views | Email field, submit button, one line of copy explaining value (what they'll receive, how often) |
| AC-020-02 | Valid email | Submitted | Inline confirmation: "Check your inbox to confirm." Double opt-in email sent. |
| AC-020-03 | Invalid email | Validation | Inline error |
| AC-020-04 | Duplicate email | Submitted | Same confirmation message (no subscriber status revealed) |
| AC-020-05 | In footer | F-002 | Full-width row above columns |
| AC-020-06 | In blog article | F-007a | Below content, above related articles |
| AC-020-07 | Analytics | Submitted | `newsletter_signup`: location (footer, article, inline) |
| AC-020-08 | GDPR | Form renders | Consent language: "By subscribing, you agree to receive emails. Unsubscribe anytime." |
| AC-020-09 | Spam prevention | Bot submits | Honeypot. Client: button disabled 5s post-submit. Server: max 3/IP/hour. |
| AC-020-10 | Confirmation click | Subscriber confirms | Subscription active. Welcome email (when F-024 built). |

**UI/UX Requirements:**
- Email only (no name field)
- "Stay in the loop" not "Join our exclusive newsletter"
- Copy must set accurate expectations
- MVP integration: ESP or form endpoint that supports future email sending

**Out of Scope:**
- ESP selection details, welcome sequence (V2.0 roadmap F-024), dedicated landing page

---

#### F-021: Case Study Template

| Attribute | Value |
|-----------|-------|
| **Type** | PAGE |
| **Priority** | P3 |
| **Touched Entities** | Page, Section |
| **Dependencies** | F-001, F-002, F-008 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Template for verified case studies. Built only when real data exists. Structure: Context → Challenge → Approach → Results → Key Takeaways.

**User Story:**
> As a solopreneur, I want to see real results from someone like me.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-021-01 | Page loads | Structure | Context → Challenge → Approach → Results → Key Takeaways |
| AC-021-02 | Results | Metrics | Each: baseline, result, time period, measurement method. Structured visual format (comparison card/table). |
| AC-021-03 | Verification | Credibility | Business name, industry, timeframe. Live site link if consented. |
| AC-021-04 | Approach section | Content | Describes specific actions, including what didn't work. Not a product ad. |
| AC-021-05 | CTA | End | Compact variant, contextual to product demonstrated |
| AC-021-06 | Schema | Page head | Article schema consistent with F-009 |
| AC-021-07 | URL | Structure | `/case-studies/[slug]/` — distinct content type, not blog posts |
| AC-021-08 | Length | Content | Target: 1,000-2,000 words |

**Out of Scope:**
- Building before real data exists, video case studies

---

#### F-022: Blog Content Refresh

| Attribute | Value |
|-----------|-------|
| **Type** | CONTENT |
| **Priority** | P3 (ships V1.1) |
| **Touched Entities** | Page |
| **Dependencies** | F-007a |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Update 6 preserved articles: v2.1→v3.1.1, 132→27 factors, authority→Guide voice. Per-article checklist.

**User Story:**
> As a reader finding an older article via search, I want current content so I'm not confused.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-022-01 | Version refs | Updated | "v2.1" → "v3.1.1", "132 atomic factors" → "27 factors, 8 pillars" |
| AC-022-02 | Positioning language | Updated | Guide voice per guardrails: "here's what the data shows" not "we are the authority" |
| AC-022-03 | dateModified | Updated | Reflects refresh date. "Updated: [date]" shown. |
| AC-022-04 | Per-article checklist | Complete | [ ] Version refs, [ ] Factor count, [ ] Voice, [ ] Links verified, [ ] CTAs updated, [ ] Accuracy confirmed, [ ] dateModified |
| AC-022-05 | Core thesis conflict | Flagged | If article depends on 132-factor model and can't be accurately updated, flag for future rewrite rather than publish inaccurately |

**Sequencing:** Refresh in order of traffic volume (highest first), or publication date (newest first) if analytics unavailable.

**Out of Scope:**
- Rewrites, new articles, URL changes

---

#### F-023: Published Case Studies

| Attribute | Value |
|-----------|-------|
| **Type** | CONTENT |
| **Priority** | P3 |
| **Touched Entities** | Page |
| **Dependencies** | F-021 |
| **Estimated Effort** | M: 1-3 days |

**Description:**
Populate F-021 template with verified data. Minimum 2-3 before adding to navigation. First candidates: Jamie's own sites.

**User Story:**
> As a prospective customer, I want multiple real examples relevant to my situation.

**Acceptance Criteria (GWT Format):**

| AC ID | Given | When | Then |
|-------|-------|------|------|
| AC-023-01 | Case study written | Content reviewed | All data verified. Verification method: exportable data or screenshots with dates. |
| AC-023-02 | 2-3 published | Navigation | "Case Studies" added to primary nav after Blog, before Contact |
| AC-023-03 | Published | Homepage | Credibility section (F-003b) updated with link as verified proof |
| AC-023-04 | External subject | Consent | Written consent for publication. Subject reviews and approves before publish. |
| AC-023-05 | CTA | End of study | Contextual: AImpactScanner study → AImpactScanner CTA. LLM.txt study → LLM.txt CTA. |

**Out of Scope:**
- Publishing before verified data, incentivised studies

---

### 3.3 MVP Feature Set

| Feature ID | Feature Name | Rationale for MVP Inclusion |
|------------|--------------|----------------------------|
| F-001 | Global Navigation & Header | Site-wide wayfinding and persistent CTA |
| F-002 | Global Footer | Trust, legal, cross-property consistency |
| F-003a | Homepage: Hero & Above-Fold | First impression, primary entry point |
| F-003b | Homepage: Below-Fold Sections | Earn the Ask page-level journey |
| F-004 | Products Page | Primary conversion page |
| F-005 | Framework Page | Open Methodology differentiator |
| F-006 | About Page | Practitioner credibility |
| F-007a | Blog Article Template | Organic traffic, content marketing |
| F-007b | Blog Hub Page | Blog index and navigation |
| F-008 | Brand System & Responsive Design | Foundation for all rendering |
| F-009 | SEO, Structured Data & Social Cards | Practice-what-you-preach, AI discoverability |
| F-010 | Analytics Implementation | Baseline measurement |
| F-011 | GDPR Consent Management | UK legal compliance |
| F-012 | Content Migration & Redirects | Preserve URL equity |
| F-013 | Performance & Core Web Vitals | Credibility, ranking, UX |
| F-014 | Error / 404 Page | Catch migration misses |
| F-015 | Contact Page | Trust signal |
| F-016 | Trust Signals Component | Verifiable credibility |
| F-017 | "Earn the Ask" CTA Component | Core conversion mechanism |
| F-018 | External Link Pattern | Consistent cross-domain UX |

**MVP total: 20 P0 features**

### 3.4 Post-MVP Roadmap

| Phase | Feature ID | Feature Name | Target | Rationale |
|-------|------------|--------------|--------|-----------|
| V1.1 | F-019 | Product Demo/Preview | +2 weeks | Biggest conversion lever |
| V1.1 | F-020 | Newsletter Signup | +2 weeks | Email capture, placements reserved |
| V1.1 | F-022 | Blog Content Refresh | +2 weeks | Update before newsletter drives traffic to outdated content |
| V1.1 | F-028 | Blog RSS Feed | +2 weeks | Low effort, signals to technical audience |
| V2.0 | F-021 | Case Study Template | +8 weeks / when data | Built when content exists |
| V2.0 | F-023 | Published Case Studies | +8 weeks / when data | Populate with verified data |
| V2.0 | F-024 | Email Welcome Sequence | +8 weeks | 3-5 automated emails post-signup |
| V2.0 | F-027 | Pricing Comparison | +8 weeks | Side-by-side product ladder |
| V2.0+ | F-025 | Site Search | Future | Client-side (Pagefind or similar) |
| V2.0+ | F-026 | Testimonial Component | Future | When verified testimonials exist |

---

## Section 4: Testing Requirements

| Test ID | Feature | Description | Type | Priority |
|---------|---------|-------------|------|----------|
| T-001 | F-008 | Brand tokens render correctly (colours, typography, spacing) | Visual regression | P0 |
| T-002 | F-008 | No horizontal scroll at 320px, 375px, 768px, 1280px | Cross-device | P0 |
| T-003 | F-008 | WCAG AA contrast on all text/background combinations | Accessibility | P0 |
| T-004 | F-008 | Focus states visible on all interactive elements via keyboard | Accessibility | P0 |
| T-005 | F-001 | Nav renders, sticky compact on scroll, skip-nav works | Functional | P0 |
| T-006 | F-001 | Mobile hamburger opens/closes, CTA remains visible | Functional | P0 |
| T-007 | F-002 | Footer social links match across all three domains | Content | P0 |
| T-008 | F-002 | All footer links resolve (no 404s) | Functional | P0 |
| T-009 | F-003a | Hero visible without scrolling at 1280px and 375×667px | Visual | P0 |
| T-010 | F-003a | "Free Site Scan" opens aimpactscanner.com in new tab | Functional | P0 |
| T-011 | F-003b | Five sections render in correct order | Visual | P0 |
| T-012 | F-004 | Both products, LLM.txt first, Earn the Ask full variant | Functional | P0 |
| T-013 | F-004 | FAQ accordion expands/collapses, keyboard accessible | Functional | P0 |
| T-014 | F-005 | All 8 pillars with business outcome sentence | Content | P0 |
| T-015 | F-005 | Mid-page CTA (pillar 4) and final CTA functional | Functional | P0 |
| T-016 | F-006 | Person schema validates in Rich Results Test | Technical | P0 |
| T-017 | F-007a | ToC generates for articles >1,200 words | Functional | P0 |
| T-018 | F-007a | Article schema: datePublished and dateModified present | Technical | P0 |
| T-019 | F-007b | Category filter updates URL and article list | Functional | P0 |
| T-020 | F-007b | CollectionPage + ItemList schema validates | Technical | P0 |
| T-021 | F-009 | Every page: unique title, meta desc, canonical, OG tags | SEO | P0 |
| T-022 | F-009 | All JSON-LD schemas validate | Technical | P0 |
| T-023 | F-009 | llms.txt exists at root with accurate content | Content | P0 |
| T-024 | F-009 | robots.txt allows AI crawlers, disallows non-public | Technical | P0 |
| T-025 | F-009 | XML sitemap: all pages, correct lastmod | Technical | P0 |
| T-026 | F-009 | Favicon renders (16, 32, 180px) | Visual | P0 |
| T-027 | F-010 | GA4 fires only after consent | Compliance | P0 |
| T-028 | F-010 | cta_click fires with all parameters | Analytics | P0 |
| T-029 | F-010 | page_not_found fires on 404 with URL | Analytics | P0 |
| T-030 | F-011 | Consent banner on first visit, no pre-consent scripts | Compliance | P0 |
| T-031 | F-011 | Consent persists across page loads | Functional | P0 |
| T-032 | F-011 | Footer Cookie Settings reopens dialog | Functional | P0 |
| T-033 | F-012 | All 26 original URLs return 200 or 301 | Migration | P0 |
| T-034 | F-012 | Fake case study redirects to /blog | Migration | P0 |
| T-035 | F-012 | 6 articles: correct content, images, links | Content | P0 |
| T-036 | F-013 | Lighthouse mobile: LCP <2.5s, CLS <0.1, INP <200ms | Performance | P0 |
| T-037 | F-013 | Homepage weight <500KB | Performance | P0 |
| T-038 | F-014 | 404: search input, popular pages, no product CTA in body | Functional | P0 |
| T-039 | F-015 | Contact form submits, inline confirmation, email received | Functional | P0 |
| T-040 | F-015 | Honeypot + time-check blocks bots | Security | P0 |
| T-041 | F-016 | Trust signals: verifiable data only | Content | P0 |
| T-042 | F-017 | Full and compact variants render correctly | Functional | P0 |
| T-043 | F-017 | Price slot hides when configured off | Functional | P0 |
| T-044 | F-018 | External links: new tab, rel, visual indicator | Functional | P0 |
| T-045 | F-018 | External links: aria labels "(opens in new tab)" | Accessibility | P0 |

---

## Section 5: User Flows

### Flow 1: First-Time Visitor → Product Trial

```
Homepage Hero → Scrolls (Problem, Framework teaser, Products compact CTA)
  → Clicks "Learn more" → Products Page
  → Reads product + demo/preview (V1.1) + FAQ
  → Clicks "Free Site Scan" or "Check My LLM.txt"
  → New tab: Product domain
```

### Flow 2: Search → Blog → Product Discovery

```
Search result → Blog Article → Reads, sees ToC
  → Compact CTA (contextual) → New tab: Product domain
  OR
  → Related articles → Newsletter signup (V1.1)
  → Nav → Products or Framework
```

### Flow 3: Framework Explorer → Trust → Trial

```
Any page → "Framework" nav → Problem framing → 8 pillars
  → Mid-page CTA (pillar 4) → "Free Site Scan"
  OR continues → Bottom CTA → "Free Site Scan"
  → "See our tools" → Products page
```

### Flow 4: Trust Evaluator → About → Products

```
Any page → "About" nav → Jamie's story → Credentials, timeline, values
  → "See the tools" → Products page → Product CTA → New tab
```

### Flow 5: Returning Visitor → Blog → Newsletter

```
Bookmark → Blog Hub → Filter by category → Article
  → Newsletter signup (V1.1) → Confirmation → Double opt-in
  → Future: Welcome sequence (V2.0)
```

### Flow 6: Broken Link → Recovery

```
Old link → 404 → Search input → Target page
  OR → Popular page link → Continue browsing
```

---

## Section 6: Technical Considerations

> This PRD is technology-agnostic. Tech stack is the developer's decision. Existing stack assumed unless compelling reason to change.

### 6.1 Performance Budget

| Metric | Target | Source |
|--------|--------|--------|
| LCP | <2.5s (mobile) | F-013 |
| CLS | <0.1 | F-013 |
| INP | <200ms | F-013 |
| Page weight | <500KB per page | F-013 |
| Font payload | ~50KB (Inter variable) | F-008 |
| Image format | WebP/AVIF, lazy, srcset | F-013 |

### 6.2 Accessibility Requirements

| Requirement | Standard | Source |
|-------------|----------|--------|
| Contrast | WCAG AA (4.5:1 / 3:1) | F-008 |
| Touch targets | 44px (48px primary CTA) | F-008 |
| Focus states | All interactive elements | F-008 |
| Reduced motion | Respect preference | F-008 |
| Heading hierarchy | One h1, sequential | All pages |
| Landmarks | main, nav, article, footer | All pages |
| Skip navigation | First focusable element | F-001 |
| Alt text | All images, descriptive | All pages |
| Keyboard | All interactions | F-008 |

### 6.3 Cross-Domain Architecture

| Domain | Role |
|--------|------|
| aisearchmastery.com | Parent marketing site (this PRD) |
| aimpactscanner.com | AImpactScanner product |
| llmtxtmastery.com | LLM.txt Mastery product |
| llmtxtmastery.com/validator | Free validator |

- No cross-domain tracking
- Social links identical across all three
- Attribution: "by AI Search Mastery"
- External link pattern (F-018) governs all cross-domain links

### 6.4 Content Management

- Blog: Markdown with frontmatter (title, date, dateModified, category, excerpt, CTA product override)
- Framework: sourced from private repo, compiled at build time
- llms.txt: manually maintained at root
- No client-side content fetching for core content

### 6.5 Analytics Architecture

- GTM: GTM-PMQG5CBD (migrated)
- GA4 via GTM, GDPR-gated
- Data layer: `dataLayer.push()` for all events
- Consent rate: ~40-60% (UK). All metrics = consented users only.
- Events: snake_case, enumerated locations

---

## Section 7: Handoff Readiness Checklist

| # | Check | Status |
|---|-------|--------|
| 1 | All F-IDs have GWT acceptance criteria | Done |
| 2 | Entities defined (Section 2.2) | Done |
| 3 | Business rules documented (Section 2.4) | Done |
| 4 | Sitemap with routes (Section 2.3) | Done |
| 5 | External APIs documented (Section 2.5) | Done |
| 6 | Privacy requirements (Section 2.6) | Done |
| 7 | Redirect map included (Section 2.7) | Done |
| 8 | Test cases linked (Section 4) | Done |
| 9 | User flows documented (Section 5) | Done |
| 10 | Performance budget (Section 6.1) | Done |
| 11 | Accessibility requirements (Section 6.2) | Done |
| 12 | All open questions resolved | Done (9/9) |
| 13 | MVP feature set identified (Section 3.3) | Done |
| 14 | Post-MVP roadmap (Section 3.4) | Done |
| 15 | Brand Style Guide v1.1 referenced | Done |
| 16 | All 5 foundation documents referenced | Done |

---

## Section 8: Success Metrics

### North Star Metric

**Product CTA click-through rate** — % of visitors who click through to a product domain

### Key Results (90-day)

| Metric | Target | Source |
|--------|--------|--------|
| Product CTA CTR | 5-8% | F-010 |
| Bounce rate (homepage) | <50% | F-010 |
| Pages per session | >2.0 | F-010 |
| Framework page visits | >15% of sessions | F-010 |
| Contact form submissions | >10/month | F-010 |
| Blog quality reads | >40% (75% scroll + 60s) | F-010 |
| Core Web Vitals | All green | F-013 |
| Schema validation | 100% valid | F-009 |
| Migration | Zero 404s from 26 URLs | F-010 |

### Business Chassis Impact

| Multiplier | Site's Role |
|------------|------------|
| **Prospects** | SEO, blog, framework, llms.txt drive discovery |
| **Lead Conversion** | Earn the Ask, trust signals, demo convert to trials |
| **Client Conversion** | FAQ, value gap, case studies reduce friction |
| **Average Spend** | Product funnel (LLM.txt → AImpactScanner) |
| **Transaction Frequency** | Newsletter keeps audience returning |
| **Margin** | Self-service. Site does the selling. |

---

## Section 9: Timeline & Resources

### Implementation Phases (suggested)

**Phase 1: Foundation (Week 1-2)**
F-008, F-011, F-018, F-001, F-002

**Phase 2: Core Pages (Week 2-4)**
F-003a, F-003b, F-004, F-005, F-006, F-015

**Phase 3: Blog & Content (Week 4-5)**
F-007a, F-007b, F-012

**Phase 4: Technical & Launch (Week 5-6)**
F-009, F-010, F-013, F-014, F-016, F-017

**Post-Launch:**
V1.1 (+2 weeks): F-019, F-020, F-022, F-028
V2.0 (+8 weeks): F-021, F-023, F-024, F-027

### Content Dependencies (Jamie must provide)

| Content | Phase | Status |
|---------|-------|--------|
| About page copy | 2 | Not started |
| Framework content (8 pillars) | 2 | Source: private repo |
| Product screenshots (real UI) | 2 | Not started |
| Blog frontmatter | 3 | Partially exists |
| llms.txt content | 4 | Jamie adding |
| Social media URLs | 1 | Pull from existing sites |
| Professional photo | 2 | Exists |
| OG image approach | 4 | Not started |

---

## Appendix A: Reference Documents

| Document | Version | Path |
|----------|---------|------|
| Vision & Mission | v5.0 | `/documents/foundation/vision-mission.md` |
| Market & Client Research | v2.0 | `/documents/foundation/market-research.md` |
| Client Success Blueprint | v3.0 | `/documents/foundation/client-success-blueprint.md` |
| Positioning Statement | v2.0 | `/documents/foundation/positioning-statement.md` |
| Brand Style Guide | v1.1 | `/documents/foundation/brand-style-guide.md` |
| MASTERY-AI Framework | v3.1.1 | `github.com/TheWayWithin/mastery-ai-framework` (private) |

## Appendix B: Change Log

| Version | Date | Changes |
|---------|------|---------|
| v1.0 | 2026-02-21 | Initial PRD (Engaged Mode). 25 features, 45 test cases, 6 user flows. 5 expert review rounds. Supersedes Website Realignment PRD v1.0 (Aug 2025). |

## Appendix C: Post-MVP Roadmap Items

| ID | Feature | Target | Notes |
|----|---------|--------|-------|
| F-019 | Product Demo/Preview | V1.1 | Conversion lever |
| F-020 | Newsletter Signup | V1.1 | Email capture |
| F-022 | Blog Content Refresh | V1.1 | Update before newsletter |
| F-028 | Blog RSS Feed | V1.1 | Technical audience signal |
| F-021 | Case Study Template | V2.0 | When data exists |
| F-023 | Published Case Studies | V2.0 | Verified data only |
| F-024 | Email Welcome Sequence | V2.0 | 3-5 automated emails |
| F-025 | Site Search | V2.0+ | Pagefind or similar |
| F-026 | Testimonial Component | V2.0+ | When verified |
| F-027 | Pricing Comparison | V2.0 | Product ladder |

---

*PRD created in Engaged Mode with 5 expert review rounds. All sections individually approved by founder.*

*"Every business with genuine value is discoverable."*
