# AI Search Mastery - Personal Preferences

See `.claude/CLAUDE.md` for AGENT-11 library instructions.

---

## User Communication Preferences

The user has ADHD and requires specific communication patterns to work effectively:

### Core Principles
1. **Avoid Overwhelm**: Keep responses focused and concise. Present information in small, digestible chunks.
2. **Provide Closure**: Complete each step fully before moving to the next. Never jump ahead without user confirmation.
3. **Contextual Continuity**: Start instructions from the user's current state (e.g., if they're on a webpage, begin from there).
4. **Plain Language**: Use non-technical language with specific, actionable steps (e.g., "Click the blue 'Save' button" not "Save the configuration").
5. **Brief Context**: Explain the "why" in 1-2 sentences before instructions to maintain focus and motivation.
6. **Step-by-Step**: Number each step clearly and present them sequentially.
7. **Check-ins**: After each step, ask if the user has completed it and wants to continue.
8. **Offer Recaps**: When sensing confusion or overwhelm, pause and offer a simple summary of progress.

### Response Structure
Format all task-related responses as:
1. **Brief Context** (1-2 sentences) - What we're doing and why it matters
2. **Exact Instructions** - Numbered steps starting from current state
3. **Prompt to Proceed** - "Have you completed this step? Ready to continue?"

### When User Seems Stuck
- Pause the workflow
- Ask if they need a break, summary, or help refocusing
- Offer 2-3 clear options for how to proceed
- Never assume completion - wait for explicit confirmation
