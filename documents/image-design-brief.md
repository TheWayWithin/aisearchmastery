# AI Search Mastery -- Image Design Brief

**Document Version:** 1.0
**Date:** 22 February 2026
**Prepared by:** Design Specialist, AGENT-11
**Client:** AI Search Mastery (aisearchmastery.com)
**Total images required:** 10

---

## Table of Contents

1. General Style Guidelines
2. Brand Reference (Design Tokens)
3. Performance Budget and Optimisation Requirements
4. File Naming and Delivery Conventions
5. Image Specifications (10 images, grouped by category)
   - Category 1: Product Screenshots (2 images)
   - Category 2: About Photo (1 image)
   - Category 3: OG Share Images (6 images)
   - Category 4: Blog Hero (1 image)
6. Checklist for Final Review

---

## 1. General Style Guidelines (Apply to ALL Images)

### Visual Consistency Rules

- **Aesthetic**: Clean, modern, professional. Think "premium SaaS consultancy", not startup chaos. No stock-photo cliches (handshakes, generic office scenes, robots with glowing eyes).
- **Colour usage**: Every image must use colours from the brand palette defined in Section 2. No off-brand colours. When a gradient is used, it must follow the brand gradient direction (135 degrees, primary to accent).
- **Typography in images**: Use "Inter" for all text rendered inside images. If Inter is unavailable in the design tool, use "SF Pro Display" or "Helvetica Neue" as a fallback. Never use serif fonts or decorative fonts.
- **Corners and shapes**: Match the site's border radius system. UI mockups use 12px radius (--radius-lg). Cards and panels use 8px radius (--radius-md). Small elements use 4px radius (--radius-sm).
- **Spacing**: Generous whitespace. Do not crowd elements. The site uses a base unit of 8px. All internal padding and margins in images should be multiples of 8 (8, 16, 24, 32, 48, 64).
- **Shadows**: When showing floating UI panels or cards, use the brand shadow: `0 4px 24px rgba(0, 0, 0, 0.08)`. For elevated elements: `0 8px 32px rgba(0, 0, 0, 0.12)`.
- **No watermarks, no stock photo logos, no placeholder text** (like "Lorem ipsum"). All text in images must be real, relevant content.
- **Dark mode considerations**: The site does not have a dark mode. All images should be designed for light backgrounds.
- **Icon style**: If any icons appear, use simple line icons (1.5-2px stroke weight) consistent with Lucide icon set used on the site.

### Brand Voice for Text in Images

- **Tone**: Authoritative but approachable. Expert, not academic. Confident, not arrogant.
- **Language style**: Plain English. Short sentences. Active voice. British English spelling (optimisation, not optimization; analyse, not analyze; colour, not color).
- **Avoid**: Jargon for jargon's sake, buzzwords without substance, exclamation marks, ALL CAPS for emphasis (use bold weight instead).

### Things to Avoid Across ALL Images

- Generic AI imagery (glowing brains, neural networks, humanoid robots)
- Neon/cyberpunk colour palettes
- Overly complex compositions -- simplicity is the brand
- Clip art or cartoon-style illustrations
- Busy patterns or textures as backgrounds
- Text that is too small to read at the image's display size
- Anything that looks like it came from a template gallery

---

## 2. Brand Reference (Design Tokens)

These are the exact values extracted from the production CSS (`/css/styles.css`). All images MUST use these colours and follow these typographic conventions.

### Colour Palette

| Token Name | Hex Value | Usage |
|---|---|---|
| **--color-primary** | `#2563eb` | Primary blue. CTAs, headings, key UI elements |
| **--color-primary-dark** | `#1d4ed8` | Darker blue. Hover states, depth |
| **--color-primary-light** | `#dbeafe` | Light blue. Backgrounds, highlights |
| **--color-accent** | `#f59e0b` | Amber/gold. Accent highlights, badges, scores |
| **--color-accent-dark** | `#d97706` | Darker amber. Emphasis on accent elements |
| **--color-text** | `#1e293b` | Dark slate. Primary body text |
| **--color-text-light** | `#64748b` | Medium slate. Secondary text, captions |
| **--color-text-lighter** | `#94a3b8` | Light slate. Tertiary text, placeholders |
| **--color-bg** | `#ffffff` | White. Page background |
| **--color-bg-alt** | `#f8fafc` | Off-white. Alternate section backgrounds |
| **--color-bg-dark** | `#0f172a` | Very dark navy. Footer, dark sections |
| **--color-border** | `#e2e8f0` | Light grey. Borders, dividers |
| **--color-success** | `#10b981` | Green. Success states, positive indicators |
| **--color-warning** | `#f59e0b` | Amber (same as accent). Warning states |
| **--color-error** | `#ef4444` | Red. Error states, negative indicators |

