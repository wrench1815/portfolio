---
type: post
title: 'Semantic HTML Beyond "div Soup"'
description: >-
  Why your div-heavy markup hurts accessibility, SEO, and maintainability —
  and why choosing elements for what things *are* beats styling-first thinking.
publishedAt: 2026-04-12
readTime: 9 min
author: Hardeep Kumar
category: Accessibility
topicId: accessibility
slug: semantic-html-beyond-divs
---

There’s a phase most developers go through when working with HTML.

At first, everything is confusing. There are too many tags — `<article>`, `<section>`, `<nav>`, `<aside>` — and you’re not entirely sure when to use what. So you do what any practical person would do:

You ignore all of them.

Instead, you reach for the one tag that seems to solve everything:

```html
<div>
```

Need a container? `<div>`. Need a layout? `<div>`. Need a button? …okay, maybe still `<div>` with an `onClick`.

Before long, your entire page looks like this:

```html
<div class="container">
  <div class="header">
    <div class="nav">
      <div class="nav-item">Home</div>
      <div class="nav-item">About</div>
    </div>
  </div>
</div>
```

Congratulations. You’ve built what’s commonly known as **div soup**.

It works. It renders. Nobody complains — at least not immediately.

But under the surface, you’ve quietly thrown away one of the most powerful features of HTML:

**Meaning.**

Browsers, assistive tech, search engines, and future-you all consume structure — not your Figma frame. When structure is missing, you don’t get a polite error. You get confusion, skipped content, wrong tab order, and users who quietly leave.

Semantic HTML isn’t nostalgia. It’s **the contract** between what you built and everything that isn’t a visual screenshot.

## HTML Was Never Just About Layout

Somewhere along the way, HTML got reduced to “that thing we use to structure the page before CSS makes it look good.”

But HTML was never meant to be just visual scaffolding. It’s a language designed to describe **what something *is***, not just how it looks.

- `<nav>` isn’t just a container — it’s navigation.
- `<article>` isn’t just a box — it’s a standalone piece of content.
- `<button>` isn’t just clickable — it’s an interactive control.

When you replace everything with `<div>`, you strip away that meaning.

**What “semantic” means in practice:** choose elements that describe **purpose**, not just layout. You’re not doing this for pedantry. You’re doing it so **software can build a model** of your page without guessing.

## Accessibility: The Part Most People Ignore

Let’s talk about the elephant in the room: accessibility.

When you use proper semantic elements, assistive technologies don’t have to guess what your UI is doing. They already know.

A screen reader encountering this:

```html
<button>Submit</button>
```

…knows it’s a button. It announces it properly. It supports keyboard interaction automatically.

Now compare that to:

```html
<div onclick="submitForm()">Submit</div>
```

To a screen reader, that’s just… a box.

No role. No behavior. No accessibility.

So now you have to manually add:

- `role="button"`
- `tabindex="0"`
- Keyboard event handlers

In other words, you’re rebuilding what `<button>` already gives you for free.

This is the irony of div soup:

> The more you rely on `<div>`, the more work you create for yourself.

Somewhere along the line, people learned they can write:

```html
<div role="button" tabindex="0" onclick="...">Save</div>
```

And yes — with enough attributes and keyboard handlers — you can approximate a button.

You’ve also signed up to re-implement focus behavior, activation (Enter / Space), disabled state, name computation for assistive tech, and consistency with every real `<button>` on the OS.

**Rule of thumb:** if a native element exists, use it first. ARIA patches gaps; it doesn’t replace semantics.

## Semantics Improve More Than Accessibility

Accessibility is the strongest argument, but it’s not the only one.

### Your code becomes easier to read

Compare these two:

```html
<div class="top-bar">
  <div class="menu">...</div>
</div>
```

vs.

```html
<header>
  <nav>...</nav>
</header>
```

The second one reads like a sentence. You don’t need class names to understand the structure.

That matters more than you think — especially when you come back to your code after a few months and wonder what past-you was doing.

### You get built-in behavior

Semantic elements come with default behavior:

- `<button>` → keyboard support, focus handling
- `<form>` → submission behavior
- `<label>` → links to inputs
- `<a>` → navigation semantics

When you ignore these and roll your own with `<div>`, you’re opting out of decades of browser optimization — and signing up to reimplement it yourself.

That’s rarely a good trade.

### SEO (yes, it still matters)

Search engines don’t just look at your text — they look at structure.

Using elements like `<main>`, `<article>`, `<section>`, and `<header>` helps them understand what your content is about.

Is it the primary content? A sidebar? Navigation? A footer?

You’re essentially giving them a map instead of a pile of unlabeled boxes.

## Links That Behave Like Links

Another favorite: `<span onClick={navigate}>Go to dashboard</span>`.

It isn’t in the link history. It doesn’t expose a real URL to “open in new tab.” It doesn’t get discovered the way crawlers and assistive tech expect links to be discovered.

Use `<a href="...">` for navigation. If you’re in a SPA, the router can still intercept the click — you keep **semantics and behavior**.

If the UI “looks like a link” but isn’t one, you’ve built a costume.

## Forms: Labels Are Part of the Control

Inputs without associated labels are a structural bug, not a copy problem.

The accessible name for a field comes from:

- A `<label for="id">` pointing at the input’s `id`, or
- The input wrapped in `<label>`, or
- In limited cases, `aria-label` / `aria-labelledby` when design truly has no visible label (rare for standard forms).

Placeholder text is **not** a label. It disappears when people type, it’s often low contrast, and screen readers handle it inconsistently compared to a real label.

Groups of radio buttons or checkboxes belong in `<fieldset>` with `<legend>` — not a bold `<div>` pretending to be a section title.

