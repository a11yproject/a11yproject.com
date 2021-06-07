---
layout: post
title: Fixing contrast issues, on your own site and elsewhere
description: "Insufficient text contrast is the most common accessibility issue on websites today, even though by and large be automatically found and fixed. The Fix Contrast browser extension fixes contrast issues for end users."
category: Assistive Technology
author: Kilian Valkhof
date: 2021-06-07
further_reading:
  - title: "Fix Contrast website"
    url: https://fixa11y.com/
    source: Fix contrast
  - title: "Fix contrast for Chrome, Vivaldi and Brave"
    url: https://chrome.google.com/webstore/detail/fix-contrast/pbbcgecjmpkglppfjjggkkbhdnlemhkg
    source: Fix contrast
  - title: "Fix contrast for Edge"
    url: https://microsoftedge.microsoft.com/addons/detail/cglmfaokelifdefnifhfdpmcckjfedeb
    source: Fix contrast
  - title: "Polypane"
    url: https://polypane.app/
    source: Polypane
  - title: "What is color contrast"
    url: https://www.a11yproject.com/posts/2015-01-05-what-is-color-contrast/
    source: The A11Y Project
eleventyNavigation:
  key: { { category } }
  title: { { title } }
tags:
  - assistivetechnology
---

Insufficient text contrast is the most common accessibility issue on websites today. According to the [WebAIM Million report for 2021](https://webaim.org/projects/million/#contrast), 86.4% of home pages world wide have low contrast text. What's worse, this number has been increasing the past three years.

Text contrast issues can by and large be automatically found (and fixed, more on that later), so why do nearly 9 out of 10 sites have contrast issues?

## Before we answer that, a quick intro on what text contrast is.

When we talk about text contrast, what we mean is the difference between the color of the text and the color that's behind the text. To make sure the text is readable for everyone, you need a certain amount of difference between them.

This difference can be measured using a formula that yields a number between 1 (no contrast, white text on a white background) and 21 (the most contrast possible, black text on a white background). That number is called the "contrast ratio".

The formula is part of WCAG, the Web Content Accessibility Guidelines. How the formula works is not that important, but there are a few numbers you should be aware of. For regular text, you need a contrast value of at least 4.5, and for large text just 3, to pass the text for sufficient contrast. (There are more strict rules available too).

Having to score a 4.5 out of 21 doesn't seem like a very high bar to clear, so why do 86% of websites still have contrast issues?

We could blame our own visual perception for that. For example, here's a text with a contrast ratio of 4.12:

<p style="background: #fff; color:#7d7d7d">This text does not have enough contrast</p>

For you this might be fine or it might not be, but in any case you're going to have a hard time seeing the difference between it and this text which has a contrast ratio of 4.54:

<p style="background: #fff; color:#767676">This text does have enough contrast</p>

One of them does not have sufficient color contrast and would fail an accessibility audit, and the other would pass. And if you couldn't tell them apart that wouldn't be odd, they're very close.

And herein lies a potential pitfall for designers and developers. If we only go by what "looks good", we could inadvertently be making inaccessible choices.

## Resolving text contrast issues

There are many design tool plugins and website accessibility checkers that let you test color contrast by manually picking two colors and comparing them. [See a list of tools in this earlier article on color contrast](https://www.a11yproject.com/posts/2015-01-05-what-is-color-contrast/).

For the most part, text contrast issues can be automatically found, and as a developer whenever something can be automated I prefer doing that over repeating an action (like selecting elements or clicking around with a color picker) over and over again. The chance of me missing something increases the more I have to repeat myself.

Instead of doing that manual work I wrote a color contrast checker (part of the web browser for developers I build, Polypane) that automatically goes over all text elements, resolves their font size, color and (actual) background and uses that to calculate the contrast ratio.

Still though, that just helps you find inaccessible colors slightly faster. What now? You could use a color picker to pick a darker (or lighter) color and try again, and maybe you have to do that a few times before you get it right. You could push the problem back to your designer and ask them for a new color, or if you have a design system, switch to the next hue in the palette. All of these take you outside of the flow you're currently in.

You can also calculate the nearest color that does have enough contrast. So that's what Polypane does: when it finds a contrast issue, it will suggest the nearest sufficiently contrasting color for you to use. You can copy it or preview it, all without getting out of the flow you're currently in.

Here's what that looks like:

<video src="/img/posts/2021-06-07-fixing-contrast-issues-on-your-own-site-and-elsewhere/copy-color.mp4" loop="" controls="">Example of a contrast label in Polypane, which shows a failing score, a suggested color that gets applied when you hover over it, and copies that color when you click it.</video>

This is a really useful feature that I didn't wanna keep it locked away in my own product, so it's also available online. When you enter two colors here, you'll get suggestions of similar colors with enough contrast: [color contrast checker](https://polypane.app/color-contrast/).

As an author, it is our responsibility to fix these contrast issues and luckily, computers can help us with this a whole lot.

## But what if you're not the author?

We can fix our own sites, but what about _other people's websites_? After all, the chance you're visiting a website that has low contrast text is nearly nine out of ten times.

I realized I could use the code I wrote to automatically fix websites instead. It doesn't make sense inside Polypane, but it would be really useful as a browser extension.

That browser extension is called [Fix Contrast](https://fixa11y.com) and it freely available for Chrome, Edge, Firefox, Vivaldi and Brave, and hopefully soon for Opera and Safari too.

After you install it, it will automatically fix any text with low contrast up to your preferred contrast ratio.

![The Fix Contrast settings](/img/posts/2021-06-07-fixing-contrast-issues-on-your-own-site-and-elsewhere/ui.png)

You can pick between two defaults, "medium" and "high" contrast, or pick your own minimum ratio for small and large text. You can also opt to add a background color when the text color can't be changed enough.

This will make the web a more accessible place by fixing an issue for users directly, without having to wait on site authors to resolve their issues. I hope you'll want to use it, and share it with other people for which it would be useful.

As it stands, the extension is available in English and Dutch, and I would love help getting it translated into other languages. If that's something you want to help it, please let me know!
