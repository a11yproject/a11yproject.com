---
title: Alternate text and automation
description: "Alternate (alt) text help people who use assistive technology understand images, and are a core part of the Web Content Accessibility Guidelines (WCAG). They require a human’s input to be effective."
category: Myth
author: Eric Bailey
date: 2021-03-23
further_reading:
  - title: "Why AI will never replace human picture descriptions"
    url: https://www.marcozehe.de/why-ai-will-never-replace-human-picture-descriptions/
    source: Marco Zehe
  - title: "Images Concepts"
    url: https://www.w3.org/WAI/tutorials/images/
    source: WAI Web Accessibility Tutorials
  - title: "An alt Decision Tree"
    url: https://www.w3.org/WAI/tutorials/images/decision-tree/
    source: WAI Web Accessibility Tutorials
  - title: "Alt-texts: The Ultimate Guide"
    url: https://axesslab.com/alt-texts/
    source: Axess Lab
  - title: "Using alt text properly"
    url: https://www.a11yproject.com/posts/alt-text/
    source: The A11Y Project
tags:
  - myth
---

Alternate (<abbr>alt</abbr>) text help people who use assistive technology understand images, and are a core part of the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html). They require a human’s input to be effective.

To create alternate text, you add an [`alt` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt) to an image that clearly and concisely describes what it is depicting:

```html
<img
  alt="A bowl of tomato soup and a grilled cheese sandwich."
  class="recipe-photo"
  src="/images/lunch.jpg" />
```

Assistive technology such as a screen reader will read the text provided inside the `alt` attribute’s opening and closing quotes. It may sound something like:

> Image. A bowl of tomato soup and a grilled cheese sandwich.

This allows a person to know an image is present, and what the image’s content contains. With this context, someone using assistive technology can understand the image’s purpose the same way someone who is not using assistive technology would.

It’s up to the person writing the code to add an `alt` attribute. It’s also up to them to look at the image they’re using and write an accurate description. Many Content Management Systems (CMS) allow the people who use them to include alt text by writing it in a dedicated input field.

<figure role="figure" aria-label="WordPress’ alt text input field for uploaded images.">
	<img alt="A textarea with a label that reads, 'Image settings. Alt text (alternative text). Below the textarea is a sub-label that reads, 'Describe the purpose of the image. Leave empty if the image is purely decorative.' Screenshot." src="/img/posts/2021-03-23-myth-alternate-text-can-be-automated/wordpress-alt-field.png" />
	<figcaption>WordPress’ alt text input field for uploaded images.</figcaption>
</figure>

## Automation

