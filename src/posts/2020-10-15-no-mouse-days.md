---
layout: post
title: Enabling keyboard culture with No Mouse Days
description: Tips on ditching your mouse and creating more accessible experiences.
category: How-to
author: Marcy Sutton
date: 2020-10-15
further_reading:
  - title: "The #NoMouse Challenge"
    url: https://nomouse.org/
    source: The DO-IT Center at University of Washington
  - title: No Mouse Days on npm
    url: https://www.npmjs.com/package/no-mouse-days
    source: Marcy Sutton
    year: 2019
  - title: No Mouse Days on GitHub
    url: https://github.com/marcysutton/no-mouse-days/
    source: Marcy Sutton
    year: 2019
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - howto
---

Wouldn’t it be great if designers and developers tested their digital experiences for keyboard accessibility on the regular? And by extension, screen reader accessibility? That’s where the #NoMouse challenge and No Mouse Days come in.

The DO-IT Center at University of Washington originally started the [No Mouse challenge](https://nomouse.org/), complete with its own website, logo, and [hashtag](https://twitter.com/hashtag/nomouse) to spread awareness about the need for keyboard-accessible websites and applications.

The challenge is pretty straight-forward:

1. **Step 1. Use the Web without a mouse.**
  Can you access all features? Can you reach and operate all interactive controls? Can you easily tell where you are on the page?
2. **Step 2. Learn more about accessible web design.**
3. **Step 3. Spread the Word!**

Building on that initiative came [No Mouse Days](https://npmjs.com/package/no-mouse-days), an npm package that disables the mouse cursor on web pages with CSS. It started as a cheeky joke, and then it actually became [popular](https://twitter.com/MiriSuzanne/status/1184142272968953856).

The idea of No Mouse Days was to make it easy to hide the mouse cursor so it would become extremely obvious when a user interface didn’t support the keyboard, perhaps disabling it automatically for front-end development one day a week. If you have further ideas for No Mouse Days or other culture-changing techniques, contributions are always welcome on [GitHub](https://github.com/marcysutton/no-mouse-days) and [Twitter](https://twitter.com/marcysutton)!

No matter how you go about it, establishing a mouse-free development day at least once a week could work wonders for people who can’t use a mouse at all. You might find interactive controls that aren’t actually interactive for large segments of the population and lacking visible focus outlines which make keyboard navigation difficult. 

Surfacing issues with keyboard-support early and often will give teams something to react to, and hopefully dedicated tooling and processes can make it second nature through more inclusive design and development.
