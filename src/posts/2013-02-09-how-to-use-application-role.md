---
layout: post
title: Use <code>role='application'</code>
description: Never use role='application' on a widely containing element body if your page consists mostly of traditional page elements.
category: How-to
author: Dennis Gaebel
date: 2013-02-09
further_reading:
  - title: If you use the WAI-ARIA role 'application', please do so wisely!
    url: https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/
    source: Marco Zehe
    year: 2012
  - title: Using ARIA
    url: https://www.w3.org/TR/aria-in-html/#using-aria-role-application
    source: W3C
    year: 2017
  - title: ARIA Widgets and Focus/Forms Mode Support in JAWS and NVDA (Internet Archive)
    url: https://web.archive.org/web/20191222143235/http://accessibleculture.org/articles/2012/09/aria-widgets-and-focus-forms-mode-support/
    source: Accessible Culture
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - howto
---

**Never** use `role="application"` on a widely containing element such as `<body>` if your page consists mostly of traditional widgets or page elements such as links that the user does not have to interact with in focus mode.

Using `role="application"` unnecessarily can cause huge headaches for any assistive technology user trying to use your site/application. Only put it on the `<body>` element if your page consists solely of a widget or set of widgets that all need the focus mode[^1] to be turned on.


## Do

1. Use sparingly.
1. If your page has no resemblance to a classic document in roughly over 90% of its content.
1. Use clear labels within your application.


## Don't

1. If a set of controls or user interface only contains these widgets that are all part of standard HTML[^2]
1. If your widget is dynamic such as a tree view, slider or table.

Unless you take a great deal of care in ensuring that you&rsquo;ve recreated a lot of native&ndash;ish custom navigation, it&rsquo;s almost always better to let the browser/assistive technology handle things. We only recommend using <code>role='application'</code> on a per&ndash;widget basis, and even then: very, very carefully.

[^1]: Allows the user to interact with forms and ARIA&ndash;enabled HTML elements.
[^2]: Standard HTML refers to: text, password, search, tel and other newer input type derivates, `textarea`, `checkbox`, `button`, radio button (usually inside a `fieldset`/`legend` element wrapper), `select` &amp; `option`(s), links, paragraphs, headings, and other things that are classic/native to documents on the web.
