---
title: Common UI behaviors that break color blindness
description: A quick overview of behaviors that hinder individuals with color blindness from effectively interacting with digital content.
category: Experience
author: Hamsa Harcourt
date: 2023-05-31
tags:
  - experience
---

Accessibility is all about making sure everyone can use and understand digital content. Colors are an important part of design and communication online, so it's crucial to consider how people with color blindness will experience and interact with websites. Color blindness, or color vision deficiency (CVD), is a condition that affects many people and has an impact on how they see colors.

In this article, we are going to talk about common practices or design elements that can hinder or negatively impact individuals with color blindness. We are also going to talk about how we make content more accessible for people with Color Blindness.

Limited awareness of accessibility on the web has led to common design trends that can inadvertently pose challenges for individuals with color blindness. Here are a few examples:



- The Use of Color-coded Indicators without alternative cues: When colors are used exclusively to convey information, individuals with color vision deficiencies may struggle to interpret or understand the data being presented. A typical example would be displaying error messages, success notifications, or required fields without additional cues like icons, text labels, or patterns, individuals with color vision deficiencies may struggle to understand or differentiate the meaning conveyed solely through color.


- The Use of Colors that Contrast Poorly: Poor color contrast between foreground (text or images) and background colors can make it difficult for individuals with color blindness to read or perceive content. Low contrast can cause text to blend into the background, making it illegible or hard to distinguish.


- The Use of Color-dependent Navigation or Links: We have all come across websites that use colors alone to indicate visited or unvisited links. This can be confusing for people with color blindness because they might not be able to distinguish between different link states without additional visual cues like underlines, bold text, or icons.


- The Use of CSS to Remove Outline from Elements: Interactive elements like buttons, icons, or links that rely solely on color changes for hover or active states can be hard to perceive for people with color blindness. When these states are solely conveyed through color, individuals with color vision deficiencies may miss important interactive cues.

In order to enhance accessibility for individuals with color blindness, it is crucial to take the following aspects into consideration:


- Use Colors that Contrast Well: When selecting colors for your website, it's important to consider the readability and accessibility of your text. To make sure that people with visual impairments or those viewing your content in various lighting conditions can easily read and distinguish the text, WCAG recommends a minimum contrast ratio between the text and its background. For regular text, aim for a contrast ratio of at least 4.5:1. When it comes to larger text or important content like headings, a minimum ratio of 3:1 is sufficient. Thankfully, there are convenient and free online tools available, such as WebAIM's [Color Contrast Checker](https://webaim.org/resources/contrastchecker/), that can help you check and ensure the contrast of your chosen colors. By following these guidelines and utilizing these tools, you can create a website that is both visually appealing and accessible to a wide range of users.


- Provide Visual Feedback: The [Web Content Accessibility Guidelines](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-visual-presentation) (WCAG) advise us to avoid relying exclusively on color to convey information or indicate interactive elements. It suggests incorporating extra visual cues like underlines, borders, or icons alongside colors to enhance or replace color-based distinctions. This approach guarantees that users who may have trouble perceiving color differences can still comprehend the content effectively. When it comes to elements like links that have a focus state, it's important to provide feedback when users interact with them. While it's best to keep outlines if you really must remove them, consider giving your element a background color or text color as an alternative, or even better, provide a customized outline. By following these suggestions, we can make our digital experiences more inclusive and user-friendly for everyone.


- Add Support for Custom Stylesheets: There are plenty of good reasons to support users in customizing the styles of your website to suit their needs. For instance,  A person with a visual impairment might need to enlarge the text on all websites they visit, while another user with color deficiency might find it easier to navigate websites that display high-contrast colors. By allowing users to personalize their experience, you empower them to make your content more accessible and enjoyable for themselves.