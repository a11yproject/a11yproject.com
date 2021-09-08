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

Links are one of the primary elements in web development. Links can be made accessible by making their texts clear, descriptive and purposeful out of context. This helps break accessibility barriers for both people with visual disability and clear sighted, as well as people with cognitive disability. 


## Guidelines for making links accessible

### Don'ts

- Do not remove the ability for links to be navigated to and selected via the `tab` and `enter` keys respectively on the keyboard. 
- Do not use overly long URLs as your link text. This makes it difficult for most screen readers to understand. Short and concise URLs such as **twitter.com**, **github.com/kodecheff** may be accepted. This would help users identify the text strings as links if the situation called for it.
- Link texts are best not repeated to avoid disorientation for users with cognitive disability. 

- The `href` attribute should not be empty (`href="" `). This causes the page to reload. Some developers use the pound sign (`#`) as the value for the `href` attribute. This is a valid approach when implementing Single Page Application routing. But there's a downside to this, it adds an extra entry to the browser history which can be annoying when using the back button on your browser.

### Dos

- Ambiguous link texts like `Click here`, `More...`, `Link` should be put at the end of the sentence/paragraph that describes its destination. Rather than putting it at the beginning of the sentence to avoid confusion for screen reader users who are reading through the page. 
```
<!--good practice--> 
HTML is a standard markup language for creating webpages. It consists of series of elements that tell the browser how to display contents.
<a href="https://www.w3schools.com/html/html_intro.asp">Learn more</a>
```
- The `aria-label` attribute should be used where appropriate. Because it provides a descriptive information for people that are visually impaired. If used within a paragraph, it could cause a poor experience as the text of the paragraph could sound unnecessarily awkward when reading all at once.
```
<!--bad practice-->
<p>In doing this, there are <a href="https://www.washington.edu/accessibility/checklist/contrast/" aria-label="More information on color contrast">color contrast</a> and <a href="https://www.washington.edu/accessibility/checklist/focus/" aria-label="More information on focus visible">focus visible</a> rules to adhere to.</p>

<!--good practice-->
<a href="https://w3schools.com/html" aria-label="Read more on HTML" >Read more</a>
```
- When using an `aria-label` on a link, it MUST meet [2.5.3 Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html#dfn-label) standards.
```
<!--bad practice-->
<a href="http://fzmovies.net/?page=2 aria-label=">>"> >> </a>

<!--good practice-->
<a href="http://fzmovies.net/?page=2 aria-label="next page"> >> </a>

<!--good practice-->
<a href="https://kodecheff.netlify.app" aria-label="view live demo">view</a>
```
- For easy readability, link texts should be underlined. Although, traditionally, link texts are underlined with a color by the browser. This rule is best applied to links within a sentence/paragraph, to distinguish the links from other texts. Navigation links don't necessarily need to be underlined. 

- You can use the `a:hover` or `a:focus` style to apply other CSS styles such as color, background-color, or text-decoration, to help identify links on the browser. In doing this, there are [color contrast](https://www.washington.edu/accessibility/checklist/contrast/) and [focus visible](https://www.washington.edu/accessibility/checklist/focus/) rules to adhere to. 

- Link texts should be short and concise. Using a paragraph or an entire sentence is unnecessary and frustrating. 
```
<!--bad practice-->
<a href="https://www.w3schools.com/html/html_intro.asp">HTML is a standard markup language for creating webpages. It consists of series of elements that tell the browser how to display contents</a>

<!--good practice--> 
<a href="https://www.w3schools.com/html/html_intro.asp">HTML</a> is a standard markup language for creating webpages. It consists of series of elements that tell the browser how to display contents. 


```
- Use `skip` link to skip over a long list of links. Some websites use `skip navigation` to skip to the main content. 
```
<header>
  <a href="#content">Skip navigation</a>

  <nav>
    <ul>
      <li><a href="home.html">Home</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <h1 id="content" tabindex=-1></h1>
</main>
```

## Summary

- Do not provide an overly long URL as your link. 
- Links are best not repeated to avoid disorientation of users with cognitive disability. 
- The `aria-label` attribute should be used when necessary. 
- use `skip` link to skip over a long list of links. 
- Ambiguous link such as `click here`, `link` should be put at the end of the sentence that describes its destination.
- Link text should be short and concise. 
- The `href` attribute should not be empty. 
