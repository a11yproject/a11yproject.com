---
title: Images of Text in Web Accessibility
description: Ensuring that your site conforms to Success Criterion 1.4.5(Images of Text).
category: Background
author: Peter Njuguna Mwaura
date: 2023-02-18
tags:
  - background
---
# Images of Text in Web Accessibility
Success Criterion 1.4.5 of WCAG 2.1 requires that information be presented in a text rather than images where possible. Conforming to this success criterion ensures that information on the website can be easily customized as per the user's needs. Information presented in text format responds to the user's desired customizations such as zooming and text spacing. On the Other hand, text embedded inside an image does not respond to the user's changes in the default browser's settings. For accessibility testers, this violation cannot be detected using automated tools. This article covers how to ensure that websites conform to success criterion 1.4.5. The following is a breakdown of the areas covered in this article.

1. What are images of text.
2. Effects of images of text on accessibility.
3. Testing for images of text.
4. Fixing images of text.
5. Exceptions when testing for images of text.
## What are images of text
Images of text refer to textual information that is embedded inside an image. An example of an image of text is a screenshot of billing information presented on a webpage. Images of text violate Success criterion 1.4.5 of the Web content accessibility guidelines (WCAG). To conform to this success criterion, authors can only use images of text that allow customizations.

## Effects of images of text on accessibility
Images of text affect the following groups of people living with disability.

Images of text affect the following groups of people living with disabilities.
1. People with Low Vision
People with low vision often need to zoom, text space, or change the color of texts presented on websites. Information presented in form of text responds to such custom settings. Textual information presented embedded in an image cannot respond to such custom settings. People with low vision will have difficulties perceiving information that cannot be zoomed such as images of text.

2. Screen Reader users
Screen readers do not read non-text content presented on web pages. For images, authors are encouraged to use alt text acts as a text equivalent. When text is embedded inside a text, the text cannot be read by a screen reader. To ensure that screen reader users perceive textual information, authors are encouraged to avoid images of text.
## Testing for Images of text
Images of text cannot be detected by most automated tools. To test if the site has images of text, The following manual steps could be followed.

Locate any textual information in a webpage.
Try highlighting the text using the mouse.
Notice if the text is moved instead of being highlighted.
If text is moved rather than being highlighted, then it is an image of text.
To confirm if it is an image of text, right click the image and open it in a new TAB.

1. Locate any textual information in a webpage.
2. Try highlighting the text using the mouse.
3. Notice if the text is moved instead of being highlighted.
4. If text is moved rather than being highlighted, then it is an image of text.
5. To confirm if it is an image of text, right click the image and open it in a new TAB.

## Fixing images of text
Rather than embedding images in text, web developers should use text and Cascading style sheets to have the desired output. Text that has background images would still pass this test.

## Exceptions to Success Criterion 1.4.5
The following images of text are exempted to the success criterion 1.4.5.
1. Essential texts represented in images such as Logo text.
2. Images of text that can be customized as just as regular text.
3. Graphs and other Diagrams that present more than textual information.

