---
layout: post
title: |
    How-to: Hide Content
description: |
    How-to hide content but still make it accessible to screen readers.
last_updated: 2013-02-15
categories:
  - How-tos
---

Developers commonly use `display: none` to hide content on the page. Unfortunately, this simple and common action is a bit problematic for screen readers.

[Screen readers sometimes ignore display:none](http://www.456bereastreet.com/archive/200711/screen_readers_sometimes_ignore_displaynone/)[^bereast]. This means the content will be read despite being "hidden". To hide content completely from screen readers use the following:

    /* http://www.456bereastreet.com/archive/200711/screen_readers_sometimes_ignore_displaynone/ */
    .hidden {
        display:none;
        visibility:hidden;
    }

And for good measure you could consider adding the ARIA attribute `aria-hidden="true"` to the element.

There are also real world situations where you want to hide elements (e.g., a `form label`), but you still want text to be read by a screen reader. The "clip pattern" will hide the content visually, yet provide the content to screen readers[^clip]. Unlike positioning and negative text-indent, it works with rtl languages for localization.

    .visually-hidden { /*https://developer.yahoo.com/blogs/ydn/clip-hidden-content-better-accessibility-53456.html*/
        position: absolute !important;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
        padding:0 !important;
        border:0 !important;
        height: 1px !important;
        width: 1px !important;
        overflow: hidden;
    }
    
It is possible to apply the `.visually-hidden` class to content that contains nativily focusable elements (such as `a`, `button`, `input`, etc). It is important to still show these elements visually when they recieve focus, otherwise a keyboard-only users might not know what has focus. CSS for this might look something like:

    .visually-hidden a:focus, .visually-hidden input:focus, .visually-hidden button:focus { position:static; width:auto; height:auto;  }

Consider adding these HTML classes and CSS rules to your base stylesheet and use them when applicable.

[^bereast]: [Screen readers sometimes ignore display:none](http://www.456bereastreet.com/archive/200711/screen_readers_sometimes_ignore_displaynone/) 456 Berea Street (November 7, 2007)
[^clip]: [Clip Your Hidden Content For Better Accessibility](http://web.archive.org/web/20160616144545/https://developer.yahoo.com/blogs/ydn/clip-hidden-content-better-accessibility-53456.html) Yahoo Accessibility Blog  (October 23, 2012)
