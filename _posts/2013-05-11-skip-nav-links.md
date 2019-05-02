---
layout: post
title: "How-to: Use skip navigation links"
description: "Use skip links to provide a better keyboard navigation experience."
author: cameron_cundiff
last_updated: 2019-05-01
updated_by: donavin_hannon
published: true
categories:
  - How-tos
further_reading:
  - title: "Skip links are important"
    url: https://knowbility.org/blog/2019/skip-links/
    source: Nicolas Steenhout
    year: 2019
  - title: '"Skip Navigation" Links'
    url: https://webaim.org/techniques/skipnav/
    source: WebAIM
    year: 2013
---
**Short answer:** Use skip navigation links in conjunction with a coherent heading outline and [properly structured landmarks](/posts/aria-landmark-roles/).

---

People who navigate by keyboard have to tab through many links to get past repeated content.  People using screen readers are stuck listening to navigation links on every page of your site. This causes frustration and fatigue. Use skip navigation links to upgrade user experience for keyboard and screen reader navigators.

## When to use
Skip links are useful on pages with many groupings of focusable elements. For instance, global navigations that are persistent across a site or application, or page specific widgets containing multiple links. WCAG 2.0 specified a [guideline for bypassing repetitive blocks of content](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html). One technique [recommended by the W3C](https://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/G1) is to include a skip navigation link at the beginning of the page. 

## How to use
Skip navigation links should: 
- be visible only when focused by a keyboard or screen reader
- be the first focusable element on the page
- communicate that it links to the main content
- bring focus to the main content of the page when activated

Place an `a` element with an `href` pointing to the main content in the body of your HTML.

### Example
The A11Y Project has prepared more robust [CSS and HTML code for your own skip navigation link](https://codepen.io/joe-watkins/pen/rjhiK), available on CodePen.

```html
<body>
  <header>
    <a href="#main">Skip to main content</a>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  </header>
  <main id="main">
    <!-- page specific content -->
  </main>
</body>
```

A live implementation of this is available on this page by pressing <kbd>F5</kbd> to refresh the page, then <kbd>Tab</kbd> to put the skip navigation link into focus.

Skip navigation links aid people who navigate primarily by keyboard, but screen readers now support more sophisticated ways of navigating regions. Specifically, they support [heading navigation](https://www.w3.org/TR/2012/NOTE-WCAG20-TECHS-20120103/H69) and ARIA landmarks. You should take advantage of these features by using a [clear heading outline and defining page regions](/posts/aria-landmark-roles/).

### Notes
* Jim Thatcher pioneered skip navigation links [as early as 1998](https://www.jimthatcher.com/skipnavold.htm)
