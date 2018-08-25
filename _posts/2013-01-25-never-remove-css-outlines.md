---
layout: post
title: "Quick tip: Never remove CSS outlines"
description: "Removing CSS outlines without proper fallbacks can make it impossible to navigate your site with a keyboard."
author: guilherme_simoes
# date:
# last_updated:
categories:
  - Quick Tips
---
Use of the rule `:focus { outline: none; }` to remove an outline results in the link or control being focusable but with no visible indication of focus for keyboard users. Even worse, methods to remove it such as `onfocus="blur()"` result in keyboard users being unable to interact with the link or control.

If you do not like the default focus outline that is displayed when a user clicks on an interactive element, you have 3 accessible solutions:

1. Style the outline. Webkit browsers have a more prominent glow so you could try [styling it](https://developer.mozilla.org/en-US/docs/CSS/outline) to make it less obtrusive. Consider the use of `a:focus { outline: thin dotted; }` to normalize the look of the outline across browsers.

2. Style the element itself. You can remove the outline as long as you style the focused element differently (using `color`, `background-color`, `border` or `text-decoration: underline` for example).

3. Remove outlines for mouse users only, if you truly *must* do so. Start without applying any `outline: none` rules. If a mouse event is detected apply those rules using JavaScript. Remove the rules again if keyboard interaction is detected. Here are 2 examples of accessible outline removal scripts:

    * [outliner.js](https://gist.github.com/2470777), a cross-lib implementation with event delegation, by [Aireh Glazer](https://twitter.com/#!/arglazer)

    * [outline.js](https://github.com/lindsayevans/outline.js), a similar approach that uses `mousedown` instead of `mouseover`, by [Lindsay Evans](https://twitter.com/lindsayevans/)

    * [What Input?](https://github.com/ten1seven/what-input), differently from the previous two, adds an attribute to your `body` allowing you to write CSS that will be enabled only if the user is using the keyboard to navigate.

    Consider this third solution as a last resort. Some browser/screen reader combinations fire mouse events, which could cause outlines to disappear while using this method.

In conclusion, using `outline: none` without proper fallbacks makes your site significantly less accessible to any keyboard only user, not only those with reduced vision. Make sure to always give your interactive elements a visible indication of focus.

## Further reading
- [The plague of outline:0](https://webaim.org/blog/plague-of-outline-0/)
- [Web Content Accessibility Guidelines (WCAG) 2.0 (2.4.7)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-focus-visible)
- [Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator](https://www.w3.org/TR/2008/NOTE-WCAG20-TECHS-20081211/F78)
