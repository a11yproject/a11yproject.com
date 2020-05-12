---
layout: post
title: ARIA Landmark roles and HTML5 implicit mapping
description: Use ARIA Landmark Roles to help assistive devices navigate the markup.
author: erik_runyon
category: Quick tips
updated_by: scott_ohara
last_updated: 2018-07-22
eleventyNavigation:
  key: Quick tip
  title: ARIA Landmark roles and HTML5 implicit mapping
tags:
  - quicktip
further_reading:
  - title: "Accessible Landmarks"
    url: https://www.scottohara.me/blog/2018/03/03/landmarks.html
    source: Scott O'Hara
    year: 2018
  - title: "Where to put your search role"
    url: http://adrianroselli.com/2015/08/where-to-put-your-search-role.html
    source: Adrian Roselli
    year: 2015
  - title: "Short Note on HTML conformance checking"
    url: https://developer.paciellogroup.com/blog/2015/08/short-note-on-html-conformance-checking/
    source: Steve Faulkner
    year: 2015
  - title: "Using ARIA landmarks to identify regions of a page"
    url: https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html
    source: W3C
  - title: "Using ARIA"
    url: https://www.w3.org/TR/using-aria/
    source: W3C
---
<a href="https://w3c.github.io/aria/#landmark_roles"><abbr title="Accessible Rich Internet Application">ARIA</abbr> Landmark Roles</a> can be helpful to assistive device users, as they can be used to orient a user to, and easily navigate, your website or application. For a quick video demonstration, check out ["How ARIA landmark roles help screen reader users"](https://youtu.be/IhWMou12_Vk), by [Léonie Watson](https://tink.uk/).

## Landmark quick reference
The following are common landmark roles that tend to be useful on many pages:

<dl>
  <dt>banner</dt>
  <dd>
    <p>
      Typically the “header” of your page, containing the name of the site/application along with other globally available content.
    </p>
  </dd>
  <dt>search</dt>
  <dd>
    <p>
      Use on the primary search form. Often, but not always, found within a `banner`.
    </p>
  </dd>
  <dt>main</dt>
  <dd>
    <p>
      Designates the primary content area of the current document. Only one main landmark should be exposed to users at a time.
    </p>
  </dd>
  <dt>navigation</dt>
  <dd>
    <p>
      Used to promote an area as a navigation. Combine with a unique <code>aria-label</code> to provide context of the navigation's purpose. e.g. <code>&lt;nav aria-label="primary"></code>.
    </p>
  </dd>
  <dt>contentinfo</dt>
  <dd>
    <p>Typically the "footer" of your page that contains information about the parent document such as copyrights and links to privacy statements.</p>
  </dd>
</dl>

Implementing landmarks in your documents is a straight forward process. Simply add the <code>role</code> attribute referencing the appropriate landmark value. For example:
```
<footer role="contentinfo">...</footer>
```


## HTML5 implicit mappings of Landmark roles
Before you start adding <abbr>ARIA</abbr> roles to your HTML elements, you should be aware that many of these landmarks will be natively conveyed by proper HTML usage. For example, the following markup snippet will produce a warning in modern HTML and accessibility automated checkers:

```
<header role="banner" class="site-header">...</header>
```

<figure class="figure-callout">
  <samp>
    <strong>Warning</strong>: <span>The <code>banner</code> role is unnecessary for element <code>header</code>.</span>
    <br>
    <code><b>&lt;header class="site-header" role="banner"&gt;</b>...</code>
  </samp>
  <figcaption>
    A snippet of the warning output from the <a href="https://validator.w3.org/nu/">Nu HTML Validator</a>.
  </figcaption>
</figure>

The following table outlines the different <abbr>ARIA</abbr> landmarks, and the HTML5 element they are associated with.

<table class="table-dividers">
  <col width="35%">
  <thead>
    <tr>
        <th scope="col">Landmark Role</th>
        <th scope="col">HTML5 Structural Element</th>
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

The majority of [modern browsers](http://www.html5accessibility.com/) (except <abbr title="Internet Explorer">IE</abbr>) support these mappings. But it's always beneficial to run your own tests to ensure the appropriate landmark role is being appropriately exposed to assistive technology.

For example, as of July 2018, Safari and VoiceOver on macOS High Sierra do not properly expose the <code>contentinfo</code> role from a <code>footer</code> element. When presented with situations like this, ignoring conformance warnings, and adding a redundant role to an element, may be preferred to not exposing the correct landmark information.
