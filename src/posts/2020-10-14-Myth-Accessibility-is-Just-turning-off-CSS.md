---
layout: post
title: Accessibility is just turning off CSS
description: A brief explanation of a Myth of accessibility.
category: Myth
author: Harold Ereama
date: 2020-10-14
last_updated: 2020-10-14
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - myth
---

## Table of content <br>
### What’s accessibility?<br>
### Is accessibility just turning off css?<br>
### How can we make a website  accessible?<br>

## Accessibility Is Just Turning Off CSS<br>
### Introduction<br>

  With the rising need for websites to become more accessible
  (_inline with section 508_) for anyone no matter how they have to use your website or what difficulties they might have,developers have come up with different approaches towards achieving this.<br>
    It is widely believed that websites with simple HTML  styling alone are easily readable and more accessible,but is accessibility all about just turning off CSS?<br>
Let’s find out.<br>
 ## What’s  ACCESSIBILITY anyway?<br>
  Web accessibility in basic terms can be said to be the ability for a website to be readable and user friendly for people with both cognitive and physical disabilities.<br>
That being said, is…<br>
 ## Accessibility just turning off CSS?<br>
 Keeping styling simple by using HTML for both texts and page layout ensures shorter page load time, and softwares such as screen readers relay better information to people when they navigate through the pages,but making a website accessible doesnt mean stripping it off all its styling.<br>As a matter of fact CSS when used properly has the potential to allow for more accessible web experiences.<br>
Now you might be wondering…<br>
## How can we make a website accessible?
Accessibility itself can be achieved by keeping the following best practices in mind;<br>
### Structure HTML properly<br>
* Provide alternative texts for images.The texts should always convey thesame meaning as viewing the image.<br>
```< img src=”tree.jpg” alt=”image of a tree”>```<br>

* Use header tags correctly.The screen readers pay attention to header tags and use them as clues about important information.

```<h1>Heading</h1>
  
  h1{
Font-size:5rem;
}
``` 
<br>

* Avoid using tables for page layout.<br>

* Create accessible forms.Use descriptive and well positioned labels for each input field.<br>
```
<p>
<label for =”name”> Enter your name</label>
<INPUT type=”text” id=”firstname”>
</p>
```
* Add styling to forms so that when a field has to focus,it is highlighted .This way a person can easily tell where he is in a form.<br>
```<p>
<label for =”name”> Enter your name</label>
<INPUT autofocus type=”text” id=”firstname”>
</p>
```
### Use descriptive link Texts and simple styling <br>
  People using a screen reader often depend on the text of a link to determine where the link leads.As a result,links such as “Read More”, or links on images that don’t provide alternative texts are not accessible to the visitors.Text links should use short descriptive texts ,such as “read About Us” rather than “read more”.It is simpler to understand and will be easy  for visitors using speech recognition software to remember and repeat.<br>
  Links should also be styled so that the person is aware of the status of each hyperlink on a web page.<br>
```<p>Read About Us</p>

a{
Color:#ff0000;
}

a:hover a:visited, a:focus
{
Color:#a60000;
text-decoration:none;
}

a:active{
Color:#000000;
Background-color:#a60000;
}
```

### Hide content by pushing them out of view<br>
 CSS  allows you to hide content as visual designs will require that not all content is shown at once.
Avoid using “display:none; or visibility:hidden;”.Instead push the content out of view(I.e “width:-5000px”)<br>

### Optimize color schemes<br>
  Ideally, the best time to optimize your site for color blindness is at the beginning, before designs have been set in permanently. That way, design colors and accessibility can marry in
a way that pleases everyone.<br>
  When choosing a color scheme for your website, make sure that the text (foreground) color contrasts well with the background color. Your design might look cool, but it is no good if people with visual impairments like color blindness can't read your content.<br>
  Unlike image optimization for the blind, not every image on a website needs to be optimized for color blindness.<br>The most important images to optimize are those that convey significant information to the user. Some examples include:
_Scientific images, where important details are indicated by color,Images with text,Maps,Diagrams and graphs_ and Images where specific details must not be lost.<br>
Lastly…<br>
### Preserve Functionality for Visitors Using Just a Keyboard<br>
  People with mobility challenges often cannot manipulate a mouse with the precision needed to use it effectively. As a result, they access the web with a keyboard, a special keyboard overlay, or other devices designed to ease access to the web. However, certain web content such as complex menus, slideshows, pop-ups, and items that require a mouse-over action remain inaccessible to these visitors. <br>In order to avoid this scenario web developers need to consider keyboard-only site visitors as they design the interactions necessary to use the site.<br>
## Summary<br>
 You no longer need to verify that pages are readable and accessible by turning off CSS,however it can be useful as a technique for ensuring correct data reading order.<br>
 
 ## Further Reading<br>
* [CSS and JavaScript best practices](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript) .
* [How To Make Your Website Accessible to People with Disabilities](https://www.whoishostingthis.com/resources/website-accessibility/) .
* [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) .
