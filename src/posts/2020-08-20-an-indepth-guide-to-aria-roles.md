---
title: An in-depth guide to ARIA roles
description: ARIA roles are one half of the predefined categories of attributes used to describe elements that may not exist natively in browsers or may not be understood by screen readers and other assistive technologies.
category: Background
author: Duncan Jimbo
date: 2020-08-20
tags:
  - background
---

The [ARIA specification](https://www.w3.org/TR/wai-aria-1.1/) is divided into categories of attributes, one of which is Roles, and the other being States & Properties. ARIA roles, which are covered in this article, are generally used to describe elements:

- that may not exist within HTML,
- which may not have full cross-browser support,
- which may have implementation gaps in screen readers and other assistive technologies.

For instance, ARIA roles can be useful in situations where native HTML semantics are not understood in legacy user agents (e.g., browsers).

## Usage

ARIA roles are added to elements using the `role="<ROLE_TYPE>` attribute, where `ROLE_TYPE` represents the specific role being added. Once an ARIA role is set on an element, it should not be changed, regardless of the state of the element. In some cases, roles have to be paired with the appropriate ARIA state or property. However, this article's examples have reduced markup to limit the scope to just ARIA roles.

ARIA roles are broken down into six categories:

1. [Abstract Roles](#toc_Abstract-roles)
2. [Document Structure Roles](#toc_Document-Structure-roles)
3. [Landmark Roles](#toc_Landmark-Roles)
4. [Live Region Roles](#toc_Live-Region-Roles)
5. [Widget Roles](#toc_Widget-Roles)
6. [Window Roles](#toc_Window-Roles)

### Abstract roles

Abstract roles are only intended for use by browsers to help organize and streamline a document. They should not be used by developers writing HTML markup. Doing so will not result in any meaningful information being conveyed to assistive technologies or to users.

### Document Structure roles

Document roles are used to provide a structural description for a section of content. A majority of the available roles in this category resemble available semantic HTML tags and it is recommended to only use them when an appropriate native tag is not available. The roles in this category are also not typically interactive in nature. However, they may be used to contain other roles that are interactive. The following examples of `toolbar` and `tooltip` roles, serve as good examples of when to use Document Structure roles to provide information to assistive technologies when the equivalent native HTML tag is not available.

#### Toolbar example

```html
<div role="toolbar">
  <div class="text-characteristics">
    <button>Bold</button>
    <button>Italic</button>
    <button>Underline</button>
  </div>

  <div class="text-alignment">
    <button>Left</button>
    <button>Middle</button>
    <button>Right</button>
  </div>
</div>
```

#### Tooltip example

```html
<button aria-describedby="notifications-desc">Notifications</button>
<div role="tooltip" id="notifications-desc">View and manage notifications</div>
```

View the [full list of available Document Structure roles](https://www.w3.org/TR/wai-aria/#document_structure_roles).

### Landmark Roles

Landmark roles identify content areas within a page. They serve as navigational landmarks for the types of content areas that users may be interested in. These content areas include the page's primary content, collections of navigation links, and search functions to name a few.

Most Landmark roles are also implicitly exposed via specific Grouping and Sectioning HTML elements. For example:

- The `banner` role can be associated with the `<header>` element
- The `complementary` role can be associated with the `<aside>` element
- The `contentinfo` role can be associated with the `<footer>` element

Refer to [Quick Tip: ARIA Landmark roles and HTML5 implicit mapping](https://www.a11yproject.com/posts/2013-01-14-aria-landmark-roles/#toc_HTML5-implicit-mappings-of-Landmark-roles) for more details on the above mappings and browser support for them.

#### Navigation role example

```html
<nav role="navigation">
  <ul>
    <li><a href="#a">Dexter</a></li>
    <li><a href="#b">Doctor Who</a></li>
    <li><a href="#c">Futurama</a></li>
  </ul>
</nav>
```

#### Search role example

```html
<form role="search">
  <label for="search-input">Search this site</label>
  <input type="text" id="search-input" name="search">
  <input type="submit" name="submit-btn" value="Search" />
</form>
```

#### Footer role example

```html
<footer role="contentinfo">
  <p>&copy; 2020 Small Business Ltd. All rights reserved.</p>
</footer>
```

View the [full list of available Landmark roles](https://www.w3.org/TR/wai-aria/#landmark_roles).

### Live Region Roles

Live Region roles are used to inform assistive technologies, such as screen readers, of dynamic changes to page content, so that they can be announced to users. The reason for this is that dynamic changes may be visually noticeable, but likely will be missed by users with low or no vision.

#### Alert role example

The most commonly used Live Region role is the `alert` role.

```html
<div role="alert">
  <p>Autosave failed.</p>
</div>
```

When using the `alert` role, keep in mind that it should not be a focusable element and it should not require users to close it.

View the [full list of available Live Region roles](https://www.w3.org/TR/wai-aria/#live_region_roles).

### Widget Roles

Widget roles are used to describe common interactive patterns or those that currently lack semantic equivalents in HTML. In most cases, these interactive patterns will be JavaScript-driven. Widget roles should not be confused with `role="widget"` which is itself an [abstract role](https://www.w3.org/TR/wai-aria-1.1/#isAbstract).

#### Tabs role example

A common interactive pattern that relies on Widget roles is the very familiar Tabs pattern. Tabs rely on three Widget roles, namely `tab`, `tabpanel`, and `tablist`.

```html
<div>
  <div role="tablist" aria-label="Fruits">
    <button role="tab" aria-selected="true" aria-controls="apples-tab" id="apples">Apples</button>
    <button role="tab" aria-selected="false" aria-controls="oranges-tab" id="oranges">Oranges</button>
  </div>

  <div role="tabpanel" id="apples-tab" aria-labelledby="apples">
    <p>Apples tab content</p>
  </div>

  <div role="tabpanel" id="oranges-tab" aria-labelledby="oranges">
    <p>Oranges tab content</p>
  </div>
</div>
```

The `tablist` role is a composite Widget role, which means it is a container used to manage other contained widgets. It is used to contain the list of `tab` elements, each of which is an interactive element. When a `tab` element is activated, it will cause its associated `tabpanel` container to display.

View the [full list of available Widget roles](https://www.w3.org/TR/wai-aria/#widget_roles).

### Window Roles

Window roles are used when creating sub-windows to the primary application or document. A typical example is a modal dialog. The available Window roles are `alertdialog` and `dialog`.

#### Alertdialog role example

An `alertdialog` is a dialog that contains an alert message and focus is initially set to an element within the dialog. While the dialog is visible, keyboard and mouse interactions are limited to the elements within the dialog.

```html
<div role="alertdialog">
  <h2>Confirmation</h2>

  <p>Are you sure you want to discard all of your notes?</p>

  <div>
    <button type="button">No</button>
    <button type="button">Yes</button>
  </div>
</div>
```

#### Dialog role example

A `dialog` is a window that separates certain content or UI from the rest of the page. Like the `alertdialog` role, elements within the `dialog` can receive focus. While `alertdialog`s are more often than not modal (confining a user's interaction to the contents of the alert dialog until it is dismissed), a standard `dialog` can be modal or not.  When not modal, people may be able to interact with the contents of the dialog, as well as the primary content of the page, freely.

```html
<div role="dialog" aria-labelledby="dialog-label">
  <h2 id="dialog-label">Dialog Title</h2>
  <p>This is the dialog content.</p>

  <button>Close Dialog</button>
</div>
```

View the [full list of available Window roles](https://www.w3.org/TR/wai-aria/#window_roles).
