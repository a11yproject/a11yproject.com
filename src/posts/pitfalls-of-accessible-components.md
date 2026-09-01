---
title: Pitfalls of accessible components
description: 
category: Background
author: Erik Kroes
date: 2022-11-30
last_updated: 2022-11-30
tags:
  - background
---

No matter how beautiful your building blocks (components) are, you can still build wrong with them!
More and more you see that components claim to be accessible. That sounds good: components that can be used by everyone, including people with disabilities! It is not always clear what exactly such a claim entails. In addition, it does not give you any guarantees as a builder. You can still make a mess!
What can go wrong? We look at some common pitfalls.

## What are components good for?

Components are great for anything you need to do more than once. You don't want to design and build your button or link every time. That's a waste of your time. You would rather build one version that is very good, and then you can reuse it. Why often build something halfway, if you can spend all that time in one very good version? You can then test that one version with different browsers, mobile, with screen readers and hopefully even with real users!
What you immediately get is consistency. You make everyone happy with that! For example, consider a focus state that is the same everywhere. That takes a lot of thinking.

<figure role="figure" aria-label="It's all in the application.">
	<img alt="A plastic playset is placed on the roof edge of an appartment building." src="/img/posts/pitfalls-of-accessible-components/playset.png" />
	<figcaption>It's all in the application.</figcaption>
</figure>

## Page-specific: content

One page is not the other. And it is precisely in the parts that vary that things can of course still go wrong.

### Content

A bit of a tinkering perhaps, but good to be aware of. You write content for every page. It must be accessible. You can think of avoiding complex language, and avoiding descriptions based on specific senses (such as an "open the red link" or "the text to the right of this").
Content also goes beyond paragraphs and text blocks. Don't forget your alternate texts for images, or captions and transcripts for other media files.

### The page title

Match this as much as possible with the main heading on your page (the `<h1>`) and the names of the links pointing to the page. If there are repeating parts in the title (such as the name of the website), place them as far back in the title as possible. This makes scanning (also with screen readers) easier. The unique and distinctive part comes first.
In a webshop you get something like: “Product - category - webShopName.nl”

## Page-specific: structure

Perhaps you have something reusable for this, such as templates. That's very nice. However, experience shows that these are not always available and do not have priority.

### Landmarks

You want to have your landmarks in order for each page:
- Place your navigation in a `<nav>`
- Place the most important content in a `<main>`
- Use a `<header>` at the beginning of your page and a `<footer>` at the end
- Do you have information aside? Then use a `<aside>`

### Heading structure

Your headings help people navigate through your page. Just like you can scan headlines in a newspaper, you want to do the same on a website.
The `<h1>` is for the main heading; for what your page is about. Below that you want to create a kind of tree structure of your headings. All content logically (both visually and in code) falls under one of your headings. You go from main topic (`<h1>`) to sub-topic (`<h2>`), to sub-sub-topic (`<h3>`), and so on. Never move forward more than one step at a time.

### Focus Order

Make sure that every page you tab through navigates logically. This is easier if you don't use a tab index with a value higher than 0. Creative application of CSS grid or flexbox can also cause the visual order to differ from that in the code.
Do you want to make it completely easy for your visitor? Add a skip link. That is a (often hidden) link at the beginning of the page that allows you to "jump" to the content.

## Difficult to test

### Variations of components

The more features a component has, the greater the chance that it will go wrong. If a component has a boolean attribute, dark mode and two responsive zoom levels, then you quickly end up with (2x2x3=8) eight variations that all need to be tested and maintained. So pay attention to this! If everyone around you has default dark mode on, you can count on issues in light mode.

### Composition

As soon as you start combining components, you can also foresee problems. You would prefer, for example, that forms have been developed and bundled as a complete system. You often combine the same components in forms. If they are delivered separately, unexpected (and untested) situations may arise. Another point of attention!
Related to this is also the topic of relationships. Everything you tie together yourself is prone to errors. If you have a table of contents at the top of your page, you should pay close attention to how it is connected to the content of your page. Or how about a form (field) and an error message or instruction? You want relationships to be clear both visually and in code.

<figure role="figure" aria-label="The right parts in the wrong order.">
	<img alt="A projector is attached to a wall. A projection screen is rolled up on the wall above it. The screen can't be rolled out, making it so the projector can't project on it." src="/img/posts/pitfalls-of-accessible-components/projector-and-screen.jpg" />
	<figcaption>The right parts in the wrong order.</figcaption>
</figure>


### Website-wide

As mentioned earlier, components are good for consistency. If your set of components is not yet very mature or complete, this can still be a point of improvement.
For example, focus states can still differ between pages and components if this is not well thought out and implemented centrally.
Another point for improvement in the broader structure is often the navigability. You want pages to be found and accessed in more than one way. Think of a search function or sitemap next to your menu structure. Typically something you can't solve with a component. Make sure all your pages are part of this and are clearly represented.

## Beyond the pitfalls

Now imagine watching out for all these pitfalls. Are you sure it's going to be okay? No Unfortunately! You can still choose the wrong component for example! You have no guarantee for an accessible end result. The chance that you will succeed with accessible components is many times greater than without!
Components are like the foundation of a house. Are you building on quicksand with crooked window frames? Good luck! A solid foundation with quality parts is what you want. But even with that you can build a house that falls short!

![A curved and cornered wall with a baseboard. The baseboard is split up in separate pieces in a futile attempt to follow the shape of the wall.](/img/posts/pitfalls-of-accessible-components/baseboard.png)