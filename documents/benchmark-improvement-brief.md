# AI Search Arena — Benchmark Improvement Brief

**Date**: 2026-03-08
**Author**: Jamie Watters
**Purpose**: Product-level requirements to move AI Search Mastery from Rank #6 (Score 6.8) to Top 3 (Score 7.5+) in the AI Search Arena benchmark.

---

## Context

AI Search Mastery's product suite (AImpactScanner, LLM.txt Mastery, AImpactMonitor) is benchmarked against competitors like BrightEdge, Searchmetrics, and seoClarity on the AI Search Arena at aisearcharena.com. Our composite score is 6.8 — the gap to Top 3 is 0.5–0.8 points across 5 key dimensions.

This document tells each product team **exactly what changes are needed on their product**, which benchmark dimension(s) each change improves, and what the expected score impact is. Each team should use this to create their own implementation plan and timeline.

**The aisearchmastery.com site changes are handled separately** — this brief covers product changes only.

---

## Benchmark Dimensions We're Targeting

| Dimension | Current Score | Target Score | Weight | Products That Move It |
|-----------|-------------|-------------|--------|----------------------|
| ROI Attribution | 4.3 | 7.5 | High | AImpactMonitor |
| API Quality | 4.4 | 7.5 | High | All (shared API layer) |
| Integration Ecosystem | 5.2 | 7.5 | High | All (shared API layer) |
| Multimodal Content Support | 5.2 | 7.5 | Medium | AImpactScanner |
| Readability Optimization | 5.9 | 7.5 | Medium | AImpactScanner |
| AI Search Analytics Depth | 6.4 | 8.0 | High | AImpactScanner, AImpactMonitor |
| Schema Markup Support | 6.5 | 8.0 | Medium | AImpactScanner |
| Structured Data Validation | 6.5 | 8.0 | Medium | AImpactScanner |
| llms.txt Generation | 3.1 | 8.0 | Medium | LLM.txt Mastery |

---

## Product 1: AImpactScanner

**Domain**: aimpactscanner.com
**Current role**: Scans 27 factors across 8 pillars, produces a score.
**Core problem**: The scanner diagnoses issues but doesn't help fix them. It also lacks schema generation, readability scoring, and competitive benchmarking.

### Change AS-1: "Fix This" Action Lists

**Benchmark dimensions**: Multimodal Content Support (5.2→7.0), Readability Optimization (5.9→7.5)
**Combined weighted impact**: 0.178
**Priority**: HIGH — this is the single highest-leverage product change

**What to build**:
After scanning 27 factors, generate a prioritised action list for each finding. Each action item needs:

- **What to fix** — specific element on the page (e.g., "Image at /hero-banner.jpg missing alt text")
- **Why it matters** — one sentence connecting to AI visibility (e.g., "AI models cannot interpret images without descriptive alt text, reducing citation likelihood")
- **Expected impact** — High / Medium / Low badge
- **Implementation guidance** — specific fix, not generic advice (e.g., suggested alt text, rewritten sentence, code snippet)

Specific action types needed:

| Finding Type | Action Output |
|-------------|---------------|
| Missing alt text on images | Suggested alt text based on page context |
| Poor readability score | Rewritten sentence/paragraph suggestions |
| Missing schema markup | Ready-to-paste JSON-LD block (see AS-2) |
| No llms.txt file | Link to LLM.txt Mastery generator with pre-filled URL |
| Missing meta descriptions | Suggested meta description text |
| Poor heading structure | Recommended heading hierarchy |
| Missing FAQ markup | Extracted Q&A pairs formatted as FAQ schema |
| No structured data | List of applicable schema types with generated code |

**Acceptance criteria**:
- Every scan finding has at least one actionable fix
- Fixes are specific to the scanned page, not generic templates
- Action list is sortable by impact (High → Low)
- Copy button on all code snippets (schema, meta tags, alt text)

---

### Change AS-2: Schema Generation & Validation Engine

**Benchmark dimensions**: Schema Markup Support (6.5→8.0), Structured Data Validation (6.5→8.0)
**Combined weighted impact**: 0.175
**Priority**: HIGH
**Dependency**: Builds on AS-1's action list framework

