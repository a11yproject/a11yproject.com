---
layout: post
title: Getting started with ARIA
description: Introduction to ARIA, describing Roles, States, and Properties and when to use ARIA in HTML.
category: Background
author: Monika Piotrowicz
date: 2014-05-15
last_updated: 2014-05-15
eleventyNavigation:
  key: {{ category }}
  title: {{ title }}
tags:
  - background
---

ARIA (Accessible Rich Internet Applications), is a specification from the W3C and created to improve accessibility of applications by providing extra information to assistive technologies, such as screen readers, via attributes which could be added to HTML.

Out of the box, screen readers will interpret HTML that conveys accessibility mapping information (e.g. a `button` but not a `div`). However, ARIA attributes can provide screen reader users with additional context and greater interactivity with content to correct misused HTML, or to convey information not available in HTML alone.

ARIA, by design, has no effect on how elements are displayed or behave in browsers. It does not add new functionality and is meant to act only as an extra descriptive layer for screen readers. ARIA is also beholden to its host language and must adhere to the rules of what elements it can, and cannot, be used on.

- [ARIA in HTML specification](https://www.w3.org/TR/html-aria/): Defines how ARIA may be used within HTML.
- [ARIA specification](https://www.w3.org/TR/wai-aria/): Defines ARIA.


## ARIA attributes

ARIA attributes are predefined in the spec and are divided into two categories, roles and states & properties. Both can be added directly in the markup or via JavaScript to progressively enhance markup as necessary. The properties and states should be updated as needed based on user interactions. There are rules behind which elements may receive types of ARIA attributes, as well as design guidelines for how and when these should be updated in common interactive widgets.

- [ARIA Roles](https://www.w3.org/TR/wai-aria/#roles_categorization): Section of the specification about roles.
- [ARIA States and Properties](https://www.w3.org/TR/wai-aria/#states_and_properties): Section of the specification about states and properties.
- [ARIA Authoring Practices note](https://www.w3.org/TR/wai-aria-practices/): Provides guidance on how to use ARIA.


## ARIA roles

An ARIA role is added via a `role="<ROLE TYPE>"` attribute and does not change for an element once set. There are six categories of ARIA roles.

### Landmark

Landmark roles identify large content areas and are used by screen readers for navigation. Ideally all content of a document would be placed within a landmark role. Doing so would ensure that all content could be navigated to by use of landmarks. E.g. `<footer role="contentinfo">`.

### Document Structure

Document Structure roles provide a structural description for a section and are typically non-interactive. Some document roles map onto existing HTML tags (E.g. `role="form"`) and are only meant for cases when using the native tag is not possible, or to bridge gaps in support.

### Widget

Widget roles describe common interactive patterns that currently lack semantic equivalents in HTML, and can be used on their own, or as part of larger, composite widgets. E.g. `<div role="tabpanel">`.

### Window

Window roles, consist of `alertdialog` and `dialog`.  These roles are meant to be used when creating a sub-window to the primary document.  E.g. a modal dialog.

### Live Regions

Live Region roles inherit the behavior of `aria-live` set to either the `assertive`, `polite` or `off` states.  These roles should be used if a live region should promote other important role information, or be given an accessible name, beyond just producing a live announcement.  E.g. `<div role="alert">`.

### Abstract

Abstract roles are only used by browsers to help organize and streamline a document, and **never** by developers to mark up HTML. Using an Abstract role in your markup would likley not produce any meaningful information.


## States and properties

ARIA states and properties are often used to support ARIA roles that exist on a page. Properties often describe relationships with other elements and for the most part, do not change once they're set. States are more dynamic and are typically updated with JavaScript as a user interacts with a page. It's common to refer to states and properties collectively as just ARIA attributes. Screen readers are notified when attributes change and can announce these changes to users after an interaction takes place.


## When to use ARIA

Native HTML semantics should still be used whenever possible, but ARIA is useful when certain design patterns or interactions make it impossible to do so. For example, a complex tabbed-interface has no semantic equivalent with HTML, but a `role="tablist"` and its related attributes can be added to provide this detail to screen readers.

ARIA is also useful to describe newer HTML elements that may not yet have full cross-browser support or be understood by screen readers.

To create accessible applications, basic principles of semantic HTML, keyboard support, and color contrast should still be the primary focus of developers. ARIA may be used to "fill in the blanks" where web page information isn't understood or available to a screen reader via HTML alone.


## ARIA examples

### Landmark role

The `<nav>` element implicitly has a landmark role of `navigation` allowing screen reader users to navigate directly to this element. Review the article [Quick Tip: Aria Landmark Roles and HTML5 Implicit Mapping](https://a11yproject.com/posts/aria-landmark-roles/) for more information.

  ```html
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/contact">Contact Page</a>
      </li>
    </ul>
  </nav>
  ```

## `aria-labelledby`

```html
<section aria-labelledby="KittensHeader">
  <h2 id="KittensHeader">All Abbout Kittens</h2>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</section>
```

The `<section>` element includes the ARIA property `aria-labelledby` which points to the `id` of the heading within the section. Screen readers will announce the heading's content when they reach the `<section>` element, giving users a sense of the content contained in this portion of the document. Note: adding an accessible name to a `<section>` element promotes it to a `role="region"` landmark.  If this is not desired, then **do not** provide a `<section>` with an accessible name.


## Role, state, and property together in a Tab control

```html
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel_1">Apples</button>
  <button role="tab" aria-selected="false" aria-controls="panel_2" tabindex="-1">Oranges</button>
</div>
<div id="panel_1" aria-label="Apples" role="tabpanel" tabindex="0">...</div>
<div id="panel_2" aria-label="Oranges" role="tabpanel" hidden>...</div>
```

Each element has an ARIA role and attributes to create a complete Tab Widget.  Note: as of June 2019 no screen readers support `aria-controls` by default.
