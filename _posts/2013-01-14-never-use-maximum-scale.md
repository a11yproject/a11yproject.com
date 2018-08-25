---
layout: post
title: "Quick tip: Never use <code>maximum-scale=1.0</code>"
description: "Why you never ever should use <code>maximum-scale=1.0</code> in your viewport meta tag."
author: thomas_sjogren
# date:
# last_updated:
categories:
  - Quick Tips
---

## About the `maximum-scale` attribute
Using the viewport meta tag the wrong way can hinder users with visual problems accessing your website. By setting `maximum-scale=1.0`, you are disabling the functionality to use pinch zoom on mobile devices, and forcing users to view your page a certain way.

The **bad** way:

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">


The **good** way:

    <meta name="viewport" content="width=device-width, initial-scale=1.0">


Avoiding `maximum-scale=1.0` allows your site to meet users' needs and provide a better experience.

## About the `user-scalable` attribute
The `user-scalable` attribute can likewise cause problems for users who use the built-in zoom functionality of their web browser. The attribute is set as `user-scalable=yes` by default, which means that users are able to control the zoom setting on a webpage. Changing it to `user-scalable=no` would prevent desktop users' zoom settings from applying to a webpage and prevent mobile users from using pinch zoom.

Avoid setting `user-scalable` to `no` to assure better accessibility of your site; either leave it as defaulted by not referencing the `user-scalable` attribute or set it to `yes`.
