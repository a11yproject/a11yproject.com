---
title: Use Firefox for accessibility testing
description: "Firefox has become one of the best tools for accessibility audits. Let’s go over Firefox’s accessibility features that you can use today."
category: How-to
author: Todd Libby
date: 2022-07-17
tags:
  - howto
---

Firefox has become one of the best tools for accessibility audits. Let’s go over Firefox’s accessibility features that you can use today.

## Built-in accessibility tools

In this article I’ll discuss The Accessibility Tab, where we will begin and then move through to each component of the Accessibility Tab. First, the Check for issues tab, the Simulate menu, and end with the Show Tabbing Order checkbox. I’ll finish with the Checks and Properties panel.

### The Accessibility tab

Whenever you right-click on an element in a page, you can select **Inspect Accessibility Properties** to directly view that element in Firefox’s accessibility tools. Similarly, if you’re using the **Inspector** pane in Firefox’s dev tools, you can right-click on any node and choose **Show Accessibility Tools** to view that node in Firefox’s accessibility tools.

Firefox’s built-in accessibility tool is probably one of the best features in browsers’ dev tools out there now. It shows you the current [web page’s accessibility tree](https://www.tpgi.com/the-browser-accessibility-tree/), and it has panels for color-contrast checks and the current node’s accessibility-tree properties.

You can traverse the accessibility tree, and as you hover over each node, Firefox will show a tooltip over that node in the viewport with the name of the node and some basic properties. And the **Checks** and **Properties** panels can show you all the pertinent information for that node like its color and contrast ratio, [name, role, and value](https://holistica11y.com/wcag-4-1-2-name-role-value-level-a/).

### The Check for issues menu

If you enable this handy feature, Firefox can check for color-contrast issues,it can do its best to try to find keyboard issues, and it can try to find form-label issues. There’s also an **All Issues** option that will run all of those checks for the page.

Each issue will show you the role and name of the element that has an issue, and the **Checks** and **Properties** panels will provide some information and values to help you resolve the issues.

### The Simulate menu

This is a great tool for simulating visual differences. This can simulate:

- Protanopia (no red)
- Deuteranopia (no green)
- Tritanopia (no blue)
- Achromatopsia (no color)
- Contrast loss

### Show Tabbing Order checkbox

Checking **Show Tabbing Order** will show all the active tab stops like if you were navigating the web page with a keyboard. And you’ll see a small icon with a number indicating what order that element is in the tabbing sequence.

### The Checks and Properties panels

The **Checks** panel shows the developer such information as a color swatch, WCAG level (A, AA, or AAA), Regular or large text (denoted), color contrast ratio and if they meet or fail WCAG guidelines with [a link to MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) to learn more about color contrast.

The panel also shows if text labels and names for links meet guidelines, and whether keyboard accessibility is met, if the node has focus able with interactive semantics.

The **Properties** panel gives you essential information about the node that you’ve selected in the accessibility tree, including the color and contrast for each text leaf and the node’s DOM properties:

- name
- role
- actions
- value
- DOMNode
- description
- keyboardShortcut
- childCount
- indexInParent
- states
- relations
- attributes

For more about each property, you can [consult Mozilla’s documentation on the Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/).

### The WAVE extension

[The WAVE extension](https://wave.webaim.org/extension/) from [WebAIM](https://webaim.org/) is a great tool that you can use to start your testing with by performing quick scans of web pages. This can give you a baseline of what you might expect as you move through Firefox’s accessibility tools.

The first thing that I look at in any accessibility audit is color contrast. Color contrast is still the most common accessibility issue in websites and apps, according to the [WebAIM Million Report](https://webaim.org/projects/million/).

WAVE will also give you a look at color-contrast issues along with other errors and warnings. You can access this on the extension’s toolbar or by right-clicking and choosing the **WAVE this page** context-menu item.

You can view details of each error, where those errors occur, and the code that’s associated with those errors. The extension also includes a quick reference guide to the WCAG guidelines and links to the success criteria that come up in the errors and warnings it finds.

### axe DevTools extension

The next extension that I recommend is the [axe DevTools extension](https://deque.com/axe/devtools/). Axe-core is used in other tools such as Lighthouse, Jest, Selenium, and a variety of command-line accessibility checkers.

Maintained by the team at [Deque](https://www.deque.com), axe-core and the axe DevTools extension are great tools to help catch some of the things that WAVE doesn’t. Just click the button and scan the page.

A list of issues that it found will automatically come up, and then you’ll see a breakdown of its estimate of each error’s severity: critical, serious, moderate, and minor. I incorporate severity reports into audits I do so that clients can plan a course of attack to resolve issues and triage accessibility errors accordingly.

You’ll get a list of all the issues and a description for each issue. And when you’re viewing the list of errors, you can toggle its list of best practices on or off.

A pane on the right will give you options to highlight the errors and view the elements in question in Firefox’s **Inspector** tab. Clicking on **More Info** will open an in-depth entry on [Deque University](https://dequeuniversity.com/) about the error and how to fix it. That pane also includes a code description and some recommendations to help you solve the issue.

### Other extensions

Some other browser extensions that I also recommended for accessibility testing:

- [IBM Equal Access Accessibility Checker](https://www.ibm.com/able/toolkit/tools) (Accessibility checker)
- [Fontanello](https://fontanello.app/) (Typography and color-contrast tool)
- [HeadingsMap](https://github.com/dzc34/headingsMap) (Show, browse, and audit headings’ structure)
- [Landmark Navigation via Keyboard or Pop-up](https://www.tpgi.com/enabling-landmark-based-keyboard-navigation-in-firefox/) (Navigate a page using WAI-ARIA landmarks)
- [Lighthouse](https://addons.mozilla.org/en-US/firefox/addon/google-lighthouse/) (Tool for improving the quality of web pages)
- [VisBug](https://addons.mozilla.org/en-US/firefox/addon/visbug/) (Open-source web-design debug tools built with JavaScript: ​it’s like if there were developer tools but for design)

## Summary

There are many tools built in to Firefox that you can use to help with accessibility testing, and there are extensions that can help with testing too. Don’t forget, though: Manual testing is crucial as well. Hopefully, when you use Firefox’s accessibility dev tools, you’ll have just as much success auditing and testing to make sites accessible as I do.