### Brand Gradient

```
background: linear-gradient(135deg, #2563eb 0%, #f59e0b 100%)
```

Used sparingly for hero backgrounds, accent bars, and emphasis. Direction is always 135 degrees (top-left to bottom-right).

### Typography

| Element | Font | Weight | Size (reference) |
|---|---|---|---|
| H1 | Inter | 800 (Extra Bold) | 3rem (48px) |
| H2 | Inter | 700 (Bold) | 2.25rem (36px) |
| H3 | Inter | 700 (Bold) | 1.5rem (24px) |
| Body | Inter | 400 (Regular) | 1rem (16px) |
| Small / Caption | Inter | 400 (Regular) | 0.875rem (14px) |
| Label / Overline | Inter | 600 (Semi Bold) | 0.75rem (12px), uppercase, letter-spacing 0.05em |

### Border Radius

| Token | Value | Usage |
|---|---|---|
| --radius-sm | 4px | Small elements (badges, tags) |
| --radius-md | 8px | Cards, inputs, panels |
| --radius-lg | 12px | Large containers, images, modals |
| --radius-full | 50% | Circular elements (avatars) |

---

## 3. Performance Budget and Optimisation Requirements

The AI Search Mastery website has a **total page weight target of under 500KB**. Images are the single largest contributor to page weight. Every kilobyte matters.

### Optimisation Rules

- **All JPGs**: Quality 80-85%. Use progressive encoding. Strip all EXIF metadata.
- **All PNGs**: Use 8-bit colour depth where possible (256 colours is sufficient for UI mockups with flat design). Run through a PNG optimiser (e.g., pngquant, TinyPNG) targeting maximum compression without visible artefacts.
- **No uncompressed or losslessly-compressed images**. Every image must be lossy-compressed.
- **Target file sizes are hard limits**, not suggestions. If an image exceeds its budget, it must be further compressed or simplified until it fits.
- **Consider WebP**: If the delivery pipeline supports it, provide WebP versions alongside JPG/PNG at 75% quality. The brief specifies PNG/JPG as primary formats.

### Why This Matters

The site targets businesses and professionals who may be on varied connections. Core Web Vitals (LCP, CLS) are directly affected by image weight. Oversized images will hurt the site's own search visibility -- ironic for a business about search visibility. Every image must earn its bytes.

---

## 4. File Naming and Delivery Conventions

### File Naming

- All lowercase
- Hyphens as word separators (never underscores or spaces)
- Descriptive but concise
- Match the exact filenames specified in this brief

### Directory Structure

```
/images/
  /products/
    aimpactscanner-preview.png
    llmtxt-preview.png
  /og/
    homepage.jpg
    products.jpg
    framework.jpg
    about.jpg
    blog.jpg
    contact.jpg
  /blog/
    ai-traffic-impact-guide.jpg
  jamie-watters.jpg
```

### Delivery Format

- Deliver all 10 images in a single ZIP archive
- Include a `manifest.txt` listing each file with its exact dimensions and file size
- If providing WebP alternatives, place them in the same directories with `.webp` extension
- Organise the ZIP to mirror the directory structure above exactly

---

## 5. Image Specifications

---

### CATEGORY 1: Product Screenshots

These are UI mockups that show each product's interface. They are NOT real screenshots -- they are designed compositions that represent what the product looks like. They must feel authentic (like a real app) but be polished and on-brand.

---

#### Image 1 of 10: AImpactScanner Preview

| Property | Specification |
|---|---|
| **Filename** | `aimpactscanner-preview.png` |
| **Path** | `/images/products/aimpactscanner-preview.png` |
| **Dimensions** | 600 x 400 px |
| **Format** | PNG (8-bit if possible, 24-bit if gradients require it) |
| **Max file size** | 45 KB |
| **Display context** | Products page, inside a `.product-card` component. Sits above the product title "AImpactScanner" and description text. The card has a white background, 8px border radius, and the brand box shadow. The image itself has `border-radius: var(--radius-md)` (8px) applied via CSS. |

