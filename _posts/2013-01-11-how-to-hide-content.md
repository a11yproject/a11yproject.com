---
layout: post
title: |
    How-to: Hide Content
description: |
    How-to hide content but still make it accessible to screen readers.
categories:
  - How-tos
---

Developers commonly use `display: none` to hide content on the page. Unfortunately, this simple and common action is a bit problematic for screen readers.

[Screen readers sometimes ignore display:none](http://www.456bereastreet.com/archive/200711/screen_readers_sometimes_ignore_displaynone/). This means the content will be read despite being "hidden". To hide content completely from screen readers use the following:

    /* http://www.456bereastreet.com/archive/200711/screen_readers_sometimes_ignore_displaynone/ */
    .hidden {
        display:none;
        visibility:hidden;
    }

And for good measure you could consider adding the ARIA attribute `aria-hidden="true"` to the element.

There are also real world situations where you want to hide elements (e.g., a `form label`), but you still want text to be read by a screen reader.

    /* http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/ */
    .hide-text {
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
    }

Consider adding these HTML classes and CSS rules to your base stylesheet and use them when applicable.
