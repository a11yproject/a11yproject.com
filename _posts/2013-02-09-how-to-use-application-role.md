---
layout: post
title: |
    How&ndash;to: Use role="application"
description: <strong>NEVER</strong> use <code>role=application</code> on a widely containing element such as <code>&lt;body&gt;</code> if your page consists mostly of traditional widgets or page elements.
# date:
# last_updated:
published: true
categories:
  - How-tos
---

**NEVER** use `role="application"` on a widely containing element such as `<body>` if your page consists mostly of traditional widgets or page elements such as links that the user does not have to interact with in focus mode. Using `role="application"` unnecessarily can cause huge headaches for any assistive technology user trying to use your site/application. Only put it on the `<body>` element if your page consists solely of a widget or set of widgets that all need the focus mode[^focusmode] to be turned on.

**Do**

1. Use sparingly.
2. If your page has no resemblance to a classic document in roughly over 90% of its content.
2. Use clear labels within your application.

**Don&rsquo;t**

1. If a set of controls or user interface only contains these widgets that are all part of standard <abbr title="Hyper Text Markup Language">HTML</abbr>[^html]
2. If your widget is dynamic such as a tree view, slider or table.

Unless you take a great deal of care in ensuring that you&rsquo;ve recreated a lot of native&ndash;ish custom navigation, it&rsquo;s almost always better to leave the browser/<abbr title="Assistive Technologies">AT</abbr> to its own devices. We really only recommend it on a per&ndash;in&ndash;page&ndash;widget basis, and even then: very, very carefully.

--------------------------------

**References**:

1. [http://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely](http://www.marcozehe.de/2012/02/06/if-you-use-the-wai-aria-role-application-please-do-so-wisely)
2. [https://dvcs.w3.org/hg/aria-unofficial/raw-file/tip/index.html#application](https://dvcs.w3.org/hg/aria-unofficial/raw-file/tip/index.html#application)
3. [http://www.accessibleculture.org/articles/2012/09/aria-widgets-and-focus-forms-mode-support](http://www.accessibleculture.org/articles/2012/09/aria-widgets-and-focus-forms-mode-support)

[^focusmode]: Allows the user to interact with forms and <abbr title="Accessible Rich Internet Applications">ARIA</abbr>&ndash;enabled <abbr title="Hyper Text Markup Language">HTML</abbr> elements.

[^html]: Standard <abbr title="Hyper Text Markup Language">HTML</abbr> refers to: text, password, search, tel and other newer input type derivates, textarea, checkbox, button, radio button (usually inside a fieldset/legend element wrapper), select &amp; option(s), links, paragraphs, headings, and other things that are classic/native to documents on the Web.