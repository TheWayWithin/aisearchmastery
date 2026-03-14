# Sprint 2: Ecosystem Alignment — Diagnose → Optimize → Monitor

**Date:** 2026-03-14
**Property:** aisearchmastery.com
**Status:** COMPLETE
**Vision:** Align site messaging with the 3-step ecosystem loop (Diagnose → Optimize → Monitor) already live on aimpactscanner.com, preparing for the unified AI Search Mastery dashboard.

---

## Problem

The site has no clear ecosystem narrative. The three tools are presented as separate products rather than steps in a coherent loop. The loop terminology is inconsistent across pages:

| Location | Current Text |
|----------|-------------|
| Homepage h2 | "Diagnose. Optimise. Repeat." |
| Products callout | "Diagnose-Optimize-Test-Repeat" |
| AImpactMonitor tagline | "Diagnose → Optimize → Track → Remediate" |
| aimpactscanner.com (reference) | "Diagnose → Optimize → Monitor" |

Additionally:
- Homepage products section shows only 2 cards (no AImpactMonitor)
- No ecosystem overview section on products page
- No clear mapping of Step → Tool anywhere on the site

---

## Changes Required

### 1. Standardize loop terminology

**Canonical loop:** Diagnose → Optimize → Monitor

This maps directly to the three tools:
- **Step 1: Diagnose** → AImpactScanner
- **Step 2: Optimize** → LLM.txt Mastery
- **Step 3: Monitor** → AImpactMonitor

Replace all variant loop names with this canonical version.

**Files to update:**
- `index.html` — h2 "Diagnose. Optimise. Repeat." → ecosystem framing
- `products.html` — callout "Diagnose-Optimize-Test-Repeat" → "Diagnose → Optimize → Monitor"
- `products.html` — AImpactMonitor tagline "Diagnose → Optimize → Track → Remediate" → "Diagnose → Optimize → Monitor"

### 2. Add ecosystem section to products page

Add a visual 3-step ecosystem overview near the top of the products page (after the intro, before individual products). Should clearly show:

```
The AI Search Mastery Ecosystem

Diagnose → Optimize → Monitor
Three tools that work together to improve how AI search engines understand and recommend your content.

Step 1: Diagnose          Step 2: Optimize              Step 3: Monitor
AImpactScanner            LLM.txt Mastery               AImpactMonitor (Coming Soon)
[brief description]       [brief description]           [brief description]
[CTA]                     [CTA]                         [Early access signup]
```

This mirrors the section already live on aimpactscanner.com.

### 3. Update homepage products section

Current: 2-column grid with AImpactScanner + LLM.txt Mastery
Change to: 3-column grid adding AImpactMonitor (Coming Soon)

- Update h2 to reference the ecosystem loop
- Add AImpactMonitor card with `badge--amber` "Coming Soon" badge
- Link to `/products#aimpactmonitor`

### 4. Update products page intro

**Current:**
> "Diagnose and Fix Your AI Visibility"
> "AI search is replacing traditional search for millions of people. If AI can't read your website, it can't recommend your business. One subscription gives you a complete diagnosis and the tools to fix it."

**New:** Should reference the ecosystem and the 3-step loop. Headline could be:
> "The AI Search Mastery Ecosystem"
> "Three tools that work together: diagnose your AI visibility, optimize what AI models read, and monitor how they cite you."

### 5. Update Growth callout on products page

**Current:**
> "AImpactScanner Growth ($19.95/mo) includes full LLM.txt Mastery Growth features (worth $9.95/mo) — the complete Diagnose-Optimize-Test-Repeat loop in one subscription."

**New:** Update loop name and hint at unified direction:
> "AImpactScanner Growth ($19.95/mo) includes full LLM.txt Mastery Growth features (worth $9.95/mo) — diagnosis and optimization in one subscription. Full ecosystem pricing coming with AImpactMonitor launch."

### 6. Update llms-full.txt

Add ecosystem narrative to the products section of llms-full.txt so AI models understand the tool relationship.

### 7. Update llms.txt

Ensure the ecosystem framing is present in the summary llms.txt file.

---

## Out of Scope (Future Sprints)

- Unified dashboard pricing (Solo $25, Growth $50, Scale $100) — TBD, not ready to publish
- Unified dashboard product page — depends on AImpactMonitor MVP + APIs
- Changes to aimpactscanner.com or llmtxtmastery.com (separate properties)

---

## Success Criteria

- [ ] Loop terminology is consistently "Diagnose → Optimize → Monitor" across all pages
- [ ] Products page has ecosystem overview section mapping Step → Tool
- [ ] Homepage shows all 3 tools in the products grid
- [ ] Products page intro references the ecosystem
- [ ] No stale loop variants remain ("Test-Repeat", "Track-Remediate", etc.)
- [ ] llms.txt and llms-full.txt include ecosystem narrative

---

## Files Expected to Change

| File | Changes |
|------|---------|
| `index.html` | Products section: 3-column grid, ecosystem heading, AImpactMonitor card |
| `products.html` | Ecosystem overview section, updated intro, updated callout, updated loop refs |
| `llms.txt` | Ecosystem narrative |
| `llms-full.txt` | Ecosystem narrative in products section |
| `css/styles.css` | 3-column grid on homepage if needed (may already support via grid--cols-3) |
