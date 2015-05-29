---
layout: post
title: Getting Started with NVDA
description: A quick overview of navigating a webpage using the NVDA screen reader
author: Scott Vinkle
published: true
categories:
  - Assistive Technology
---

NVDA is a free and open source screen reader from [NVAccess](http://www.nvaccess.org/). It is available for the Windows operating system and officially supports Internet Explorer, Firefox, and Chrome web browsers. There is also a ton of [braille display support](http://www.nvaccess.org/files/nvda/documentation/userGuide.html?#SupportedBrailleDisplays)!

NVDA is available for download here: http://www.nvaccess.org/download/
 
After everything is installed you can press `Ctrl + Alt + n` to start NVDA. Quitting NVDA is done by pressing `NVDA + q`, then `enter` at the prompt.

## The NVDA Modifier Key
Each screen reader has a special key or key combination to perform tasks. NVDA’s default keyboard modifier key is the `insert` key. So, for example, to start reading a web page, you could press `insert + down arrow`. As an option, if you are using a laptop you can also use the caps lock key as a modifier. This can be set in the `Preferences > Keyboard settings...` menu.

## Reading Text
Here are some basic shortcuts to read text using NVDA.

Command | Description
--------|------------
Ctrl | Stop reading
NVDA + down arrow | Start reading from current position
NVDA + up arrow | Read current line
Ctrl + left / right arrow | Read previous / next word
Ctrl + up / down arrow | Read previous / next paragraph
up / down arrow | Read previous / next line
left / right arrow | Read previous / next character

## Shortcut Keys
These shortcut keys can be used to quickly jump between specific elements on a page. Elements can be cycled through backwards by holding `shift`, then press the shortcut key.

Key | Description
--------|------------
Tab | Move to next focusable element
d | Navigate through landmarks
k | Navigate through links
h | Navigate through headings
1 - 6 | Navigate through headings level 1 to 6
f | Navigate through forms
t | Navigate through tables
Ctrl + Alt + up / down / left / right arrow | Navigate table content
b | Navigate through buttons 
l | Navigate through lists
i | Navigate through list items
g | Navigate through graphics / images

## Advanced Navigation
By pressing `NVDA + f7`, NVDA displays a listing of all elements on the page. This is helpful to quickly skip to a specific area or element on the page. It also helps with testing by gaining an understanding of what each element might sound like to the end user. Do those “read more” links give enough context to be useful?

![NVDA element list being used on a website](https://lh5.googleusercontent.com/yyqauIxGLPoIiUqpP2xHf0ZQ-pwH4V36YSDnenYbY3aKiZISV1e4NR-2uzXeMeV5xfnKEJGKNhPXj4A=w1896-h835)

## Descriptive Output
If you’re used to using VoiceOver and miss the on-screen text description output, NVDA also has this available as a feature. To enable descriptive text output, check the `Tools > Speech viewer` checkbox. This will open a new, always-on-top, window with a continuous log of text that is being described by NVDA.

![NVDA speech viewer being used to help describe a website](https://lh4.googleusercontent.com/imLhnaTBxET3bFhPUV5sKnuUXNawockaah3vS5YKNXhhz_egYZAhhp3GKgloHGmaDlFCnaUhQz0J8-s=w1899-h846)

## A note on styling
One feature that other screen readers have that NVDA doesn’t is custom focus styles. Others like Apple’s VoiceOver or Google’s Chromevox have a custom focus style for links or for input controls that aid in navigation. NVDA does not have a custom focus style so it is very important to style page elements with the `:focus` pseudo-class. It’s good to make a habit of adding this whenever the `:hover` pseudo-class is used. Also, avoid using `outline: none` as this removes focus styles completely from view. 