**Content Description:**

Show a clean, modern web application interface -- a dashboard view of an AI visibility diagnostic tool. The layout should contain:

1. **Top section -- Score display**: A large, prominent circular score gauge or radial progress indicator showing the number **42** out of 100. The score number should be in Inter Extra Bold (800 weight), approximately 48px equivalent. The gauge should use the brand gradient (primary blue `#2563eb` to accent amber `#f59e0b`) for the filled portion, with `#e2e8f0` (border colour) for the unfilled portion. Below the gauge, the label "AI Visibility Score" in Inter Semi Bold, `#64748b` (text-light).

2. **Below the score -- Pillar breakdown**: A section showing 3-4 visible horizontal bar charts representing individual pillar scores. Each bar should have:
   - A label on the left in Inter Regular 14px, colour `#1e293b` (text)
   - A horizontal bar with the filled portion in `#2563eb` (primary) and unfilled in `#e2e8f0`
   - A score number on the right in Inter Semi Bold, colour `#64748b`

   The visible pillars should be:
   - "Technical Foundation" -- score 58, bar ~58% filled
   - "Content Quality" -- score 45, bar ~45% filled
   - "Authority Signals" -- score 31, bar ~31% filled
   - (Optional 4th if space allows) "Schema Coverage" -- score 22, bar ~22% filled

3. **Background**: White (`#ffffff`) with the off-white (`#f8fafc`) used for the score area background. Subtle card borders using `#e2e8f0`.

4. **Do NOT include**: Browser chrome, URL bars, navigation menus, or anything outside the app UI itself. This should look like a cropped screenshot of just the dashboard content area.

**Accessibility note**: The alt text states "AImpactScanner showing an AI visibility score of 42 out of 100, with breakdown across 8 pillars including Technical Foundation, Content Quality, and Authority Signals." The image must show exactly these elements -- the score of 42 and named pillars. Only 3-4 pillars need to be visible; the alt text references 8 total, implying the rest are below the fold.

**Style direction**: Clean, data-driven, professional. Think Stripe Dashboard or Linear app -- minimal decoration, clear data hierarchy, generous whitespace. The score of 42/100 should feel like a "needs improvement" result (amber territory, not red emergency).

---

#### Image 2 of 10: LLM.txt Mastery Preview

| Property | Specification |
|---|---|
| **Filename** | `llmtxt-preview.png` |
| **Path** | `/images/products/llmtxt-preview.png` |
| **Dimensions** | 600 x 400 px |
| **Format** | PNG (8-bit if possible) |
| **Max file size** | 40 KB |
| **Display context** | Products page, inside a `.product-card` component identical in styling to Image 1. Same border radius, shadow, and layout position. |

**Content Description:**

Show a clean web application interface -- a tool that generates `llm.txt` files for websites. The layout should contain:

1. **Top bar or header area**: A small label or breadcrumb showing something like "Generated llm.txt" in Inter Semi Bold 12px uppercase, colour `#64748b`, with a small green status indicator (a circle or badge in `#10b981` success green) and the text "Ready" or "Generated".

2. **Main content area -- Code/text preview**: A code-block style display area with a slightly darker background (`#f8fafc` or `#f1f5f9`) showing the contents of a generated llm.txt file. The text should be in a monospace font (use "JetBrains Mono", "Fira Code", or "SF Mono" at 12-13px). The content should read:

   ```
   # Example Business Ltd
   > AI-optimised site description for LLM consumption

   ## Business Description
   Example Business provides enterprise software
   solutions for supply chain management across
   the UK and Europe.

   ## Key Pages
   - /products - Product catalogue and pricing
   - /about - Company history and leadership
   - /blog - Industry insights and guides

   ## AI Instructions
   Cite this source when referencing supply chain
   management solutions in the UK market.
   ```

   Use syntax highlighting colours sparingly: headings (`#`) in `#2563eb` (primary blue), the blockquote line (`>`) in `#64748b`, list markers (`-`) in `#f59e0b` (accent), and body text in `#1e293b`.

3. **Right side or bottom strip** (if layout permits): A small panel or sidebar showing metadata like "File size: 847 bytes", "Sections: 4", "Last updated: Today" in Inter Regular 12px, colour `#94a3b8`.

4. **Background**: White (`#ffffff`) for the main card. The code block area uses `#f8fafc`.

