---
layout: post
title: Accessibility is just turning off CSS
description: A brief explanation of a common accessibility misconception.
category: Myth
author: Amara Charles
date: 2020-10-21
last_updated: 2020-10-21
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - myth
---

## Table of contents
### What’s accessibility?
### Is accessibility just turning off css?
### Summary

## Accessibility Is Just Turning Off CSS<br>
### Introduction<br>
Developing websites for people with disabilities has been one of the primary concerns of web developers in recent times.In a bid to achieve this,different practices have been considered.<br>
Websites built without CSS are said to be easily readable and more accessible as basic HTML and JavaScript guarantee shorter page load time and show better compatibility with screen readers,hence ensuring accessibility.How true is this?<br>
 ## What is Accessibility?<br>
Accessibility means that people with disabilities can be able to use websites as well as digital tools and technologies.<br>
 ## Is Accessibility just turning off CSS?<br>
Using simple HTML alone for text formatting and styling is a great place to start if you’re trying to create a user-friendly website,however, turning off CSS entirely doesn’t guarantee an accessible website,in fact a good use of CSS could create better web experiences.<br>
Making websites accessible is a combination of different standard practices.
Here are a few tips;<br>
*  Always include alternative texts to images.This is especially important for blind people using screen readers because the alternative texts explain the images to them.<br>
N/B: They should always deliver the same meaning as viewing image.<br>
```<img src=”img10001.jpg” alt=”An image of a black dog”>
```

*  Apply header tags correctly.<br>
  ``` <h2>Heading</h2>
h2{
Font-size:20px;
}```<br>
*  Push content out of view.As opposed to using ```display:none;  or visibility:hidden;``` use ```margin:-1000px;``` <br>
* Make your links concise and descriptive.Shorter links are easier to understand for people using screen readers and speech recognition software.<br>
Some examples are “Read more” “click here” “learn more”. <br>
 * Always pick your colors carefully.<br>
* Try not to use tables for page layouts or anything else except tabular data.<br>
## Summary<br>
-Accessibility is very essential as it makes your website /digital products available to a wider audience.<br>
-Accessibility is a combination different standard practices.<br>
-Turning off CSS can be useful in achieving accessibility, however you don’t necessarily have to in order to ensure correct data reading order.<br>
-CSS is a useful accessibility tool when used properly.<br>
## Further Reading
-[Introduction to Web Accessibility](https://webaim.org/intro/) .
-[10 Ways to Make Your Website Accessible](https://www.dreamhost.com/blog/make-your-website-accessible/) .