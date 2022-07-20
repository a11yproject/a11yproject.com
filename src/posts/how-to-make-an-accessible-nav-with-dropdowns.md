---
title: Make an accessible &lt;nav&gt; with dropdowns
description: Navigation is a critical part of any application, it allows people to complete journeys and find the information they need. Therefore making it is accessible is key.
category: How-to
author: James Bateson
date: 2022-08-01
further_reading:
  - title: "Menus & Menu Buttons"
    url: https://inclusive-components.design/menus-menu-buttons/
    source: Heydon Pickering
  - title: "Don't use ARIA menu roles for site nav"
    url: https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html
    source: Adrian Roselli
  - title: "Navigation role support"
    url: https://a11ysupport.io/tech/aria/navigation_role
    source: Accessibility Support
thanks: ""
tags:
  - howto
---

Navigation is a critical part of any application and can often involve multiple levels of nesting. It allows people to complete journeys and find the information they need. Therefore making sure it is accessible is key. HTML5 includes the &lt;nav&gt; section element to help with this.

## The &lt;nav&gt; section element

Let's start with a quick overview of &lt;nav&gt;. The &lt;nav&gt; section element has semantic meaning and therefore comes with accessibility benefits just by using it to mark up sections of navigation.

<blockquote>
	<p>The &lt;nav&gt; HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.</p>
	<footer>
		<cite><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav">MDN web docs: &lt;nav&gt;: The Navigation Section element</a></cite>
	</footer>
</blockquote>

Here's the example markup that we'll build up throughout this article. It's worth noting that already this is an example of accessible navigation.

```html
<nav>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

### Semantics

The &lt;nav&gt; element will automatically communicate a role of navigation-equal to setting `role="navigation"` (this may still need to be added if needing to [support some assistive technology](https://a11ysupport.io/tech/aria/navigation_role)) meaning that it can be easily navigated to by a screen reader user—as a landmark.

### Best practices summary

- Not all blocks containing links need to use &lt;nav&gt;. Use it for larger sections of navigation links. Overuse can create 'noise' for screen reader users.
- Uniquely label the &lt;nav&gt; to give a better idea of its purpose. This could be done with a heading or `aria-label`/`aria-labelledby`. <strong>Note:</strong> Screen readers will already announce the element as being navigation, so avoid using the word 'nav' or 'navigation' in the accessible name.

```html
<nav aria-labelledby="main-nav-label">
	<h2 id="main-nav-label" class="visually-hidden">Main menu</h2>

	<ul>
		...
	</ul>
</nav>

<nav aria-label="Main menu">
	<ul>
		...
	</ul>
</nav>
```

## Adding dropdowns

Navigation designs often require multiple levels of links underneath a top-level link. This results in using the dropdown pattern, whereby a hidden set of links are shown by interacting with the parent, this can be multiple levels deep. Some accessibility considerations must be made before implementation.

- How would the navigation show if there were no styles.
- How should the parent link toggle the dropdown.
- How can focus order be handled correctly.
- Does the parent link still need to retain its link functionality.
- Make sure that dropdowns are hidden from assistive technology until needed.

Dropdown sub-navigation is typically marked up as a nested list inside of the parent link list item.

```html
<nav aria-label="Main menu">
	<ul>
		<li><a href="#">Home</a></li>
		<li>
			<a href="#">About</a>
			<ul>
				<li><a href="#">Our history</a></li>
				<li><a href="#">Meet the team</a></li>
			</ul>
		</li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

### Consideration 1: No styles

Structuring the markup as shown in the example, means that without any CSS loaded, the links would show as a default nested list and items underneath the parent link, clear both visually and semantically.

### Consideration 2: Parent link toggle

Navigation patterns will often attach a click/focus event to the entire parent link to reveal the dropdown of nested items. This, however, comes with two problems. By using a click it means that extra functionality is needed to handle the primary purpose of the parent link, which should itself act as a link. By using focus, people traversing the navigation using a keyboard would be required to tab through all dropdowns regardless of whether they wanted to or not.

By adding a toggle element within the parent link, for example, an arrow icon button, allows people to only show the dropdown if they are interested in seeing further links associated with the parent. Make sure that the toggle element has a sufficient tap/click (this pattern could be used for mobile as well) area and focus/hover states.

**Note:** If your parent elements don't need to be a link themselves, make sure to use a `<button>` element, so that they can correctly communicate they are expandable and have an event associated.

