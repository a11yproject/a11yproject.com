---
title: Make an accessible <code>&lt;nav&gt;</code> with dropdowns
description: Navigation is a critical part of any application, it allows people to complete journeys and find the information they need. So making it accessible is key.
category: How-to
author: James Bateson
date: 2022-09-24
further_reading:
  - title: "Menus & Menu Buttons"
    url: https://inclusive-components.design/menus-menu-buttons/
    source: Heydon Pickering
  - title: "Don't use ARIA menu roles for site nav"
    url: https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html
    source: Adrian Roselli
thanks: "Anya Mueller, Alex Hall"
tags:
  - howto
---

Navigation is a critical part of any application and can often involve many levels of nesting. It allows people to complete journeys and find the information they need. So making it accessible is key. HTML includes the <code>&lt;nav&gt;</code> landmark element to help with this.

## The <code>&lt;nav&gt;</code> landmark element

Let's start with a quick overview of <code>&lt;nav&gt;</code>. The <code>&lt;nav&gt;</code> landmark element has semantic meaning and comes with accessibility benefits by using it to mark-up sections of navigation.

<blockquote>
	<p>The <code>&lt;nav&gt;</code> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.</p>
	<footer>
		<cite><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav">MDN web docs: &lt;nav&gt;: The Navigation Section element</a></cite>
	</footer>
</blockquote>

Here's the example markup that we'll build up throughout this article. It's worth noting this is an example of accessible navigation.

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

