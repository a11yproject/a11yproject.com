---
layout: post
title: ARIA states
description: A quick introduction to ARIA's states.
category: Background
collection:
  slug: introduction-to-aria
  order: 20
author: Alex Brenon
date: 2018-07-30
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - background
---

[ARIA 1.1 defines multiple "states"](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) that can be applied to elements. States are likely to change as the user interacts with the page.

States are inserted into elements as follows: `<element aria-state="value"></element>`. Example:

```html
<span aria-busy="true">
  This element is currently being updated.
</span>
```

There are 10 states that can be used in ARIA. They fall into 3 categories as defined by the W3C. The categories are:

<dl>
  <dt>Widget attributes</dt>
  <dd>States that give information about user input elements.</dd>
  <dt>Live region attributes</dt>
  <dd>States that are specific to regions that will update while the page is being viewed.</dd>
  <dt>Drag-and-drop attributes</dt>
  <dd>States of drag-and-drop input elements.</dd>
</dl>

Note: ARIA is constantly being updated by the W3C. [Read the latest working draft](https://w3c.github.io/aria/).

The states are given below, along with their category, brief description, and allowed value lists. Many states allow for either true or false, and when "undefined" is chosen it means the state is not applicable to the current element.

## List of ARIA states

State (links to WAI-ARIA 1.1 specs) | Category | Description | Allowed Values (**default values bolded**)
---|---|---|---
[aria-busy](https://www.w3.org/TR/wai-aria-1.1/#aria-busy) | Live region attributes | The element is currently being updated | **false**, true
[aria-checked](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) | Widget attributes | The input item is checked |**undefined**, false, mixed, true
[aria-current](https://www.w3.org/TR/wai-aria-1.1/#aria-current) | Widget attributes | Indicates the element that represents the current item within a container or set of related elements | page, step, location, date, time, true, **false**
[aria-disabled](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled) | Widget attributes | The element is visible but not interactive | **false**, true
[aria-expanded](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) | Widget attributes | The element is expanded | **undefined**, false, true
[aria-grabbed](https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed) | Drag-and-Drop attributes | *Deprecated* The element is selected for dragging | **undefined**, false, true
[aria-hidden](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) | Widget attributes | The element is invisible to all users (including assistive technologies) | **false**, true
[aria-invalid](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) | Widget attributes | The element contains a value that doesn't match the expected format | **false**, grammar, spelling, true
[aria-pressed](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed) | Widget attributes | The button is pressed | **undefined**, false, mixed, true
[aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) | Widget attributes | The element is selected | **undefined**, false, true
