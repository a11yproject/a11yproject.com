---
layout: post
title: |
    Quick Tip: Don't auto-play video, music and more
description: Why you shouldn't auto-play anything that could distract the user from their main task.
author: emma_patricios
categories:
  - Quick Tips
---

**Summary\:** don't auto-play and it will please *all* of your users.

## Sound

People using screen-readers navigate by listening, so any sound playing when the page loads will interfere immensely.

In [a note on audio control](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast-dis-audio.html), WCAG 2.0 suggests:

> Therefore, we discourage the practice of automatically starting sounds (especially if they last more than 3 seconds), and encourage that the sound be started by an action initiated by the user after they reach the page, rather than requiring that the sound be stopped by an action of the user after they land on the page.

It will also be frustrating to any user that may be listening to music or is in a quiet area with their sound on high.

## Vision

Vision includes video and CSS/JavaScript animations like slide-shows and carousels.

Some groups of people, such as those with certain types of learning difficulties, can find it hard to concentrate or focus on tasks. These groups may have a problem with moving content on a web page that starts without warning.

## In HTML5

The [HTML5 specification](https://w3c.github.io/html/semantics-embedded-content.html#element-attrdef-media-autoplay) includes the <code>autoplay</code> attribute along with the following provisions:

> Authors are urged to use the autoplay attribute rather than using script to trigger automatic playback, as this allows the user to override the automatic playback when it is not desired, e.g. when using a screen reader.

Even though an <code>autoplay</code> attribute is included they also suggest:

> Authors are also encouraged to consider not using the automatic playback behavior at all, and instead to let the user agent wait for the user to start playback explicitly.

## What if you can't say no?

We, as web developers, don't always have the luxury of making the business decisions so there are some recommendations to follow ("the clip" - a video, sound clip, animation):

1. Ensure the clip lasts for [five seconds or fewer](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#time-limits-pause) before stopping for good
1. If the clip lasts over five seconds you must provide the user with an option to [stop or pause it](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)
1. It is generally accepted that if the user was aware, when they clicked a link, that the proceeding page would auto-play - for example a link to YouTube

## Further reading

[Accessibility of animations and transitions from Microsoft](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742481.aspx#accessibility)
