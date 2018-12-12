---
layout: post
title: "How-to: Future proofing your accessibility efforts."
description: "Ways to help make your accessibility efforts are as future proof as possible."
author: thomas_sjogren
date: 2013-01-22
updated_by: scott_ohara
last_updated: 2018-12-12
published: true
categories:
  - How-tos
further_reading:
  - url: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML
    title: Introduction to HTML
    source: MDN
  - url: http://w3c.github.io/html/
    title: "HTML 5.3 draft"
    source: W3C
  - url: https://html.spec.whatwg.org/multipage/
    title: "HTML Living Standard"
    source: WHATWG
  - url: https://www.w3.org/TR/WCAG21
    title: WCAG 2.1
    source: W3C
---

Your future self, coworkers, and most importantly customers and clients will thank you for developing with accessibility in mind, now.


## Tech deb goes down when accessibility goes up

The best way to future proof your accessibility efforts is to ensure websites and applications are built with strong semantic foundations. By following just two of [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/#robust)' (WCAG) criteria, **Parsing** and **Name, Role, Value**, we can help ensure we are future-proofing our project from tech debt and bugs.

Following these criteria has the bonus value of better supporting current and future [user agents](https://developer.mozilla.org/en-US/docs/Glossary/User_agent), and ensuring assistive technology (AT), such as screen readers, will be more likely to correctly interpret the content of our user interfaces (UI).

### Breaking down the criteria

* [4.1.1 Parsing](https://www.w3.org/TR/WCAG21/#parsing) relates to ensuring that user agents and AT are able to correctly read and navigate your website without complications from erroneous markup.
  ** Using the [W3C Nu HTML Checker](https://validator.w3.org/nu/) can help you locate errors in your source or rendered markup. If any validation errors are found, they can then be corrected which will help decrease the likelihood of ATs incorrectly parsing your website.
  ** Follow the official HTML specifications for guidance on writing correct markup. E.g. make sure to close open tags (`<div class="a-class">...</div>`), use unique `id`s, and don't incorrectly nest HTML elements.
* [4.1.2 Name, role, value](https://www.w3.org/TR/WCAG21/#name-role-value) are related to the components and controls that make up the web interface. Specifically, that these components of the page can have their name and role programmatically determined, and that their states, properties and values can be set by the individual interacting with them.

  By default, all standard HTML controls already meet this criteria. The guideline is primarily aimed at developers that design and/or script their own interface components and controls.

While these are only two of the criteria to follow to make your website more accessible, it should take a prominent spot in every web developer's workflow.

Additionally, the use of checklists, such as [The A11y Project checklist](https://a11yproject.com/checklist.html), can help you future-proof your accessibility efforts.


