---
layout: post
title: "Quick tip: Creating valid and accessible links"
description: "Links are used on almost every site on the web, however it is easy to create links that are not accessible to all."
author: emma_patricios
published: true
categories:
  - Quick Tips
further_reading:
  - url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
    title: "<a>: The Anchor element"
    source: MDN web docs
  - url: http://adrianroselli.com/2016/01/links-buttons-submits-and-divs-oh-hell.html
    title: "Links, Buttons, Submits, and Divs, Oh Hell"
    source: Adrian Roselli
---

The anchor element is often cited as the main building block of the World Wide Web. It is used to create a link to other pages, to anchors within the same page, to other resources (such as a PDF) or to an email address. How can we make sure they are accessible to everyone?

## Start with valid HTML

In order for the `<a>` element to be valid HTML it must have:

- **an `href` attribute** - the location of the anchor, page or resource
- **link content** - text describing where the link is going, this could be plain text or the <a href="https://a11yproject.com/posts/alt-text/
">`alt`</a> attribute of an image
- **opening and closing tags**

## Write helpful link text

Common unhelpful link texts are 'click here', 'read more' and 'link'. These are problematic because when a person using a screen-reader is navigating using links alone these will be read out of context. Where would you expect any of those three links to go if you heard them? It's impossible to know.

Think about restructuring your sentence to remove 'click here' or 'link' and then surround the meaningful part with the link:

```
// bad
To see our documentation <a href="/README.md">click here</a>.

// better
We have made our <a href="/README.md">documentation</a> available.
```

'Read more' can be fixed by post-fixing what we will be reading more about:

```
// bad
<a href="/full-article">Read more</a>.

// better
<a href="/full-article">Read more - Accessible Landmarks</a>
```

## What about the `title` attribute?

The `title` attribute is not exposed by browsers in an accessible way meaning that people using keyboards and touch-only devices will never see that information.

> &ldquo;If you want to hide content from mobile and tablet users as well as assistive tech users and keyboard only users, use the title attribute.&rdquo; - <a href="https://developer.paciellogroup.com/blog/2010/11/using-the-html-title-attribute/
">Using the HTML title attribute - The Paciello Group</a>

Ultimately, do not use the `title` attribute on `<a>` elements.

## Focus state and keyboard

Some developers/designers see the focus outline of links as ugly and remove them.
People navigating using the keyboard require this focus state to keep track of where they are. Best practice is to <a href="https://a11yproject.com/posts/never-remove-css-outlines/">never remove CSS outlines</a> however there are accessible solutions to styling.

The `<a>` element as standard can be activated by pressing the <kbd>Enter</kbd> key, so be mindful if you are attaching scripting not to override this functionality.

## When an `<a>` is not suitable

If you have an `<a>` element that has:

- an empty or no `href` attribute
- scripting attached via the `onclick` attribute or listeners

This will probably be triggering an action on the same page, such as opening a menu or toggling content and as such is a much better candidate for the `<button>` element.
