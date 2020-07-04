---
layout: post
title: Future-proofing your accessibility efforts
description: Ways to help make your accessibility efforts are as future proof as possible.
category: How-to
author: Thomas Sjogren
date: 2013-01-22
updated_by: Scott O'Hara
last_updated: 2019-01-06
further_reading:
  - url: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
    title: Introduction to HTML
    source: MDN
  - url: http://w3c.github.io/html/
    title: HTML 5.3 draft
    source: W3C
  - url: https://html.spec.whatwg.org/multipage/
    title: HTML Living Standard
    source: WHATWG
  - url: https://www.w3.org/TR/WCAG21
    title: WCAG 2.1
    source: W3C
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - howto
---

Your future self, coworkers, and most importantly customers and clients will thank you for developing with accessibility in mind.


## Tech debt goes down when accessibility goes up

The best way to future proof your accessibility efforts is to ensure websites and applications are built with a foundation in [proper HTML semantics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML). We can help ensure we are future-proofing our project by following two rules from [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/#robust) (WCAG): **Parsing** and **Name, Role, Value**.

Following these rules has the bonus value of better supporting current and future [browsers and other user agents](https://developer.mozilla.org/en-US/docs/Glossary/User_agent), while additionally ensuring assistive technologies (AT) such as screen readers will be more likely to correctly interpret the content of our projects.


## Breaking down the rules

Let's define the WCAG rules and look at some quick tips to help follow them.

### [4.1.1 Parsing](https://www.w3.org/TR/WCAG21/#parsing)

Following this rule helps ensure that browsers and AT will be able to correctly interpret your web interface without complications from poorly-structured markup.

- The [W3C Nu HTML Checker](https://validator.w3.org/nu/) can help you locate errors in your source or rendered markup. Any reported validation can be corrected, which will help decrease the likelihood of ATs incorrectly parsing your website.
- Follow the official HTML specifications for guidance on writing correct markup. Some quick tips: make sure to close open tags (`<div class="a-class">...</div>`), use unique `id`s, and don't incorrectly nest HTML elements.

### [4.1.2 Name, role, value](https://www.w3.org/TR/WCAG21/#name-role-value)

This rule is related to the components and controls that make up the web interface. It helps to ensure components can have their name and role programmatically determined, and that their states, properties, and values can be set by the individual interacting with them.

**All standard HTML controls already meet these rules by default.** The guideline is primarily aimed at developers that heavily redesign or modify the functionality of standard HTML controls, or design and/or script their own interface components and controls from scratch.


## Wrapping up

While these are only two of the criteria to follow to make your website more accessible, they should take a prominent spot in every web developer's workflow.

Additionally, the use of checklists, such as [The A11y Project checklist](/checklist/), can help you future-proof your accessibility efforts.


