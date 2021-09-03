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
    url: https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html
    source:  WCAG 2.1
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
- Do not use overly long URLs as your link text. This makes it difficult for most screen readers to understand. Short and concise URLs such as twitter.com, github.com/kodecheff may be accepted. This would help users identify the text strings as links if the situation called for it.
- Link texts are best not repeated to avoid disorientation for users with cognitive disability. 

- The `href` attribute should not be empty. Some developers use the pound sign (`#`) as the value for the `href` attribute. There's no point in providing a link without a destination. 

### Dos

- The `aria-label` attribute should be used where appropriate. Because it provides a descriptive information for people that are visually impaired. If used within a paragraph, it could cause a poor experience as the text of the paragraph could sound unnecessarily awkward when reading all at once.
```
<a href="https://w3schools.com/html" aria-label="Read more on HTML" >Read more</a>
```
- For easy readability, link texts should be underlined. Although, traditionally, link texts are underlined with a color by the browser.
- By default, the browser uses the `cursor: pointer` declaration on your CSS. You can use the `a:hover` or `a:focus` style to apply other CSS styles such as color, background-color, or text-decoration, to help identify links on the browser. 
- If the only way to access a link is with a mouse, the link is unusable by keyboard users. Traditionally, links can be easily to navigated to and selected using the `tab` key and `enter` key respectively. This helps keyboard users to easily access your website. Except disallowed using [JavaScript event handlers](https://webaim.org/techniques/javascript/eventhandlers). 
- Link texts should be short and concise. Using a paragraph or an entire sentence is unnecessary and frustrating. 
- Use `skip` link to skip over a long list of links. Some websites use `skip navigation` to skip to the main content. 
```
<header>
  <a href="#content" aria-label="Skip navigation">Skip navigation</a>

  <nav>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
</header>

<div id="content">
  <!-- Content goes in here -->
</div>
```

## Summary

- Do not provide an overly long URL as your link. 
- Links are best not repeated to avoid disorientation of users with cognitive disability. 
- The `aria-label` attribute should be used when necessary. 
- use `skip` link to skip over a long list of links. 
- Careless use of ambiguous link such as `click here`, `link` should be avoided. 
- The `href` attribute should not be empty. 
- Link text should be short and concise. 
