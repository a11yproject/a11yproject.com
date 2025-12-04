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

A "modal" or "dialog" is a window that appears on top of a site's content. It draws attention and may require interaction before the user can dismiss it.

People often know these as pop-ups. They also use the words “modal” and “dialog” as if they mean the same thing, but these terms describe different
components and follow different accessibility rules. Below is a breakdown of how they differ.

## Interaction differences

A modal dialog blocks interaction with the rest of the page. A translucent full-screen background often appears behind it to make this clear.

A non-modal dialog does not block interaction with the page and does not include a translucent background.

### Examples of modal dialog uses

Modal dialogs are useful for informing people of critical information or confirming required actions. Some examples are:

- Confirming destructive actions, such as deleting data.
- Collecting required payment details for checkout.
- Displaying critical warnings and alerts.
- Asking users to agree to legal terms.
- Showing a login form when access requires authentication.

Because a modal dialog interrupts the page, it should be used sparingly.

### Examples of non-modal dialog uses

Non-modal dialogs are useful for optional information and choices. Some examples are:

- Newsletter signups.
- Help text or tooltips.
- Optional settings and preferences.
- Product, event, or sale announcements.

## Keyboard behavior differences

Keyboard behavior differs between the two kinds of dialogs. Here is how each differ and where both dialogs should have the same keyboard behavior:

**Modal dialogs**
- Keep keyboard focus inside the dialog. People should not be able to focus on any content behind it.
- When the dialog is open, focus should move to the element users need first. The [autofocus](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/autofocus) attribute is helpful for this.

**Non-modal dialogs**
- Do not trap keyboard focus. Users can move focus into and out of the dialog.
- The dialog should close automatically when it loses focus.
- Pressing the `esc` key should close the dialog.

**Behaviors shared by both**
- Focus should move into the dialog once it's triggered.
- When a dialog is closed, focus should return to the triggering element.
- If there was no trigger, focus should return to the element that was focused before the dialog opened.

## How to create a dialog

The [dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) makes it easier to create both modal and non-modal dialogs.
It includes several built-in features that developers would otherwise need to add manually.

### Key benefits:

- Requires less JavaScript and CSS than building a dialog from scratch.
- Toggles an `open` attribute to show when the dialog is active.
- Manages the `aria-modal` attribute on modal dialogs. This attribute helps assistive technologies to identify and interact with the dialog.
- Supports closing modal dialogs with the `esc` key.
  - Note: Does not support closing non-modal dialogs with the `esc` key by default. This can be added via custom Javascript.
- Manages focus within modal dialogs.
- Comes with native functions to open and close dialogs.
- Modal dialogs include a `::backdrop` pseudo-element for styling.
- Gives semantic meaning to your markup.

### ARIA attributes

For attributes that are not handled out of the box, we can add them ourselves.

#### Trigger element

The trigger is usually a button element so we'll move forward with that assumption.

- `aria-haspopup="dialog"` — announces that the button opens a dialog.
- `aria-controls="dialog-id"` — links the button to the dialog it controls.

#### Dialog element

If the dialog has a heading:

- Give the heading an id.
- Add `aria-labelledby="heading-id"` to link the dialog to its title.

If the dialog has descriptive text:

- Give the descriptive element an id.
- Add `aria-describedby="description-id"`.

Assistive technologies will read both the title and description when the dialog opens.

### HTML

A simple button that triggers a dialog might look like this:

``` html
<button id="btn-dialog-trigger" aria-haspopup="dialog" aria-controls="example-dialog">
  Open dialog
</button>
```

And a basic dialog that connects to the button:

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

Note: The `aria-modal` attribute is added automatically for modal dialogs.

### Notes on the close button

The example uses an icon-only close button. Since icons should not be read by screen readers, use:

- `aria-hidden="true"` on the icon.
- `aria-label="Close dialog"` on the button.
- A [visually hidden text alternative](https://www.a11yproject.com/posts/how-to-hide-content/) when possible.

### Javascript

The dialog element comes with functions out of the box to open and close our dialogs. To open modal dialogs, we can use the `.showModal()` function.
To open non-modal dialogs, we can use the `.show()` function.

To close either type of dialog, we can use the `.close()` or `.requestClose()` functions. Here's what that looks like in practice:

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
- Do not disable scrolling the site's content unless it's a modal dialog that is active.
- Do not add role="dialog" to the <dialog> element — it’s redundant.
- `z-index` does not affect dialog stacking. Dialogs always render on the top layer.
- Elements that render outside the dialog (such as ReCAPTCHA challenges) may appear above it. This can force users to close the dialog to interact with them.
- [Form handling](https://adrianroselli.com/2025/06/where-to-put-focus-when-opening-a-modal-dialog.html#Forms) may have UX considerations.
