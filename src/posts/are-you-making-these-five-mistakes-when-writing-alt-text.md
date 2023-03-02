---
title: Are you making these five mistakes when writing alt text?
description: "When you ask them, most experts’ advice also boils down to: Describe what you see. And while it’s valid advice and may seem simple, it’s not."
category: How-to
author: Daniel Sage
date: 2023-03-02
tags:
  - howto
---

There are many benefits to writing alt text for images, especially from accessibility and legal standpoints.

But most don’t know how to write alt text well. I should know because, for an awful number of years, I was one.

I first learned about alt text in high school while building websites. But my proper lesson began when I took the [Udacity Digital Marketing Nanodegree course](https://www.udacity.com/course/digital-marketing-nanodegree--nd018), which was also my first introduction to marketing.

<figure
	role="figure"
	aria-label="Screenshot from the SEO module of the Udacity Marketing Nanodegree course.">
	<img
		alt="Video still with two columns. The left column has a title of 'Pictures/Video Best Practices', with a table of contents that lists out, 'Add a descriptive caption', 'use an alt tag', 'use a descriptive file name', and 'provide a text description/summary of video content'. 'use an alt tag' is active. The right column shows a news article headline, hero image, and code sample. The headline is 'An Apple A Day Reduces Risk For Heart Disease by 40%: Study.' The image is a man biting into an apple. The code sample highlights the image's alt attribute value, which reads, 'EATING APPLE HEART DISEASE."
		src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/video-screenshot-use-an-alt-tag.png" />
	<figcaption>
		Screenshot from the SEO module of the Udacity Marketing Nanodegree course.
	</figcaption>
</figure>

In this module, I learned about building easy navigation site structures, title tags, breadcrumbs, and meta descriptions—all the good stuff. We also learned about writing alt text and its importance.

Their overall advice? Describe what you see.

I thought that I finally understood it.


## Sometimes it is simplicity that kills

When you ask them, most experts’ advice also boils down to: Describe what you see. And while it’s valid advice and may seem simple, it’s not.

Take the Udacity example earlier: Is this suitable alt text?

<figure
	role="figure"
	aria-label="Source: Udacity Nanodegree Marketing Course.">
	<img
		alt="A code sample highlights an image's alt attribute value, which reads, 'EATING APPLE HEART DISEASE. The image is part of a news article, showing the headline and hero image. The headline is 'An Apple A Day Reduces Risk For Heart Disease by 40%: Study.' The image is a man biting into an apple. Screenshot."
		src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/card-preview-apple-a-day.png" />
	<figcaption>
		Source: Udacity Nanodegree Marketing Course.
	</figcaption>
</figure>

If you close your eyes and someone reads out the words “eating apple heart disease” to you, does that in any way help you make sense of what’s in the image?

What about this example?

<figure
	role="figure"
	aria-label="Source: Business Insider.">
	<img
		alt="A white electric Brother Sewing Machine against a pink background with alt text set as: 'Best sewing Machines - Brother CS7000X 4x3 best sewing machine 2022'."
		src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/best-sewing-machine-overall.png" />
	<figcaption>
		Source: Business Insider.
	</figcaption>
</figure>

Does it?

The answer is a big <strong>no</strong>.

### I used to just describe what I saw

Then two weeks ago, [I watched Tommy Walker, an ex-Shopify senior content marketer and editor, critique an article for its alt text usage](https://www.youtube.com/watch?v=JNLpSLjDwbE&t=16s).

<figure
	role="figure"
	aria-label="A snippet from The Cutting Room Show, hosted by Tom Walker.">
	<img
		alt="Superpath.co's audit score from an Accessibility test. They got 59 out of an 100, and they are marked as 'Not compliant'. But the screenshot alt text is set as 'Screenshot of audit results for Superpath from an accessibility checker'."
		src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/audit-results-for-superpath.png" />
	<figcaption>
		A snippet from The Cutting Room Show, hosted by Tom Walker.
	</figcaption>
</figure>

Notice that the alt text does not communicate <strong>what the audit results are</strong>. Ironically, the article was arguing for accessibility. But it made the point clearer. And for the first time, it dawned on me that I’ve been writing alt text the wrong way.

This got me curious, so I started researching:

- I read numerous UX and SEO blogs,
- I spoke with practitioners in those fields, and
- I chatted with some members of the low vision community.

Here’s what I learned and what I’m now applying to the articles I write:


## 1. Some images should use an empty alt attribute

First, to clarify:

1. An [`alt` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt) is HTML syntax, and
1. Alt text is the description enclosed between the alt attribute's quotes.

All images need an `alt` attribute, but not all images need alt text. These are two different things, so do not mix them up.

<img
	alt="Three HTML image element examples. The first example points to a file called 'progress.svg' located on name.com, and has an alt attribute value of 'Name's logo'. After it is a checkmark icon. The second example points to a file called 'banner.png', and has an empty/nulled alt attribute. After it is a checkmark icon. The third example points to a file called 'progress.svg', and has no alt attribute. After it is an X icon."
	src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/alt-attribute-usage-examples.png" />

So how do you know whether an image needs an empty `alt` attribute? The decorative/informative/active approach.

<img
	alt="A table with two columns, four rows, and a caption. The caption is, 'The DIA table'. The two table column headers are, 'Image Type' and 'Alt Text?'. The remaining three rows are: 'Decorative' in the first column and an X icon in the second column for the second row. 'Informative' in the first column and a checkmark icon in the second column for the third row. The final, fourth row has 'Active' in the first column and a checkmark icon in the second column."
	src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/dia-table.png" />

### A short overview

Following is an overview of different types of images, and how to best describe them.

#### Decorative images

Decorative images' only value is aesthetic. If they are removed, the webpage would still make perfect sense.

Some examples are website banners that have no text in them and other design elements. You should omit the description for this type of image, but always include an empty `alt` attribute.

```html
<!-- Sample decorative image -->
<img
  alt=""
  source="decorative-banner.png" />
```

#### Informative images

Informative images add extra context to the information presented in the article.

A few examples are graphs, diagrams, poll results, and product screenshots. Pay attention when describing them. You will learn how as you read on.

```html
<!-- Sample informative image -->
<img
  alt="A small, black, compact digital camera."
  source="product-photo.png" />
```

#### Active images

Active images are used to perform actions such as signing up, downloading, listening, uploading etc.

They are mainly links and buttons. When writing alt text for these kinds of images, avoid terms like "Click here".

Instead, use descriptions like, "Sign up for a Twitter account", "Go to the account page", "Upload your national identity card", and so on.

```html
<!-- Sample active image -->
<img
  alt="Upload resume."
  source="upload-prompt.png" />
```

## 2. Context matters

Alt text should concisely and accurately describe the image's content. If you have an overall point to make, let the surrounding text content communicate it.

<img
	alt="A used car dealership. Many modern cars are lined up in neat rows. The asphalt of the lot has cracks in it."
	src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/car-lot.jpg" />

For example, this image could be used for:

- Helping to identify a business listing,
- An exposé about an unscrupulous used car business,
- A commercial real estate listing, or
- A political campaign promising commercial revitalization.

It is up to the reader to decide how they feel about something, and alt text helps provide them the full context of the story.

This is useful not just for accessibility but also in competitive arenas like SEO where you’re competing with behemoths like HubSpot, Databox, The New York Times, and Zapier.


## 3. Screen readers and search engines already know that it’s an image

There’s no need to add in "image of", "picture of", or "graphic of". That only leads to repetition which can be annoying for listeners, particularly if the article contains a lot of images.

Instead, use the extra characters to convey information better.

<figure
	role="figure"
	aria-label="Source: Zapier.">
	<img
		alt="A Zapier automation widget. There are two annotations present. The first reads, 'Alt text: A trigger step with Google Forms selected as the trigger app and New Form Response selected in the Event field.' It is unclear what part of the widget the banner references. The second banner reads, 'SVG missing title and descr'. It is also unclear what part of the widget this banner references. The widget includes a title that reads, 'Trigger: 1. New Form Response in Google Forms'. Below it are configuration options to pick a Google Forms data source, an event selection menu, and a continue button for when things are configured properly. A green checkmark icon is present, indicating this step of the process has been set up successfully. Screenshot."
		src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/google-forms-trigger.png" />
	<figcaption>
		Source: Zapier.
	</figcaption>
</figure>

I love the simplicity of the next one:

<figure
	role="figure"
	aria-label="This is nice.">
	<img
		alt="Cropped screenshot of the CoSchedule's website where the images have failed to load. Above the images is a heading which reads, '30,000 marketers start their day with CoSchedule'. There are eight broken images present, but the alt text values are visible. The alt text reads, 'Forbes', 'Yamaha', 'Unicef', 'Vericast', 'Walgreens', 'Dictionary.com', 'P&G', and 'Schwans'."
		src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/broken-images.png" />
	<figcaption>
		 This is nice.
	</figcaption>
</figure>


## 4. Write alt text as simple sentences

A dark practice among search-engine optimizers is stuffing their target keywords into their images’ alt text. This is a terrible user experience.

The shocking reality?

Google’s John Muller [has repeatedly said that `alt` attributes don’t affect normal Google search](https://twitter.com/JohnMu/status/1507768571086217225).

Besides that, if you think that you need to stuff your alt attributes with keywords, you’re starting on the wrong foot and Google is coming for you—just like it did for Overstock, BMW, and even Google Japan.

Screen readers like JAWS and NVDA read alt text aloud a lot like the way that we read sentences aloud. So you should format your descriptions as regular sentences with proper punctuation and spelling.

There is [no one formula for how long alt text should be](https://yatil.net/blog/there-is-no-character-limit-for-alt-text). You should concisely and accurately describe all important and relevant details present in the image.

In the cases where you need to describe a complicated graphic such as a chart or graph from a research study, consider following [the W3C tutorial for dealing with complex images](https://www.w3.org/WAI/tutorials/images/complex/). Note that [the `longdesc` method is no longer valid](https://caniuse.com/mdn-html_elements_img_longdesc), however (reference the link's Notes section).



## 5. Don’t repeat captions in alt text

Copying captions verbatim into alt text is a popular practice in e-commerce because marketers think that that’ll help with their search-engine rankings, but that actually creates a bad user experience.

This is because screen readers end up repeating the same words. Imagine this happening for two, three, or even five images and you can quickly see how the experience goes downhill for people with disabilities.

<a class="u-hide-visually" href="#video-skip-target">Skip YouTube embed</a>
<div class="video--16-9">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dEbl5jvLKGQ" title="YouTube: Screen Reader Demo for Digital Accessibility" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p id="video-skip-target">Captions and alt text serve a different purpose. Captions are typically used to add details such as photo credit and copyright information. Alt text should describe the image’s meaning in the context of the article instead.</p>

You can omit captions, but the same can’t be said for `alt` attributes.


## Writing alt text might at first feel overwhelming or unproductive

For some, it may feel like you’re spending extra time and money on a small percentage of your user base and readers. So you may feel an urge to overlook alt text.

Setting aside exclusion and discrimination for a moment, this isn’t a risk you want to take on a company’s site. Because ignoring alt text is a recipe for disaster.

Target wished they had known earlier because it cost them $6 million in damages. When Netflix failed to take a cue from Target, it cost them $755,000 in legal fees and damages. The list goes on.

Even more, there’s a growing population of sighted people who use text-to-speech software so they can multitask or take a break from staring at LED screens all day long. Failing to make your content accessible will lead to a bad user experience.

### It’s also a chance to get featured on the internet hall of fame

On some sites, a third of their traffic comes from Google Images. Doing alt text right is [how Hubspot drove an extra 160,000 traffic sessions to their blog](https://blog.hubspot.com/marketing/how-we-octupled-image-search-traffic-on-the-blog).

<img
	alt="A Venn diagram showing two slightly overlapping circles. The left circle is labeled, 'Accessibility'. The right circle is labeled, 'Image SEO'. The overlapping center area is labeled. 'The alt text sweet spot'."
	src="/img/posts/are-you-making-these-five-mistakes-when-writing-alt-text/alt-text-sweet-spot.png" />

While it can feel like there’s much to learn just to make your website accessible, my advice is to not overwhelm yourself. Instead, take it step-by-step, and understand the basic purposes of alt text, which are:

1. Making it easier for screen readers to accurately describe images to the people who rely on them,
1. Appearing in place of the image if it fails to load, and
1. Helping search engines understand the graphics on your website.

Do you know what’s even better?

- Hanging out in their [communities](https://www.reddit.com/r/Blind/search/?q=alt%20text&restrict_sr=1&sr_nsfw=&include_over_18=1),
- Reading their [rants](https://www.reddit.com/r/Blind/comments/6xx7xk/a_couple_of_questions_about_image_alt_text/) and [comments](https://www.reddit.com/r/Blind/comments/pghnb5/looking_for_alt_text_help/), and
- Listening to a screen reader like [NVDA](https://www.nvaccess.org/download/) and learning how exactly it works.

We can hypothesise as much as we want, but nothing beats walking a mile in readers’ shoes. You will learn more in an hour or two doing that than you will reading guide.

## Appreciation

Credits to [Cierra Loffins](https://www.linkedin.com/in/cierra-loflin/). She did most of the legwork for this article.
