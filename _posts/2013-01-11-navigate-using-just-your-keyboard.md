---
layout: post
title: "Quick test: Navigate using just your keyboard"
description: "A quick accessibility test that you can run on your sites right now."
author: dave_rupert
date: 2013-01-11
last_updated: 2018-08-24
categories:
  - Quick Tests
further_reading:
  - url: https://webaim.org/techniques/keyboard/
    title: "Keyboard Accessibility"
    source: WebAIM
    year: 2018
  - url: https://www.nngroup.com/articles/keyboard-accessibility/
    title: "Keyboard-Only Navigation for Improved Accessibility"
    source: Nielsen Norman Group
    year: 2014
  - url: https://www.usertesting.com/blog/why-keyboard-usability-is-more-important-than-you-think/
    title: "Why Keyboard Usability Is More Important Than You Think"
    source: User Testing
---

Testing your site for keyboard navigation will help ensure that keyboard users can access your site.

As a bonus, sites that can be navigated with a keyboard are more likely to be navigable with other input devices such as switches.

## How to navigate a website with a keyboard
Generally, pressing <kbd>tab</kbd> moves focus between interactive elements and pressing <kbd>enter</kbd> will interact with them.

If you are using Safari, <kbd>option-tab</kbd> is the default keyboard shortcut to move focus between elements. You can update your settings to make <kbd>tab</kbd> the default navigation key by following the instructions in this article: [Quick Tip: Safari Keyboard Navigation](https://a11yproject.com/posts/safari-keyboard-navigation/)

Additional keyboard shortcuts are described here: [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)

## Things to keep in mind while testing
It is not enough to simply tab through a webpage from start to end. While navigating the site, keep these things in mind:
- Interactive elements should be functional using only keyboard input.
- The focused element should be visible and have an obvious focus style. See article: ["Quick Tip: Never remove CSS outlines"](https://a11yproject.com/posts/never-remove-css-outlines/).
- Focus should move between elements as they appear on the page and not jump back and forth.
- There should be a way to skip past lengthy spans of content, like global navigation menus. See article: ["How–to: Use Skip Navigation links"](https://a11yproject.com/posts/skip-nav-links/).
