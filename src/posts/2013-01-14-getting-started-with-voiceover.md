---
layout: post
title: Getting started with OS X VoiceOver
description: How-to guide to the basics of navigating a webpage using Apple’s VoiceOver screen reader, included in OS X.
author: mat_marquis
category: Assistive Technology
eleventyNavigation:
  key: Assistive Technology
  title: Getting started with OS X VoiceOver
tags:
  - assistivetechnology
---

VoiceOver is the assistive software built into OS X. It provides a richer set of keyboard shortcuts for navigating a website and reads sections of the page aloud based on the current focus. It’s a great way to test the accessibility of a project because it’s always readily at-hand: you can toggle VoiceOver on/off by:

* Toggling it to “on” under “Universal Access” in your system preferences.
* Pressing ⌘+F5

Turning on VoiceOver enables a number of navigational key commands, all of which are performed by pressing Control and Option. This is usually abbreviated to “VO” in Apple’s documentation (so “VO-F1” means “control-option-F1”).

To start out, try turning on VoiceOver with ⌘-F5, then use VO-F8 to open VoiceOver’s preferences window—here you can adjust things like the voice used, speaking speed, and under “web”: your navigation method.

## Navigation modes

There are two modes you can use when navigating with VoiceOver: by “grouping items” or by “DOM order.” These two methods allow you to interact with a page’s content in slightly different ways.

*Grouping items* will flag that you are currently focused on a list, and you can begin interacting with the items by pressing the down arrow to “drill down” into those items. This mode attempts to group related content based on how the page is being rendered, and navigating by group will allow you to use the arrow keys to move in any direction. We’ll be focusing on this mode.

*DOM Order* will flag that you are entering a list of items, and  drill down into those items automatically. This mode is based entirely on the page’s underlying markup. Navigating by DOM order allows you to shift focus between DOM elements with the left and right arrow keys. The up and down arrow keys are based on the last used navigation method in the “Web Item Rotor.”

## The Web Item rotor ##

<img src="/img/rotor.png" alt="Screenshot of OS X VoiceOver’s Web Item Rotor listing navigational headings on a11yproject.com">

Open the rotor by pressing VO-U with VoiceOver enabled, and you’ll be presented with a list of navigational elements on the current page. You can use the rotor to jump directly to links, headings, form controls, tables, web spaces, and ARIA landmarks. You can switch between these navigation methods using the left and right arrow keys, navigate through the list using the up and down arrow keys, and select an item using the enter key or the spacebar.

You can start getting a feel for VoiceOver right here on a11yproject.com. Try it out!
