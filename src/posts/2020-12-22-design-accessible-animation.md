---
title: Designing accessible animation
description: A general guide to designing more inclusive animation and what to avoid along the away.
category: How-to
author: Kelly Gillit
date: 2020-12-22
further_reading:
  - title: Designing Safer Web Animation For Motion Sensitivity
    url: https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/
    source: A List Apart
  - title: Designing With Reduced Motion For Motion Sensitivities
    url: https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/
    source: Smashing Magazine
  - title: Your Interactive Makes Me Sick
    url: https://source.opennews.org/articles/motion-sick/
    source: Source
  - title: "Accessibility for Vestibular Disorders: How My Temporary Disability Changed My Perspective"
    url: https://alistapart.com/article/accessibility-for-vestibular/
    source: A List Apart
  - title: Responsive Design for Motion
    url: https://webkit.org/blog/7551/responsive-design-for-motion/
    source: WebKit
  - title: An Introduction to the Reduced Motion Media Query
    url: https://css-tricks.com/introduction-reduced-motion-media-query/
    source: CSS-Tricks
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - howto
---

Animation is used in digital products in many ways, such as drawing a user’s focus to a particular area on the screen, providing another layer to a brand’s style with unique and ownable motion design, and adding a spark of unexpected fun to an otherwise robotic interaction.

But designing animation that surprises and delights accessibly is trickier than it sounds.

Dizziness, nausea, disorientation, migraines, and even seizures can all be caused by well-executed yet inaccessible motion design. Because of this, it is critical to design your animation with both aesthetics and accessibility in mind.

Consider parallaxing—large-scale animation where the foreground and background slide past each other at different speeds—and primary navigation based on horizontal scrolling. These effects, especially when dramatic, can trigger the symptoms mentioned earlier.

Animations inherently carry a lot of visual and cognitive weight, so always take into account how the user will be viewing it. Desktop screens are interacted with at a greater distance than handheld devices, therefore any animation should be responsive to avoid overwhelming or distracting users from anything essential. Users with cognitive and learning disabilities may especially appreciate this.

Next, rein in the animations. Endlessly looping animations at any size can be more disorienting than delightful. Specifying the number of cycles it will play, limiting the duration that it plays, or having the animation paused by default will ensure its accessibility. Another way to handle this is by designing controllers that allow the user to [pause, stop, or hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html) the animation altogether.

While it’s essential that accessible animation starts at the design level, there are additional ways developers can implement these tips behind the scenes. We’ve included some links to help show you how.