**What to build**:

1. **Schema detection** — during scan, identify which schema types exist on the page and which are missing
2. **Schema generation** — produce ready-to-paste JSON-LD for missing schema types:
   - `FAQPage` — extract Q&A patterns from page content
   - `HowTo` — extract step-by-step instructions from content
   - `Article` — pull title, author, dates, description
   - `Product` — extract product name, description, price, availability
   - `Organization` — company name, logo, social links
   - `BreadcrumbList` — generate from URL structure
   - `WebSite` with `SearchAction` — for homepages
3. **Schema validation** — validate existing schema against Google Rich Results requirements (not just JSON-LD syntax). Report:
   - Missing required fields
   - Invalid values
   - Deprecated types
   - Opportunities (recommended but optional fields)
4. **Schema completeness score** — percentage of applicable schema types that are implemented on the page

**Acceptance criteria**:
- Generated schema validates against Google Rich Results Test
- At least 7 schema types supported (listed above)
- Validation goes beyond syntax — checks Google's specific requirements
- Completeness score shown in scan results dashboard

---

### Change AS-3: AI-Focused Readability Scoring

**Benchmark dimensions**: Readability Optimization (5.9→7.5)
**Weighted impact**: 0.044 (incremental on top of AS-1)
**Priority**: MEDIUM
**Dependency**: None

**What to build**:

A readability score optimised for how AI models consume content (not just Flesch-Kincaid). Score these factors per page:

| Factor | What to measure |
|--------|----------------|
| Sentence clarity | Average sentence length, passive voice %, jargon density |
| Term consistency | Same concept referred to by different names |
| Logical flow | Heading hierarchy follows content structure |
| Chunking quality | Content broken into scannable sections with clear topics |
| Definition coverage | Technical terms defined on first use |
| Claim-evidence pairing | Claims followed by supporting data/examples |
| Answer-engine formatting | Content structured as direct answers to questions |

**Output per page**:
- Overall AI readability score (0-100)
- Per-factor breakdown
- Top 3 specific improvements with rewrite suggestions
- Before/after preview for suggested rewrites

**Acceptance criteria**:
- Score correlates with AI model comprehension (validated against actual LLM extraction tests)
- Rewrite suggestions maintain original meaning
- Scoring methodology documented and transparent

---

### Change AS-4: Competitive Benchmarking

**Benchmark dimensions**: AI Search Analytics Depth (6.4→7.5)
**Weighted impact**: 0.028
**Priority**: LOW (Phase 4 — do after API and Monitor)
**Dependency**: Persistent user data storage, Growth tier only

**What to build**:
- Accept a competitor URL alongside the user's URL during scan
- Run same 27-factor analysis on both
- Side-by-side comparison showing where competitor outperforms
- Score delta per factor with "close the gap" recommendations
- Historical tracking: show score changes over time (requires user accounts with scan history)

**Acceptance criteria**:
- Comparison renders clearly with visual indicators (green = ahead, red = behind)
- History shows at least 30 days of score trends
- Growth tier only — free users see teaser

---

### Change AS-5: Domain-Level Housekeeping

**Benchmark dimensions**: llms.txt Excellence (indirect), Integration Ecosystem (indirect)
**Priority**: HIGH (quick win, do immediately)

| Task | Details |
|------|---------|
| Create `/llms.txt` file | Describe AImpactScanner: what it does, 27 factors, 8 pillars, methodology, pricing, API endpoints (when available) |
| Create `/llms-full.txt` file | Full markdown version with complete documentation |
| Update `robots.txt` | Add `Llms-Txt: /llms.txt` directive |
| Add `<link>` tag to HTML `<head>` | `<link rel="alternate" type="text/plain" href="/llms.txt">` on all pages |
| Verify pricing displays $19.95/mo | Confirm Growth plan price matches aisearchmastery.com products page ($19.95/mo is correct) |
| Add footer link to aisearchmastery.com | Cross-property linking for ecosystem signals |

---

## Product 2: LLM.txt Mastery

