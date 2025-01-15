---
title: Resize text
description: How to test the Resize Text WCAG Success Criterion.
category: Quick test
author: Luis Garcia
date: 2018-11-26
updated: 2024-11-08
tags:
  - quicktest
---

Resize text and make sure everything on the page works. Repeat until you get to 200% zoom. Seems simple? It is.


## Essential abilities

- **Sight**: This method tests the visual appearance of content on the page.
- **Interact with content via a pointer**: This method tests mouse interactions.

If you know of a method that doesn't require either of these abilities, please update this Quick Test.


## Background

People with low vision may need to increase the size of text in order to use the page.

When someone resizes text, any of the following can break the page:

- Text on the page is no longer readable.
- Content is lost or truncated.
- Interactive elements overlapping each other.

The importance is that [relative length units](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Units) (`em`, `ex`, `rem`, `%`, `vw`) are used for text.


## How to test

Testing is pretty straightforward.

1. Initial test in multiple browsers
1. Resize text
1. Confirm relative font usage
1. Choose a browser to do further testing in
1. Resize text
1. Check everything


### Choosing a browser

Testing text-resize needs initial testing in multiple browsers to confirm that relative units are used correctly in order to conform with [WCAG Resize Text (Success Criterion 1.4.4)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html).

Note that you can by mistake give text-resize a pass when testing in Firefox. Text-zoom in Firefox resizes regardless of usage of relative units. Suggested setup is to use two different browsers in initial testing.

Chrome works best, allthough:

- Ability to resize text is not obvious.
- Does not display the current zoom level.

Edge works well:

- Has a smiliar functionality as Chrome.
- Increase text size used to only support text-only resize in Reading view but has since improved.

Safari, works but not as well:

- Ability to resize text is not obvious.
- Does not display the current zoom level.
- Safari is only available on macOS.

Firefox is an easy browser for testing further:

- It makes resizing text really easy.
- It informs you of the current zoom level.
- It's available on all popular Operating Systems.
- Text-zoom in Firefox resizes regardless of usage of relative units.

### Resizing text in Chrome

1. Copy `chrome://settings/fonts` to the address bar and then return on your keyboard.
1. Increase the **font size** to 32px (default is 16px).

### Resizing text in Edge

1. Copy `edge://settings/appearance` to the address bar and then return on your keyboard.
1. Go to section "Fonts" and the option "Customize fonts".
1. Increase the **font size** to 32px (default is 16px).

### Resizing text in Safari

1. To increase the font size, press <kbd>Option</kbd> + <kbd>Command</kbd> + <kbd>+</kbd>
1. To decrease the font size, press <kbd>Option</kbd> + <kbd>Command</kbd> + <kbd>-</kbd>

### Resizing text in Firefox

1. Go to <strong>View > Zoom</strong> and select <strong>Zoom Text Only</strong>.
1. Zoom to 200%.
    - <kbd>Ctrl</kbd> + <kbd>+</kbd>.
    - <kbd>Ctrl</kbd> + Scroll Up.

### Checking everything

After doubling the size of text, verify the following:

- All content on the page should still be readable.
    - Text shouldn't be too cut off.
    - Text needed for understanding shouldn't be truncated.
    - Text shouldn't overlap too much.
- Interactions still work.
    - Buttons, links, and inputs are still usable with mouse, touch, or similar.

#### Thorough check

Some people might not need to zoom text up to 200%. And there might be a level of zoom below 200% where content doesn't work.

To do a more thorough job, you should check the page at each of the zoom steps the browser makes to see if there are any odd breakpoints.

### Exceptions

- Images of text won't resize.
- Captions over videos likely won't resize.
- Using the incorrect html `lang` code might result in no text-zoom.


## Can I zoom everything instead of resizing text only?
It depends on which legislation you have to follow. It's still a good idea to make sure that pages work well with text-only zoom since some people want only the text to be bigger. The usage has increased especially on mobile devices, and statistics from [appt.org](https://appt.org/en/stats/font-size) (2024) show that more than a third of users on Android and iOS devices use this setting.

### If you have to conform with the EN-301 549 standard
In the EN-standard 301 459 which the accessibility laws in the EU and Canada points to there's the section [11.7 User preferences](https://accessible.canada.ca/en-301-549-accessibility-requirements-ict-products-and-services-11-software#_Toc66969652) which explicitly points out color and font settings to be respected. This means that such things as Dark mode and text-resize is mandated by law.

### If you do not have to comply with the EN-301 549 standard
Without going too deep into the [Success Criterion 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) in WCAG, the Success Criterion does not require you to use text-only zoom. 

There is even a [Success Technique (G142)](https://www.w3.org/WAI/WCAG22/Techniques/general/G142) that says you can pass the Success Criterion by zooming everything.
