---
layout: post
title: Getting started with macOS VoiceOver
description: How-to guide to the basics of navigating a webpage using Apple’s VoiceOver screen reader, included in macOS.
category: Assistive Technology
author: Mat Marquis
date: 2013-01-14
further_reading:
  - title: VoiceOver commands and gestures
    url: https://www.apple.com/voiceover/info/guide/_1131.html
    source: Apple
  - title: VoiceOver Mac user guide
    url: https://help.apple.com/voiceover/mac/10.15/
    source: Apple
  - title: How to start testing screen reader support using VoiceOver
    url: https://yakim.nl/articles/voiceover-testing/
    source: Yakim van Zuijlen
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - assistivetechnology
---

VoiceOver is the assistive software built into macOS. It provides a richer set of keyboard shortcuts for navigating a website and reads sections of the page aloud based on the current focus. It’s a great way to test the accessibility of a project because it’s always readily at-hand: you can toggle VoiceOver on/off by:

- Toggling it to “on” under “Universal Access” in your system preferences.
- Pressing <kbd>Command</kbd> + <kbd>F5</kbd>

Turning on VoiceOver enables a number of navigational key commands, all of which are performed by pressing Control and Option. This is usually abbreviated to “VO” in Apple’s documentation (so <kbd>VO</kbd> + <kbd>F1</kbd> means <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>F1</kbd>).

To start out, try turning on VoiceOver with <kbd>Command</kbd> + <kbd>F5</kbd>, then use <kbd>VO</kbd> + <kbd>F8</kbd> to open VoiceOver’s preferences window—here you can adjust things like the voice used, speaking speed, and under “web”: your navigation method.


## Navigation modes

There are two modes you can use when navigating with VoiceOver: by “grouping items” or by “DOM order.” These two methods allow you to interact with a page’s content in slightly different ways.

### Grouping items

Grouping items will flag that you are currently focused on a list, and you can begin interacting with the items by pressing the down arrow to “drill down” into those items. This mode attempts to group related content based on how the page is being rendered, and navigating by group will allow you to use the arrow keys to move in any direction. We’ll be focusing on this mode.

### DOM Order

DOM Order will flag that you are entering a list of items, and  drill down into those items automatically. This mode is based entirely on the page’s underlying markup. Navigating by DOM order allows you to shift focus between DOM elements with the left and right arrow keys. The up and down arrow keys are based on the last used navigation method in the “Web Item Rotor.”


## Reading text

Here are some basic interaction and navigation commands for VoiceOver.

Command | Description
--------|------------
<kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>Down arrow</kbd> | Interact with an item
<kbd>VO</kbd> + <kbd>Shift</kbd> + <kbd>Up arrow</kbd> | Stop interacting with an item
<kbd>VO</kbd> + <kbd>Spacebar</kbd> | Perform the default action for the item in the VoiceOver cursor
<kbd>VO</kbd> + <kbd>R</kbd> | Read a row in a table
<kbd>VO</kbd> + <kbd>C</kbd> + <kbd>C</kbd> | Read a column in a table
<kbd>VO</kbd> + <kbd>Up arrow</kbd> | Move up
<kbd>VO</kbd> + <kbd>Down arrow</kbd> | Move down
<kbd>VO</kbd> + <kbd>Left arrow</kbd> | Move to previous
<kbd>VO</kbd> + <kbd>Right arrow</kbd> | Move to next


## The Web Item rotor

<figure role="figure" aria-label="VoiceOver's Web Rotor.">
  <img alt="macOS VoiceOver’s Web Item Rotor showing a list of headings on The A11Y Project's homepage." src="/img/posts/2013-01-14-getting-started-with-voiceover/voiceover-rotor.png">
  <figcaption>VoiceOver's Web Item Rotor.</figcaption>
</figure>

Open the rotor by pressing <kbd>VO</kbd> + <kbd>U</kbd> with VoiceOver enabled, and you’ll be presented with a list of navigational elements on the current page. You can use the rotor to jump directly to links, headings, form controls, tables, web spaces, and ARIA landmarks. You can switch between these navigation methods using the left and right arrow keys, navigate through the list using the up and down arrow keys, and select an item using the enter key or the spacebar.

You can start getting a feel for VoiceOver right here on a11yproject.com. Try it out!
