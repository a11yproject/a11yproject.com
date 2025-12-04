---
title: How to make accessible dialogs and modals
description: Modal dialogs and non-modal dialogs are two different components. Depending on which type of dialog it is, the accessibility approach differs.
category: How-to
author: Rachel R. Vasquez
date: 2025-01-12
further_reading:
  - title: "Modal dialog example"
    url: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
    source: W3
  - title: "The dialog element"
    url: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog/
    source: W3
  - title: "When to use modal vs dialog components"
    url: https://www.a11y-collective.com/blog/modal-vs-dialog/
    source: A11y collective
  - title: "Dialogs vs Modals - Is there a difference?"
    url: https://dev.to/iam_timsmith/dialogs-vs-modals-is-there-a-difference-210k
    source: DEV community
  - title: "Keyboard Accessibility"
    url: https://webaim.org/techniques/keyboard/
    source: WebAIM
  - title: "Where to put Focus when opening a modal dialog"
    url: https://adrianroselli.com/2025/06/where-to-put-focus-when-opening-a-modal-dialog.html#Forms
    source: Adrian Roselli
tags:
	- howto
---

A "modal" or "dialog" is a window that appears on top of a site's content. It's meant to capture people's attention, and may even require interaction
before it can be dismissed.

Many people may also be familiar with it being called a "pop-up". The words "modal" and "dialog" may seem interchangeable, but
they are two different components that require different accessibility approaches. Let's review what these differences are.

## Interaction differences

The difference between a "modal dialog" and a "non-modal dialog" is that a modal dialog blocks interaction with the site content behind it. A translucent full-screen
background color will usually appear behind the modal-dialog to emphasize this.

A non-modal dialog does not have a translucent background, and it does not block interaction with the site's content behind it.

### Examples of modal dialog uses

A modal dialog is useful for informing people of critical information, collecting required details or confirming irreversible actions. Some examples are:

- Confirming destructive actions like before deleting data permanently.
- Collecting required payment details for checkout.
- Showing critical warnings and alerts.
- Asking to acknowledge or agree to legal terms before proceeding.
- A login form to view content only accessible to those who are logged in.

Since this kind of dialog blocks interaction with the rest of the page and can feel disruptive, it's best to use modal dialogs for sharing really important
information and to implement them sparingly.

### Examples of non-modal dialog uses

A non-modal dialog is useful for sharing optional information and choices. Some examples are:

- For newsletter signups.
- For help text or tool tips.
- To offer optional settings and preferences.
- To advertise a product or sale.

## Keyboard behavior differences

Keyboard behavior differs between the two kinds of dialogs. Here is how each differ and where both dialogs should have the same keyboard behavior:

**Modal dialog**
- Maintains keyboard focus. None of the content behind should be focusable unless the modal dialog has been closed.
- When the modal dialog is opened, the [autofocus](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) attribute should be added to the element we expect people to interact with immediately.

In most cases, `autofocus` is added to the close button, but depending on the modal dialog's content, that might not be the best user experience.

**Non-modal dialog**
- Does not maintain keyboard focus. Meaning we can focus in and out of the dialog and are not blocked from content behind it.
- Once the dialog loses focus, it should automatically close.
- The `esc` key should close the dialog.

**Both dialog types**
- Focus should automatically move into the dialog once it's triggered.
- When a modal dialog is closed or a non-modal dialog loses focus, focus should return to the element that triggered it.
- If the dialog is not triggered by an element, when the dialog closes, focus should return to the previously focused element from before the dialog was active.

## How to implement a dialog

The [dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) gives developers an easier way to create dialogs and can be used to create both modal and non-modal dialogs.
The `dialog` element also offers out of the box accessibility features that would otherwise be implemented manually. Here are the benefits
to using this element:

- Implementation usually requires less Javascript and CSS when compared to implementing an accessible dialog from scratch.
- Automatically adds an `open` attribute to indicate when the dialog is active and can be interacted with.
- Automatically handles the `aria-modal` attribute for modal dialogs. This attribute helps assistive technologies to correctly identify and interact with the dialog.
- Inherently supports closing modal dialogs with the `esc` key.
  - Note: Does not support closing non-modal dialogs with the `esc` key by default. This can be added manually via Javascript.
- Automatically manages focus within modal dialogs.
- Comes with native functions to open and close dialogs.
- Modal dialogs include a `::backdrop` pseudo-element that can be styled with CSS.
- The `<dialog>` element has semantic meaning.

