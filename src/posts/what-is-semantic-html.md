---
title: What is Semantic HTML
description: "The Web Accessibility Initiative is W3C's effort to improve accessibility of the Web for people with disabilities."
category: Background
author: David A. Kennedy
date: 2023-03-18
tags:
  - background
---

A common refrain comes up often in the accessibility field. "Use semantic HTML," people say.

But what does that mean and why does it matter? More importantly, what do you get with semantic HTML?

## What is Semantic HTML

The word "semantic" has a few meanings. In computer science, semantics provides the rules for interpreting expressions of code. In this case, semantics lays out the rules for how HTML (the code) gets interpreted. Those rules govern structure and meaning.

### Structure

HTML stands for Hypertext Markup Language. [Invented by Tim Berners-Lee](https://home.cern/science/computing/birth-web/short-history-web) as a way to link together important research documents, HTML has evolved to do much more than that. Early versions had heading elements (h1, h2, etc.), but not the structural elements like `<header>`, `<main>` and `<footer>`. Those came later. Each of these elements gives structure to the document, the web page. Creating semantic code means picking the right element for the job, giving your page structure.

### Meaning

The elements also have a meaning underneath. Every [element has an implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles). For example, the `<header>` element [has the implicit role of "banner."](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role) That means that a screen reader will read that role as a landmark.

People who use screen readers can navigate by those landmarks, granting an easier way to skim the content of a page. If a developer used a `<div>` instead of a `<header>`, the implicit role would be absent, unless provided with extra code. That means the HTML won't be as useful to the machines that interpret it.

## What you get with Semantic HTML

When you select the right element for the content you have, you get some things for free. Free as in the web platform gives it to you without any other effort. We talked about one already:

1. Structure and meaning gets conveyed to browsers and assistive technologies.
2. Some elements come with built in keyboard functionality, for example, the `<form>` element.
3. Other elements may communicate state to the browser and assistive technology. Radio buttons and checkboxes do this.
4. The browser will give you some CSS styles for free.
5. Search engines can index the content more efficiently so people can find it.
6. RSS readers (and Reader mode) can parse and style the content effectively.

If you use a `<div>` or `<span>` improperly in place of a more semantic element, you may have to recreate functionality. Worse yet, many people who rely on semantic HTML as the key underpinning of the web won't be able to use what you've made. Choose wisely.

## References and Further Reading

1. [MDN Web Docs: HTML — Structuring the web](https://developer.mozilla.org/en-US/docs/Learn/HTML)
2. [WebAIM: Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)
3. [24 Ways: Accessibility Through Semantic HTML](https://24ways.org/2017/accessibility-through-semantic-html/)
4. [CSS-Tricks: Why, How, and When to Use Semantic HTML and ARIA](https://css-tricks.com/why-how-and-when-to-use-semantic-html-and-aria/)
5. [Web.dev: Use semantic HTML for easy keyboard wins](https://web.dev/use-semantic-html/)
6. [Scott O'Hara: Div divisiveness](https://www.scottohara.me/blog/2022/01/20/divisive.html)
7. [Hidde de Vries: More to give than just the div: semantics and how to get them right](https://hidde.blog/more-to-give-than-just-the-div-semantics-and-how-to-get-them-right/)
8. [Léonie Watson: Understanding semantics](https://tink.uk/understanding-semantics/)
9. [A Brief History of Hypertext](https://thehistoryoftheweb.com/brief-history-hypertext/)
10. [Foundations: HTML Semantics](https://tetralogical.com/blog/2022/10/05/foundations-html-semantics/)
