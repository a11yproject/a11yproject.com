---
layout: post
title: "How-to: Hide content"
category: "How-to"
description: "How-to hide content but still make it accessible to screen readers."
author: dave_rupert
date: 2013-02-15
updated_by: michael_fairchild
last_updated: 2017-09-02
categories:
  - How-tos
further_reading:
  - title: "HTML5 Hidden Attribute"
    url: https://davidwalsh.name/html5-hidden
    source: David Walsh
    year: 2012
---

Developers commonly use `display: none` to hide content on the page. Unfortunately, this simple and common action can be problematic for users of screen readers.

There are real world situations where you might need to hide elements visually (e.g., a form `label`), but keep the element text available to be announced by a screen reader. The "clip pattern" accomplishes this task for you; hide the content visually, yet provide the content to screen readers. Unlike CSS positioning and negative text-indent techniques, the "clip pattern" also works with RTL (Right-to-left) languages for localization. See the article *[Hiding Content for Accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility)* for more information on the visually-hidden pattern.

    .visually-hidden { /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
        position: absolute !important;
        height: 1px; width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
    }

It is possible to apply the `.visually-hidden` class to content that contains natively focusable elements (such as `a`, `button`, `input`, etc). It's important to show these elements visually when they receive focus, otherwise a keyboard-only user might not know which element currently has focus. CSS for this might look something like:

    .visually-hidden a:focus,
    .visually-hidden input:focus,
    .visually-hidden button:focus {
        position:static;
        width:auto; height:auto;
    }

Consider adding these HTML classes and CSS rules to your base stylesheet and use them when applicable.

## Alternatives to `display: none`

The `aria-hidden="true"` HTML attribute is the logical opposite of the `.visually-hidden` class. It hides content from assistive technology, but not visually. This can be helpful in cases where there are visual cues that screen readers do not need to announce, such as icons (although you should provide some form of alternative text for icons).

There may be cases where you want to use `aria-hidden` and also visually hide the content. This can be accomplished with some CSS like:

    .my-component[aria-hidden="true"] {
        display: none;
    }

 Another way to hide content both visually and from assistive technology is the [HTML5 `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute). To support older browsers like IE9, you might want to add the following css to your pages:

     [hidden] { display: none; }