**Domain**: llmtxtmastery.com
**Current role**: Validates existing llms.txt files and generates new ones.
**Core problem**: The validator checks basic syntax only. The generator produces a single format. The benchmark scores us 3.1 — but nobody else scores above 2.7, so this is our biggest moat opportunity. Pushing to 7-8 creates a lead nobody can easily close.

### Change LT-1: Deep Spec Compliance Validation

**Benchmark dimensions**: llms.txt Generation (3.1→7.0)
**Weighted impact**: 0.138 (massive — biggest single-dimension moat)
**Priority**: HIGH

**What to build**:

Expand the validator far beyond basic syntax checking:

| Validation Area | What to Check |
|----------------|---------------|
| **Spec compliance** | Title present, description present, URLs section with descriptions, optional sections correctly formatted |
| **Content quality** | Is the llms.txt actually useful to an LLM? Score based on: descriptiveness, completeness, accuracy |
| **Freshness** | Does the llms.txt content match the current live site content? Flag stale entries (pages removed, content changed) |
| **Size optimisation** | Is it within recommended token limits? Flag if too large for context windows |
| **Link validation** | Do all referenced URLs return 200? Flag broken links |
| **Format detection** | Identify if the file follows llms.txt, llms-full.txt, or llms-mini.txt conventions |

**Output**:
- Compliance percentage (0-100%)
- Per-section breakdown with specific issues
- Prioritised fix recommendations
- "Quick fix" button that auto-corrects formatting issues
- Grade: A (95%+), B (80-94%), C (60-79%), D (below 60%)

**Acceptance criteria**:
- Validates against the full llms.txt specification (not just "is it valid markdown")
- Freshness check compares against live site content
- Compliance score is reproducible and documented
- API endpoint available: `POST /api/validate` (for future API integration)

---

### Change LT-2: Multi-Format Generation

**Benchmark dimensions**: llms.txt Generation (7.0→7.5)
**Weighted impact**: 0.023 (incremental)
**Priority**: HIGH (pairs with LT-1)
**Dependency**: LT-1 (uses same parsing/analysis engine)

**What to build**:

Generate all three formats from a single URL crawl:

| Format | Purpose | Content |
|--------|---------|---------|
| `llms.txt` | Standard summary | Title, description, structured list of URLs with one-line descriptions |
| `llms-full.txt` | Complete content | Full markdown extraction of all page content, suitable for LLM ingestion |
| `llms-mini.txt` | Token-constrained | Minimal version — title, 2-sentence description, top 5 most important URLs only |

**Additional features**:
- Preview all three formats before download
- Side-by-side comparison showing what each format includes/excludes
- Token count per format (show how each fits different context windows)
- Download all three as a zip
- **Full deployment package** (see LT-2B for complete spec):
  - File download + HTML discovery tag + robots.txt directive
  - Platform-specific deployment guides (WordPress, Shopify, etc.)
  - Deployment verification checker
  - This is critical — generating the file without deployment guidance is why the benchmark scores us 3.1

**Acceptance criteria**:
- All three formats generated from one crawl (no re-crawling)
- Generated files pass LT-1 validation at Grade A
- Token counts displayed per format
- Deployment guide is copy-paste ready

---

### Change LT-2B: Deployment Guidance & Discovery Mechanisms

**Benchmark dimensions**: llms.txt Generation (3.1→6.0 — this alone could move the score significantly)
**Weighted impact**: High — discovery is the gap between "file exists" and "AI models find it"
**Priority**: HIGH (pairs with LT-2, can ship independently)
**Dependency**: None — this is guidance and generated output, not new infrastructure

**The problem**:
Right now LLM.txt Mastery generates the file and says "download it." But having an llms.txt file is only step 1. AI crawlers need to be told it exists. Without discovery mechanisms, crawlers have to guess that /llms.txt is there — most won't. This is likely why the benchmark scores us 3.1 despite having a working tool.

**What to build**:

After generating an llms.txt file, the tool should provide a **complete deployment package** — not just the file, but everything needed for AI crawlers to find it:

**1. Post-Generation Deployment Panel**

