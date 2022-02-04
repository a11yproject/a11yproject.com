---
title: Resize text
description: How to test the Resize Text WCAG Success Criterion.
category: Quick test
author: Luis Garcia
date: 2018-11-26
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

Testing text-resize needs initial testing in multiple browsers to confirm that relative units are used correctly in order to conform with [WCAG Resize Text (Success Criterion 1.4.4)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html).

Testing text-resizing can fail in Chrome but pass in Firefox since text-zoom in Firefox resizes regardless of usage of relative units. Suggested setup is to use Chrome and Firefox in initial testing.

Firefox is an easy browser for testing further:

- It makes resizing text really easy.
- It informs you of the current zoom level.
- It's available on all popular Operating Systems.

Safari and Chrome work, but not as well:

- Ability to resize text is not obvious.
- Does not display the current zoom level.
- Safari is only available on macOS.

Edge won't work:

- Edge only supports text-only resize in Reading view.

### Resizing text in Firefox

1. Go to <strong>View > Zoom</strong> and select <strong>Zoom Text Only</strong>.
1. Zoom to 200%.
    - <kbd>Ctrl</kbd> + <kbd>+</kbd>.
    - <kbd>Ctrl</kbd> + Scroll Up.

### Resizing text in Chrome

1. Copy `chrome://settings/fonts` to the address bar and then return on your keyboard.
1. Increase the **font size** to 32px (default is 16px).

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
- Using the incorrect html `lang` code will result in no text-zoom.


## Can I zoom everything instead of resizing text only?

Without going too deep into the Success Criterion, it does not require you to use text-only zoom. But I think it's still a good idea to make sure that pages work well with text-only zoom since some people may want only the text to be bigger.

Practically speaking, I don't think many people know that text-only resizing is available. And that's assuming they're using a browser that supports it. I'd expect most folks that want larger text would use regular browser zooming more often than text-only zooming.

There is even a [Success Technique (G142)](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G142) that says you can pass the Success Criterion by zooming everything.
