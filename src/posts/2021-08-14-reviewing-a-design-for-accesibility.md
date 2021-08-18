---
title: Reviewing a design for accessibility
description: "Reviewing designs for accessibility is a great way to help designers think more accessibly and to help developers implement more accessibly. We can use short checklists to help us make sure we haven't missed any big things."
category: Quick tip
author: Steve Barnett
date: 2021-08-14
tags:
  - quicktip
---

I'm a big believer in [shifting left](https://www.deque.com/shift-left/): considering accessibility as early in the process as we can. One way we can do this is by reviewing designs for accessibility. This helps us catch anything we've missed before we start developing it.

## What to do: annotate

By adding annotations about the semantics and accessibility of elements on a page we can remove barriers to access. The best way to do annotations might be sticky notes on a printout or [adding comments on a Figma file](https://help.figma.com/hc/en-us/articles/360041068574), or something else. The important thing is that we want to be clear and explicit.

Here are a handful of things that I've found give good value / effort balance when reviewing a design for accessibility. 

## Things to check

- **Page title**
    - Is the page title unique?
    - Does it concisely describe the page content?
- **Headings**
    - Are headings used to divide content up in a logical way?
    - Are the levels shown, without skipping any?
- **Text alternatives**
    - Do all images (including icons) have a text alternative (using the `alt` attribute)? (See [WebAIM's guide to alternative text](https://webaim.org/techniques/alttext/) for more about what this is, and what makes good alternative text)
    - If the image is decorative, is it marked as such (using `alt=""`)? Are we sure it's only decorative?
- **Link and button text**
    - Does each link describe where we'll go when we follow it? Does each button describe what will happen when we use it?
    - Where links or buttons have the same text repeated on a page, do they have a longer accessible name that is unique? For example: "View details of Quarter 1 review" instead of "View details".
- **Standard controls**
    - Are standard controls used? They have accessibility baked in. Example: a pair of radio buttons or a checkbox instead of a custom toggle.
- **Names for form elements**
    - Do all form controls (one input plus one label) have a name? 
    - If the name isn't visible, is it shown in an annotation?
- **Names for groups of form elements**
    - Do groups of related forms controls (such as multiple choice questions) have a name? The name should provide context for the individual questions in the group.
    - If the name isn't visible, is it shown in an annotation?
- **Error messages**
    - Are error messages clear and helpful?
    - Have we said what went wrong and how to fix it?

## Summary

Reviewing designs for accessibility is a great way to help designers think more accessibly and to help developers implement more accessibly. We can use annotations to be explicit about the semantic and accessibility features we want on each page. We can use short checklists (like the one in this article) to help us make sure we haven't missed any big things. 