```html
<nav aria-label="Main menu">
	<ul>
		<li><a href="#">Home</a></li>
		<li>
			<a href="#">
				About Us
				<button>
					<svg aria-hidden="true">...</svg>
					<span class="visually-hidden">Toggle About Us submenu</span>
				</button>
			</a>
			<ul>
				<li><a href="#">Our history</a></li>
				<li><a href="#">Meet the team</a></li>
			</ul>
		</li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

### Consideration 3: Focus order

By nesting the dropdown list as a direct child of the parent list item, it means that when visible, the first link will be the next focusable element after the parent item toggle. Therefore adding a trigger inside the parent link is a great way to ensure that a user's intention is to see the dropdown for that link and therefore take focus to the first link in said dropdown.

Related to focus, another nice consideration would be to make sure that if the user pressed the <kbd>ESC</kbd> key, the dropdown would close, and the user's focus return to the toggle element they used to open it.

### Consideration 4: Parent link functionality

A parent link for a dropdown generally will still need to retain its functionality as a link. This can present problems if, for example, a click event has been attached to it to reveal a dropdown. Giving people an explicit way to toggle the visibility of dropdowns is a much nicer option.

### Consideration 5: Showing/hiding the dropdown

When the navigation dropdown is closed, it's important to ensure that the nested links are not visible to assistive technology. For example, people using a keyboard cannot tab to the links—this can lead to confusion as to where their focus is on the page.

To hide elements such as sub-menus from assistive technology, you should not rely on `opacity`. Although visually hidden, it would still allow the dropdown to be discoverable via assistive technology. To ensure that dropdowns are hidden until people choose to access that sub-navigation, consider toggling the `display: none;` or `visibility: hidden;` properties.

## What about ARIA?

When thinking about making some component interactions accessible, it's often assumed that more complex ARIA attributes and patterns may be needed. However, a &lt;nav&gt; with dropdowns does not require any. There are [menu-related ARIA patterns available](https://www.w3.org/TR/wai-aria-practices/#menu). However, these are slightly different in context from the site navigation pattern in this article. Menu ARIA is more designed to deal with native operating system-like menus, for example, a selection of options for a user.

Although &lt;nav&gt; can be used without ARIA to create accessible navigation, there are things we can do with it to provide a slightly better experience for users.

### Expanded states (aria-expanded)

The `aria-expanded` attribute can be used to communicate whether a toggle control is expanded or collapsed. In our navigation example, this could be useful to inform screen reader users if the dropdown is open or not, based on whether the toggle is expanded or collapsed. This value of the attribute would need to be changed via JavaScript when the user opened and closed the dropdown.

```html
<nav aria-label="Main menu">
	<ul>
		<li><a href="#">Home</a></li>
		<li>
			<a href="#">
				About Us
				<button aria-expanded="false">
					<svg aria-hidden="true">...</svg>
					<span class="visually-hidden">Toggle About Us submenu</span>
				</button>
			</a>
			<ul>
				<li><a href="#">Our history</a></li>
				<li><a href="#">Meet the team</a></li>
			</ul>
		</li>
		<li><a href="#">Work</a></li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav>
```

### Current link (aria-current)

A common navigation design will see the currently active page link visually different in some way, indicating to the user which page they are on. However, this isn't helpful for people who may not be able to see this distinction. The `aria-current` attribute can be used to inform assistive technology that a link is the current page. `aria-current` accepts a set list of values, the most suitable for the main navigation item would be `aria-current='page'`.

## Skip links

Although not technically required to make accessible navigation making sure that your site has a 'skip link' (usually visually hidden until tabbed to) that can bypass the main site navigation is a handy usability feature. It allows a user to jump directly to a page's &lt;main&gt; landmark, skipping common and repeated site areas, such as the navigation so the user does not need to traverse this content on every page.

## Alternatives

Multi-level navigation with dropdowns often referred to as 'mega menus' can often be complex to implement and require some user thought to navigate. In certain cases, we might want to consider an alternative.

### In-page navigation/table of contents

One option could be to keep the top-level navigation as links only, then on the page that the parent link takes the user to, have an in-page navigation/table of contents. This could help a user get to a page they would like to see the content for, and then navigate accordingly from there. Rather than lots of links being nested with complexity in dropdowns, show them all up-front on a suitable page.

If the page was short, these could anchor a user down to the relevant content, or if a content-heavy site, each link would be a page.
