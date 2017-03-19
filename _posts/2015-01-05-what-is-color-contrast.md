---
layout: post
title: What is Color Contrast?
description: What is color contrast and why do we need it for web accessibility?
author: Rachel R. Vasquez
published: true
categories:
  - Basics
---

## Color Theory

Colors from different segments of the color wheel are contrasting colors. In color theory, [complementary colors](https://en.wikipedia.org/wiki/Complementary_colors) (or "opposite" colors) that are directly across from one another on a basic color wheel provide maximum contrast. This means they stand out from one another the strongest compared to being paired with other colors. Complementary colors are two colors that cancel one another out and produce a white/gray-scale color.

Oftentimes companies implement complementary colors to provide the most contrast in their brand. Examples in the wild are the Laker's logo that uses purple and yellow or the Knick's logo that uses blue and orange. Purple and yellow are on opposite sides of the color wheel from each other. So are orange and blue. You may also see complementary colors during the end of the year holidays - as red and green are also complementary to one another.

## What does this mean for web accessibility?

On the web, color contrast is about finding colors that not only provide maximum contrast, but provide enough contrast between content and the background for anyone with [low vision impairments and color deficiencies](http://a11yproject.com/posts/understanding-visual-impairment/). This doesn't mean you have to limit your colors to complementary colors as we just talked about - but the contrast should be kept in mind all the same. The text and non-decorative images need to be clearly legible for everyone regardless of whether they have moderately low vision or color deficiencies. We can check colors for contrast by using one of many contrast tools online. There are more you can find, but here's a list to get you started:

**Color Contrast Tools**

- [Tanaguru Contrast Finder](http://contrast-finder.tanaguru.com/)
- [Contrast Ratio by Lea Verou](http://leaverou.github.io/contrast-ratio/)
- [Colour Contrast Analyzer by Paciello Group](https://www.paciellogroup.com/resources/contrastanalyser/)
- [Color Contrast Checker by WebAIM](http://webaim.org/resources/contrastchecker/)

What these tools do once you provide colors for testing is check them against a contrast ratio. A contrast ratio of 3:1 is the minimum standard for text and vision. For those with visual impairments however, the contrast ratio standard is 4.5:1. The standard ratios differ depending on the vision loss or color deficiency. There's a link to W3C's article at the end of this called "The Contrast Minimum" that explains how these ratios are calculated. The gist of it is that our colors need to fall into these ratios. These ratios have "grades" or what are known as "levels of conformance". Levels of conformance are the requirements you've satisfied. So the more requirements you've met, in our case with contrast, the higher our "grade" or level of conformance will be. The higher, the better. The highest we can reach is AAA. The contrast ratio to reach that level is 7:1.

W3C states that it's not always possible to reach the AAA level of conformance across entire sites. So the goal is to get the highest level you can where it counts.

## What else can we do?

Aside from using color contrast tools to determine your site's colors, there are some other ways you can keep your site's contrast in mind:

- The larger the font and wider the stroke, the more legible it will be with lower contrast. Therefore the contrast requirement for larger font is lower. W3C recommends starting at 18pt regular weight or 14pt bold text.
- Provide tools for users to adjust the foreground and background colors of your site on the front-end. This is especially helpful for users that need to either switch to a low contrast or a high contrast mode. This gives them more control over the contrast ratio and covers everyone using your site regardless of what kind of vision loss or color deficiency they have.
- Steer clear of text-based images and use text wherever possible. If not, consider using a high resolution for text images. Speaking of text images, [don't forget to fill out the alt text](http://a11yproject.com/posts/alt-text/).
- Ensure that your placeholders in forms also have valid color contrast.

## Further Reading:

- [Contrasting Colors](http://desktoppub.about.com/od/glossary/g/contrastingcolors.htm) by http: about.com (2014)
- [The Contrast Minimum](http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) by W3C
- [Understanding Conformance](http://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-levels-head) by W3C
- [Basic Color Theory](http://www.colormatters.com/color-and-design/basic-color-theory) by colormatters.com
- [Color Contrast Tips & Tools](http://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/) by Smashing Magazine
- [Providing A Style Switcher To Switch To High Contrast](http://www.w3.org/TR/2015/NOTE-WCAG20-TECHS-20150226/SL13) by W3C
- [Techniques for High Contrast Icons](http://web.archive.org/web/20160728090107/https://developer.yahoo.com/blogs/ydn/techniques-high-contrast-friendly-icons-153038779.html) by YDN