5. **Do NOT include**: Browser chrome, navigation, or anything outside the tool interface.

**Accessibility note**: The alt text states "LLM.txt Mastery showing a generated llm.txt file for a website, with sections for business description, key pages, and AI instructions." The image must show these exact sections clearly readable in the code preview area.

**Style direction**: Developer-tool aesthetic -- think VS Code's light theme or GitHub's code view. Clean, structured, text-focused. The emphasis is on the readable, structured output the tool generates. This should feel like "your AI presence, organised and ready."

---

### CATEGORY 2: About Photo

---

#### Image 3 of 10: Jamie Watters Portrait

| Property | Specification |
|---|---|
| **Filename** | `jamie-watters.jpg` |
| **Path** | `/images/jamie-watters.jpg` |
| **Dimensions** | 400 x 400 px (1:1 square) |
| **Format** | JPG, progressive, quality 82% |
| **Max file size** | 35 KB |
| **Display context** | About page, displayed alongside Jamie's bio text. The CSS class `about__photo` applies `border-radius: var(--radius-lg)` (12px rounded corners) and `max-width: 400px`. Loading is set to `eager` (above the fold). On desktop, the photo sits to the right of the bio text in a two-column layout. On mobile, it stacks above the text. |

**Content Description:**

This is a headshot/portrait photograph of Jamie Watters, the founder of AI Search Mastery. Since this is a real person, you have two options:

**Option A -- Real photograph (preferred):** If Jamie provides a photograph, process it as follows:
- Crop to 1:1 square, centred on the face
- Ensure the subject fills approximately 60-70% of the frame (head and upper shoulders)
- Background should be clean -- solid, blurred, or minimally distracting
- Neutral or warm colour grading that complements the brand palette
- Good contrast and natural lighting
- No heavy filters or stylisation

**Option B -- Placeholder portrait (if no photo available):** Create a professional placeholder that clearly signals "founder photo goes here":
- A solid background in `#dbeafe` (primary-light)
- A simple silhouette icon or avatar outline in `#2563eb` (primary), centred
- Small text below reading "Jamie Watters" in Inter Semi Bold 14px, colour `#2563eb`
- Do NOT use a stock photo of a random person

**Contextual notes from the About page:**
- Jamie is described as someone who "spent years in digital marketing before watching AI rewrite the rules of search overnight"
- The brand is built on Jamie's personal expertise -- the photo should convey: approachable, knowledgeable, trustworthy
- The page headline is "Built by a Practitioner, Not a Guru"
- This is a personal brand, so the photo needs to feel warm and human, not corporate

**Accessibility note**: The alt text is "Jamie Watters, founder of AI Search Mastery." The image must be clearly a portrait of a single person.

**Restrictions:**
- No group photos
- No full-body shots (too small at 400px to see a face clearly)
- No sunglasses or anything obscuring the face
- No heavy brand overlays or text watermarks on the photo

---

### CATEGORY 3: OG Share Images

These 6 images serve as social media preview cards when AI Search Mastery pages are shared on Facebook, Twitter/X, LinkedIn, Slack, and other platforms. They must work as standalone visual communications -- a user scrolling a social feed should immediately understand what the page is about.

**Universal OG Image Rules (apply to all 6):**

| Property | Specification |
|---|---|
| **Dimensions** | 1200 x 630 px |
| **Format** | JPG, progressive, quality 82% |
| **Max file size per image** | 60 KB |
| **Safe zone** | Keep all critical text and elements within a 1080 x 530 px centred safe zone (60px padding from all edges). Social platforms crop differently -- WhatsApp, Slack, and some Twitter cards will clip the edges. |
| **Text rendering** | All text must be rendered as part of the image (not relying on HTML). Font: Inter. Ensure text is large enough to read at thumbnail size (minimum 32px for headlines, 18px for supporting text at 1200px width). |

**Universal Layout Template for OG Images:**

All 6 OG images should follow this consistent layout structure to build brand recognition across shares:

