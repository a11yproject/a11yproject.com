---
layout: post
title: Text resizing in iOS and Android
description: Things to keep in mind for designing accessible mobile apps.
category: Assistive Technology
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
  - assistivetechnology
---

When you're designing for mobile, it's important to remember that some people will need to change the size of the content to read it easily.

There are so many ways to view content on mobile devices, from zooming in to orienting the screen differently, so a failure to design in a dynamic environment can lead to accessibility issues. There are different ways you can attend to this, whether you're writing an app for iOS or Android.

## Considerations for iOS

In iOS, users can use [Full Screen Zoom or Window Zoom](https://support.apple.com/guide/iphone/zoom-iph3e2e367e/ios) to magnify parts of the screen. To allow them to resize the type, use [dynamic type](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/typography/#dynamic-type-sizes), which enables your app's type to be resized.

If you manually limit how large your text scales it may cause issues for people who need a bigger font. You want the text to scale dynamically instead of stopping at the point you set, because that size may still not be visible to all people.

[Minimum font-size](https://uxdesign.cc/guide-for-designing-better-mobile-apps-typography-5796495ef86f) for body text should be 17pt.

## Considerations for Android

You can use a [tool called the Android Emulator](https://developer.android.com/studio/run/emulator) to preview how your app works in the context of different android devices. This can help you stay aware of how people who use different types of androids experience your app.

Again, users can only zoom in on specified areas, so you'll need to use [scale-independent pixels](https://www.pixel-ruler.net/android-scale-independent-pixel) to determine the size of your text.

There isn't a tool like Dynamic Type in Android, so you'll need to scale the text at different sizes yourself. Material design [has a resource](https://material.io/design/typography/the-type-system.html#type-scale) that makes a good starting point.

[Minimum font-size](https://uxdesign.cc/guide-for-designing-better-mobile-apps-typography-5796495ef86f) for body text should be 16sp:

 ```
 android: textSize=16sp
 ```

You'll also want to remember to make your [content container scrollable](https://medium.com/mesmerhq/designing-accessible-text-for-android-variable-font-and-screen-sizes-392fd386aea5). If it's not, you'll just cut off the extra content when a person zooms in.

Also consider that apps may contain HTML views. There are a couple things to keep in mind here for accessibility as well.

## HTML

In your HTML, make sure to use relative units for responsive design. Here's [a resource from The CSS Layout Workshop](https://thecssworkshop.com/lessons/relative-units) for applying them to your HTML via CSS. If you don't use relative units, people could end up having to use horizontal and vertical scrolling to view content, [which violates WCAG 1.4.10](https://www.w3.org/TR/WCAG21/#reflow).

Note that a person's pinch-to-zoom capability will be frustrated on mobile < iOS10 if you add `maximum-scale=1.0` to the `meta` element. This could [force a person to view your content without zooming](https://www.a11yproject.com/posts/2013-01-14-never-use-maximum-scale/), which could make that content unviewable to them.
