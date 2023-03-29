---
title: Using Ajax with ARIA live regions
description: How to set up ARIA live regions so that assistive technologies can announce when dynamic content is added to the page via an Ajax call.
category: How-to
author: Paul McFedries
date: 2023-03-29
tags:
  - howto
---

Many web pages avoid page reloads by using Ajax calls to retrieve dynamic content from a server and display that content on the page. Sighted users can see the new content, but assistive technologies cannot.

To ensure all your readers can view your dynamic content, you need to configure the region where that content appears as an ARIA live region. This article tells you everything you need to know.

## The problem: assistive technology doesn't announce dynamic content

When a person using assistive technology (<abbr>AT</abbr>) such as a screen reader first visits a web page, the <abbr>AT</abbr> parses the page and creates an accessibility tree for the page structure and content. By default, the <abbr>AT</abbr> only updates that accessibility tree on a page reload. This means that if your page has a script that uses Ajax to retrieve new content from a server and display that content on the page, the <abbr>AT</abbr> has no default mechanism for announcing the new content.

## The solution: live regions

Fortunately, there are ways to work around this limitation. For example, one way to enable an <abbr>AT</abbr> to announce dynamic page content is to use the `role` attribute to set up an element as a *live region*. This is a page region that the <abbr>AT</abbr> monitors for changes and announces any new or changed content to the user. By default, any of the following `role` attribute values specify an element as a live region: `alert`, `log`, `marquee`, `status`, or `timer`.

However, not every region with dynamic content falls neatly into one of these roles. When you have a `div` or other element that doesn’t fit any of the live-region roles, you can still configure the element as a live region by using the `aria-live` attribute.

## Understanding the `aria-live` values

The `aria-live` attribute can take one of the following three values:

- `aria-live="polite"` Configures the element as a live region, but only announces new or changed dynamic content when the user is idle.
- `aria-live="assertive"` Configures the element as a live region, and will interrupt whatever task the user is currently performing to announce new or changed dynamic content.
- `aria-live="off"` Configures the element to not act as a live region. This is the default for all elements, but can be useful if you want to override a `role` attribute that has an implicit `aria-live` value.

**Note:** It’s best to stick with `aria-live="polite"` because it’s the least intrusive for the user. Only use `aria-live="assertive"` if the dynamic content you're adding is extremely important.

Here’s an example:

```html
<div id="dynamic-content" aria-live="polite">
</div>
```
The `div` element is empty when the page loads. Now suppose that via an Ajax call, the above `div` element gets populated with some dynamic content:
```html
<div id="dynamic-content" aria-live="polite">
    Your changes have been saved.
</div>
```
Thanks to the inclusion of the `aria-live="polite"` attribute, a screen reader or similar assistive technology will notice the new content and announce it to the user.

**Note:** When you enable a live region on an element using `aria-live`, that live region also includes all of the element’s descendants.

## Example: updating a region with content from a remote API

A web page uses a button to retrieve a “Dad” joke from an application programming interface (<abbr>API</abbr>) provided by icanhazdadjoke.com. Here's the HTML:
```html
<h1>Dad Jokes</h1>
<button id="get-joke">Get a Dad joke</button>
<div id="show-joke" aria-live="polite"></div>
```
Note, in particular, the addition of the `aria-live="polite"` attribute to the `div` element.

The dynamic content comes via an Ajax call that’s triggered when the button is clicked:
```javascript
async function getJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json'
            }
        });
    
        if (!response.ok) {
          throw new Error('Request failed.');
        }
    
        const data = await response.json();
        const output = document.querySelector('#show-joke');
        output.innerHTML = data.joke;
        
    } catch (error) {
        console.error(error);
    }
}

const btn = document.querySelector('#get-joke');
btn.addEventListener('click', () => {
    getJoke();                
});
```

<img alt="The example web page with the focus on the Get a Dad Joke button. The region below the button displays a joke, which is the dynamic content retrieved via an Ajax call to the API. At the bottom of the screen, a Voiceover subtitle box displays the same joke."
    src="/img/posts/ajax-with-aria-live/aria-live-region-with-voiceover-text.png">

## Fine-tuning ARIA live regions

To make your ARIA live regions work the way you want, there are two other attributes you can use:

- `aria-atomic="true|false"` Determines how much of the changed live region the user's assistive technology announces to the user. Setting `aria-atomic="false"` tells the <abbr>AT</abbr> to announce only what has changed within the region. Setting `aria-atomic="true"` tells the <abbr>AT</abbr> to announce the entire live region
- `aria-relevant="keyword(s)"` A space-separated list of one or more keywords that define the types of changes you want the user's assistive technology to announce:
    - `additions` The <abbr>AT</abbr> announces when element nodes are added to the live region.
    - `text` The <abbr>AT</abbr> announces when text is added to the live region.
    - `removals` The <abbr>AT</abbr> announces when element nodes are removed from the live region.
    - `all` The <abbr>AT</abbr> announces node additions, text additions, and node removals. That is, setting `aria-relevant: all` is the same as setting `aria-relevant: additions text removals`.

**Note:** The default value for `aria-relevant` is `additions text`.

## Understanding the connection between ARIA roles and live regions

As mentioned earlier, some ARIA roles automatically configure an element as a live region, so those elements don’t require the `aria-live` attribute. The following table shows the `role` attribute values that automatically create live regions and shows the implicit `aria-live` and `aria-atomic` values associated with each role.

| `role=` Value        | Use Cases           | Implicit `aria-live` Value  | Implicit `aria-atomic` Value  |
| ------------- | ------------- | ----------- | ----------- |
| `alert`      | Errors and warnings | `aria-live="assertive"` | `aria-atomic="true"` |
| `log`      | Error logs, chat logs, game logs | `aria-live="polite"` | `aria-atomic="false"` |
| `marquee`      | Stock tickers, news crawlers | `aria-live="off"` | N/A |
| `status`      | Status updates | `aria-live="polite"` | `aria-atomic="true"` |
| `timer`      | Countdown timers, stopwatches | `aria-live="off"` | N/A |

## Summary

Bringing in dynamic content using Ajax calls to a server is a common pattern in today’s web. Dynamic content can make a page feel more lively and useful, but only if every page visitor has access to that content. Fortunately, it takes but a few moments of your time to turn a dynamic-content element into a live region that’s accessible to everyone.