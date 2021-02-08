---
layout: post
title: Text resizing in iOS and Android
description: Things to keep in mind for designing accessible mobile apps.
category: Mobile
author: Lucia Cerchie
date: 2021-01-28
further_reading:
  - title: BBC Accessibility Guide
    url: https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/content-resizing/
    source: BBC
  - title: Designing Apps with Accessible Fonts
    url: https://www.mobileux.net/2019/06/24/designing-apps-with-accessible-fonts/
    source: Mobile UX
   
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - mobile
---

When you're designing for mobile, it's important to remember that some people will need to change the size of the content to read it easily. 

There are so many ways to view content on mobile devices, from zooming in to orienting the screen differently, so a failure to design in a dynamic environment can lead to accessibility issues. There are different ways you can attend to this, whether you're writing an app for iOS or Android.

## Considerations for iOS

In iOS, users can only zoom in on specified areas. To allow them to resize the type, use [dynamic type](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/#dynamic-type-sizes), which allows them to [resize the type](https://docs.google.com/spreadsheets/d/1B7UjuckBckAQtILeBCqoIUe3Ze3R8ow2KOQSM_JJI_w/edit#gid=0) in your app.

If you manually limit how large your text scales it may cause issues for people who need a bigger font. 

[Minimum font-size](https://uxdesign.cc/guide-for-designing-better-mobile-apps-typography-5796495ef86f) should be 17pt.

## Considerations for Android
Again, users can only zoom in on specified areas, so you'll need to use [scale-independent pixels](https://www.pixel-ruler.net/android-scale-independent-pixel) to determine the size of your text.

There isn't a tool like Dynamic Type in Android, so you'll need to scale the text at different sizes yourself. Material design [has a resource](https://material.io/design/typography/the-type-system.html#type-scale) that makes a good starting point.

[Minimum font-size](https://uxdesign.cc/guide-for-designing-better-mobile-apps-typography-5796495ef86f) should be 16sp:

`android: textSize=16sp`

You'll also want to remember to make your [content container scrollable](https://medium.com/mesmerhq/designing-accessible-text-for-android-variable-font-and-screen-sizes-392fd386aea5). If it's not, you'll just cut off the extra content when a person zooms in.

## HTML

In your HTML, make sure to use relative units for responsive design. 

Note that a person's pinch-to-zoom capability will be frustrated on mobile < iOS10 if you add `maximum-scale=1.0` to the `meta` element.