Show a "Deploy Your llms.txt" panel after generation with three sections:

| Step | What to provide | User action |
|------|----------------|-------------|
| **1. Upload the file** | Download button for llms.txt (and llms-full.txt if generated) | Upload to website root directory |
| **2. Add HTML discovery tag** | Copy-paste code block: `<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable version">` | Add to `<head>` section of every page |
| **3. Update robots.txt** | Copy-paste line: `Llms-Txt: https://yourdomain.com/llms.txt` | Add to end of robots.txt file |

Each step should have:
- A "Copy" button for the code snippet
- A brief explanation of what it does and why (1-2 sentences)
- A "Verify" button that checks if the user has done it (hits their URL to confirm)

**2. Deployment Verification Checker**

After the user says they've deployed, run automated checks:

| Check | Method | Pass/Fail |
|-------|--------|-----------|
| File accessible | `HEAD https://domain.com/llms.txt` returns 200 | File found / File not found |
| HTML tag present | Parse homepage HTML, look for `<link rel="alternate" ... href="/llms.txt">` | Tag found / Tag missing |
| robots.txt directive | Fetch robots.txt, look for `Llms-Txt:` line | Directive found / Directive missing |
| Content-Type header | Check response headers for `text/plain` | Correct / Incorrect |
| File matches generated | Compare deployed file hash against generated file hash | Match / Mismatch (stale deployment) |

Show a deployment score: 5/5 = "Fully deployed", 3/5 = "Partially deployed — complete steps X and Y"

**3. Generated robots.txt Snippet**

Dynamically generate the correct robots.txt addition based on the user's domain:

```
# LLM-readable content
Llms-Txt: https://example.com/llms.txt
```

**4. Generated HTML Tag**

Provide the exact tag with correct formatting:

```html
<!-- Add this to the <head> section of every page -->
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable version">
```

**5. Platform-Specific Deployment Guides**

Provide step-by-step instructions for common platforms:

| Platform | How to upload file | How to add HTML tag | How to edit robots.txt |
|----------|-------------------|--------------------|-----------------------|
| **WordPress** | Upload via Media Library or FTP to root | Add to theme's `header.php` or use plugin (Yoast, RankMath) | Edit via Yoast SEO or direct file edit |
| **Shopify** | Upload via Settings > Files, add redirect | Edit theme's `theme.liquid` | Not directly editable — use app or redirect |
| **Squarespace** | Upload via Settings > Advanced > Custom Files | Add via Settings > Advanced > Code Injection (Header) | Partially editable via Settings > SEO |
| **Wix** | Upload via Site Files | Add via Settings > Custom Code (Head) | Editable via SEO > robots.txt Editor |
| **Webflow** | Upload via Assets panel | Add via Project Settings > Custom Code (Head) | Editable via SEO > robots.txt |
| **Static/Custom** | Upload to web root via FTP/deploy | Add `<link>` tag to HTML `<head>` | Edit robots.txt directly |
| **Next.js** | Add to `/public/llms.txt` | Add to `_document.tsx` or layout `<head>` | Add to `/public/robots.txt` or use `next-sitemap` |

**Acceptance criteria**:
- Deployment panel appears immediately after file generation (not hidden in docs)
- All code snippets have one-click copy buttons
- Verification checker confirms deployment within 10 seconds
- Platform-specific guides cover top 6 website platforms
- Deployment score visible in user's dashboard (if logged in)
- Users who complete all 3 steps show as "Fully Deployed" vs "File Only"

**Why this matters for the benchmark**:
The benchmark likely evaluates not just whether LLM.txt Mastery can generate a file, but whether it provides a complete deployment solution. Competitors score low (1.5–2.7) because they also stop at file generation. Providing the full discovery + deployment + verification loop would be a significant differentiator and directly improve the llms.txt Excellence score.

---

### Change LT-3: Drift Monitoring

**Benchmark dimensions**: llms.txt Generation (7.5→8.0), AI Search Analytics Depth (6.4→7.0)
**Weighted impact**: 0.030
**Priority**: MEDIUM
**Dependency**: LT-1, LT-2, persistent data storage
**Tier**: Growth (via AImpactScanner Growth subscription)

