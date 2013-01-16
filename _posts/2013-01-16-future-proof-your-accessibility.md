---
layout: post
title: |
    How-to: Future proof your accessibility efforts.
description: Ways to make your accessibility effort as future proof as possible.
# date: 2013-01-16
# last_updated:
categories:
  - How-tos
---
Adapting good accessibility on a web site may add additional cost to the development, so it's important that you future proof your efforts as much as possible. Doing this will help support current and future user agents, such as assistive technologies. [WCAG 2.0 recommendation 4.1: Compatible][1] includes two sections, *Parsing* and *Name, role, value*, that specifies how to easily accomplish this without adding too much extra work.

The main goal with the *Parsing* criterion is to ensure that user agents and assistive technologies are able to read and navigate your web site correctly. This is easily achieved when following the official specifications for the markup language you choose to use. E.g. making sure to close open tags (`<div class="a-class">...</div>`) and using unique IDs. Validating your web pages with a tool like [The W3C Markup Validator](http://validator.w3.org/ "The W3C Markup Validation Service") can take you a long way when trying to find problems and errors in your markup.

*Name, role, value* on the other hand, are mainly aimed at developers that design and/or script their own interface components and controls. This is because all standard HTML controls already meet this criterion, if used following the specification. It's recommended that you read up on this guideline if you are working with a lot of custom designed or scripted interface components.

While these are only two recommendations to make your site more accessible, it should have a good spot in every web developers workflow. Use of checklists, [like the one we have composed here on The Accessibility Project](http://a11yproject.com/checklist.html "Checklist for accessibility tasks"), can help keeping the task under control.

*(If you are looking for more information on this subject, the articles [Understanding Success Criteria 4.1.1: Parsing](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html "Understanding Success Criteria 4.1.1: Parsing") and [Understanding Success Criteria 4.1.2: Name, role, value](http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html "Understanding Success Criteria 4.1.2: Name, role, value") are good places to start.)*

[1]:http://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat "WCAG 2.0 recommendation 4.1: Compatible"