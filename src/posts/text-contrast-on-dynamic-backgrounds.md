---
title: Text Contrast on Dynamic Backgrounds
description: Use text shadows to guarantee color contrast
category: How-to
author: Conor Kelly
date: 2023-05-02
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

**Short answer:** Use text-shadows or additional background colors on text elements which overlay non-static backgrounds or which may potentially overlay a background color of insufficient contrast.

## Brief Overview

When designing and styling text elements, it is important to maintain a color contrast ratios to ensure its visibility, as per [Web Content Accessibility Guidelines (<abrv>WCAG</abrv>) 2.1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

| | Small Text | Large Text |
| --- | --- | --- |
| AA | 4.5:1 | 3:1 |
| AAA | 7:1 | 4.5:1 |

Using Adobe's (free) [Color Contrast Analyzer](https://color.adobe.com/create/color-contrast-analyzer) we can quickly check if our colors are sufficiently contrasting.

## The Problem

<img width="516" alt="Text over video without additional styling" title="Text over video without additional styling" src="https://user-images.githubusercontent.com/95449364/180560811-4bff5038-9e88-4103-b0f2-27ba6cfe64b2.png">

Designers and developers are not always in control of what renders beneath text elements, often thwarting our well planned color pallet. Such cases include but are not limited to:

- Text overlaying static images
- Text overlaying parallaxing images
- Text overlaying video
- Fixed or absolute text scrolling over different background colors
- Responsive layouts shifting text over different background colors

## The Solution

<!-- todo: add organic links to resources -->

Typography in film / TV / video provide us with a few techniques to ensure our text is always legible:

1. Include a background element behind the text element
2. Outline the text with a border
3. Apply text-shadow(s)

### Background Element

Setting up text elements with a fixed background is a relatively simple approach, wherein the background may be translucent to avoid occluding other content. These background elements can either be styled as standard rectangles or as decorative overlay graphics.

<img width="514" alt="Text over video with a background element" title="Text over video with a background element" src="https://user-images.githubusercontent.com/95449364/180565391-9c7e5b20-4c20-4581-8f8c-ebc1971cca4c.png">

#### Implementation

Using a background element is a simple approach, but it does require some additional markup and styling.

```html
<!-- index.html -->
<div class="container">
	<video ...></video>
	<div class="text-container">
		<h1>hello world</h1>
	</div>
</div>
```

Be sure to set the background color and padding on the text container, not the text element itself, to ensure the text does not touch the edges of the background element.

```css
/* styles.css */
.container {
	position: relative;
}
.text-container {
	position: absolute;
	padding: 1rem; /* optional but suggested */
	top: 1rem;
	left: 1rem;
	background-color: rgba(0, 0, 0, 0.5);
}
```


### Text Shadows

Less obtrusive than backgrounds, developers can apply text shadows to ensure legibility. Text shadows can be applied to any text element, including those with transparent backgrounds.

<img width="510" alt="Text over video with a single text-shadow" title="Text over video with a single text-shadow" src="https://user-images.githubusercontent.com/95449364/180565741-5bf39660-3bfc-4cb0-886d-63d41a7605fa.png">

#### Single Shadow Implementation

Even adding a single text shadow can help ensure legibility.

```html
<!-- index.html -->
<div class="container">
	<video ...></video>
	<h1>hello world</h1>
</div>

<!-- style.css -->
<style>
.container {
	position: relative;
}
h1 {
	position: absolute;
	top: 1rem;
	left: 1rem;
	text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
}
</style>
```

#### Multiple Shadows Implementation

When using multiple, comma-separated text shadows, the shadows are rendered in the order they are declared. This allows us to create a border-like effect around the text by applying a shadow with a blur-radius of 0.

<img width="513" alt="Text over video with multiple text-shadows" title="Text over video with multiple text-shadows" src="https://user-images.githubusercontent.com/95449364/180566095-a9588904-e834-4036-bf10-2fded8d8b2b4.png">

Be sure to offset your shadows by at least 1px to avoid the shadow being clipped by the text element, and to offset the shadows in different directions to create a border-like effect.

```css
/* styles.css */
.container {
	position: relative;
}
h1 {
	position: absolute;
	top: 1rem;
	left: 1rem;
	text-shadow:
		1px 1px 0 rgba(0, 0, 0, 0.5),
		-1px -1px 0 rgba(0, 0, 0, 0.5),
		1px -1px 0 rgba(0, 0, 0, 0.5),
		-1px 1px 0 rgba(0, 0, 0, 0.5);
}
```

### Outlining Text

(Warning: the following recommendation is a bit of typography crime!)

Designers can create highly contrasting display text by giving the characters a stroke. If possible, an added stroke should always be applied to the outside of the characters (vs centered or inside) to preserve the shape, integrity, and legibility of the typeface. Additionally, such strokes should have rounded corners to avoid strange stroke rendering around the corners of the text.

#### Implementation

This effect cannot be reproduced by CSS styling, so designers and developers will have to export the display text and bring it in as an image.