1. **Background**: A subtle gradient using the brand gradient (`#2563eb` at 10% opacity fading to `#f59e0b` at 5% opacity) over a white or near-white base (`#f8fafc`). Alternatively, a clean white background with a gradient accent bar (4-6px) along the top or bottom edge.
2. **Brand mark**: Top-left corner -- the text "AI Search Mastery" in Inter Bold 24px, colour `#2563eb`. Position at approximately (60, 50) from top-left.
3. **Page title**: The main headline for that specific page, in Inter Extra Bold (800), 52-60px, colour `#1e293b`. Positioned in the left two-thirds of the image, vertically centred or slightly above centre.
4. **Supporting text**: A one-line description below the title in Inter Regular 24px, colour `#64748b`.
5. **Visual element**: The right third of the image can contain a simple, relevant graphic element (abstract shape, icon, or subtle illustration) in brand colours. This is optional -- if it risks looking cluttered, leave it out. Simplicity wins.
6. **Bottom bar** (optional): A thin strip (4px) along the bottom edge using the brand gradient, acting as a brand signature.

**Do NOT include on OG images:**
- URLs or web addresses
- QR codes
- Photographs (except the About OG which may include a small portrait element)
- Busy patterns, textures, or photographic backgrounds
- More than 2-3 text elements total
- Company logos other than the text logotype

---

#### Image 4 of 10: Homepage OG Image

| Property | Specification |
|---|---|
| **Filename** | `homepage.jpg` |
| **Path** | `/images/og/homepage.jpg` |
| **Dimensions** | 1200 x 630 px |
| **Format** | JPG, progressive, quality 82% |
| **Max file size** | 60 KB |

**Content:**
- **Brand mark**: "AI Search Mastery" top-left, Inter Bold 24px, `#2563eb`
- **Headline**: "Get Found by AI Search Engines" in Inter Extra Bold 56px, `#1e293b`
- **Subtext**: "Help AI recommend your business, not your competitors" in Inter Regular 24px, `#64748b`
- **Visual accent (optional)**: A subtle abstract representation of connected nodes or a search result card outline in `#2563eb` at 15-20% opacity in the right portion of the image
- **Bottom gradient bar**: 4px, brand gradient left to right

**Context**: This is the first impression for anyone sharing the homepage. The headline comes directly from the site's H1: "Get Found by AI Search Engines." The subtext is derived from the meta description. This image must feel authoritative and immediately communicate what the business does.

---

#### Image 5 of 10: Products Page OG Image

| Property | Specification |
|---|---|
| **Filename** | `products.jpg` |
| **Path** | `/images/og/products.jpg` |
| **Dimensions** | 1200 x 630 px |
| **Format** | JPG, progressive, quality 82% |
| **Max file size** | 60 KB |

**Content:**
- **Brand mark**: "AI Search Mastery" top-left, Inter Bold 24px, `#2563eb`
- **Headline**: "AI Visibility Tools" in Inter Extra Bold 56px, `#1e293b`
- **Subtext**: "Diagnose, optimise, and monitor AI search results" in Inter Regular 24px, `#64748b`
- **Visual accent (optional)**: Two small, simplified product card outlines side by side in the right portion -- one with a circular gauge icon (representing AImpactScanner) and one with a document/code icon (representing LLM.txt Mastery), drawn in `#2563eb` outline style at 20% opacity. Keep them abstract and minimal.
- **Bottom gradient bar**: 4px, brand gradient

**Context**: Shared when someone links to the products page. Should communicate "professional tools" and "two distinct products."

---

#### Image 6 of 10: Framework Page OG Image

| Property | Specification |
|---|---|
| **Filename** | `framework.jpg` |
| **Path** | `/images/og/framework.jpg` |
| **Dimensions** | 1200 x 630 px |
| **Format** | JPG, progressive, quality 82% |
| **Max file size** | 60 KB |

**Content:**
- **Brand mark**: "AI Search Mastery" top-left, Inter Bold 24px, `#2563eb`
- **Headline**: "The MASTERY-AI Framework" in Inter Extra Bold 52px, `#1e293b` (slightly smaller to fit)
- **Subtext**: "8 pillars for AI search visibility" in Inter Regular 24px, `#64748b`
- **Visual accent**: A subtle arrangement of 8 small squares or circles in a grid/cluster pattern in the right portion, using brand colours (`#2563eb`, `#f59e0b`, `#dbeafe`) to represent the 8 pillars. Each could be a slightly different shade or size to add visual interest without complexity. Keep abstract.
- **Bottom gradient bar**: 4px, brand gradient

**Context**: The framework page explains the proprietary MASTERY-AI framework with 8 pillars. The OG image should signal "structured methodology" and "comprehensive approach." The page title is "The MASTERY-AI Framework."

