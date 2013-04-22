---
layout: post
title: "How&ndash;to: Use TITLE attributes"
description: "Short answer: Avoid using title attributes except in a few special circumstances."
published: true
categories:
  - How-tos
---
**Short answer:** Don't use them, except in special circumstances.
  
HTML `title` attributes are often perceived as an accessibility (and SEO) bonus, but the opposite is true. For screen reader users the content included inside of the `title` attribute is typically unncessary, redundant, and [possibly not even used](http://www.rnib.org.uk/professionals/webaccessibility/wacblog/Lists/Posts/Post.aspx?id=38). Conversely, content being put in the `title` attribute is being hidden from the (probable) majority of your users. If information is being hidden from the majority of your users, then it's probably not necessary.

There are a few times when using a `title` attribute is appropriate:

- For `<frame>` and `<iframe>` elements
- For providing a label when a text label would be redundant

Rule of Thumb: Serve all users equal content.

### Further reading
- ["Using the HTML title attribute"](http://www.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/) by Steve Faulkner _(Jan 15th, 2013)_
- [RNIB Blog: TITLE attributes](http://www.rnib.org.uk/professionals/webaccessibility/wacblog/Lists/Posts/Post.aspx?id=38) _(May 16th, 2007)_