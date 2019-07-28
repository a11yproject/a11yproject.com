---
layout: post
title: "How-to: Use skip navigation links"
description: "Use skip nav links to ease keyboard user fatigue and frustration."
author: cameron_cundiff
published: true
categories:
  - How-tos
---
**Short answer:** Use skip nav links in conjunction with a coherent heading outline and [ARIA landmarks](https://a11yproject.com/posts/aria-landmark-roles/). You may need to also implement a JavaScript polyfill for Webkit based browsers.

---

It can be frustrating and fatiguing for folks with limited mobility to have to have to repeatedly tab through navigation links to get to the main content of a page. People who use screen readers face similar frustration when the page outline is not well defined. In order to address this issue, WCAG 2.0 has specified a [guideline for bypassing repetitive blocks of content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html). One technique [recommended by the W3C](https://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G1) is to include a skip navigation link at the beginning of the page, that changes focus to the first element after the repeated content.

Skip nav links are useful for users who use keyboard navigation only, but screen readers now support more sophisticated ways of navigating regions. Specifically, they support [heading navigation](https://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H69) and [ARIA landmarks](https://www.w3.org/WAI/intro/aria). You should take advantage of these features by using a clear heading outline and defining page regions, as illustrated in [Quick Tip: ARIA Landmark Roles](https://a11yproject.com/posts/aria-landmark-roles/).

### Example

```html
<body>
  <a href="#main">Skip to main content</a>
  <nav role="navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
  <main id="main" role="main">
    <!-- page specific content -->
  </main>
</body>
```

**Disclaimer**: The mechanism by which skip navigation links work had for some time been broken in Webkit based browsers and has only [recently been fixed](https://code.google.com/p/chromium/issues/detail?id=37721). Until these browsers release the fixes, you may need to use a JavaScript polyfill to make skip nav links work.

### Notes
* Jim Thatcher pioneered skip navigation links [as early as 1998](https://www.jimthatcher.com/skipnavold.htm)
* An example of a [JavaScript polyfill by Nicholas C. Zakas](https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/).
* An alternative non-Javascript method would be to add tabindex=-1 or 0 to elements that don't normally receive focus. This adds them to the tab order. [The bug in Chrome](https://code.google.com/p/chromium/issues/detail?id=37721) looks to apply to anchors as well. However, the tabindex bypasses the issue.
