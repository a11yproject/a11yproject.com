---
layout: post
title: Understanding Colourblindness
description: What is colour blindness, and how can we design with it in mind?
author: matthew_higgins
published: true
categories:
  - Background
---

Some peoples' eyes can't tell the difference between certain colours; that's not to say they see everything in greyscale. Total colour blindness is very rare in humans.

Yet, colour vision deficiencies (typically grouped together as "colour blindness") are not rare. Some form of colour blindness affects at least one in twenty people; [Wikipedia has a helpful table](https://en.wikipedia.org/wiki/Color_blindness#Epidemiology), based on [a journal article](https://apfmj.biomedcentral.com/articles/10.1186/s12930-014-0010-3). There are [several different forms](http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/). The most common, red-green colour blindness, affects around one in twelve men.

Colour blindness is less profound than many impairments. Yet, people with colour vision problems often face restrictions on certain activities. This varies around the world. For example, Romania prohibits residents who are colour blind from driving. Yet, the USA doesn't consider colour blindness as a disability, for workplace discrimination purposes.

I've avoided going into the different types here, as the principles are the same for each. Also, [Wikipedia's article on colour blindness](https://en.wikipedia.org/wiki/Color_blindness) has some excellent descriptions.

## What does this mean for accessibility on the web?

Don't rely on colour alone to communicate. As a result, you don't risk making life difficult for colour blind users. 

Sticking to this is also compliant with the WCAG; guideline [1.4.1 covers making content distinguishable using colour](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html).

In practice, you can achieve this without too much extra work. For example, imagine you are using icons to represent tasks the user has outstanding. It might seem logical to show items that need attention in red, and those that are good in green. 

The problem comes for users who can't tell the difference. One small change, such as overlaying a check mark icon over the good items, will help determine which items are good and which need attention.

Sometimes there is no space to do this. The periodic table, for example, often colour-codes the chemical symbols of the elements. With a huge table with a standardised layout adding more text or symbols might not be practical. 

## Available Tools

One option to help with colour accessibility would be to design with colours people with colour blindness can tell the difference between. There are lots of tools for this very purpose available for free on the web, and as browser extensions. Some popular examples include:

- [Colorblind web page filter by Toptal](https://www.toptal.com/designers/colorfilter)
- [I want to see like the colour blind Chrome extension](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-co/jebeedfnielkcjlcokhiobodkjjpbjia)

Using them is pretty simple. You take your web page (or other interface), and run it through the tool. The tools pick out colours that are common in one type of colour blindness, like red and green. Then, the tool will replace the affected colours with one colour. This allows you to see the view the way someone with that type of colour blindness might.

Since it's possible to measure colour vision, this should give you a good idea of how each type feels.

Colour blindness is so common, that there are unlikely to be any scenarios where it's not relevant.

