---
layout: post
title: "Never use <code>maximum-scale=1.0</code>"
category: "Quick tip"
description: "Why you never ever should use <code>maximum-scale=1.0</code> in your viewport meta tag."
author: thomas_sjogren
date: 2013-01-14
updated_by: eric_bailey
last_updated: 2018-11-24
categories:
  - Quick Tips
---

Using the viewport meta tag the wrong way can prevent people with low vision concerns from accessing your website or web app. 

## About the `maximum-scale` attribute

By setting `maximum-scale=1.0`, you are disabling the functionality to use pinch zoom on certain mobile devices, forcing people to view your page a certain way.

### The bad way:

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
```

### The good way:

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Avoiding `maximum-scale=1.0` allows your site to meet users' needs and provide a better experience. Note that declarations of `user-scalable`, `min-scale`, and `max-scale` are [ignored as of iOS 10](https://webkit.org/blog/7367/new-interaction-behaviors-in-ios-10/). It is still recommended that these declarations are avoided, to support older iOS devices as well as non-Apple products that may respect the meta tag.	

## About the `user-scalable` attribute

The `user-scalable` attribute can also [cause problems](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Viewport_scaling) for people who use the built-in zoom functionality of their web browser. 

The attribute is set as `user-scalable="yes"` by default, which means that people are able to control the zoom setting for the page theyre visiting. Changing it to `user-scalable="no"` would prevent zoom settings from working on both mobile and desktop devices.

Avoid setting `user-scalable` to `no` to assure better accessibility of your site. Either leave it as default by not referencing the `user-scalable` attribute, or set it to `yes`.
