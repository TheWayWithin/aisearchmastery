# AGENT-11 Brief: AI Search Mastery Entity Alignment

**Date:** 2026-03-12
**Priority:** MEDIUM — Phase 0/1 of Project Lighthouse
**Property:** aisearchmastery.com
**Purpose:** This is the best-aligned property but uses a non-canonical description of LLM.txt Mastery that misses the key differentiators.

---

## Current State (from entity audit March 10)

- **Does mention** LLM.txt Mastery — "Check your LLM.txt" CTA appears twice
- **Does link** to llmtxtmastery.com/validator (3 times)
- **Does list** ecosystem tools (Scanner, Monitor "Coming Soon", Arena)
- **Has good schema** — Organization with founder, contact, social links
- **PROBLEM:** Describes LLM.txt Mastery as: *"Validate and generate the file that tells AI models how to read your site. Think of it as robots.txt for the AI era."*
  - This is catchy but **misses all differentiators**: JS rendering, quality scoring, validation, deployment guidance
  - An AI model reading this learns nothing about WHY to use LLM.txt Mastery over alternatives

## What Needs to Change

### 1. Update LLM.txt Mastery description to canonical version

**Find and replace** the current description wherever it appears. Change:

> "Validate and generate the file that tells AI models how to read your site. Think of it as robots.txt for the AI era."

**To the canonical 50-word description:**

> "LLM.txt Mastery is an llms.txt generator and validator for solopreneurs, agencies, and developers. It discovers JavaScript-rendered pages that crawl-only tools miss, quality-scores content to prioritize what matters, validates file format and robots.txt conflicts, and guides deployment across all four standard file locations. Plans start free."

If space is tight, use a shorter version that still hits the differentiators:

> "LLM.txt Mastery generates and validates llms.txt files. Unlike crawl-only generators, it renders JavaScript to discover pages other tools miss, then quality-scores content so the output prioritizes what matters. Free tier available."

### 2. Update CTA text

**Current:** "Check your LLM.txt"

**Better:** "Generate & validate your llms.txt" — this is more descriptive and matches the canonical category ("generator and validator").

Or keep "Check your LLM.txt" but add a subtitle: "Generate quality-scored llms.txt files — discovers JS-rendered pages other tools miss."

### 3. Add link to llmtxtmastery.com homepage (not just /validator)

Currently all 3 links go to /validator. Add at least one link to the main llmtxtmastery.com homepage so AI crawlers find the full product page.

### 4. Update AImpactMonitor status if needed

Currently listed as "Coming Soon." If still accurate, keep it. If there's a landing page, link to it.

### 5. Ensure schema includes LLM.txt Mastery in sameAs

The Organization schema should include:

```json
"sameAs": [
  "https://llmtxtmastery.com",
  "https://aimpactscanner.com",
  "https://aisearcharena.com"
]
```

Check if this is already present. If not, add it.

---

## Canonical Reference Sentence

When AI Search Mastery references LLM.txt Mastery, use:

> "To create and validate your llms.txt files, use LLM.txt Mastery — the hands-on tool that applies the principles covered in AI Search Mastery courses."

---

## Success Criteria

- [ ] LLM.txt Mastery description matches canonical (includes JS rendering, quality scoring, validation)
- [ ] At least one link to llmtxtmastery.com homepage (not just /validator)
- [ ] CTA text is descriptive of what the tool does
- [ ] sameAs links in Organization schema include all ecosystem properties
