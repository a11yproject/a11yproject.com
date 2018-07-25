---
layout: post
title: |
    How-to: Future proof your accessibility efforts.
description: Ways to make your accessibility effort as future proof as possible.
date: 2013-01-22
# last_updated:
published: true
categories:
  - How-tos
---
Future proofing your accessibility work will help lower your development costs as well as support current and future user agents, such as assistive technologies (AT). [WCAG][1] has two guidelines, **Parsing** and **Name, role, value**, for future-proofing your website.

1. [Parsing](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html) relates to ensuring that user agents and AT are able to read and navigate your web site correctly. Validating your site using the [W3C Markup Validator](https://validator.w3.org/nu/) can help you find errors in your markup and ease the burden of the AT parsing your web page. Follow the official specifications for your markup. E.g. make sure to close open tags (`<div class="a-class">...</div>`) and use unique IDs.
1. [Name, role, value](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html) are related to interface components and controls (i.e, focus states). By default, all standard HTML controls already meet this criteria. This guideline is aimed mainly at developers that design and/or script their own interface components and controls.

While these are only two recommendations to make your site more accessible, it should have a good spot in every web developer's workflow. Use of checklists, [like The Accessibility Project checklist](https://a11yproject.com/checklist.html "Checklist for accessibility tasks"), can help keep you on task.

[1]:https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat "WCAG 2.0 recommendation 4.1: Compatible"
