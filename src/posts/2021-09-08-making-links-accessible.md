---
title: Making links accessible
description: Tips on how to make links accessible.
category: How to
author: Pascal Akunne
date: 2021-09-08
further_reading:
  - title: Links and Hypertext
    url: https://webaim.org/techniques/hypertext/
    source:  WAIM Web Accessibility In Mind
    year: 2021
  - title: Link Purpose (Link only)
    url: https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html
    source:  WCAG 2.0
    year: 2016
  - title: Links
    url: https://accessibility.umn.edu/what-you-can-do/start-7-core-skills/links
    source: University of Minnesota
    year: 2021
tags:
  - howto
---

Links are one of the primary elements in web development. Links can be made accessible by making them clear, descriptive and purposeful out of context. This helps break accessibility barriers for both people with visual disability and clear sighted, as well as people with cognitive disability. Links should be made obvious so people can understand what is means. By default, links are underlined by the browser. 


## Guidelines for making links accessible

### Don'ts

- Careless use of ambiguous link texts like `Click here`, `More...`, `Link` are not appropriate and should be avoided. Rather, a text that describes the purpose of that link should be used. 
- Do not use a URL as your link text. This makes it difficult for most screen readers to understand, they read each letter of the URL. 
- Link texts are best not repeated to avoid disorientation for users with cognitive disability. 
- Links should not be made to look like a button, to avoid confusion. Links navigate to webpages while buttons perform other actions like submitting forms. 
- The `href` attribute should not be empty. Some developers use the pound sign (`#`) as the value for the `href` attribute. There's no point in providing a link without a destination. 

### Dos

- The `aria-label` attribute should be used. Because it provides a descriptive link text for people that are visually impaired.
```
<a href="https://w3schools.com/html" aria-label="Read more on HTML" >Read more</a>
```
- For easy readability, link texts should be underlined. Although, traditionally, link texts are underlined with a color by the browser.
- Use the `cursor: pointer` declaration on your CSS. This helps to identify a link on a webpage using the `a:hover` style. 
- Links should be made easy to navigate to and select using the `tab` key and `enter` key respectively. 
- Link texts should be short and concise. Using a paragraph or an entire sentence is unnecessary and frustrating. 
- Use `skip` link to skip over a long list of links. Some websites use `skip navigation` to skip to the main content. 
```
<header>
  <a href="#main-content" aria-label="Skip to main content" >Skip navigation</a>

  <nav>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
</header>

<div id="main-content">
  <!-- Content goes in here -->
</div>
```

## Summary

You can improve both the accessibility and usability of your website or application by making the links concise, descriptive, and purposeful out of context.

There are several mistakes web authors make that create a barrier for accessibility on their websites or applications in regards to hypertext links. Following this guidelines will help you to create an accessible website or application.