### ARIA attributes

For attributes that are not handled out of the box by using the dialog element, we can add ourselves. We will need attributes on both the element
that triggers the dialog and attributes on the dialog itself. The trigger is usually a button element so we'll  move forward with that assumption.

For the trigger button, we need to apply the [aria-haspopup](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) and [aria-controls](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) attributes.
`aria-haspopup="dialog"` tells assistive technologies that the button can trigger a popup, in this case, a dialog popup.

Using `aria-controls` on the button, that then references the `id` attribute on our dialog, connects the two. It's like telling assistive technology, "Hey, this button controls this dialog with this ID!"

Now for the dialog element, if our dialog has a heading or title, we can add an `id` attribute to our heading, and then
use the `aria-labelledby` attribute on the dialog. This links the dialog to the visible title which is then read out loud by assistive technologies
when the dialog appears.

If there is a description or summary in the dialog, we can also use `aria-describedby` on the dialog element. This links the dialog to
descriptive content which is also read aloud by assistive technologies.

Now that we've gone over necessary and optional ARIA attributes, let's see what this looks like in practice.

### HTML

This is a bare-bones example of a button that triggers a dialog that has an "example-dialog" id attribute:

``` html
<button id="btn-dialog-trigger" aria-haspopup="dialog" aria-controls="example-dialog">
  Open dialog
</button>
```

And this is what the dialog it's linked to would look like in the HTML:

``` html
<dialog id="example-dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-content" autoFocus>
        <h1 id="dialog-title">An example of a dialog!</h1>
        <button type="button" aria-label="Close dialog" id="btn-dialog-close">
            <svg aria-hidden="true">
                ...
            </svg>
            <span class="screen-reader-only">Close</span>
        </button>
    <p id="dialog-content">This example dialog has all the necessary attributes for developers to reference.</p>
    <p>You can use the...</p>
</dialog>
```

Note that the `aria-modal` attribute is handled automatically. We've linked to what our dialog title is and what our dialog is about with
our `dialog-title` id on the heading, and our `dialog-content` id on a paragraph element.

### Notes on the close button

The close button inside the dialog was written with the assumption that it's using an SVG or other icon instead of visible text. While visible text is
the most accessible option, that isn't how close buttons are usually designed. In that case, we don't want SVGs or other icon code read by
screen readers, so we use the `aria-hidden="true"` attribute. We also include the `aria-label="Close dialog"` along with a screen reader only text alternative.

If you're curious on how to include text alternatives for screen readers, check out our ["How to hide content"](https://www.a11yproject.com/posts/how-to-hide-content/) post.

### Javascript

The dialog element comes with functions out of the box to open and close our dialogs. To open modal dialogs, we can use the `.showModal()` function.
To open non-modal dialogs, we can use the `.show()` function.

To close either type of dialog, we can use the `.close()` or `.requestClose()` functions. Here's what that looks like in practice when used with the
example button and dialog HTML we've already provided.

``` javascript
const dialog = document.getElementById("example-dialog");
const triggerButton = document.getElementById("btn-dialog-trigger");
const closeButton = document.getElementById("btn-dialog-close");

// "Show the dialog" button opens the dialog modally
triggerButton.addEventListener("click", () => {
  dialog.showModal();
  //or .show() depending on our type of dialog
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

## Common mistakes and gotchas
- Do not add `tab-index` to the `<dialog>` element as it is not interactive and cannot receive focus. The dialog's contents can be interactive and receive focus.
- Do not disable scrolling the site content behind dialogs unless it's a modal dialog.
- The `role="dialog` attribute is only necessary if for some reason, we're not using the `<dialog>` element. Using this attribute on a `<dialog>` element is redundant.
- Dialog elements render to the "top layer" when opened. Because of this, `z-index` has no effect on dialog elements. Regardless of the value, dialog elements will always be the highest priority and display on top of anything else.
- Since dialog elements open on the topmost layer, this can cause layering issues with anything that renders elements dynamically outside of it. For example, ReCAPTCHAs that live in the dialog can render challenges outside the dialog, requiring people to dismiss the dialog to interact with it.
- [Form handling](https://adrianroselli.com/2025/06/where-to-put-focus-when-opening-a-modal-dialog.html#Forms) has some UX considerations.
