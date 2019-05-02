---
layout: post
title: "How-to: Use skip navigation links"
description: "Use skip nav links to ease keyboard user fatigue and frustration."
author: cameron_cundiff
last_updated: 2019-05-01
updated_by: donavin_hannon
published: true
categories:
  - How-tos
---
**Short answer:** Use skip nav links in conjunction with a coherent heading outline and [ARIA landmarks](https://a11yproject.com/posts/aria-landmark-roles/).

---

It can be frustrating and fatiguing for folks with limited mobility to have to have to repeatedly tab through navigation links to get to the main content of a page. People who use screen readers face similar frustration when the page outline is not well defined. In order to address this issue, WCAG 2.0 has specified a [guideline for bypassing repetitive blocks of content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html). One technique [recommended by the W3C](https://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G1) is to include a skip navigation link at the beginning of the page, that changes focus to the first element after the repeated content.

Skip nav links are useful for users who use keyboard navigation only, but screen readers now support more sophisticated ways of navigating regions. Specifically, they support [heading navigation](https://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H69) and [ARIA landmarks](https://www.w3.org/WAI/intro/aria). You should take advantage of these features by using a clear heading outline and defining page regions, as illustrated in [Quick Tip: ARIA Landmark Roles](https://a11yproject.com/posts/aria-landmark-roles/).

### Example
```html
<body>
  <a href="#main">Skip to main content</a>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
  <main id="main">
    <!-- page specific content -->
  </main>
</body>
```

### Notes
* Jim Thatcher pioneered skip navigation links [as early as 1998](https://www.jimthatcher.com/skipnavold.htm)
