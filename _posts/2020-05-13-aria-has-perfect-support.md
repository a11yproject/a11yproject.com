---
layout: post
title: "Myth: ARIA Has Perfect Support"
description: "ARIA is a very useful tool for helping to enhance accessible web experiences, but it should only be used when no other options are available."
author: eric_bailey
published: true
categories:
  - Myths
further_reading:
  - url: https://a11ysupport.io/
    title: "Accessibility Support"
    source: a11ysupport.io
  - url: https://www.powermapper.com/tests/screen-readers/aria/
    title: "WAI-ARIA Screen reader compatibility"
    source: PowerMapper Software
  - url: https://developer.paciellogroup.com/blog/2018/07/short-note-on-aria-support/
    title: "Short note on ARIA support"
    source: The Paciello Group
  - url: https://css-tricks.com/aria-spackle-not-rebar/
    title: "ARIA is Spackle, Not Rebar "
    source: CSS-Tricks
---

[Accessible Rich Internet Applications (ARIA)](/posts/getting-started-aria/) is an extension of HTML. It is a technology that adds roles, states, and properties that are designed to help with the accessibility of websites and web apps.


## Background

ARIA works by supplementing, adding, removing, or overriding information the browser uses to communicate with assistive technology. For example, adding `aria-hidden="true"` to a HTML element will tell the browser not to report the element, or any of its children to assistive technology. 

`aria-hidden="true"` can be useful for situations where you want to remove something that might normally get reported, such as a SVG icon inside a button. If the button already has a text label, removing the icon helps make sure that the experience is easy to understand by removing unnecessary information that would otherwise be exposed by the decorative icon:

``` html
<button type="button">
  <svg aria-hidden="true" focusable="false">
    <!-- SVG code -->
  </svg>
  Save
</button>
```

ARIA can also be used for interactive controls such as an accordions, tabs, and modals. A thoughtful, skilled application of ARIA can help communicate things like if an accordion panel is in an expanded state, which tab's corresponding tab panel is currently visible, or what is and is not modal content.

Nearly all ARIA should be inserted and updated dynamically via JavaScript. Very little of it is “hard coded” into the HTML it is manipulating. There are many ways to write this JavaScript. You can use “vanilla” JavaScript, or specialized frameworks such as [Ember](https://emberjs.com/), [Angular](https://angular.io/), [React](https://reactjs.org/), [Vue](https://vuejs.org/), [Svelte](https://svelte.dev/), etc. ARIA is compatible with all these frameworks because [it is a standard](https://w3c.github.io/aria/) they observe.

## Support issues

All web technology has compatibility issues. Compatibility issues are created when there is an interaction between:

- The kind of operating system,
- The version of the operating system,
- The kind of browser running on the operating system,
- The version of browser running on the operating system,
- Any modification a person has made to any of the preceding. 

Compatibility issues means there might be discrepancies in how web technology is understood and shown to the person using it. In many cases, it won’t be shown at all.

ARIA is a web technology. In addition to the issues listed above, it can also have compatibility issues that come from:

- The kind of assistive technology being used,
- The version of the assistive technology being used. 

Just because you write code that uses ARIA does not mean the ARIA declarations will work as intended. This is the same as expecting modern JavaScript to work on an old browser such as Internet Explorer 11.

This problem is further complicated in situations where parts of your website or web app use ARIA that relies on different parts of your website or web app that also use ARIA. It can also be affected by [newer ARIA features](https://w3c.github.io/aria/#substantive-changes-since-the-last-public-working-draft) interacting with older features. 

Another thing to keep in mind is that many people who use assistive technology [specifically use older versions of it](https://www.nfb.org/blog/firefox-57-and-screen-reader-compatibility). This helps to ensure compatibility issues are kept to a minimum. Unlike many other other forms of compatibility issues, assistive technology-related compatibility can completely lock a person out of a digital experience, instead of just annoying them.


## What you can do about it

### Before you write any code

1. Check if a complicated interaction can be broken down into simpler parts.
1. Observe the [First Rule of ARIA](https://www.w3.org/TR/using-aria/#rule1): If there is an [existing, relevant HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), use that instead.
1. Familiarize yourself with [the other four rules of ARIA](https://www.w3.org/TR/using-aria/#second).

### When writing code
1. If you have to write ARIA, [check its known support](https://a11ysupport.io/).
1. Use an automated accessibility analysis tool such as [WAVE](https://wave.webaim.org/extension/), [Axe](https://www.deque.com/axe/axe-for-web/), or [ARC](https://www.paciellogroup.com/toolkit/) to check for common implementation issues. Be sure to run the analysis with all relevant states (expanded, collapsed, disabled, etc.) triggered.

### After you write code

1. Verify that the ARIA you wrote works as intended with a few different kinds of assistive technology.
1. Verify that the ARIA you wrote makes sense to [daily assistive technology users](https://www.makeitfable.com/).


## Should you avoid ARIA all together?

No. When used responsibly, ARIA helps people who use assistive technology understand the same experiences people browsing without assistive technology do. 

ARIA should be be the last tool you pull out of your toolbox, not your first.

