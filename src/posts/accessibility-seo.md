---
title: Accessibility and SEO
description: "SEO and accessibility have a lot more in common than you would think. Many of the same practices that we use to further enable people to enjoy our digital experiences are also great for search engines."
category: Myth
author: Cooper Hollmaier
date: 2021-07-01
further_reading:
  - title: "Plain Language Website"
    url: https://www.plainlanguage.gov/
    source: United States Government
tags:
  - myth
---

Search engine optimization and accessibility have a lot more in common than you would think.

Many of the same practices that we use to enable everyone to enjoy our digital experiences also open the doors for search engines.

## The intersection of people and search engines

Search engine optimization often gets a bad reputation. In the early years, marketers were adding blocks of keywords into pages by the truck load. Getting to the top of the results by any means necessary was the game. Companies focused on publishing content that was machine-first, not people-first.

The Search Engine Optimization (<abbr>SEO</abbr>) industry has since evolved. Marketers who choose to build for people over profit, are those that gain increased visibility online. Catering to bots and algorithm changes, by contrast, is often a game of whack-a-mole and traffic gains are short lived.

Below, we will examine some of the ways accessibility and <abbr>SEO</abbr> teams can work together towards a future where everyone wins.

## Headings

Search engines crawl through an endless sea of webpages everyday. Assembling information into search results would be impossible without some semblance of structure.

This is where section headings come into play. When implemented to provide meaning rather than styling, headings create an easy way to scan and navigate a document for all people.

```html
<!-- Meh -->
<strong>Animals</strong>
<p>Monkeys, Lions, Bears</p>

<!-- Better -->
<h1>Animals</h1>
<p>Monkey, lions, and bears are all examples of animals.</p>
<h2>Monkeys</h2>
<p>Monkeys are primarily found in tropical rain forests.</p>
<h2>Lions</h2>
<p>All wild lions live on the African continent, with the exception of a small population in western India.</p>
<h2>Bears</h2>
<p>Species of bears exist almost everywhere in the world.</p>
```

Properly implemented HTML section headings help search engines, too. To determine if a page is relevant to a person's search, Google has to know about the contents of a page. If a page title isn’t present in the code, search engines may use other elements from the document in its place. The level-one heading is generally a good substitute.

Headings can also help pages rank for a broader array of terms. For example, on a product page for a pair of shoes, including
"Reviews" as a section heading may help that page show up for searches like “Product Name + Reviews”, where it may have only ranked for the product name.

```html
<!-- Meh -->
<h1>A cool pair of shoes</h1>
<p>Read the latest <a href="#reviews">reviews</a> for this product.</p>

<!-- Better -->
<h1>A cool pair of shoes</h1>
<h2>Reviews</h2>
<h2>Questions</h2>
<h2>Size Chart</h2>
```

Taking time to fine tune the outline of the page will lead to better results for people <strong>and</strong> bots.

## Links

Anchor tags are the backbone of the entire internet. They are also the HTML elements that power search engine results. In fact, of the three ways that Google and other companies discover pages on the web ([XML Sitemaps](https://developers.google.com/search/docs/advanced/sitemaps/overview), [Internal Links](https://moz.com/learn/seo/internal-link), [Backlinks](https://moz.com/learn/seo/backlinks)), two involve anchor tags.

Anchors do more than send people to a new destination, though. Writing good anchor text paints a clear picture of what’s going to happen next.

Most of us have encountered our fair share of links with the text, "learn more" or "read more." Labels like this cause confusion and suspicion about what interacting with the link will do. Search engines do not have a good idea of where they will end up, either.

For <abbr>SEO</abbr>, links are a vote of confidence from other sources around the internet. Links with the text, "footwear," "fashion," and "rubber insoles" are ones that people are more likely to click on. Search engines also find these sites to be more authoritative on the subject than ones whose inbound link text is bursting with "learn more."

Focus on creating descriptive and consistent links between pages. Building pathways between sites and pages that help people first, will pay big dividends for your <abbr>SEO</abbr>.

```html
<!-- Meh -->
<a href="/p/shoes-1234">Learn more</a>

<!-- Better -->
<a href="/p/shoes-1234">A cool pair of shoes</a>
```

## Language

Words and phrases that need a PhD to comprehend are rarely found in the search box. In fact, the biggest returns on investment are often gained when we write in plain language.

For example, people who need new heels for their shoes aren't looking for "cobblers near me." They are searching for "shoe repair."

Avoiding long sentences, lingo, and uncommon words also helps people with cognitive disabilities. Complex language choices may exclude them from participating in your offerings.

When in doubt, break your ideas into more manageable chunks. Everyone will appreciate your brevity.

```html
<!-- Meh -->
How search engines crawl, index, and rank pages.

<!-- Better -->
How search engines discover, organize, and display results.
```

## Media

As the internet has evolved, so has the presentation of information. What used to be plain text on the page is now enriched by images, audio, and video. With richness, comes complexity.

For search engines, these new mediums mean new opportunities for engagement. There are [four places](https://youtu.be/1Zqkz8Y_kFw?t=132) on Google alone that a published video can show up.

Incorrect implementation of video content can lead to confusion for people and bots. Captions, text alternatives, and unambiguous naming can provide vital context for search engine algorithms. Similarly, poor text alternatives may frustrate someone using assistive technology, by adding too much redundant content to the page.

Digital text remains the most compatible form of information. If you want to capture the attention of all your audience members, search engines included, take the time to get it right.

```html
<!-- Meh -->
<img src="dsc-1234.jpg" />

<!-- Better -->
<img
  src="cool-shoes-1234.jpg"
  alt="Cool shoes with a red upper and sky blue laces."/>
```

## When we work together, everyone wins

Search engine optimization and accessibility professionals do not have to be at odds. In many ways, the goals of the two disciplines are similar, but with different user-agents. Working together to produce code, content, and comprehension for people first, will lead to better outcomes for all.