**What to build**:

Automated weekly comparison between a site's live content and its deployed llms.txt file:

- **Crawl site content** weekly on a schedule
- **Compare** against current llms.txt
- **Detect drift**:
  - New pages not listed in llms.txt
  - Removed pages still listed
  - Significantly changed content (title changes, major content updates)
  - New sections/products not reflected
- **Alert** via email when drift exceeds configurable threshold (default: 3 changes)
- **Auto-suggest** regeneration with a diff preview showing what would change
- **Track** compliance score over time (chart showing weekly scores)

**Acceptance criteria**:
- Weekly crawl runs reliably without manual intervention
- Drift detection catches at least: new pages, removed pages, title changes
- Email alerts are clear and actionable (not just "drift detected" — show what changed)
- Compliance score history visible in dashboard (minimum 12 weeks)
- One-click regeneration from drift alert

---

### Change LT-4: Domain-Level Housekeeping

**Priority**: HIGH (quick win, do immediately)

| Task | Details |
|------|---------|
| Create `/llms.txt` file for llmtxtmastery.com itself | Describe the tool: validator, generator, formats, spec reference, API endpoints |
| Create `/llms-full.txt` file | Full documentation in markdown |
| Update `robots.txt` | Add `Llms-Txt: /llms.txt` directive |
| Add `<link>` tag to HTML `<head>` | `<link rel="alternate" type="text/plain" href="/llms.txt">` on all pages |
| Add footer link to aisearchmastery.com | Cross-property linking |

---

## Product 3: AImpactMonitor

**Domain**: TBD (likely monitor.aimpactscanner.com or aimpactmonitor.com)
**Current status**: Coming soon — early access signup exists on aisearchmastery.com/products
**Core problem**: This product doesn't exist yet. It addresses the #1 benchmark gap (ROI Attribution, score 4.3) and the analytics depth gap (6.4). This is the hardest product to build but has the highest ceiling impact.

### Change AM-1: Citation Tracking Across AI Platforms

**Benchmark dimensions**: ROI Attribution (4.3→6.5), AI Search Analytics Depth (6.4→8.0)
**Combined weighted impact**: 0.222 (highest of any single initiative)
**Priority**: HIGH (but large effort — Phase 4)
**Dependency**: API infrastructure, persistent storage, user accounts

**What to build**:

Track when and how a brand/domain is cited by AI platforms:

| Platform | Tracking Method | Data Captured |
|----------|----------------|---------------|
| ChatGPT | Periodic query sampling for user's target keywords | Citation yes/no, position in response, context quote, sentiment |
| Perplexity | Same approach + Perplexity's citation links | Citation + source link, position, context |
| Claude | Periodic query sampling | Citation yes/no, context, sentiment |
| Gemini | Periodic query sampling | Citation yes/no, context, sentiment |
| Microsoft Copilot | Periodic query sampling | Citation yes/no, context, sentiment |

**Dashboard requirements**:
- **Citation volume** — total citations found per day/week/month
- **Platform breakdown** — which AI platforms cite you most
- **Trend line** — citation volume over time
- **Query map** — which queries trigger citations (grouped by topic)
- **Sentiment** — are citations positive, neutral, or negative?
- **Accuracy** — is the cited information correct? (flag inaccuracies for user review)
- **Alert** — email when new citation pattern detected (new keyword triggering citations, or citations stopping)

**Acceptance criteria**:
- Tracking operational on minimum 3 AI platforms at launch
- Dashboard updates at least daily
- Historical data retained minimum 90 days
- Alerts configurable (frequency, threshold)
- Export to CSV/PDF

---

### Change AM-2: ROI Attribution Framework

**Benchmark dimensions**: ROI Attribution (6.5→7.5)
**Weighted impact**: 0.074
**Priority**: HIGH
**Dependency**: AM-1 (citation data), analytics integration (GA or Plausible)

**What to build**:

Connect AI citations to measurable business outcomes:

