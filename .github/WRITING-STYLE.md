# Salad support docs - writing conventions (remaster)

## Files
- Pages live in content/docs/<section>/<folder>/<slug>.md or .mdx. Use .mdx only when you use a component.
- Frontmatter, always: `title:` (sentence case, no trailing punctuation, question form is fine) and `description:` (one plain sentence, max ~160 chars, what the page answers).
- NEVER add `import` statements in .md/.mdx: it breaks the production build. Components are registered globally.
- Keep existing image references exactly as they are (`![alt](../../../../content/images/...)`). Do not invent new images. Only drop an image if the step it illustrates is removed. Every page sits at depth content/docs/a/b/page, so the relative prefix is always `../../../../content/images/`.
- Links to other pages are root-relative without extension or trailing slash: `/troubleshooting/degraded-state/gpu-power-limit`. Check the target exists (`ls content/docs/<path>.md*`). Old folders faq/salad-app, faq/community, faq/company, rewards/rewards-faq, rewards/rewards-support, troubleshooting/mining-jobs, troubleshooting/bandwidth-sharing-jobs no longer exist.
- Contact support: link `[Salad Support](/contact)` (the site's contact page: Discord, Reddit, email). For "send us your logs" style instructions, link `/guides/your-pc/how-to-create-a-support-ticket`. Never link Community.salad.com or Help Scout article URLs (support.salad.com/article/...).
- Prettier runs at the end (120 columns, prose wrapped); write normally.

## Components (no import needed)
<Callout type="info" title="Optional title">text</Callout>   types: info | warn | error
<Steps>
<Step>

### Step title

Body text, lists, images.

</Step>
</Steps>
<Accordions type="single">
<Accordion title="Question?">Answer</Accordion>
</Accordions>
<Cards>
<Card title="Page title" href="/path/to/page" description="One line." />
</Cards>
<Tabs items={['Windows 11', 'Windows 10']}><Tab value="Windows 11">...</Tab><Tab value="Windows 10">...</Tab></Tabs>
Put a blank line before and after markdown inside a component. Don't nest Steps inside Accordions.

## Voice
- Second person, plain English, short paragraphs. Salad vocabulary stays: Chef, Chop/Chopping, Salad Balance, the Salad app, container jobs, the Storefront, Reward Vault, Network Monitor.
- Lead with the answer. No warm-up sentences ("Just like any application, sometimes...", "We know what you're thinking"). No marketing ("now available", "sweetest workloads", "epic loot"), no dates or version numbers that will age.
- One answer per question. If another page already covers something, link it instead of repeating it.
- Troubleshooting pages follow this shape: what the message means -> why it happens (most common first) -> what to do, in order -> "Still stuck?" with exactly what to send support (machine ID, screenshot of the notification, logs zipped - link /guides/using-salad/how-to-find-your-salad-log-files).
- Reinstalling Salad is the LAST step on any troubleshooting page, never the first. Never recommend WSL "mirrored" networking mode. Never mention the "Obliterator".
- Never state internal limits, thresholds, scores, percentages or fees from Salad's systems. Describe what a check looks at, not the number. Never name internal tools (Mixpanel, Axiom, Spinner, Bowl, Matrix, Tremendous is OK to name as "our reward partner Tremendous").
- Support cannot: refund rewards, restore expired balance, remove a passkey, change an account email, give beta Linux access to individuals, support multi-GPU, support macOS, run on drives other than C:.
- Keep what is correct in the existing page; rewrite for clarity, don't pad. Target 150-500 words for most pages; landing (index) pages are a short intro + Cards.

## Index pages
Each folder's index.mdx: 1-2 sentences on what the section covers, then a <Cards> grid linking every page in the folder's meta.json, grouped under ## headings when there are more than ~8.

## Check your work
Run `python3 .github/check-docs.py content/docs/<folder>` and fix everything it reports.
