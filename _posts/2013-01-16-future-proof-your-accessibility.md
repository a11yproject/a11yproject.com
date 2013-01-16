---
layout: post
title: |
    How-to: Future proof your accessibility efforts.
description: Ways to make your accessibility effort prepared for the future.
# date: 2013-01-16
# last_updated:
categories:
  - How-tos
---
Adapting good accessibility on a web site adds additional cost to the development, so it's important that you future proof your efforts as much as possible. Doing this will help support current and future user agents, such as assistive technologies. [WCAG 2.0 recommendation 4.1: Compatible][1] includes two sections, *Parsing* and *Name, role, value*, that specifies how to accomplish this.

[*Parsing (4.1.1)*][2] includes three basic guidelines that will help ensure that user agents and assistive technologies are able to interpret and parse your content correctly:
 1. Validating web pages
 2. Fully conforming to specification
 3. Using HTML according to spec

While these might seem like three 'best practices' it's worth mentioning as they build the foundation for assistive technologies to work. Visit [Understanding success criteria 4.1.1][2] if you looking for more specific information about this guideline.

[*Name, role, value (4.1.2)*][3], on the other hand, are mainly aimed at developers that design and/or script their own interface components and controls. This is because all standard HTML controls already meet this criterion, if used following the specification. It's recommended that you read up on this guideline if you are working with a lot of custom designed or scripted interface components.

Adapting these two recommendations will not only make your site more accessible but also ensure compatibility with future user agents and assistive tools.

[1]:http://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat "WCAG 2.0 recommendation 4.1: Compatible"
[2]:http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html "Understanding Success Criteria 4.1.1 - Parsing"
[3]:http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html "Understanding Success Criteria 4.1.2 - Name, role, value"