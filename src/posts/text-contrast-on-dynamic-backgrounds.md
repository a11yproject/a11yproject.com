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

**Short answer:** Use text-shadows on text elements which overlay non-static backgrounds or may potentially overlay a backgound color of insufficient contrast.

## Brief Overview
When designing and styling text elements, it is important to maintain a color contrast ratios to ensure its visibility, as per [Web Content Accessibility Guidelines (<abrv>WCAG</abrv>) 2.1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html). Using Adobe's (free) [Color Contrast Analyzer](https://color.adobe.com/create/color-contrast-analyzer) we can quickly check if our colors are sufficiently contrasting.

| | Small Text | Large Text |
| --- | --- | --- |
| AA | 4.5:1 | 3:1 |
| AAA | 7:1 | 4.5:1 |

However, we are not always in control of what renders beneath text elements, thwarting our well planned color pallet. Such cases include but are not limited to:

- Text overlaying static images
- Text overlaying paralaxed images
- Text overlaying video
- Fixed or absolute text scrolling over different background colors