The <code>&lt;nav&gt;</code> element will communicate a role of navigation-equal to setting `role="navigation"`, (this may still need to be added if needing to [support some assistive technology](https://a11ysupport.io/tech/aria/navigation_role)) meaning it can be easily navigated to by people with screen readers—as a landmark.

### Best practice

- Not all blocks containing links need to use <code>&lt;nav&gt;</code>. Use it for larger sections of navigation links. Overuse can create "noise" for people using screen readers.
- Uniquely label the <code>&lt;nav&gt;</code> to give a better idea of its purpose. This can be done with a heading or `aria-label` or `aria-labelledby`. **Note**: Screen readers will already announce the element as being navigation, so avoid using the word "nav" or "navigation" in the accessible name.
- For site navigation with more than two links, consider using a list (`<ul>` or `<ol>`) inside of the <code>&lt;nav&gt;</code>. This will allow people who use assistive technology to know how many links the list contains.

#### Using a heading & aria-labelledby

```html
<nav aria-labelledby="main-nav-label">
	<h2 id="main-nav-label" class="visually-hidden">Main</h2>

	<ul>
		...
	</ul>
</nav>
```

#### Using an aria-label

```html
<nav aria-label="Main">
	<ul>
		...
	</ul>
</nav>
```

## Adding dropdowns

Navigation often needs one or more levels of links underneath a top-level link. This results in using the dropdown pattern, whereby a hidden set of links are shown by interacting with the parent. This approach can nest links many levels deep.

- How would the navigation show if there were no styles?
- How should the parent link toggle the dropdown?
- How can focus order be handled correctly?
- Does the parent link still need to keep its link functionality?
- Make sure that dropdowns are hidden from assistive technology until needed.

Dropdown sub-navigation is typically marked up as a nested list inside of the parent link list item.

```html
<nav aria-label="Main">
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

### Tip 1: No styles

Structuring the markup as shown in the previous example means without any CSS loaded, the links would show as a default nested list and items underneath the parent link, clear both visually and semantically.

### Tip 2: Parent link toggle

Navigation patterns will often attach a click/focus event to the entire parent link to reveal the dropdown of nested items. This comes with two problems:

1. Using a click means extra functionality is needed to handle the primary purpose of the parent link, which should itself act as a link.
2. By using focus, people traversing the navigation using a keyboard would be required to tab through all dropdowns regardless of whether they wanted to or not.

Adding a toggle element, for example, an arrow icon button, within the parent link allows people to only show the dropdown if they are interested in seeing further links associated with the parent. Make sure that the toggle element has enough of a tap/click (this pattern could be used for mobile as well) area and accessible focus/hover states.

**Note:** If your parent elements don't need to be a link themselves, make sure to use `<button type="button">` element, so that they can communicate they are expandable and have an event associated and benefit from all the accessible goodness buttons get for free.

```html
<nav aria-label="Main">
	<ul>
		<li><a href="#">Home</a></li>
		<li>
			<a href="#">
				About Us
				<button type="button">
					<!-- Visual cue icon - for example a downward facing chevron -->
					<svg aria-hidden="true" focusable="false">
						<!-- Icon SVG code -->
					</svg>
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

### Tip 3: Focus order

By nesting the dropdown list as a direct child of the parent list item, it means that when visible, the first link will be the next focusable element after the parent item toggle.

So adding a trigger inside the parent link is a great way to ensure a person intends to see the dropdown for that link and so take focus to the first link in said dropdown.

Related to focus, another nice feature would be to make sure that if the person pressed the <kbd>ESC</kbd> key, the dropdown would close, and the person's focus returns to the toggle element they used to open it.

### Tip 4: Parent link functionality

A parent link for a dropdown generally will still need to keep its functionality as a link. This can present problems, for example, a click event has been attached to it to reveal a dropdown. Giving people an explicit way to toggle the visibility of dropdowns via a separate control is a more accessible option.

### Tip 5: Showing/hiding the dropdown

To hide elements such as sub-menus from assistive technology, you should not rely on `opacity`. Although visually hidden, it would still allow the dropdown to be discoverable via assistive technology. To ensure that dropdowns are hidden until people choose to access that sub-navigation, consider toggling the `display: none;` or `visibility: hidden;` properties.

When the navigation dropdown is closed, it's important to ensure the nested links are not visible to assistive technology. For example, people using a keyboard cannot tab to the links—this can lead to confusion on where their focus is on the page.

## What about ARIA?

<blockquote>
	<p>Before you use ARIA,  use native HTML elements or attributes first. In the case that the semantics you are looking for is not available in HTML, then use ARIA.</p>
	<footer>
		<cite><a href="https://www.deque.com/blog/top-5-rules-of-aria/">Deque: Top 5 rules of ARIA</a></cite>
	</footer>
</blockquote>

When thinking about making some component interactions accessible, it's often assumed that more complex ARIA attributes and patterns may be needed. But a <code>&lt;nav&gt;</code> with dropdowns <strong>does not</strong> need any.

Although <code>&lt;nav&gt;</code> can be used without ARIA to create accessible navigation, there are things we can do with it to provide a better experience for people:

### Expanded states (aria-expanded)

The `aria-expanded` attribute can be used to communicate whether a toggle control is expanded or collapsed. In our navigation example, this could be useful to inform people using screen readers if the dropdown is open or not, based on whether the toggle is expanded or collapsed. This value of the attribute would need to be changed via JavaScript when the person opened and closed the dropdown.

```html
<nav aria-label="Main">
	<ul>
		<li><a href="#">Home</a></li>
		<li>
			<a href="#">
				About Us
				<button aria-expanded="false">
					<!-- Visual cue icon - for example a downward facing chevron -->
					<svg aria-hidden="true" focusable="false">
						<!-- Icon SVG code -->
					</svg>
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

A common navigation design will see the currently active page link visually different in some way, indicating to the person which page they are on. But this isn't helpful for people who may not be able to see this distinction. The `aria-current` attribute can be used to inform assistive technology that a link is the current page. `aria-current` accepts a set list of values, the most suitable for the main navigation item would be `aria-current='page'`.

## Skip links

Although not technically required to make accessible navigation, making sure your site has a [skip link](https://www.a11yproject.com/posts/skip-nav-links/) that can be set to bypass the main site navigation is a handy usability feature. It allows someone to skip repeated site areas, such as the main navigation, so someone using assistive technology does not need to traverse this repetitive content on every page.

## Alternatives

Multi-level navigation with dropdowns often referred to as 'mega menus' can often be complex and need some thought to navigate. In certain cases, we might want to consider an alternative:

### In-page navigation/table of contents

One option could be to keep the top-level navigation as links only. Then, on their child pages, have an in-page navigation/table of contents. If the content length was suitable and the page didn't need to be broken out into further pages, these links would then anchor down the page to the relevant sections.

**Note**: There are [accessibility considerations to be aware of](https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/) when using this pattern.

### Local navigation

Local navigation can help people understand where they are, and what content might be related to the page they are on. This could look similar to the page of contents previously mentioned, but instead of the links anchoring, each would go to a separate page. Or it could sit below the main navigation, for example, but being individual to a page.

<blockquote>
	<p>Visible local navigation is usually beneficial when users engage in exploratory browsing, rather than known-item search. In such situations, users may visit several pages within a category — either because they do not know exactly what category they need, even though they have a sense of its neighborhood, or because they need to combine or compare information from multiple categories</p>
	<cite><a href="https://www.nngroup.com/articles/local-navigation/">Nielsen Norman Group: Local Navigation Is a Valuable Orientation and Wayfinding Aid</a></cite>
</blockquote>

**Note**: Be wary of changing how navigation appears and functions across multiple pages, predictability can be an important part of [cognitive accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Cognitive_accessibility).

## Summary
