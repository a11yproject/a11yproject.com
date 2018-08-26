---
layout: post
title: "How-to: Use <code>title</code> attributes"
description: "Short answer: Avoid using title attributes except in a few special circumstances."
author: dave_rupert
published: true
categories:
  - How-tos
---
**Short answer:** Don't use them, except in special circumstances.

HTML `title` attributes are often perceived as an accessibility (and SEO) bonus, but the opposite is true. For screen reader users the content included inside of the `title` attribute is typically unnecessary, redundant, and possibly not even used. Conversely, content being put in the `title` attribute is being hidden from the (probable) majority of your users. If information is being hidden from the majority of your users, then it's likely not necessary.

There are a few times when using a `title` attribute is appropriate:

- For `<frame>` and `<iframe>` elements
- For providing a label when a text label would be redundant

If you must use `title` on images, keep it the same as the `alt`.

Based on the intended behavior for Text Alternative Computation the precedence for calculating a text alternative should be:

- `aria-labelledby`
- `aria-label`
- `alt`
- `title`

In cases where two or more of the above are used, whatever is highest in that list becomes what gets used. Consider the following example:

```
<img src="/path/to/image.png" alt="" title="some stuff that could be useful" />
```

In this case, the `alt` actually becomes the alternative, because it is higher in precedence. So even though the `title` has useful content, it doesn't get used because the `alt` is there. For a universally reliable text alternative for images, the `alt` attribute should be the the preferred method. In cases where a `title` attribute is provided, it should have the same value as the `alt`.

Rule of Thumb: Serve all users equal content.

### Further reading
- [The Trials and Tribulations of the Title Attribute](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/) by Scott O'Hara _(December 22, 2017)_
- ["Using the HTML title attribute"](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/) by Steve Faulkner _(January 15th, 2013)_
- [`title` attribute on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)
