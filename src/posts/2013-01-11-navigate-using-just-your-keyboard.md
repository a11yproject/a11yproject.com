---
title: Navigate using just your keyboard
description: A quick accessibility test that you can run on your sites right now.
category: Quick test
author: Dave Rupert
date: 2013-01-11
last_updated: 2018-08-24
further_reading:
  - url: https://webaim.org/techniques/keyboard/
    title: Keyboard Accessibility
    source: WebAIM
    year: 2018
  - url: https://www.nngroup.com/articles/keyboard-accessibility/
    title: Keyboard-Only Navigation for Improved Accessibility
    source: Nielsen Norman Group
    year: 2014
  - url: https://www.usertesting.com/blog/why-keyboard-usability-is-more-important-than-you-think/
    title: Why Keyboard Usability Is More Important Than You Think
    source: User Testing
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - quicktest
---

Testing your site for keyboard navigation will help ensure that keyboard users can access your site.

As a bonus, sites that can be navigated with a keyboard are more likely to be navigable with other input devices such as switches.


## How to navigate a website with a keyboard

Generally, pressing <kbd>Tab</kbd> moves focus between interactive elements and pressing <kbd>Enter</kbd> will interact with them.

If you are using Safari, <kbd>Option</kbd> + <kbd>Tab</kbd> is the default keyboard shortcut to move focus between elements. You can update your settings to make <kbd>Tab</kbd> the default navigation key by following the instructions in this article: [Quick Tip: Safari Keyboard Navigation](/posts/2013-01-11-navigate-using-just-your-keyboard/)

Additional keyboard shortcuts are described here: [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)


## Things to keep in mind while testing

It is not enough to simply tab through a webpage from start to end. While navigating the site, keep these things in mind:

- Interactive elements should be functional using only keyboard input.
- The focused element should be visible and have an obvious focus style. See article: ["Quick Tip: Never remove CSS outlines"](/posts/2013-01-25-never-remove-css-outlines/).
- Focus should move between elements as they appear on the page and not jump back and forth.
- There should be a way to skip past lengthy spans of content, like global navigation menus. See article: ["How–to: Use Skip Navigation links"](/posts/2013-05-11-skip-nav-links/).
