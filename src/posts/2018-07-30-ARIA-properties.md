---
layout: post
title: ARIA properties
description: A quick introduction to ARIA's properties.
category: Background
collection:
  slug: introduction-to-aria
  order: 30
author: Alex Brenon
date: 2018-07-30
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - background
---

[ARIA 1.1 defines multiple "properties"](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) that can be applied to elements. Unlike ARIA states, most properties are likely to stay static when a page is loaded instead of changing with user interaction.

Properties are inserted into elements as follows: `<element aria-property="value"></element>` . Example:

```html
<button aria-haspopup="true">
  Options.
</button>
```

A screenreader will announce this button with 'Options, button menu' or something similar.

There are 38 properties that can be used in ARIA. They fall into 4 categories as defined by the W3C. The categories are:

<dl>
  <dt>Widget Attributes</dt>
  <dd>Properties that give information about user input elements.</dd>
  <dt>Live Region Attributes</dt>
  <dd>Properties that are specific to regions that will update while the page is being viewed.</dd>
  <dt>Drag-and-Drop Attributes</dt>
  <dd>Properties of drag-and-drop input elements.</dd>
  <dt>Relationship Attributes</dt>
  <dd>Properties that give information about elements' relationships to other elements.</dd>
</dl>

Note: ARIA is constantly being updated by the W3C. [Read the latest working draft](https://w3c.github.io/aria/).

The properties are given below, along with their category, brief description, and allowed value lists or type of input allowed.

## List of ARIA properties

Property (links to WAI-ARIA 1.1 specs) | Category | Description | Allowed Values (**default values bolded**)
---|---|---|---
[aria-activedescendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) | Relationship attributes | Currently active descendant of a composite widget | String - ID of descendant
[aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) | Live region attributes | Indicates whether assistive technologies will present the entire element (or only parts of it) when the element is changed | **false**, true
[aria-autocomplete](https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete) | Widget attributes | Defines if and how autocomplete suggestions are shown | **none**, both, inline, list
[aria-colcount](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount) | Relationship attributes | Defines the total number of columns in a table, grid, or treegrid | integer
[aria-colindex](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex) | Relationship attributes | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid | integer
[aria-colspan](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan) | Relationship attributes | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid | integer
[aria-controls](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) | Relationship attributes | Element(s) controlled by current element | String/list - ID(s) of element(s)
[aria-describedby](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) | Relationship attributes | Element(s) that describe the current element | String/list - ID(s) of element(s)
[aria-details](https://www.w3.org/TR/wai-aria-1.1/#aria-details) | Relationship attributes | Identifies the element that provides a detailed, extended description for the object | String/list - ID(s) of element(s)
[aria-dropeffect](https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect) | Drag-and-drop attributes | * DEPRECATED * Defines what functions can be performed when a dragged object is released on the target | **none**, copy, execute, link, move, popup
[aria-errormessage](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage) | Widget attributes | Identifies the element that provides an error message for the object | ID reference
[aria-flowto](https://www.w3.org/TR/wai-aria-1.1/#aria-flowto) | Relationship attributes | Next element(s) in alternate reading order | String/list - ID(s) of element(s)
[aria-haspopup](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup) | Widget attributes | The element can trigger a popup context menu | **false**, true
[aria-keyshortcuts](https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts) | Widget attributes | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element | String
[aria-label](https://www.w3.org/TR/wai-aria-1.1/#aria-label) | Widget attributes| Defines a label for the element (only used when label text not visible on screen) | String
[aria-labelledby](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby) | Relationship attributes | Element(s) that label the current element | String/list - ID(s) of element(s)
[aria-level](https://www.w3.org/TR/wai-aria-1.1/#aria-level) | Widget attributes | Gives hierarchical level of the element within a structure such as a tree or nested items | Integer greater than or equal to 1
[aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) | Live region attributes | Indicates an element will be updated and gives the type of updates the user can expect | **off**, assertive, polite
[aria-modal](https://www.w3.org/TR/wai-aria-1.1/#aria-modal) | Widget attributes | Indicates whether an element is modal when displayed | false, **true*
[aria-multiline](https://www.w3.org/TR/wai-aria-1.1/#aria-multiline) | Widget attributes | Text box accepts multiple lines of input, not just a single line | **false**, true
[aria-multiselectable](https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable) | Widget attributes| User can select more than one item in a list | **false**, true
[aria-orientation](https://www.w3.org/TR/wai-aria-1.1/#aria-orientation) | Widget attributes | Defines the element orientation | **horizontal**, vertical
[aria-owns](https://www.w3.org/TR/wai-aria-1.1/#aria-owns) | Relationship attributes | Element(s) that are owned by the current element (and not denoted as such by the DOM) | String/list - ID(s) of element(s)
[aria-placeholder](https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder) | Widget attributes | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value | String
[aria-posinset](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset) | Relationship attributes | Element's position in a set of items | Integer
[aria-readonly](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly) | Widget attributes| Element is not editable but is still readable |**false**, true
[aria-relevant](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) | Live region attributes | Defines what constitutes a update requiring notification in a live region | **additions text**, additions, all, removals, text
[aria-required](https://www.w3.org/TR/wai-aria-1.1/#aria-required) | Widget attributes| User input is required | **false**, true
[aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) | Widget attributes | Defines a human-readable description for the role of an element
[aria-rowcount](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount) | Relationship attributes | Defines the total number of rows in a table, grid, or treegrid | integer
[aria-rowindex](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex) | Relationship attributes | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid | integer
[aria-rowspan](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan) | Relationship attributes | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid | integer
[aria-setsize](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize) | Relationship attributes | Number of items in current set | integer
[aria-sort](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) | Widget attributes | Gives the direction that items are sorted in a table or grid column | **none**, ascending, descending, other
[aria-valuemax](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax) | Widget attributes | Maximum allowed value for a range selector | Number
[aria-valuemin](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin) | Widget attributes | Minimum allowed value for a range selector | Number
[aria-valuenow](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) | Widget attributes | Current value for a range selector | Number (between aria-valuemin and aria-valuemax)
[aria-valuetext](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext) | Widget attributes | Human readable text alternative to a value for a range selector | String
