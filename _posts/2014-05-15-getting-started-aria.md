---
layout: post
title: |
    Getting started with ARIA
description: Introduction to ARIA, describing Roles, States, and Properties and when to use ARIA in HTML
published: true
author: Monika Piotrowicz
categories:
  - Basics
---

## What is ARIA?

ARIA (Assistive Rich Internet Applications), is a spec from the W3C and created to improve accessibility of applications by providing extra information to screen readers via HTML attributes. Out of the box, screen readers work with regular HTML, but adding ARIA can provide screen reader users with more context and greater interactivity with content.

ARIA has no effect on how elements are displayed or behave in browsers. It does not add new functionality and is meant to act only as an extra descriptive layer for screen readers.

### Links
* HTML5 ARIA spec -  <http://www.w3.org/TR/aria-in-html/>
* ARIA spec - <http://www.w3.org/WAI/PF/aria/>

## ARIA Attributes
ARIA attributes are predefined in the spec and are divided into two categories, roles and states & properties. Both can be added directly in the markup or via JavaScript and should be updated as needed based on user interactions. There are rules behind which elements may receive types of ARIA attributes, as well as design guidelines for how and when these should be updated in common interactive widgets.

### Links
* Roles - <http://www.w3.org/TR/wai-aria/roles>
* States and Properties - <http://www.w3.org/TR/wai-aria/states_and_properties>
* Design Patterns - <http://www.w3.org/TR/wai-aria-practices/#aria_ex>

## ARIA Roles

An ARIA role is added via a `role="<ROLE TYPE>"` attribute and does not change for an element once set. There are four categories of ARIA roles.

* Landmark

  Landmark roles identify large content areas and are used by screen readers for navigation. If landmark roles are used, it's important that all page content fall under a role so that all content is available to the navigation.
  Eg. `<footer role="contentinfo">`

* Document

    Document roles provide a structural description for a section and are typically non-interactive. Some document roles map onto existing HTML tags (Eg. `<div role="form">`) and are only meant for cases when using the native tag is not possible. It's unnecessary to add ARIA roles to existing semantically meaningful elements. For example, `<form role="form">` is redundant.

* Widget

  Widget roles describe common interactive patterns that currently lack semantic equivalents in HTML, and can be used on their own, or as part of larger, composite widgets.
  Eg. `<div role="tooltip">`

* Abstract

  Abstract roles are only used by browsers to help organize and streamline a document, and **never** by developers to mark up HTML. They are not mapped onto screen readers and provide no extra accessibility information directly between HTML and screen reader.

## States and Properties

ARIA states and properties are often used to support ARIA roles that exist on a page. Properties often describe relationships with other elements and for the most part, do not change once they're set. States are more dynamic and are typically updated with JavaScript as a user interacts with a page. It's common to refer to states and properties collectively as just ARIA attributes. Screen readers are notified when attributes change and can announce these changes to users after an interaction takes place.

## When to use ARIA
Native HTML semantics should still be used whenever possible, but ARIA is useful when certain design patterns or interactions make it impossible to do so. For example, a complex tabbed-interface has no semantic equivalent with HTML, but a `role="tablist"` and its related attributes can be added to provide this detail to screen readers. ARIA is also useful to describe newer HTML elements that may not yet have full cross-browser support or be understood by screen readers.

To create accessible applications, basic principles of semantic HTML, keyboard support, and color contrast should still be the primary focus of developers. ARIA may be used to "fill in the blanks" where web page information isn't understood or available to a screen reader via HTML alone.

### Links
* ARIA in HTML <http://rawgit.com/w3c/aria-in-html/master/index.html>

## ARIA Examples

* Landmark role
  The `<nav>` element has been given a landmark role allowing screen reader users navigate directly to this element.

~~~~~~~~
    <nav role="navigation">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact Page</a>
        </li>
      </ul>
    </nav>
~~~~~~~~

* aria-labelledby

~~~~~~~~
<section aria-labelledby="KittensHeader">
  <h2 id="KittensHeader">All Abbout Kittens</h2>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
</section>
~~~~~~~~

  The `<section>` element includes the ARIA property `aria-labelledby` which lists the ID of the section title. Screen readers will announce this title when they reach the `<section>` element, giving users a sense of the content contained in this portion.

* Role, state, and property together in a Tab control

~~~~~~~~
<ul role="tablist">
  <li>
    <a href="#first-tab" role="tab" aria-selected="true" aria-controls="first-tab">Panel 1</a>
  </li>
  <li>
    <a href="#second-tab" role="tab" aria-selected="false" aria-controls="second-tab">Panel 2</a>
  </li>
</ul>
<div id="first-tab" role="tabpanel"></div>
<div id="second-tab" role="tabpanel"></div>
~~~~~~~~

  Each element has an ARIA role and attributes to create a complete tab widget. The relationship between a tab link and tab panel is now available to screen readers.
