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

Developers commonly use `display: none` to hide content on the page. Unfortunately, this simple and common action can be problematic for users of screen readers.

There are also real world situations where you want to visually hide elements (e.g., a `form label`), but you still want text to be read by a screen reader. The "clip pattern" will hide the content visually, yet provide the content to screen readers[^clip]. Unlike positioning and negative text-indent, it works with rtl languages for localization.

    .visually-hidden { /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
        position: absolute !important;
        height: 1px; width: 1px; 
        overflow: hidden;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip: rect(1px, 1px, 1px, 1px);
    }
    
It is possible to apply the `.visually-hidden` class to content that contains nativily focusable elements (such as `a`, `button`, `input`, etc). It is important to still show these elements visually when they recieve focus, otherwise a keyboard-only users might not know what has focus. CSS for this might look something like:

    .visually-hidden a:focus, .visually-hidden input:focus, .visually-hidden button:focus { position:static; width:auto; height:auto;  }

Consider adding these HTML classes and CSS rules to your base stylesheet and use them when applicable.

## Alternatives to `display: none`

The `aria-hidden="true"` HTML attribute is the logical oposite of the `.visually-hidden` class. It hides content from assistive technology, but not visually. This can be helpful in cases where there are visual cues that screen readers do not need to speak, such as icons (although you should provide some form of alternative text for icons).

There may be cases where you want to use `aria-hidden` and also visually hide the content. This can be accomplished with some CSS like:

    .my-compnent[aria-hidden="true"] { 
        display: none; 
    }
    
 Another way to hide content both visually and from assistive technology is the [HTML `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute). To support older browsers like IE9, you might want to add the following css to your pages[^hidden]:
 
     *[hidden] { display: none; }
    

[^clip]: [Hiding Content for Accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility) Yahoo Accessibility Blog  (Feburary 25, 2011)
[^hidden]: [HTML5 hidden Attribute](https://davidwalsh.name/html5-hidden) DWB (September 20, 2012)