| Attribution Layer | Data Source | Output |
|-------------------|------------|--------|
| **Citations → Traffic** | Compare citation data (AM-1) with website traffic from analytics. Track referral patterns from AI platforms, direct traffic spikes correlating with citation events | "Estimated AI-referred visits: X/month" |
| **Traffic → Conversions** | Connect to user's conversion tracking (form fills, purchases, signups) | "AI-attributed conversions: X/month" |
| **Conversions → Revenue** | User inputs average deal value or connects payment data | "Estimated AI-attributed revenue: $X/month" |

**ROI Dashboard**:
- Monthly AI Search ROI summary card
- Trend chart: AI-attributed revenue over time
- ROI calculator: "Your AImpactScanner subscription costs $14.95/mo. Your AI-attributed revenue is $X/mo. ROI: X%"
- Exportable monthly report (PDF) suitable for stakeholder presentations

**Important note**: Even an approximate/estimated model is valuable. Competitors score 4.3–6.2 on this dimension. You don't need perfect attribution — you need a credible, transparent methodology that gives users something actionable. Be clear about confidence levels (e.g., "high confidence", "estimated", "directional").

**Acceptance criteria**:
- ROI figure calculated and displayed in dashboard
- Methodology documented and transparent (users can see how the number is derived)
- Monthly PDF report exportable
- Works with at least Google Analytics and Plausible analytics

---

### Change AM-3: Competitive Citation Intelligence

**Benchmark dimensions**: AI Search Analytics Depth (8.0→8.5)
**Weighted impact**: 0.015
**Priority**: LOW (premium feature, Phase 4+)
**Dependency**: AM-1

**What to build**:
- Track competitor domain citations alongside user's own
- **Share of voice**: for target keywords, what % of AI responses cite you vs competitors?
- **Gap analysis**: queries where competitors are cited but you are not
- **Opportunity report**: "You could be cited for these queries based on your content"

**Acceptance criteria**:
- Track up to 5 competitor domains
- Share of voice calculation per keyword group
- Weekly competitive intelligence email digest

---

## Shared Infrastructure: Public API

**This affects ALL products.** The API is what transforms the ecosystem from separate tools into a platform.

**Benchmark dimensions**: API Quality (4.4→7.0), Integration Ecosystem (5.2→7.5)
**Combined weighted impact**: 0.208
**Priority**: HIGH (Phase 3 — needed before integrations)

### API-1: REST API v1

**Endpoints needed**:

| Endpoint | Product | Description |
|----------|---------|-------------|
| `POST /api/v1/scan` | AImpactScanner | Submit URL for scanning, returns job ID |
| `GET /api/v1/scan/{id}` | AImpactScanner | Retrieve scan results (27 factors, scores, action items) |
| `GET /api/v1/scan/{id}/actions` | AImpactScanner | Get prioritised action list for a scan |
| `POST /api/v1/llmstxt/validate` | LLM.txt Mastery | Validate llms.txt content, return compliance score |
| `POST /api/v1/llmstxt/generate` | LLM.txt Mastery | Generate llms.txt from URL |
| `GET /api/v1/llmstxt/generate/{id}` | LLM.txt Mastery | Retrieve generated files (all 3 formats) |
| `POST /api/v1/schema/generate` | AImpactScanner | Generate schema markup for URL |
| `GET /api/v1/monitor/citations` | AImpactMonitor | Get citation data for authenticated user |
| `GET /api/v1/monitor/roi` | AImpactMonitor | Get ROI attribution summary |

**Authentication**: API keys issued per user account. Usage tiers:

| Tier | Rate Limit | Access |
|------|-----------|--------|
| Free | 10 calls/day | Scan, validate only |
| Growth ($14.95/mo) | 1,000 calls/day | All endpoints |
| Enterprise (future) | 10,000 calls/day | All endpoints + priority |

**Requirements**:
- OpenAPI 3.0 specification published
- Interactive API documentation (Swagger UI or similar)
- Code examples in Python, JavaScript, and cURL
- Rate limiting with clear `X-RateLimit-*` response headers
- HMAC-signed webhook support (see API-2)
- Versioned URLs (`/api/v1/`)

### API-2: Webhooks