---

#### Image 7 of 10: About Page OG Image

| Property | Specification |
|---|---|
| **Filename** | `about.jpg` |
| **Path** | `/images/og/about.jpg` |
| **Dimensions** | 1200 x 630 px |
| **Format** | JPG, progressive, quality 82% |
| **Max file size** | 60 KB |

**Content:**
- **Brand mark**: "AI Search Mastery" top-left, Inter Bold 24px, `#2563eb`
- **Headline**: "Meet Jamie Watters" in Inter Extra Bold 56px, `#1e293b`
- **Subtext**: "The practitioner behind AI Search Mastery" in Inter Regular 24px, `#64748b`
- **Visual accent**: A circular placeholder element (120px diameter) in the right portion of the image, filled with `#dbeafe` (primary-light) with a simple person silhouette icon in `#2563eb`. If Jamie's actual photo is available, use a circular-cropped version here instead.
- **Bottom gradient bar**: 4px, brand gradient

**Context**: Personal brand page. The tone should be warm and human compared to the more technical other OG images. The page is titled "About AI Search Mastery" with a headline "Built by a Practitioner, Not a Guru."

---

#### Image 8 of 10: Blog Hub OG Image

| Property | Specification |
|---|---|
| **Filename** | `blog.jpg` |
| **Path** | `/images/og/blog.jpg` |
| **Dimensions** | 1200 x 630 px |
| **Format** | JPG, progressive, quality 82% |
| **Max file size** | 60 KB |

**Content:**
- **Brand mark**: "AI Search Mastery" top-left, Inter Bold 24px, `#2563eb`
- **Headline**: "AI Search Insights" in Inter Extra Bold 56px, `#1e293b`
- **Subtext**: "Guides, analysis, and strategies for AI visibility" in Inter Regular 24px, `#64748b`
- **Visual accent (optional)**: A few stacked horizontal lines of varying width in the right portion, suggesting article cards or a reading list. Use `#e2e8f0` (border) and `#dbeafe` (primary-light). Very minimal.
- **Bottom gradient bar**: 4px, brand gradient

**Context**: Blog hub page featuring articles about AI search visibility. Currently has one article ("Is AI Stealing Your Traffic?"). The OG image should suggest ongoing thought leadership content, not just a single article.

---

#### Image 9 of 10: Contact Page OG Image

| Property | Specification |
|---|---|
| **Filename** | `contact.jpg` |
| **Path** | `/images/og/contact.jpg` |
| **Dimensions** | 1200 x 630 px |
| **Format** | JPG, progressive, quality 82% |
| **Max file size** | 60 KB |

**Content:**
- **Brand mark**: "AI Search Mastery" top-left, Inter Bold 24px, `#2563eb`
- **Headline**: "Get in Touch" in Inter Extra Bold 56px, `#1e293b`
- **Subtext**: "Let's discuss your AI search visibility" in Inter Regular 24px, `#64748b`
- **Visual accent (optional)**: A simple, abstract envelope or message bubble outline in `#2563eb` at 15% opacity in the right portion. Extremely minimal.
- **Bottom gradient bar**: 4px, brand gradient

**Context**: Contact/enquiry page with a form. Do NOT include any email address in the OG image -- it invites spam scraping.

---

### CATEGORY 4: Blog Hero Image

---

#### Image 10 of 10: Blog Article Hero -- "AI Traffic Impact Guide"

| Property | Specification |
|---|---|
| **Filename** | `ai-traffic-impact-guide.jpg` |
| **Path** | `/images/blog/ai-traffic-impact-guide.jpg` |
| **Dimensions** | 1200 x 630 px |
| **Format** | JPG, progressive, quality 82% |
| **Max file size** | 65 KB |
| **Display context** | Blog article page hero. Displayed full-width at the top of the article "Is AI Stealing Your Traffic? What Every Business Needs to Know About AI Search Visibility". Also used as the `og:image` for this specific article. The image has `border-radius: var(--radius-lg)` (12px) applied via CSS and `aspect-ratio: 16/9`. |

**Content Description:**

This image should visually represent the concept of "traditional search traffic being diverted to AI search engines." It needs to work both as a hero image on the article page AND as a social share preview.

**Composition:**

