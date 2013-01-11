---
layout: post
title: |
    How-to: Hide Content
tldr: |
    How-to hide content but still make it accessible to screen readers.
categories:
  - How-to
---

Developers commonly use `display: none` to hide content on the page. Unfortunately, this simple and common action is a bit problematic.

Some screen readers will still read `display: none` content and some won't[^fn1]. There are also situations where you want to hide elements (i.e., a form `label`), but you still want it to be read by a screen reader.  Here are CSS classes that you should include in every project and use responsibly.

    /* http://webaim.org/techniques/css/invisiblecontent/ */
    .screen-reader-text {
        position:absolute;
        left:-10000px;
        top:auto;
        width:1px;
        height:1px;
        overflow:hidden;
    }

    /* http://www.456bereastreet.com/archive/200711/screen_readers_sometimes_ignore_displaynone/ */
    .hidden {
        display:none;
        visibility:hidden;
    }

[^fn1]: [http://www.456bereastreet.com/archive/200711/...](http://www.456bereastreet.com/archive/200711/screen_readers_sometimes_ignore_displaynone/)