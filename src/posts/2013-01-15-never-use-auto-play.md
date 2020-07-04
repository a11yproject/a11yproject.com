---
layout: post
title: Don't auto-play video, music and more
description: Why you shouldn't auto-play anything that could distract the user from their main task.
category: Quick tup
author: Emma Patricios
date: 2013-01-15
further_reading:
  - url: https://docs.microsoft.com/en-us/windows/desktop/uxguide/vis-animations#accessibility
    title: Accessibility of animations and transitions from Microsoft
    source: Microsoft Docs
  - url: http://www.prettysimple.co.uk/blog/index.php/2009/07/autoplaying-videos/
    title: "Auto-play: a usability and accessibility failure"
    source: A Pretty Simple blog
  - url: http://www.punkchip.com/autoplay-is-bad-for-all-users/
    title: Autoplay is bad for all users
    source: Punkchip
  - url: http://www.mmcwatters.com/blog/2015/6/23/against-autoplaying-videos
    title: Autoplay blues
    source: Michael McWatters
  - url: https://www.nngroup.com/articles/video-usability/
    title: Video Usability
    source: Nielsen Norman Group
  - url: https://www.nngroup.com/videos/distracting-animations/
    title: Animations are Distracting! (Video)
    source: Nielsen Norman Group
  - url: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
    title: "prefers-reduced-motion - CSS: Cascading Style Sheets"
    source: MDN web docs
  - url: https://webkit.org/blog/7551/responsive-design-for-motion/
    title: Responsive Design for Motion
    source: WebKit
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - quicktip
---

Not auto-playing your media will make everyone happy.


## Sound

People using screen-readers navigate by listening, so any sound playing when the page loads will interfere immensely. It will also be frustrating to any person that may be listening to music or is in a quiet area with their sound on high.

In [a note on audio control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html), the Web Content Accessibility Guidelines (WCAG) suggests:

> Therefore, we discourage the practice of automatically starting sounds (especially if they last more than 3 seconds), and encourage that the sound be started by an action initiated by the user after they reach the page, rather than requiring that the sound be stopped by an action of the user after they land on the page.


## Vision

Vision includes video and CSS/JavaScript animations like slide-shows and carousels.

Some groups of people may have a problem with moving content on a web page that starts without warning. This includes people with certain types of learning difficulties who can find it hard to concentrate or focus on tasks when distractions are present. 


## In HTML5

The [HTML5 specification](https://w3c.github.io/html/semantics-embedded-content.html#element-attrdef-media-autoplay) includes the `autoplay` attribute along with the following provisions:

> Authors are urged to use the autoplay attribute rather than using script to trigger automatic playback, as this allows the user to override the automatic playback when it is not desired, e.g. when using a screen reader.

Even though an `autoplay` attribute is included they also suggest:

> Authors are also encouraged to consider not using the automatic playback behavior at all, and instead to let the user agent wait for the user to start playback explicitly.


## What if you can't say no?

As web developers, we don't always have the luxury of making business decisions, so there are a couple of recommendations to follow:

1. Ensure media lasts for [five seconds or fewer](https://www.w3.org/TR/WCAG21/#pause-stop-hide) before stopping for good.
1. If media lasts over five seconds, you must provide the user with an option to [stop or pause it](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html).

It is also considered good practice to indicate a link will navigate to a location that contains auto-playing media. For example, a link to YouTube could be written as, "Beethoven - Moonlight Sonata (YouTube)".