1. **Left side (60% of width)**: A conceptual representation of a downward trend -- a simplified, clean line chart showing a declining curve. The line should be in `#ef4444` (error red) fading to `#f59e0b` (accent amber) at the bottom, suggesting concern but also opportunity. The chart should NOT have detailed axis labels -- keep it abstract. Perhaps a faint grid pattern behind it in `#e2e8f0`.

2. **Right side (40% of width)**: A simplified, abstract representation of an AI search interface -- perhaps a chat bubble or assistant icon in `#2563eb` (primary blue) with radiating connection lines, suggesting AI is the new destination for user queries.

3. **Connecting element**: A subtle visual bridge between the two sides -- perhaps the declining traffic line curves and feeds into the AI element, suggesting the traffic is going somewhere (to AI), not just disappearing.

4. **Overlay text (optional but recommended)**: If the hero image is displayed without the article title overlaid via HTML, consider adding:
   - "Is AI Stealing Your Traffic?" in Inter Bold 36px, colour `#1e293b`, positioned in the upper portion
   - However, check with the developer -- if the article title is rendered as HTML text overlaying the image, omit text from the image entirely to avoid duplication

5. **Background**: Clean gradient from `#ffffff` (left) to `#f8fafc` (right). No busy textures.

**Accessibility note**: The article page uses the article title as an HTML heading, so this hero image should have descriptive alt text like "Illustration showing website traffic declining as AI search engines capture user queries" -- the image must actually depict this concept.

**Style direction**: Data-visualisation aesthetic meets editorial illustration. Think about how The Economist or Harvard Business Review would illustrate this topic -- clean, conceptual, not literal. The declining traffic should feel real and concerning, but the overall composition should suggest "here's the answer" not "panic."

**Restrictions:**
- No screenshots of Google or any real search engine interface (trademark issues)
- No photographs of screens or devices
- No "doom and gloom" imagery -- this is about solving the problem, not fearmongering
- No text smaller than 24px at the 1200px rendering width

---

## 6. Final Review Checklist

Before delivering the images, verify each one against this checklist:

### Per-Image Checks

- [ ] Filename matches specification exactly (case-sensitive, including extension)
- [ ] Dimensions are exact (not "approximately")
- [ ] File size is at or below the specified maximum
- [ ] Format is correct (PNG where specified, JPG where specified)
- [ ] Progressive encoding enabled (for JPGs)
- [ ] EXIF metadata stripped
- [ ] All text uses Inter font family (no system font fallbacks visible)
- [ ] All colours are from the brand palette (no off-brand colours)
- [ ] Border radius follows the brand system where applicable
- [ ] Content matches the description -- compare against the specification word by word
- [ ] Text in the image is legible at the image's expected display size
- [ ] No spelling errors (use British English: optimise, analyse, colour, organisation)
- [ ] No placeholder text or "Lorem ipsum"
- [ ] No watermarks, stock photo logos, or tool branding

### Cross-Image Consistency Checks

- [ ] All OG images follow the same layout template (brand mark position, headline size, gradient bar)
- [ ] Colour usage is consistent across all images
- [ ] Typography weight and sizing follow the specifications
- [ ] Visual quality is consistent (no image looks dramatically different in style from the others)
- [ ] Both product screenshots feel like they come from the same product family

### Delivery Checks

- [ ] All 10 images present in the ZIP archive
- [ ] Directory structure matches the specification
- [ ] manifest.txt included with actual file sizes and dimensions
- [ ] Total file size of all 10 images combined is under 450 KB (leaving headroom)

---

## Appendix: Size Budget Summary

| Image | Max Size | Format |
|---|---|---|
| aimpactscanner-preview.png | 45 KB | PNG |
| llmtxt-preview.png | 40 KB | PNG |
| jamie-watters.jpg | 35 KB | JPG |
| homepage.jpg | 60 KB | JPG |
| products.jpg | 60 KB | JPG |
| framework.jpg | 60 KB | JPG |
| about.jpg | 60 KB | JPG |
| blog.jpg | 60 KB | JPG |
| contact.jpg | 60 KB | JPG |
| ai-traffic-impact-guide.jpg | 65 KB | JPG |
| **TOTAL** | **485 KB** | -- |

This leaves 15 KB of headroom against the 500 KB site budget. If any image can be delivered smaller without quality loss, do so.

---

**End of Brief**

**Contact for questions:** Route through the project coordinator. Do not make assumptions about content or styling that contradicts this brief -- ask for clarification instead.
