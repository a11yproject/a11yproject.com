---
layout: post
title: Create accessible form(s)
description: Practial tips on how to create accessible forms.
category: How-to
author: Hamsa Harcourt
date: 2020-09-16
further_reading:
  - title: HTML label element reference
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
    source: MDN web docs
    year: 2020
  - title: Don’t Use The Placeholder Attribute
    url: https://www.smashingmagazine.com/2018/06/placeholder-attribute/
    source: Smashing Magazine
    year: 2018
  - title: "HTML5 Accessibility Chops: the placeholder attribute"
    url: https://developer.paciellogroup.com/blog/2011/02/html5-accessibility-chops-the-placeholder-attribute/
    source: The Paciello Group
    year: 2011
  - title: Using @placeholder on Input
    url: https://www.w3.org/WAI/GL/wiki/Using_@placeholder_on_input
    source: W3C
    year: 2012
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - howto
---

With the world becoming data reliant, it's no surprise how data is the new gold. With the right data, you can improve peoples' lives, find solutions to problems and so on. There are many ways to capture users' data but on the web, forms are your go-to solution.

Here are some  practical tips on how to write accessible forms.

## Always label your forms
Labels are a great way to get started with writing accessible forms. They are vital for visually impaired people as they help [screen readers](https://en.wikipedia.org/wiki/Screen_reader) determine what label text go with what input field.

There are two ways to associate a `<label>` with an `<input>`.
- Set the identifier(ID) in the `<input>` to correspond with the `for` attribute of the `<label>`.
```html
<form>
    <label for="firstName">First Name</label>
    <input type="text" id="firstName" name="firtName"/>
</form>
```

- Nest `<input>` directly inside `<label>`.
```html
<form>
    <label>
        First Name
        <input type="text" name="firstName">
    </label>
</form>
```


## Highlight input element on focus
Form cusors can be difficult to track. A simple solution is to highlight `<input>` on focus. This way, people do not have to guess where they are on the form. 

![A form with an input field highlighted in blue.](https://res.cloudinary.com/dgn6edv1k/image/upload/v1600204220/a11y_anz7bn.png)

```css
input:focus{
    outline: 2px solid royalblue
    box-shadow: 1px 1px 8px 1px royalblue
}
```

## Break long forms into smaller sections
Filling long forms can be stressful. This is relatably true for almost everyone but perculiar to people  with [AD/HD](https://www.cdc.gov/ncbddd/adhd/facts.html).  They can lead to an increase in [Bounce rate](https://en.wikipedia.org/wiki/Bounce_rate) which is not ideal. A simple solution is to break them into smaller sections. These sections should include a progress bar.

![A Multi page form with a progress bar at the top.](https://res.cloudinary.com/dgn6edv1k/image/upload/v1600197013/progress_wl7bgp.png)


## Provide error messages if any
If your site has forms, validation errors are inevitable. Always provide error messages when they occur. It is common practice to change the `<input>` color to red which is not ideal. Error messages helps people know exactly what they need to submit the form. 

![A form with two fields indicating an error.](https://res.cloudinary.com/dgn6edv1k/image/upload/v1600197951/err_qiuycf.jpg)

## Avoid horizontal layout forms unless neccessary
If possible, avoid making your form inputs next to each other. This allows people to follow the path to completion easily and focus on entering one piece of data at a time. 

![A form with four input fields in a horizontal layout.](https://res.cloudinary.com/dgn6edv1k/image/upload/v1600201124/layout_glyubv.jpg)

If you must use a horizontal layout, make sure the tab order goes from left to right. This is done by adding a  `tabindex` attribute to `<input>`. The `tabindex` attribute should be in ascending order(1,2,3 and so on).

```html

 <input tabindex="1" type="text" name="field1" />
 <input tabindex="2" type="text" name="field2" />

```


 