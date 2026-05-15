---
title: Dark mode is not a preference, it's assistive technology
description: "Treating dark mode as a stylistic nice-to-have ignores the users for whom bright screens cause real pain. Here's what testing with hundreds of disabled participants taught us."
category: Background
author: Katie McDermott
date: 2026-05-15
tags:
  - background
---

Dark mode is often treated as a nice-to-have. A stylistic toggle for designers who want their portfolio to look moody, or a battery-saving trick on OLED phones. Many teams adhere to the Web Content Accessibility Guidelines (WCAG) to ensure accessibility compliance, see that dark mode isn't required, and move on.

I think this is wrong. After running hundreds of user-testing sessions with disabled and diverse participants, I've watched dark mode emerge as the single most-requested accessibility feature, more often than the ones that show up in compliance audits. For a significant slice of users, the absence of dark mode isn't an aesthetic complaint. It's a barrier that causes pain, ends sessions early, and forces them off your product altogether.

## What participants actually say

Hearing this once from a researcher is easy to dismiss. Hearing it directly from people with lived experience is not.

Daniel, who is blind, on why his phone is permanently set to dark mode:

> *"My phone's permanently set on dark mode to reduce the glare of any of the white screens just blasting me in the eyes. It helps me use screens for longer so my eyes don't get as fatigued at the end of the day. Even people who have lost 99% of their vision still have a light sensitivity."*

This statement challenges a common misconception. Many blind people retain residual vision, and light sensitivity is often a major part of their experience. For them, bright screens are not just inconvenient. They're painful, and they actively shorten the time the person can engage with digital work at all.

The same participant, on the link between screen brightness and headaches:

> *"When you have this bright light just blasting you in the eyes, it's painful, it gives you headaches. Most of your job you're doing these days, you're looking at a computer screen. There are very few jobs where you're not looking at a computer screen. So if you want to extend how long you're able to do that work for, you need to try and get the most favourable conditions for your eyes."*

This is the occupational accessibility argument. Digital tools should empower people to work. Forcing them to choose between a job and a migraine is not a reasonable trade-off.

And on the readability of black text on a bright white background:

> *"A bright white background is an issue because it causes bleeding into the other colours. So if you have thin black writing on a white background, the white's so bright that it kind of makes it hard to look at the black writing."*

## Halation: a real visual phenomenon

What Daniel describes has a name. *Halation* is the visual effect where bright areas of a screen appear to "bleed" into adjacent darker areas, making the boundary between text and background blur or shimmer. It's most pronounced for people with refractive errors, cataracts, dry-eye conditions, certain neurological conditions, and (commonly) people over about 50.

A high-contrast pairing like thin black text on pure white is among the worst offenders. The eye can't comfortably resolve the edges. The text appears to vibrate. Sustained reading becomes exhausting in a way that doesn't show up in a contrast-ratio calculation.

White text on a dark background reverses the problem. There's less bright surface area to scatter light, so the edges sit cleanly. Patrick, who has a degenerative eye condition, put it like this:

> *"White text on a black background doesn't just look cool, it's much easier on the eyes. When I used white on black, it was easier because the print would stand out much more. Even looking at the time was much easier. The numbers would just jump at you."*

For users with low vision, neurodivergent conditions like dyslexia, and people experiencing age-related vision decline, the same pattern repeats. Dark mode noticeably improves readability and reduces fatigue.

## What WCAG says, and where it stops

WCAG provides a foundation for digital accessibility, but it doesn't require dark mode. The closest the standard gets is contrast minimums (Success Criterion 1.4.3, 1.4.6, 1.4.11). Hit the ratio, and you've ticked the box.

Meeting the contrast ratio doesn't mean the page is comfortable to read. A page can pass every WCAG contrast check and still be painful for the participants quoted above. The standard is a floor, not a description of what real usability feels like.

When teams design for the floor and stop there, they miss the gap between *"technically accessible"* and *"actually usable for a working day."* For users who experience halation, glare-induced fatigue, or migraine triggers, that gap is the difference between completing the task and abandoning it.

## What the workarounds don't fix

The most common counter-argument I hear is *"users who need dark mode can just use a browser extension or system-level inversion."* In practice, this passes the cost onto the user, and the workarounds have their own problems.

