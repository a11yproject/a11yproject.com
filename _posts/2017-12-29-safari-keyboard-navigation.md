---
layout: post
title: |
    Quick Tip: Safari Keyboard Navigation
description: How to enable full keyboard support in Safari
author: scott_vinkle
date: 2017-12-29
# last_updated:
published: true
categories:
  - Quick Tips
---
In order to allow for full keyboard navigation of all element in Safari on macOS, make sure the following options are enabled.

## All Controls in macOS

In the macOS settings, allow **"All Controls"** to be keyboard accessible.  Enable this feature by going to:

1. Settings
2. Keyboard
3. Shortcuts (tab)
4. Select "All controls" (radio button)

<img width="780" alt="Screenshot of the macOS Settings window. The screenshot is highlighting the selection of the 'All controls' radio button." src="https://user-images.githubusercontent.com/1392632/34268380-79798d34-e64e-11e7-817c-d069ee0210e0.png">

## Highlight each item in Safari 

In Safari settings, allow **"highlighting of each item"** in order to Tab to page controls.  Enable this feature by going to:

1. Preferences
2. Advanced (tab)
3. Select "Press Tab to highlight each item on a webpage" (checkbox)

<img width="882" alt="Screenshot of the Safari Preferences window. The screenshot is highlighting the selection of the 'Press Tab to highlight each item on a webpage' checkbox." src="https://user-images.githubusercontent.com/1392632/34269782-9fcdc5d6-e653-11e7-9adc-6bf1c04185b3.png">

With these changes in place you should now be able to use the Tab key to navigate around page content as expected.

## Enable via Terminal

Run the folliowing command the Terminal to enable keyboard control at the macOS level. Helpful if your organization uses a config script for new employee machines!

```bash
defaults write NSGlobalDomain AppleKeyboardUIMode -int 3
```