Technologies such as [machine learning](https://en.m.wikipedia.org/wiki/Machine_learning) and [computer vision](https://en.m.wikipedia.org/wiki/Computer_vision) allow us to guess at what an image is based on its arrangements of pixels. For example, we might show a computer hundreds of thousands of photos of fire hydrants to train it to understand what configurations of pixels look “fire hydrant-ish.”

The idea is that you can take these technologies and apply them to a CMS or other publishing system. The publishing system would ideally then be able to automatically apply alternate text to any image uploaded by an author.

The problem is that automated image description is not a perfect science.

Many of these automated detection technologies are still [new and unsophisticated](https://www.theregister.com/2021/03/05/openai_writing_attack/). This means there’s a good chance they haven’t been taught what the image you are uploading is yet. This is especially true for images that contain:

- Multiple subjects,
- A high degree of detail,
- Abstract illustrations,
- Foreign languages,
- Obscure subject matter, and
- Content that is susceptible to [algorithmic bias](https://www.theverge.com/2019/12/20/21031255/facial-recognition-algorithm-bias-gender-race-age-federal-nest-investigation-analysis-amazon).

This oftentimes leads to inaccurate or incomplete alt text for image content. This means that people who rely on alt text are not getting [an equivalent experience](https://www.smashingmagazine.com/2020/05/equivalent-experiences-part1/).


## Highlighting info and thematic content

Image recognition is extremely literal. For example, if you have an image of a family vacation, it may only tell you how many people are present, but not include other relevant details. It’s up to a human to explicitly provide intent about **why** the image has been included.

Consider the following example:

<img alt="A family of four smiling while standing on top of a scenic vacation outlook. The father is taking a selfie while holding his daughter. The mother has her son on her back, and is standing next to him. Behind them the sun is gently setting over an ocean villa." src="/img/posts/2021-03-23-myth-alternate-text-can-be-automated/vacation-photo.jpg" />

An automated description may report something along the lines of:

> 4 people outdoors.

While this is technically correct, it doesn’t communicate the full experience. Consider a human-authored description instead:

> A family of four smiling while standing on top of a scenic vacation outlook. The father is taking a selfie while holding his daughter. The mother has her son on her back, and is standing next to him. Behind them the sun is gently setting over an ocean villa.

This discrepancy is even more apparent if an image is used as metaphor to help communicate larger, more abstract themes.

<img alt="The words, 'wow,' 'so meme,' 'much describe,' 'such a11y,' 'wow' set in a cartoon font floating above a Shiba Inu dog staring sideways at the camera with raised eyebrows." src="/img/posts/2021-03-23-myth-alternate-text-can-be-automated/doge.png" />

Including relevant detail and abstract themes in alternate text is vital, as they are why image may be included in the first place.


## Be wary of false promises

Some companies promise to automatically add accurate alternate text to your image content, either as part of the content creation process, or after the fact as an overlay solution. Because of the issues with automation discussed earlier, [they cannot deliver on this promise](https://www.a11yproject.com/posts/should-i-use-an-accessibility-overlay/).

<figure role="figure" aria-label="Evidence from case Case 1:21-cv-00017-RAL demonstrating an overlay company’s inability to accurately automatically describe an image.">
	<img alt="A photo of a Belkin car charger. Below is is text that reads: Car Chargers. Figure 9: Example from https://www.belkin.com/us/products/. Bulleted list that reads, 'Original text alterative: None provided. Text alternative with accessiBe's Blind User Profile active: belkin. Power electricity and addiction. Issues: accessiBe's machine-based description does not sufficiently communicate image content and purpose.' Case 1:21-cv-00017-RAL. Document 1-2. Filed 01/07/21. Page 17 of 35. Screenshot." src="/img/posts/2021-03-23-myth-alternate-text-can-be-automated/accessibe.png" />
	<figcaption><a href="https://www.scribd.com/document/490740167/Exhibit-A-for-21-cv-00017">Evidence from Case 1:21-cv-00017-RAL</a> demonstrating an overlay company’s inability to accurately automatically describe an image.</figcaption>
</figure>

## What about screen readers?

Some screen readers utilize image recognition technology. It is important to know two things about this:

1. Not every screen reader has this capability, and
1. This feature is a last-ditch effort to understand image content when alt text is not provided.

The image recognition technology used by some screen readers isn’t special. It is susceptible to all the potential issues described earlier. This means that human-authored alt text is still the best option.


## What about an image link?

The presence of a link will be announced much as how the presence of an image will. If a link wraps an image element, the image’s alt text will provide a clue for where the link will go. A human’s guidance helps for these circumstances.

An automated description may report something along the lines of:

> Link. Image. Map.

While human-authored alt text provides better context:

> Link. Image. Paraguay river system.


## What about social media and memes?

[Every major social media platform includes the ability to add alt text to their images](https://blog.hootsuite.com/inclusive-design-social-media/). Some, like Facebook, use an automated image description if none is provided, but they are almost always insufficient.

Memes are oftentimes abstract, where a literal description may not be sufficient to communicate the joke or reference. Veronica Lewis has an excellent post called [<cite>How to Write Alt Text for Memes</cite>](https://veroniiiica.com/2018/11/29/how-to-write-alt-text-for-memes/) that covers the topic extensively.


## Training

A more effective, inclusive way to approach alternate text is to educate people on:

- What it is,
- Why it is important, and
- How to write it effectively.

Make checking for concise, accurate alt text part of your editorial, quality assurance, and code review processes. The more these practices are performed, the more second nature they will become.
