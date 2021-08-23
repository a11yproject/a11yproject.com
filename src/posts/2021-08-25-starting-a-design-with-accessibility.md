---
title: Starting a design with accessibility
description: "Three quick tips to help us design more accessibly."
category: Quick tip
author: Steve Barnett
date: 2021-08-25
tags:
  - quicktip
---

Even better than [reviewing a design for accessibility](https://www.a11yproject.com/posts/2021-08-14-reviewing-a-design-for-accessibility/) is designing with accessibility in mind from the start. It helps us consider the wide range of people who use our product.

Here are three things we can do to start a design with accessibility.

## Do a text-only design

### What to do

Before opening up our favourite design tool (like [Sketch](https://www.sketch.com/) or [Figma](https://www.figma.com/) or [Adobe XD](https://www.adobe.com/products/xd.html)), we can write out the design in text. We can use a numbered list, and do this with pen and paper or in a text editor. 

Write out the:

- section headings; 
- content and function of each image;
- text of each link;
- text of each button;
- name of each form element.

### Why to do it

Writing the content in a numbered list lets us be clear on:

- the source order of elements in the HTML (this is the order that a screen reader will read the page in);
- the hierarchy of elements on the page (which can help us make choices about layouts on different screen sizes)
- the focus order of the page (to make sure it's logical and meaningful).

Writing headings lets us divide the page up into logical sections. Screen reader users often use headings as a way of navigating around a page.

Writing the text of images means we’ll already have `alt` text (or something that’s a good start on it). It helps us be clear on what information (if any) the image is conveying.

Writing the text for links highlights why “Click here” isn’t helpful link text. Link text should describe where the person goes when they follow the link.

Writing the text for buttons highlights why "Submit” usually isn’t helpful button text. Button text should describe what happens when the person presses the button.

Writing the names of form elements forces us to think of good labels. It forces us to think about the clearest name for each element.

## Do an HTML-only design

### What to do

Go through the text-only design and expand it to use only HTML elements. No CSS at this point! That means no presentation (except things with defaults, like heading styles) and no layout (everything will be on one column).

### Why to do it

- Designing with only HTML gives us the same benefits as writing the page out in a number list. The source order, hierarchy of elements, and focus order of the page are clear.
- We can only use one element for one thing, so it forces us to decide what each thing really is. For example: is this a link or a button? If it’s for navigation, use a link. If it’s for an action, use a button.
- Designing with HTML forces us to decide on the function of each thing (however we end up styling it). For example: is it a multiple-choice question where we can only pick one? That’s a group of radio buttons.

## Go off The Happy Path

[“The Happy Path”](https://en.wikipedia.org/wiki/Happy_path) is the “everything went well and nothing went wrong” scenario. While this is a nice idea, it doesn’t represent the real world and how people and computers interact.

### What to do

Review the design and try and break it. Now annotate the design with how to help the person using the page. Can we improve the labels of fields? Can we add help text for fields? What error messages can we show that will tell the person what went wring and how to fix it? If we’re reviewing it’s okay to think in CSS now! 

One nice trick for doing this is to flip it and try the opposite.

- We can ask ourselves “if I was trying to do this wrong on purpose, what would I do?” For example: imagine not entering data in any required fields, or entering the wrong format.
- Pick an element and flip, try the opposite. For example: if an error message uses colour, check what it would be like without colour.

### Why to do it

Going off the Happy Path forces us to:

- consider error states explicitly. It makes us write error messages up front.
- think about the wider range of human experience. It helps is realise where we might be adding barriers by making assumptions about a person’s abilities.

## Summary

Reviewing a design for accessibility is a good way to make sure we ship accessible code. Starting a design with accessibility is even better. It helps us to think about the diverse and complicated range of people who will be interacting with our designs and code. And it helps us make sure that we don't put up any barriers for them.

Three ways we can do this are: do a text-only design; do an HTML-only design; go off The Happy Path.