| Event | Payload |
|-------|---------|
| `scan.complete` | Scan ID, scores, summary |
| `llmstxt.drift_detected` | Domain, drift details, suggested changes |
| `monitor.citation_found` | Platform, query, context, sentiment |
| `monitor.citation_lost` | Platform, query that no longer cites |

Requirements: HMAC signature verification, retry with exponential backoff, webhook management UI.

### API-3: Integrations (Phase 4)

Build these in priority order:

| Integration | Effort | Why |
|-------------|--------|-----|
| **Zapier** | Medium | Enables 5,000+ integrations without custom dev. Triggers: scan complete, drift detected, citation found. Actions: start scan, validate llms.txt |
| **Slack** | Small | Alert channel for score changes, drift, new citations |
| **WordPress plugin** | Medium | Huge addressable market. One-click scan, schema insertion, llms.txt deployment |
| **Google Search Console** | Medium | Import organic search data alongside AI search data for complete picture |
| **Google Analytics** | Medium | Required for ROI attribution (AM-2) |
| **GitHub Action** | Small | Validate llms.txt on every deploy, run AI visibility scan on staging |

---

## Implementation Priority Matrix

Each product team should use this to sequence their work:

### Suggested Phasing

| Phase | Timeline | AImpactScanner | LLM.txt Mastery | AImpactMonitor | Shared |
|-------|----------|---------------|-----------------|----------------|--------|
| **1** | Weeks 1-3 | AS-5 (housekeeping) | LT-4 (housekeeping) | — | — |
| **2** | Weeks 4-8 | AS-1 (action lists), AS-2 (schema engine) | LT-1 (deep validation), LT-2 (multi-format), LT-2B (deployment guidance) | — | — |
| **3** | Weeks 9-14 | AS-3 (readability scoring) | LT-3 (drift monitoring) | — | API-1 (REST API v1), API-2 (webhooks) |
| **4** | Weeks 15-22 | AS-4 (competitive benchmarking) | — | AM-1 (citations), AM-2 (ROI), AM-3 (competitive intel) | API-3 (integrations) |

### Expected Score Progression

| After Phase | Composite Score | Rank | Key Unlock |
|-------------|----------------|------|------------|
| Phase 1 | 7.1 | #5 | Schema + llms.txt quick wins |
| Phase 2 | 7.35 | #4 | Prescriptive scanner + llms.txt moat |
| Phase 3 | 7.55 | #3 | Platform (API) |
| Phase 4 | 7.8+ | #2 | ROI attribution + integrations |

---

## Key Strategic Notes

1. **llms.txt is our moat.** Nobody scores above 3.1. We own the tooling. Pushing to 8.0 creates a 5+ point lead on this dimension that competitors cannot easily close. Prioritise LT-1 and LT-2.

2. **"Fix This" is the highest-leverage scanner change.** Transforming AImpactScanner from diagnostic to prescriptive moves two dimensions at once and directly improves user outcomes.

3. **ROI Attribution is the hardest problem** but has the biggest weighted gap (0.222). Even an approximate model that shows "AI search drove ~X visits and ~$Y revenue" puts us ahead of most competitors. Don't over-engineer — a transparent estimate is better than nothing.

4. **The API unlocks everything.** Integrations, webhooks, competitive intel, and third-party adoption all depend on API-1. Architect it early (Phase 2) even if it ships in Phase 3.

5. **Pricing alignment needed immediately.** The aisearchmastery.com products page shows $19.95/mo — confirmed price is $14.95/mo. This is a trust issue that affects benchmark credibility scores.

---

## Questions for Each Team

**AImpactScanner team**: What's the current scan results data model? Can action items be added to the existing results structure, or does it need a new schema?

**LLM.txt Mastery team**: What's the current validator checking? We need a gap analysis between current checks and the full spec compliance list in LT-1.

**AImpactMonitor team**: What's the planned tech stack? The citation tracking approach (periodic query sampling) needs infrastructure decisions around scheduling, storage, and API platform access.

**All teams**: Where should the shared API layer live? Options: extend each product's existing backend, or create a unified API gateway that routes to each product's service.
