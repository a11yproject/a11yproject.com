---
title: ARIA Landmark roles and HTML5 implicit mapping
description: Use ARIA Landmark Roles to help assistive devices navigate the markup.
category: Quick tip
author: Erik Runyon
date: 2013-01-14
updated_by: Scott O'Hara
last_updated: 2019-07-28
further_reading:
  - title: Accessible Landmarks
    url: https://www.scottohara.me/blog/2018/03/03/landmarks.html
    source: Scott O'Hara
    year: 2018
  - title: Where to put your search role
    url: http://adrianroselli.com/2015/08/where-to-put-your-search-role.html
    source: Adrian Roselli
    year: 2015
  - title: Short Note on HTML conformance checking
    url: https://developer.paciellogroup.com/blog/2015/08/short-note-on-html-conformance-checking/
    source: Steve Faulkner
    year: 2015
  - title: Using ARIA landmarks to identify regions of a page
    url: https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html
    source: W3C
  - title: Using ARIA
    url: https://www.w3.org/TR/using-aria/
    source: W3C
tags:
  - quicktip
---

[ARIA Landmark Roles](https://w3c.github.io/aria/#landmark_roles) can be helpful to assistive device users, as they can be used to orient a user to, and easily navigate, your website or application. For a quick video demonstration, check out ["How ARIA landmark roles help screen reader users"](https://youtu.be/IhWMou12_Vk), by [Léonie Watson](https://tink.uk/).


## Landmark quick reference

The following are common landmark roles that tend to be useful on many pages:

### banner

Typically the primary “header” of your page, containing the name of the site/application along with other globally available content. It MUST be scoped to the `body` element, and not within another sectioning element, or the `main` of the document.

### search

Use on the primary search form. Often, but not always, found within a `banner`.  If you have multiple `search` landmarks in a document it would be good to provide them with unique accessible names to indicate how they differ.

### main

Designates the primary content area of the current document. Only one main landmark should be exposed to users at a time.

### navigation

Used to promote an area as a navigation. Combine with a unique `aria-label` to provide context of the navigation's purpose. e.g. `<nav aria-label="primary">`.

### contentinfo

Typically the "footer" of your page that contains information about the parent document such as copyrights and links to privacy statements.

Implementing landmarks in your documents is a straightforward process. Simply add the `role` attribute referencing the appropriate landmark value. For example:

```html
<div role="contentinfo">
  ...
</div>
```

## HTML5 implicit mappings of Landmark roles

Before you start adding ARIA roles to your HTML elements, you should be aware that many of these landmarks will be natively conveyed by proper HTML usage. For example, the following markup snippet will produce a warning in modern HTML and accessibility automated checkers:

```html
<header role="banner" class="site-header">
  ...
</header>
```

The following table outlines the different ARIA landmarks, and the HTML5 element they are associated with:

<table class="table-dividers">
  <col width="35%">
  <thead>
    <tr>
        <th scope="col">Landmark Role</th>
        <th scope="col">HTML Element</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>banner</td>
      <td>
        <code>&lt;header&gt;</code>
        <br>(if not a child of a sectioning element or the <code>main</code>.)
      </td>
    </tr>
    <tr>
      <td>complementary</td>
      <td>
        <code>&lt;aside&gt;</code>
      </td>
    </tr>
    <tr>
      <td>contentinfo</td>
      <td>
        <code>&lt;footer&gt;</code>
        <br>(if not a child of a sectioning element or the <code>main</code>.)
      </td>
    </tr>
    <tr>
      <td>form</td>
      <td>
        <code>&lt;form&gt;</code>
        <br>(if provided an accessible name via <code>aria-label</code> or <code>aria-labelledby</code>)
      </td>
    </tr>
    <tr>
      <td>main</td>
      <td>
        <code>&lt;main&gt;</code>
        <br>(only use one per page)
      </td>
    </tr>
    <tr>
      <td>navigation</td>
      <td>
        <code>&lt;nav&gt;</code>
      </td>
    </tr>
    <tr>
      <td>region</td>
      <td>
        <code>&lt;section&gt;</code>
        <br> (if provided an accessible name via <code>aria-label</code> or <code>aria-labelledby</code>)
      </td>
    </tr>
    <tr>
      <td>search</td>
      <td>
        none
      </td>
    </tr>
  </tbody>
</table>

The majority of [modern browsers](https://www.html5accessibility.com/) (except Internet Explorer) support these mappings. But it's always beneficial to run your own tests to ensure the appropriate landmark role is being appropriately exposed to assistive technology.

For example, there are [still support gaps in browsers and screen readers](https://www.scottohara.me/blog/2019/04/05/landmarks-exposed.html) for exposing some landmarks. When presented with situations like this, ignoring conformance warnings, and adding a redundant role to an element, may be preferred to not exposing the correct landmark information.
