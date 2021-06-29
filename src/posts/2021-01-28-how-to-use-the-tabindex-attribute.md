---
title: Use the <code>tabindex</code> attribute
description: <code>tabindex</code> is a global attribute that allows an HTML element to receive focus. It needs a value of zero or a negative number in order to work in an accessible way.
category: How-to
author: Eric Bailey
date: 2021-01-28
further_reading:
  - title: Keyboard Accessibility
    url: https://webaim.org/techniques/keyboard/tabindex
    source: WebAIM
  - title: "Web Fundamentals: Using tabindex"
    url: https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
    source: Google Developers
  - title: Using the tabindex attribute
    url: https://developer.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/
    source: The TPGi
  - title: Don’t Use Tabindex Greater than 0
    url: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html
    source: Adrian Roselli
  - title: "Tabindex: it rarely pays to be positive"
    url: https://www.scottohara.me/blog/2019/05/25/tabindex.html
    source: Scott O'Hara
  - title: Short note on improving usability of scrollable regions
    url: https://developer.paciellogroup.com/blog/2016/02/short-note-on-improving-usability-of-scrollable-regions/
    source: The TPGi
  - title: The difference between keyboard and screen reader navigation
    url: https://tink.uk/the-difference-between-keyboard-and-screen-reader-navigation/
    source: Léonie Watson
thanks: "Thank you to <a href='https://sarahmhigley.com/'>Sarah Higley</a> and <a href='https://www.splintered.co.uk/'>Patrick Lauke</a> for their feedback."
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - howto
---

[`tabindex` is a global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) that allows an HTML element to receive focus. It needs a value of zero or a negative number in order to work in an accessible way.

When `tabindex`’s value is set to zero or a positive number, the element can be navigated to via the keyboard’s <kbd>Tab</kbd> key. When it is set to a negative number, its element can be programmatically focused via JavaScript.


## Common mistakes

Unfortunately, the `tabindex`  attribute is often misunderstood and consequently misused. Following are some common examples of `tabindex` use that have a negative impact on accessibility:

### Using a positive `tabindex` value

Using `tabindex` with a value of `1`, `2`, `3`, etc. places the element the `tabindex` is applied first in the keyboard tabbing order. This can [create a confusing experience](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) for anyone who relies on the keyboard’s <kbd>Tab</kbd> key to navigate.

![Two code examples, one labeled “don't,” the other labeled “do.” The example labeled “don't” shows using a declaration of tabindex='16' on a paragraph containing 3 links. The example labeled “do” removes the tabindex declaration.](/img/posts/2021-01-28-how-to-use-the-tabindex-attribute/positive-value.png)

### Setting a manual tab order

You don’t need to manually set tab order for every page or view on a website or web app. Not only is this extra, unnecessary work that is difficult to maintain, it may deviate from someone’s expected or desired way to navigate. This results an annoying, confusing, and potentially inaccessible experience.

![Two code examples, one labeled “don't,” the other labeled “do.” The example labeled “don't” shows three button elements labeled “Save,” “Cancel,” and “Discard.” Each button has a tabindex declared on it, with a tabindex value of 1 for Save, a tabindex value of 2 for Cancel, and a tabindex value of 3 for Discard. The example labeled “do” removes the tabindex declarations.](/img/posts/2021-01-28-how-to-use-the-tabindex-attribute/manual-tab-order.png)

Instead, use appropriate interactive elements (`a` for links, `button` for buttons, etc.) and put them in the reading order of the document. Interactive elements come with native browser behavior already built in that allows them to be navigated to via <kbd>Tab</kbd> without the need for a `tabindex` declaration.

### Making non-interactive elements focusable

There is a myth that applying `tabindex="0"` to non-interactive elements (paragraphs, headings, lists, etc.) helps “improve” accessibility by providing a way for a person who uses a screen reader to focus on all the content present in a webpage or web app. Unfortunately, this well-intentioned idea actually does not create a good assistive technology experience.

In the same way that you don’t need to add a `tabindex` attribute declaration to native interactive elements, you also don’t need to add a `tabindex` attribute to non-interactive elements for them to work with assistive technologies.

![Two code examples, one labeled “don't,” the other labeled “do.” The example labeled “don't” shows using a declaration of tabindex='0' on a paragraph element. The example labeled “do” removes the tabindex declaration.](/img/posts/2021-01-28-how-to-use-the-tabindex-attribute/non-interactive-interactive.png)

