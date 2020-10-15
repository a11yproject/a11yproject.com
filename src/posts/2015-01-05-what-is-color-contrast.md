---
layout: post
title: What is color contrast?
description: What is color contrast and why do we need it for web accessibility?
category: Background
author: Rachel Vasquez
date: 2015-01-05
updated_by: Emily Lane
last_updated: 2018-11-17
further_reading:
  - title: Contrasting Colors
    url: https://www.lifewire.com/contrasting-colors-in-design-1078274
    source: Lifewire
    year: 2018
  - title: The Contrast Minimum
    url: https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
    source: W3C
  - title: Understanding Conformance
    url: https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-levels-head
    source: W3C
  - title: Basic Color Theory
    url: https://www.colormatters.com/color-and-design/basic-color-theory
    source: Color Matters
  - title: Color Contrast And Why You Should Rethink It
    url: https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/
    source: Smashing Magazine
    year: 2014
  - title: Providing A Style Switcher To Switch To High Contrast
    url: https://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/SL13
    source: W3C
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - background
---

In color theory, contrasting colors, also known as [complementary colors](https://en.wikipedia.org/wiki/Complementary_colors), are colors from opposing segments of the color wheel. Colors that are directly across from one another on a basic color wheel provide maximum contrast.

Oftentimes companies implement complementary colors to provide the most contrast in their brand. The IKEA logo uses blue and gold, which are direct opposites on the color wheel, as does the FedEx logo. These allow for maximum recognizability and readability, the latter of which is especially important for web accessibility.


## What does this mean for web accessibility?

On the web, the use of complementary colors is about finding shades that provide enough contrast between content and the background for anyone with [low vision impairments and color deficiencies](/posts/2013-01-22-understanding-visual-impairment/). 

This doesn't mean colors should only be limited to contrasting colors, but instead that care should be taken to ensure a level of contrast in body text, logos, and essential diagrams or other pieces of content. There are a number of tools to help designers and developers check color contrast, including these listed below:

- [Tanaguru Contrast Finder](http://contrast-finder.tanaguru.com/)
- [Contrast Ratio by Lea Verou](http://leaverou.github.io/contrast-ratio/)
- [Colour Contrast Analyzer by Paciello Group](https://developer.paciellogroup.com/resources/contrastanalyser/)
- [Color Contrast Checker by WebAIM](https://webaim.org/resources/contrastchecker/)

These tools test your colors against a contrast ratio. 

A contrast ratio of 4.5:1 is the minimum Web Content Accessibility Guideline (WCAG) 2 standard for regular sized text. For more information on how these ratios are calculated, there is a link to an article by W3C called "The Contrast Minimum" included in the Further Reading section following the article.

The level to which a pair of colors are contrasted is measured with a grade system, known as "levels of conformance". The highest attainable grade is AAA, which requires a 7:1 contrast ratio. W3C states that because it is not always possible to reach the AAA level of conformance across entire sites, the goal is to get the highest level in crucial areas across a site, such as headlines and body text.


## What else can we do?

Aside from using color contrast tools to determine your site's colors, there are some other ways you can keep your site's contrast in mind:

- The larger the font and wider the stroke, the more legible it will be with lower contrast. Therefore the contrast requirement for larger font is lower. W3C recommends starting at 18pt regular weight or 14pt bold text.
- Provide tools for users to adjust the foreground and background colors of your site on the front end. This is especially helpful for people that need to either switch to a low contrast or a high contrast mode. This gives them more control over the contrast ratio and covers everyone using your site regardless of what kind of vision loss or color deficiency they have.
- Steer clear of text-based images and use text wherever possible. If that's not possible, consider using a high resolution for text images. Speaking of text images, [don't forget to fill out the alt text](/posts/2013-01-14-alt-text/).
- Ensure that your placeholders in forms also have valid color contrast.
