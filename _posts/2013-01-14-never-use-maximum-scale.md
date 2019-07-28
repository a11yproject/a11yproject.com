---
layout: post
title: "Quick tip: Never use <code>maximum-scale=1.0</code>"
description: "Why you never ever should use <code>maximum-scale=1.0</code> in your viewport meta tag."
author: thomas_sjogren
date: 2013-01-14
updated_by: eric_bailey
last_updated: 2019-02-04
categories:
  - Quick Tips
---

Using the viewport meta tag the wrong way can prevent people with low vision concerns from accessing your website or web app. 

## About the `maximum-scale` attribute

By setting `maximum-scale=1.0`, you are disabling the functionality to use pinch zoom on certain mobile devices, forcing people to view your page a certain way.

### The bad way:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
```

### The good way:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Avoiding `maximum-scale=1.0` allows your site to meet users' needs and provide a better experience.

In iOS 10, [Apple changed its handling](https://webkit.org/blog/7367/new-interaction-behaviors-in-ios-10/) of `user-scalable`, `min-scale`, and `max-scale` declarations. Their changes removed the effect on pinch-zooming, making it possible to pinch-zoom regardless of the meta tag's suggestions.

However, other effects of the declarations remain, like their effect on whether the browser automatically zooms into focused input elements. And other mobile browsers, [including Chrome on Android](https://developers.google.com/web/fundamentals/design-and-ux/responsive/#ensure_an_accessible_viewport), still forbid user zooming when a `maximum-scale=1.0` rule is present.

## About the `user-scalable` attribute

The `user-scalable` attribute can also [cause problems](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Viewport_scaling) for people who use the built-in zoom functionality of their web browser. 

The attribute is set as `user-scalable="yes"` by default, which means that people are able to control the zoom setting for the page they're visiting. Changing it to `user-scalable="no"` would prevent zoom settings from working on both mobile and desktop devices.

Avoid setting `user-scalable` to `no` to assure better accessibility of your site. Either leave it as default by not referencing the `user-scalable` attribute, or set it to `yes`.