---
layout: post
title: ARIA Properties
description: A quick introduction to ARIA's property system.
author: Alex Brenon
categories: background
published: true
---
[ARIA 1.1 defines multiple "properties"](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) that can be applied to elements. Unlike ARIA states, most properties are likely to stay static when a page is loaded instead of changing with user interaction. Properties are inserted into elements as follows: `<element aria-property="value"></element>` . Example: 
```html
<button aria-haspopup="true"> Options. </button>
```
A screenreader will announce this button with 'Options, button menu' or something similar.

There are 26 properties that can be used in ARIA. They fall into 4 categories as defined by the W3C. The categories are:
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

Property (links to WAI-ARIA 1.1 specs) | Category | Description | Allowed Values (**default values bolded**)
---|---|---|---
[aria-autocomplete](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-autocomplete) | Widget attributes | Defines if and how autocomplete suggestions are shown | **none**, both, inline, list
[aria-haspopup](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-haspopup) | Widget attributes | The element can trigger a popup context menu | **false**, true
[aria-label](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-label) | Widget attributes| Defines a label for the element (only used when label text not visible on screen) | String
[aria-level](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-level) | Widget attributes | Gives hierarchical level of the element within a structure such as a tree or nested items | Integer greater than or equal to 1
[aria-multiline](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-multiline) | Widget attributes | Text box accepts multiple lines of input, not just a single line | **false**, true
[aria-multiselectable](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-multiselectable) | Widget attributes| User can select more than one item in a list | **false**, true
[aria-orientation](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-orientation) | Widget attributes | Defines the element orientation | **horizontal**, vertical
[aria-readonly](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-readonly) |Widget attributes| Element is not editable but is still readable |**false**, true
[aria-required](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-required) |Widget attributes| User input is required | **false**, true
[aria-sort](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-sort) |Widget attributes | Gives the direction that items are sorted in a table or grid column | **none**, ascending, descending, other
[aria-valuemax](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemax) | Widget attributes | Maximum allowed value for a range selector | Number
[aria-valuemin](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuemin) | Widget attributes | Minimum allowed value for a range selector | Number
[aria-valuenow](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuenow) |Widget attributes | Current value for a range selector | Number (between aria-valuemin and aria-valuemax)
[aria-valuetext](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-valuetext) | Widget attributes | Human readable text alternative to a value for a range selector | String
[aria-atomic](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-atomic) | Live region attributes | Indicates whether assistive technologies will present the entire element (or only parts of it) when the element is changed | **false**, true
[aria-live](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-live) | Live region attributes | Indicates an element will be updated and gives the type of updates the user can expect | **off**, assertive, polite
[aria-relevant](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-relevant) | Live region attributes | Defines what constitutes a update requiring notification in a live region | **additions text**, additions, all, removals, text
[aria-dropeffect](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-dropeffect) | Drag-and-drop attributes | Defines what functions can be performed when a dragged object is released on the target | **none**, copy, execute, link, move, popup
[aria-activedescendant](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-activedescendant) | Relationship attributes | Currently active descendant of a composite widget | String - ID of descendant
[aria-controls](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-controls) | Relationship attributes | Element(s) controlled by current element | String/list - ID(s) of element(s)
[aria-describedby](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-describedby) | Relationship attributes | Element(s) that describe the current element | String/list - ID(s) of element(s)
[aria-flowto](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-flowto) | Relationship attributes | Next element(s) in alternate reading order | String/list - ID(s) of element(s)
[aria-labelledby](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-labelledby) | Relationship attributes | Element(s) that label the current element | String/list - ID(s) of element(s)
[aria-owns](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-owns) | Relationship attributes | Element(s) that are owned by the current element (and not denoted as such by the DOM) | String/list - ID(s) of element(s)
[aria-posinset](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-posinset) | Relationship attributes | Element's position in a set of items | Integer
[aria-setsize](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-setsize) | Relationship attributes | Number of items in current set | Integer
