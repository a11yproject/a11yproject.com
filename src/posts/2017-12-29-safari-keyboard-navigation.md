---
layout: post
title: "Safari keyboard navigation"
category: "Quick tip"
description: "How to enable full keyboard support in Safari, and other browsers on macOS."
author: scott_vinkle
date: 2017-12-29
last_updated: 2018-11-24
published: true
categories:
  - Quick Tips
further_reading:
  - url: http://www.weba11y.com/blog/2014/07/07/keyboard-navigation-in-mac-browsers/
    title: "Keyboard Navigation in Mac Browsers"
    source: WebA11y
    year: 2014
  - url: https://www.scottohara.me/blog/2014/10/03/link-tabbing-firefox-osx.html
    title: "Tabbing Links in OSX/macOS"
    source: Scott O'Hara
    year: 2014
  - url: http://www.webaxe.org/apples-inaccessibility/
    title: "Apple’s Inaccessibility"
    source: Web Axe
    year: 2015
  - url: https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox/11713537#11713537
    title: "How to allow keyboard focus of links in Firefox? (macOS)"
    source: Stack Overflow
    year: 2012
---

By default, Apple computers have an operating system (OS) level setting that limits the <kbd>Tab</kbd> key to "Text boxes and lists only".  This can be confusing, if not frustrating, for those unaware of this setting and expect keyboard focus to be similar to navigating on a Windows machine.

In order to allow for full keyboard navigation of all focusable interactive elements in macOS Safari and Firefox, you'll need to make sure the following keyboard settings are adjusted.

## "All Controls" in macOS
In the macOS settings, the **"All Controls"** setting must be enabled for all focusable interactive elements (for instance, links) to be keyboard accessible via the <kbd>Tab</kbd> key alone.  Enable this feature by going to:

1. System Preferences
2. Keyboard
3. Shortcuts (tab)
4. Select "All controls" (radio button) or press <kbd>Control</kbd> + <kbd>F7</kbd> (if you're on a laptop you may also need to press the <kbd>fn</kbd> key).

![The macOS Settings window. The screenshot is highlighting the selection of the 'All controls' radio button.](https://user-images.githubusercontent.com/1392632/34268380-79798d34-e64e-11e7-817c-d069ee0210e0.png)

After updating this setting you will need to quit and restart your browsers to have the update take effect.

## Highlight each item in Safari

Additionally for Safari, you can enable the **"highlighting of each item"** setting in order to use the <kbd>Tab</kbd> key to navigate page controls.  Enable this feature by going to Safari's:

1. Preferences
2. Advanced (tab)
3. Check "Press Tab to highlight each item on a webpage" (checkbox)

![The Safari Preferences window. The screenshot is highlighting the selection of the 'Press Tab to highlight each item on a webpage' checkbox.](https://user-images.githubusercontent.com/1392632/34269782-9fcdc5d6-e653-11e7-9adc-6bf1c04185b3.png)

With these changed settings in place you should now be able to use the <kbd>Tab</kbd> key to navigate around web pages as expected.

## Enable via Terminal

Run the following command in [Terminal](https://en.m.wikipedia.org/wiki/Terminal_(macOS)) to enable keyboard control at the macOS level. This command can be helpful if your organization uses a config script for new employee machines!

```bash
defaults write NSGlobalDomain AppleKeyboardUIMode -int 3
```