**Browser extensions** like Dark Reader, Midnight Lizard, and Stylus apply dark styling at the browser layer. They are useful, but they're overlays the original developers didn't design or test. They produce:

- Inconsistent colour application, where brand colours or warning states get inverted to something meaningless.
- Loss of visual hierarchy, where UI elements designed with intentional colour emphasis become indistinguishable.
- Conflicts with assistive technology, where screen readers get tripped up by injected styles.
- Performance overhead, where every page paint goes through the extension first.

**System-level colour inversion** has similar issues at a deeper level. It flips every colour on the screen, which sounds elegant until you remember it also inverts images. A blue sky turns orange. A coloured warning icon loses its meaning. A graph becomes unreadable. Mobile users get an additional surprise: their keyboard, which was already dark by default, inverts to bright white and takes up half the screen.

The result is that users who depend on dark mode spend cognitive effort constantly toggling settings, mentally compensating for distorted visuals, and switching extensions on and off for sites that don't behave. They're paying a tax to use products that could have offered the option natively.

Native dark mode avoids all of this. Colours are chosen, contrasts are intentional, images are handled properly, and assistive technology behaves as expected. It's the only implementation that's actually under the design team's control.

## How often is it actually requested?

There's surprisingly little published quantitative research on dark mode's accessibility impact. Most of the data I have comes from aggregated user-testing observations.

Across our standard panel of 18 diverse participants per project — 3 blind, 3 with low vision, 3 neurodivergent, 3 Deaf or Hard of Hearing, 3 over 70, and 3 with limited English — dark mode is consistently the top accessibility request, ahead of more commonly-implemented features like embedded read-aloud or font size controls. Conservatively, about 75% of low-vision participants and at least half of blind participants express a strong preference or genuine need for it. The neurodivergent and over-70 cohorts also request it heavily, often citing reduced overstimulation or better contrast for ageing eyes.

The mismatch is striking. Dark mode is among the most-requested accessibility features in real testing, and one of the least-prioritised in real compliance work. Teams routinely ship read-aloud features that almost no participant asks for, while leaving dark mode out of scope.

## Who actually benefits

It would be easy to file dark mode under *"helps blind and low-vision users"* and move on. The reach is wider than that.

- **Globally, around 2.2 billion people have some form of vision impairment.**
- **Around 15–20% of people are neurodivergent**, many of whom report that high-brightness screens are overstimulating.
- **Older adults** experience reduced contrast sensitivity and increased glare sensitivity as a baseline part of ageing.
- **People in low-light environments** — using devices at night, or in a dim conference room — benefit from the same reduction in screen brightness.
- **People with temporary visual sensitivity**, after eye surgery or during a migraine episode, get short-term relief.
- **Anyone who works on a screen all day** gets reduced eye fatigue.

The traditional disability-led case for dark mode is strong on its own. Added to the broader population that prefers it for comfort, ergonomics, or context, the audience is enormous.

## A practical bar for "good"

When teams ask me what *"good"* dark mode implementation looks like, the bar is straightforward:

- **It's a real theme, not an inverted version of the light theme.** Brand colours, image treatments, and component states are designed deliberately for the dark surface, not derived by algorithm.
- **It respects the user's system preference by default** (`prefers-color-scheme: dark`), with an in-app override they can persist.
- **It handles images sensibly.** Hero illustrations get dark variants. Photos either get a slight darken/desaturate or are left alone. Diagrams get dark-mode strokes.
- **Contrast still passes WCAG** at the new theme. Light text on dark surfaces has its own contrast pitfalls — be especially careful with greys.
- **It doesn't break in print, screenshots, or shared previews.**

None of this is exotic. It's design work. The cost is in doing it once well, not in retrofitting it later.

## The reframe

Dark mode is not a design trend. For a sizeable portion of users, it's the difference between using your product comfortably and being driven off it by pain. WCAG is a starting point, not a description of the people you're trying to reach.

If you're prioritising accessibility investments — especially in enterprise products where users spend a full working day in your UI — dark mode delivers more real-world usability than a lot of the features that currently sit higher on accessibility roadmaps.

To paraphrase a blind tester I worked with: the people who rely on accessible online services already know what they need. The honest path forward is to listen to them, not to optimise for the compliance audit.

Build dark mode into the product. Build it properly. Treat it as assistive technology, because for a meaningful number of your users, that's exactly what it is.
