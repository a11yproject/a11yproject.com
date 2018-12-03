---
layout: post
title: "Quick tip: Don't auto-play video, music and more"
description: "Why you shouldn't auto-play anything that could distract the user from their main task."
author: emma_patricios
categories:
  - Quick Tips
---

Not auto-playing your media will make everyone happy.

## Sound

People using screen-readers navigate by listening, so any sound playing when the page loads will interfere immensely. It will also be frustrating to any person that may be listening to music or is in a quiet area with their sound on high.

In [a note on audio control](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast-dis-audio.html), the Web Content Accessibility Guidelines (WCAG) 2.0 suggests:

> Therefore, we discourage the practice of automatically starting sounds (especially if they last more than 3 seconds), and encourage that the sound be started by an action initiated by the user after they reach the page, rather than requiring that the sound be stopped by an action of the user after they land on the page.

## Vision

Vision includes video and CSS/JavaScript animations like slide-shows and carousels.

Some groups of people may have a problem with moving content on a web page that starts without warning. This includes people with certain types of learning difficulties who can find it hard to concentrate or focus on tasks when distractions are present. 

## In HTML5

The [HTML5 specification](https://w3c.github.io/html/semantics-embedded-content.html#element-attrdef-media-autoplay) includes the <code>autoplay</code> attribute along with the following provisions:

> Authors are urged to use the autoplay attribute rather than using script to trigger automatic playback, as this allows the user to override the automatic playback when it is not desired, e.g. when using a screen reader.

Even though an `autoplay` attribute is included they also suggest:

> Authors are also encouraged to consider not using the automatic playback behavior at all, and instead to let the user agent wait for the user to start playback explicitly.

## What if you can't say no?

As web developers, we don't always have the luxury of making business decisions, so there are a couple of recommendations to follow:

1. Ensure media lasts for [five seconds or fewer](https://www.w3.org/TR/WCAG21/#pause-stop-hide) before stopping for good.
1. If media lasts over five seconds, you must provide the user with an option to [stop or pause it](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html).

It is also considered good practice to indicate a link will navigate to a location that contains auto-playing media. For example, a link to YouTube could be written as, "Beethoven - Moonlight Sonata (YouTube)".

## Further reading

- [Accessibility of animations and transitions from Microsoft](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742481.aspx#accessibility)
- [Auto-play: a usability and accessibility failure | A Pretty Simple blog](http://www.prettysimple.co.uk/blog/index.php/2009/07/autoplaying-videos/)
- [Autoplay is bad for all users | Punkchip](http://www.punkchip.com/autoplay-is-bad-for-all-users/)
- [Autoplay blues — Michael McWatters](http://www.mmcwatters.com/blog/2015/6/23/against-autoplaying-videos)
- [Video Usability - Nielsen Norman Group](https://www.nngroup.com/articles/video-usability/)
- [Animations are Distracting! (Video) - Nielsen Norman Group](https://www.nngroup.com/videos/distracting-animations/)
- [prefers-reduced-motion - CSS: Cascading Style Sheets - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)	
