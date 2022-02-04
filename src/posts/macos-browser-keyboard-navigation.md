---
title: Browser keyboard navigation in macOS
description: How to enable full keyboard support in browsers on macOS.
category: Quick tip
author: Scott Vinkle
date: 2017-12-29
updated_by: Erin Olmon
last_updated: 2019-11-15
further_reading:
  - title: Keyboard Navigation in Mac Browsers
    url: http://www.weba11y.com/blog/2014/07/07/keyboard-navigation-in-mac-browsers/
    source: WebA11y
    year: 2014
  - title: "Tabbing Links in OSX/macOS"
    url: https://www.scottohara.me/blog/2014/10/03/link-tabbing-firefox-osx.html
    source: Scott O'Hara
    year: 2014
  - title: "Apple’s Inaccessibility"
    url: http://www.webaxe.org/apples-inaccessibility/
    source: Web Axe
    year: 2015
  - title: "How to allow keyboard focus of links in Firefox? (macOS)"
    url: https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox/11713537#11713537
    source: Stack Overflow
    year: 2012
  - title: "accessibility.tabfocus"
    url: https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/accessibility.tabfocus
    source: MDN Web Docs
    year: 2019
tags:
  - quicktip
---

In order to allow for full keyboard navigation of all focusable interactive elements in macOS Safari and Firefox, you'll need to make sure the following keyboard settings are adjusted.

By default, Apple computers have an operating system (OS) level setting that limits the <kbd>Tab</kbd> key to "Text boxes and lists only". This can be confusing, if not frustrating, for those unaware of this setting and expect keyboard focus to be similar to navigating on a Windows machine.


## "All Controls" in macOS

### Enable "All Controls" in macOS Settings

In the macOS settings, the **"All Controls"** setting must be enabled for all focusable interactive elements (for instance, links) to be keyboard accessible via the <kbd>Tab</kbd> key alone. Enable this feature by going to:

1. System Preferences
1. Keyboard
1. Shortcuts (tab)
1. macOS Catalina: Select "Use keyboard navigation to move focus between controls" (check box). macOS pre-Catalina: Select "All controls" (radio button). Alternatively, in any macOS version, press <kbd>Control</kbd> + <kbd>F7</kbd> (if you're on a laptop you may also need to press the <kbd>fn</kbd> key).

![The macOS (Catalina) Settings window. The screenshot is highlighting the selection of the 'Use keyboard navigation to move focus between controls' check box.](/img/posts/macos-browser-keyboard-navigation/macos-catalina-settings-keyboard-shortcuts.png)

![The macOS Settings window pre-Catalina. The screenshot is highlighting the selection of the 'All controls' radio button.](/img/posts/macos-browser-keyboard-navigation/macos-catalina-settings-keyboard-all-controls.png)

After updating this setting you will need to quit and restart your browsers to have the update take effect.

### Enable All Controls via Terminal

Run the following command in [Terminal](<https://en.m.wikipedia.org/wiki/Terminal_(macOS)>) to enable keyboard control at the macOS level. This command can be helpful if your organization uses a config script for new employee machines!

```bash
defaults write NSGlobalDomain AppleKeyboardUIMode -int 3
```

## Browser settings to enable full keyboard navigation

### Highlight each item in Safari

Additionally for Safari, you can enable the **"highlighting of each item"** setting in order to use the <kbd>Tab</kbd> key to navigate page controls. Enable this feature by going to Safari's:

1. Preferences
1. Advanced (tab)
1. Check "Press Tab to highlight each item on a webpage" (checkbox)

![The Safari Preferences window. The screenshot is highlighting the selection of the 'Press Tab to highlight each item on a webpage' checkbox.](/img/posts/macos-browser-keyboard-navigation/safari-tab-to-highlight-each-item.png)

With these changed settings in place you should now be able to use the <kbd>Tab</kbd> key to navigate around web pages as expected.

### Highlight each item in Chrome

Just like in Safari, a similar setting is available in Chrome. Verify that this feature is enabled by going to Chrome's:

1. Settings
1. Appearance
1. Check "Pressing Tab on a webpage highlights links, as well as form fields" (switch)

![The Chrome Settings page. The screenshot is highlighting the selection of the 'Pressing Tab on a webpage highlights links, as well as form fields' switch.](/img/posts/macos-browser-keyboard-navigation/chrome-pressing-tab.png)

### Highlight each item in Firefox

Unlike Safari and Chrome, Firefox does not have an option in the settings page for enabling full keyboard control. However, when the "All Controls" setting is enabled in macOS, Firefox may still not send focus to links using the tab key. There is a way to enable keyboard focus of links using advanced configuration options.

**Note:** When `accessibility.tabfocus` is set, some forms created with non-semantic HTML elements can behave oddly. For example, the GitHub Gist code editor. If non-semantic HTML elements are inexplicably inaccessible, try resetting this option.

#### To enable

<ol>
	<li>Open a new tab and go to <code>about:config</code></li>
	<li>Right Click and select New > Integer
	<img alt="The Firefox about:config add config menu. The screenshot is highlighting the selection of the New Integer configuration." src="/img/posts/macos-browser-keyboard-navigation/firefox-add-config.png"></li>
	<li>Enter the preference name <code>accessibility.tabfocus</code>. Click OK.
	<img alt="The Firefox about:config add config menu. The screenshot is highlighting entering accessibility.tabfocus as a preference name." src="/img/posts/macos-browser-keyboard-navigation/firefox-config-name.png"></li>
	<li>Enter the number <code>7</code>. Click OK.
	<img alt="The Firefox about:config add config dialog. The screenshot is highlighting entering 7 as a preference value." src="/img/posts/macos-browser-keyboard-navigation/firefox-config-value.png"></li>
</ol>

#### To reset

<ol>
	<li>Open a new tab and go to <code>about:config</code></li>
	<li>Find the <code>accessibility.tabfocus</code> preference row. (tip: use search field at top of page)</li>
	<li>Right Click on the row and select Reset
	<img alt="The Firefox about:config right click menu. The screenshot is highlighting the selection of the Reset menu item." src="/img/posts/macos-browser-keyboard-navigation/firefox-config-reset.png"></li>
	<li>Restart Firefox</li>
</ol>
