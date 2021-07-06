---
title: Large touch targets
description: How to determine if your touch targets are large enough to be used.
category: Quick test
author: Eric Bailey
date: 2018-11-21
further_reading:
  - url: https://webplatform.github.io/docs/tutorials/understanding-css-units/#On-CSS-pixels,-physical-units-and-scalability
    title: "Understanding pixels and other CSS units: On CSS pixels, physical units and scalability"
    source: WebPlatform
  - url: https://knowbility.org/blog/2018/WCAG21-255TargetSize/
    title: Exploring WCAG 2.1 — 2.5.5 Target Size
    source: Knowbility
    year: 2018
  - url: https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/
    title: "Finger-Friendly Design: Ideal Mobile Touchscreen Target Sizes"
    source: Smashing Magazine
    year: 2012
  - url: https://developers.google.com/web/tools/chrome-devtools/inspect-styles#examine_and_edit_box_model_parameters
    title: "Inspect and Edit Pages and Styles: Examine and edit box model parameters"
    source: Google Developers
    year: 2018
  - url: https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Examine_computed_CSS
    title: "Examine and edit CSS: Examine computed CSS - Firefox Developer Tools"
    source: MDN
    year: 2018
  - url: https://support.apple.com/guide/safari-developer/view-the-computed-css-dev56fdc8177/mac
    title: View the computed CSS
    source: Apple Support
  - url: https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/elements/computed
    title: Microsoft Edge DevTools - Elements - Computed
    source: Microsoft Edge Development
  - url: https://www.nngroup.com/articles/touch-target-size/
    title: Touch Targets on Touchscreens
    source: Nielsen Norman Group
    year: 2019
tags:
  - quicktest
---

A touch target is the total area a person can click or tap on to activate an interactive element such as a link, input, or button.


## Background

Ensuring that interactive elements have sufficiently large touch targets helps people with [motor control issues](https://webaim.org/articles/motor/motordisabilities) use your website or application. Providing a too-small touch target may make it difficult or impossible for some people to be able to reliably reach the area required to activate the element. Think of it like trying to thread a needle.

The [Web Content Accessibility Guidelines (WCAG) specify a minimum size of 44 by 44 CSS pixels](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) for all interactive elements. The exceptions are:

- If the interactive element's functionality can be activated by another element of acceptable size on the same page.
- If the interactive element is rendered inline within a block of text, such as a link.
- If the interactive element's size is controlled by the browser or operating system's UI.
- If the interactive element has a design whose presentation requires a certain size or shape.

Only the inline element exception case typically applies to web design. Even then, a recommended [larger body type size](https://blog.marvelapp.com/body-text-small/) will help both increase inline touch target size and help accommodate people with low vision.

Small touch targets such as icon buttons can use [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) to expand their interactive area without increasing the visible size:

![A translate button with a square purple area surrounding it. The button is labeled, "Button, 32 CSS pixels. The purple area is labeled, "Interactive area, 44 CSS pixels."](/img/posts/2018-11-21-large-touch-targets/touch-target-padding.svg)

It is also recommended that you [add space between large interactive elements](https://axesslab.com/hand-tremors/), to help prevent people from accidentally clicking or tapping the wrong one.

## How to test

To determine the CSS pixel size of an interactive element, use a browser's Inspector feature to check it's computed value.

Two common methods to open a browser's Inspector panel are typing <kbd>Command/Control</kbd> + <kbd>Option</kbd> + <kbd>i</kbd> on your keyboard, or by right clicking on an element on your page and choosing the Inspect option.

If you right click on the interactive element you want to test, it will automatically be highlighted when you choose the Inspect option in the right click menu. For most browsers, this method of selecting an element will also display its CSS pixel height and width:

![Chrome's inspector highlighting the height and width of Wikipedia's logo, which serves as a link back to the Wikipedia homepage. The logo's computed size is 160 by 160 CSS pixels. The inspector also has the code for the logo highlighted, as well as its computed properties. Screenshot.](/img/posts/2018-11-21-large-touch-targets/touch-target-inspector.png)

The inspector also has a Computed panel. It will display the selected element's `height` and `width` values, as well as an alphabetical list of the other computed CSS properties. This can be good for checking how the browser ultimately renders your site's CSS.
