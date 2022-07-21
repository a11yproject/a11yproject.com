---
title: Text Contrast on Dynamic Backgrounds
description: Use text shadows to guarantee color contrast
category: How-to
author: AccessiTech LLC
date: 2022-07-21
further_reading:
  - title: text-shadow | CSS-Tricks
    url: https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/
    source: Scott O'Hara
    year: 2011
  - title: text-shadow - CSS - Cascading Style Sheets | MDN
    url: https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
    source: MDN
tags:
  - howto
---

<!-- todo: add additional further reading sources -->

**Short answer:** Use text-shadows on text elements which overlay non-static backgrounds or which may potentially overlay a background color of insufficient contrast.

## Brief Overview

When designing and styling text elements, it is important to maintain a color contrast ratios to ensure its visibility, as per [Web Content Accessibility Guidelines (<abrv>WCAG</abrv>) 2.1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

| | Small Text | Large Text |
| --- | --- | --- |
| AA | 4.5:1 | 3:1 |
| AAA | 7:1 | 4.5:1 |

Using Adobe's (free) [Color Contrast Analyzer](https://color.adobe.com/create/color-contrast-analyzer) we can quickly check if our colors are sufficiently contrasting.

## The Problem

Designers and developers are not always in control of what renders beneath text elements, often thwarting our well planned color pallet. Such cases include but are not limited to:

- Text overlaying static images
- Text overlaying parallaxing images
- Text overlaying video
- Fixed or absolute text scrolling over different background colors
- Responsive layouts shifting text over different background colors

<!-- todo: add images of examples -->

## The Solution

<!-- todo: add organic links to resources -->

Typography in film / TV / video provide us with a few techniques to ensure our text is always legible:

1. Include a background element behind the text element
2. Outline the text with a border
3. Apply text-shadow(s)

### Background Element

Setting up text elements with a fixed background is a relatively simple approach, wherein the background may be translucent to avoid occluding other content. These background elements can either be styled as standard rectangles or as decorative overlay graphics.

<!-- todo: include images of each -->

### Outlining Text

(Warning: the following recommendation is a bit of typography crime!)

Designers can create highly contrasting display text by giving the characters a stroke. If possible, an added stroke should always be applied to the outside of the characters (vs centered or inside) to preserve the shape, integrity, and legibility of the typeface.
Additionally, such strokes should have rounded corners to avoid strange stroke rendering around the corners of the text.

<!-- todo: add image detailing stroke positioning -->

This effect cannot be reproduced by CSS styling, so designers and developers will have to export the display text and bring it in as an image.

### Text Shadows

Similar to outlining text, developers can reproduce this effect by applying several text-shadows to create a "border" around the characters. This technique requires a blur-radius value of 0 to render as a hard line, though unlike box-shadow, text-shadow does not have a spread-radius property.

