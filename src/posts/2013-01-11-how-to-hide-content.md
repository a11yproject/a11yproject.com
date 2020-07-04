---
layout: post
title: Hide content
description: How-to hide content but still make it accessible to screen readers.
category: How-to
author: Dave Rupert
date: 2013-02-15
updated_by: Michael Fairchild
last_updated: 2019-07-28
further_reading:
  - title: HTML5 Hidden Attribute
    url: https://davidwalsh.name/html5-hidden
    source: David Walsh
    year: 2012
  - title: Inclusively Hidden
    url: https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html
    source: Scott O'Hara
    year: 2017/2019
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - howto
---

Developers commonly use `display: none` to hide content on the page. Unfortunately, this common action can be problematic for people who use screen readers, especially if the hidden content was *meant* to be for them to discover...

There are real world situations where visually hiding content may be appropriate, while the content should remain available to assistive technologies, such as screen readers. For instance, hiding a search field's `label` as a common magnifying glass icon is used in its stead. 

The "clip pattern" accomplishes this task for you; hide the content visually, yet provide the content to screen readers. Unlike CSS positioning and negative text-indent techniques, the "clip pattern" also works with RTL (Right-to-Left) languages for localization. See the article *[Hiding Content for Accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)* for more information on this visually-hidden pattern. Also read [Beware smushed off-screen accessible text](https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe) for information on the *added line* in the code snippet.

```css
.visually-hidden { 
    position: absolute !important;
    height: 1px; 
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
}
```

If the `.visually-hidden` class is applied to natively focusable elements (such as `a`, `button`, `input`, etc) they **must** become visible when they receive keyboard focus. Otherwise, a sighted keyboard user would have to try and figure out where their visible focus indicator had gone to. 

With modern browsers and IE9 and up, the visually hidden selector can be written like so:

```css
.visually-hidden:not(:focus):not(:active) { 
  /* ... */
}
```

This will ensure that if an interactive element receives focus, the styles of the .`visually-hidden` class will be undone and the focusable content will be exposed.


## Alternatives to `display: none`

The `aria-hidden="true"` attribute produces the opposite effect of the `.visually-hidden` class. It hides content from assistive technology, but not visually. This can be helpful in cases where there are visual cues that screen readers do not need to announce, such as decorative icons that accompany text labels.

There may be instances where content hidden by `aria-hidden` may also need to be visually hidden as well. Rather than toggling another class on the element, the `aria-hidden` attribute could be used as the selecor:

```css
.my-component[aria-hidden="true"] {
    display: none;
}
```

Another way to hide content both visually and from assistive technology is the [HTML5 `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute). To support older browsers like IE9, and to increase the specificity of the `hidden` attribute, you can add the following snippet to your CSS:

```css
[hidden] { display: none !important; }
```
