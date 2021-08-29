---
title: Making Bootstrap Accessible
description: making websites accessible for people with disabilities when using bootstrap
category: Miscellaneous
author: Akunne Pascal
further_reading:
  - url: https://getbootstrap.com/docs/4.0/getting-started/accessibility/
    title:  Accessibility
    source: Bootstrap
date: 2021-09-04
---



Bootstrap is CSS framework that provides easy-to-use and ready-made styles, layout and interactive components, 
so that developers can create a rich-functional, visually appealing and accessible websites and applications.

The accessibility of any project built using Botstrap strongly depends on the author's markup, additional styling and scripting they have included. 
It is possible to create a viable websites and application with bootstrap that covers accessibility standards and requirements, provied the layout and styling 
are applied accurately.

There are different key points to consider when making Bootstrap accessible. These are:

## Interactive Components

The interactive components in Bootstrap, including as modal dialogs, dropdown menus, and custom tooltips, are made to function with touch, mouse, 
and keyboard. These components should also be comprehensible and operable using assistive technologies, thanks to the inclusion of relevant 
[WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) responsibilities and attributes (such as screen readers).

## Colors

When using colors in Bootstrap, there is a need for manual modification of default colors used throughout the framework for things such as button variation, 
alert varition, form variation indicators, to ensure adequate contrast ratio. If your colors have similar contrast, they can make text difficult to read.

## Visually Hidden Content

`.sr-only` class makes contents accesible to assistive technologies like screen readers, when visually hidden. This aids the additional convey of information 
to non-visual users. Example

```
<p class="text-danger">
  <span class="sr-only">Danger:</span>
  Are you sure you want to delete record?
</p>
```
For visually hidden interactive controls, such as traditional skip link, `.sr-only` can be combined with `.sr-only-focusable` class, to ensure the control becomes 
visible once focused. Example
```
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
```
## Fonts

About 15% of the world's population have dyslexia. Hence, using an easy-to-read fonts is a big plus for accessibility. Fonts such as `cursive` font can be 
difficult to read while the sans-serif fonts family are easy to read. By default, Bootstrap comes with `Helvetica Neue` which is among the sans-serif font family.

## Summary
* It is possible to create a viable websites and application with bootstrap that covers accessibility standards and requirements, provied the layout and styling 
are applied accurately. 
* If your colors have similar contrast, they can make text difficult to read.
* `.sr-only` class helps to convey additional information to non-visual users.
* Always use an easy-to-read font such as sans-serif