The reason for this is that assistive technologies such as screen readers have other, expected ways of [navigating through, and consuming this content](https://tink.uk/the-difference-between-keyboard-and-screen-reader-navigation/). Because of this, adding a `tabindex` attribute to non-interactive elements creates a few problems. It:

- Adds confusion about what is and what is not actually interactive, especially if you cannot see the screen.
- Requires extra work for people using keyboards to navigate (and in particular, people who use keyboards who are **not** using assistive technologies), especially those who have have a [motor control disability](https://webaim.org/articles/motor/motordisabilities).
- May not announce the element’s [name and role](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html), which creates additional confusion about what the element is, how it is supposed to work, and whether or not it has been coded properly.

### `tabindex` declared on a non-interactive element nested inside of an interactive element

You do not need to declare `tabindex` on a child element, provided its parent element is an interactive element. An example of this would be a `span` element nested inside of a `button`:

![Two code examples, one labeled “don't,” the other labeled “do.” The example labeled “don't” shows a button element that contains two span elements. The first span element wraps the text, “Submit order” and has a declaration of tabindex='0' applied to it. The second span element wraps the text, “Your order will be securely processed.” The example labeled “do” removes the tabindex declaration.](/img/posts/2021-01-28-how-to-use-the-tabindex-attribute/nested-tab-stop.png)

The presence of the `tabindex` attribute in this code example would affect the order of interactive elements in an illogical way. This creates an annoying and potentially confusing experience for people using keyboards or assistive technology.


## Acceptable uses for `tabindex`

Following are some of the more common cases where you do need to use `tabindex`. In these scenarios it enables the content to be accessible.

### Interactive JavaScript widgets and charts

Declarations of `tabindex="-1"` can sometimes be found on interactive widgets and [components that manage focus internally](https://w3c.github.io/aria/#managingfocus), such as [comboboxes](https://www.w3.org/TR/2017/REC-wai-aria-1.1-20171214/#combobox) or [trees](https://www.w3.org/TR/wai-aria/#tree), as it allows JavaScript to focus on the element via [the `focus()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus).

![A basic line graph with a small circle to indicate each data point. One of the points has a larger circle and a label of “82.76%.”](/img/posts/2021-01-28-how-to-use-the-tabindex-attribute/interactive-chart.png)

### Scrollable overflow containers

`tabindex="0"` should be applied to any non-interactive element that has had [CSS’ `overflow` property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) applied to it. This will allow people using a keyboard to navigate to, and scroll around the overflowed content.

![A basic overflow container embedded in a webpage about creating an account. The container is titled “Terms of Service” and contains boilerplate terms of service information. A basic scrollbar is also present, indicating overflow content.](/img/posts/2021-01-28-how-to-use-the-tabindex-attribute/scrollable-overflow-container.png)

You will also need to provide:

1. A label that concisely describes the contents placed within the non-interactive element. The label can either be provided by:
    1. An `id`/`aria-labelledby` association if it has a visible heading, or
    2. An `aria-label`, if not.
2. A way to specify what the content contains semantically. This can be provided by:
    1. An applicable [sectioning element](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html), or
    2. A [Landmark Role](https://www.a11yproject.com/posts/2013-01-14-aria-landmark-roles/) if the content is important enough that people need a quick and easy way to return to it.
    3. A [`group` role](https://www.w3.org/TR/wai-aria-1.1/#group) can also be used if there isn’t a need for quick access.

``` html
<div
  aria-labelledby="terms-of-service"
  role="group"
  tabindex="0"
  style="overflow: auto; height: 15rem;">
  <h2 id="terms-of-service">Terms of Service</h2>
  …
</div>
```

This satisfies [WCAG criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value). It allows people to scroll using a keyboard, as well as providing an indication on why they should scroll, and what content they can expect to find within.

### When there is not an applicable HTML element

Interactive controls that don’t have a relevant HTML element need a declaration of `tabindex="0"`. An example of this would be a [listbox](https://www.w3.org/TR/wai-aria-practices-1.2/examples/listbox/listbox-grouped.html), a widget that “[presents a list of options and allows a user to select one or more of them](https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox).”

![A basic listbox with a label that reads “Choose your favorite avocado.” There are two categories displayed for the listbox, “A Cultivars” and “B Cultivars.” Each category contains specific avocado cultivar names, with the last option partially obscured to indicate more content is present. A basic scrollbar is present, indicating overflow content.](/img/posts/2021-01-28-how-to-use-the-tabindex-attribute/listbox.png)

Hopefully this provides enough information to treat `tabindex` in a responsible, accessible way.