## Lists: When You Mean a List, Say So

If you render ten rows of “card” markup as sibling `<div>`s because CSS grid is easier that way, you might still have a list **semantically**.

- Use `<ul>` / `<ol>` when order or grouping matters to understanding.
- Use `<li>` for items.

Screen readers announce list boundaries (“list, three items”). That context matters for long feeds and settings screens.

If everything is anonymous siblings, users hear a wall of text with no scaffolding.

## Tables for Tabular Data

If data is **tabular** — rows share columns with a meaningful relationship — use `<table>` with `<th scope="col">` (or explicit `headers` / `id` wiring for complex grids).

CSS can make a table look like cards on mobile. **Responsiveness is not an excuse** to throw away table semantics for price comparisons, ledgers, or schedules.

“Div tables” were a dark chapter. We have better layout tools now.

## Images and Media

Meaningful images need **descriptive** `alt` text. Decorative images need `alt=""` so assistive tech skips them.

Video needs captions. Audio needs transcripts if the information isn’t elsewhere.

None of this replaces semantic structure around the page — but it completes the picture: **content type matches reality**.

## Headings Are a Map, Not Typography

Design systems love type scales. That’s fine — until “this looks like an h3” becomes an actual `<h3>` in the wrong place.

Headings define **outline**, not font size. Screen reader users often navigate by jumping from heading to heading. If your levels skip around or repeat six `h1`s because styling was convenient, that map is lying.

- One `h1` per page (typically the page topic).
- Don’t skip levels because it “felt cleaner” (`h1` → `h4` with no `h2`/`h3`).
- Match visual importance to structural importance as closely as you can.

When design and outline disagree, **fix the CSS**, not the heading levels.

## Landmarks: Boring Labels That Save People Hours

Elements like `<main>`, `<nav>`, `<header>`, `<footer>`, and (when appropriate) `<aside>` create **landmarks**.

Users can jump to “main” or “navigation” instead of tabbing through every icon button you put in the header. That’s not a niche power-user trick — it’s how a lot of people efficiently use the web.

If everything lives in anonymous `<div>`s, the only strategy is brute force: read or tab from the top and hope.

**Exactly one `<main>`** per document (with rare documented exceptions) so “skip to main” has a destination.

## ARIA When You Need It — Not as Default Paint

Valid uses of ARIA include:

- Live regions for async status updates (`aria-live`) when there’s no other polite announcement channel.
- Expanding panels when you can’t use `<details>` / `<summary>`.
- Correcting mistakes in third-party markup you can’t replace yet.

Invalid uses include:

- Slapping `role="button"` on everything because the design system’s “Button” component is a `div`.

Start with HTML. Measure twice before adding roles.

## Language and Direction

Set `lang` on `<html>` (or relevant subtree) so pronunciation and hyphenation behave. If you ship mixed-language UI, mark the local subtree.

`dir` for RTL isn’t optional for real bilingual products — it affects layout **and** reading order assumptions.

## Why Div Soup Happens in the First Place

To be fair, developers don’t use `<div>` everywhere because they’re lazy.

It happens because:

- Frameworks abstract HTML away (hello, endless `<div>` trees in React).
- CSS handles layout, so semantics feel “optional.”
- Nobody enforces it in most teams.
- It’s faster in the moment.

And honestly? It *works*.

That’s what makes it dangerous.

Because the problems — accessibility gaps, maintainability issues — don’t show up immediately. They creep in slowly.

## A Better Way (Without Becoming a Purist)

This isn’t about banning `<div>`. `<div>` is useful. You’ll always need it.

The goal is simple:

> Use semantic elements when they exist. Use `<div>` when they don’t.

You don’t need to memorize every HTML tag. Just start with the obvious ones:

- Use `<header>` for headers.
- Use `<nav>` for navigation.
- Use `<main>` for main content.
- Use `<section>` for logical grouping.
- Use `<article>` for standalone content.
- Use `<button>` for buttons (seriously, just do it).

If you catch yourself writing:

```html
<div class="button">
```

…pause for a second. There’s probably a better option.

## The Subtle Shift

The real change isn’t technical — it’s mental.

Instead of asking: “What do I need to style this?”

Start asking: “What *is* this element?”

That small shift leads to better decisions automatically.

## This Isn’t Only About Screen Readers

Semantic structure helps:

- **Keyboard users** — focusable controls are predictable when you use real links and buttons.
- **Search engines** — content hierarchy still signals what matters.
- **Your team** — the next developer reads `<article>` vs “div #3” faster than you think.

Accessibility conversations often get framed as “edge cases.” That’s a statistical mistake. Disability is common; situational limits (sunlight, one hand, slow network) are universal.

## A Practical Review Habit

Before merge, ask:

- Can I navigate this screen with headings and landmarks alone?
- Are all interactive controls real controls?
- Do form fields have discoverable names?
- Did I introduce a “fake” element because CSS was annoying?

Annoying CSS is a **you** problem. Broken structure is a **user** problem.

## Closing Thought

Div soup isn’t a crime. Every developer has written it at some point.

But staying there is a missed opportunity.

Semantic HTML isn’t about being “correct” or “by the book.” It’s about making your code more understandable, more accessible, and more maintainable.

In a field where complexity is always increasing, anything that makes systems easier to understand is worth taking seriously.

So next time you reach for a `<div>`, take half a second and ask: **“Is this really just a box?”**

Sometimes it is.

But more often than not, it’s something more — and HTML already has a word for it.

If you wouldn’t ship a REST API where every field was named `data` and `thing`, don’t ship a page where every region is `div`.

Structure is part of the product. Treat it that way.
