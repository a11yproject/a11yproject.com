---
layout: post
title: "How-to: Use <code>placeholder</code> attributes"
description: "How-to use placeholders on input elements."
author: rachel_vasquez
date: 2016-01-07
updated_by: scott_ohara
last_updated: 2018-07-22
categories:
  - How-tos
---
**Short answer:** Don't replace a `label` with a `placeholder` attribute. If labels are visually hidden, confirm that placeholders have sufficient contrast.

---

Form input `placeholder` attributes are helpful for providing hints to (sighted) users in forms. Often times, due to design decisions, a `placeholder` is used to replace a more semantic `label` element. Unfortunately, accessible `placeholder` browser support isn't complete and placeholders often lack sufficient color contrast by default.

Now, there's nothing wrong with using placeholders - they can still be used. However, they should be used in *addition* to a label, not as a replacement. What happens when we don't use a label for an input element, is a screen reader will get to that field, but won't have any information for the user on what the input element is for. So the screen reader user doesn't know what information to fill out. Also, a placeholder disappears when the input element is in focus, and can be an issue for people with memory impairments.

Make your forms accessible by using one of the following methods (in order of preference):

1. Redesign to include a proper visible `label`
1. Use `aria-label` or `aria-labelledby` to provide assistive text
1. [Visually hide](https://a11yproject.com/posts/how-to-hide-content/) `label` elements (in an accessible manner)

While we're paying attention to our placeholder text, let's review how to add better contrast:

{% highlight css %}
::-webkit-input-placeholder {
  color: #626262;
}
::-moz-placeholder {
  color: #626262;
}
:-moz-placeholder {  /* Older versions of Firefox */
  color: #626262;
}
:-ms-input-placeholder {
  color: #626262;
}
{% endhighlight %}

The above CSS assumes that the background for the form controls are `#fff`. If we test `#fff` and `#626262` in a color contrast tool like [Tanaguru Contrast-Finder](http://contrast-finder.tanaguru.com/result.html;jsessionid=57DFFB6E8E217E7C92C55B7CE2629CF6?foreground=%23626262&background=%23ffffff&isBackgroundTested=false&ratio=4.5&algo=HSV), the results will approve these colors for valid contrast. You can use your own color for this, but be sure to read about [how conformance levels work](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-levels-head), and use a color contrast tool to confirm.

In the above CSS, each selector for placeholder text needs to be seperate in their own declaration blocks. The reason for this is due to the prefixes needed for placeholder styles to apply. The browser will read the first selector, and if it's not the prefix for that browser, instead of reading through the rest until one applies, it will ignore the rest. To ensure each browser can find it's own prefixed placeholder text styles, it's necessary to write them each separate as we did above.

Once we have sufficient color contrast in our placeholders, placeholders can be used in addition to labels. Here are two examples of forms where placeholders are used with labels to maintain accessibility.

**Explicit labeling:**
{% highlight html %}
<form>
  <label for="your-name">
    Your Name:
  </label>
  <input type="text" id="your-name" name="your-name" placeholder="What's your name?">
  <input type="submit" value="Submit Name">
</form>
{% endhighlight %}

**Implicit & explicit labeling combined:**
{% highlight html %}
<form>
  <label for="your-name">
    Your Name:
    <input type="text" id="your-name" name="your-name" placeholder="What's your name?">
  </label>
  <input type="submit" value="Submit Name">
</form>
{% endhighlight %}

Note that in the second example above, omitting the `for` attribute on the label is still valid, but still best practice to include. By keeping the `for` attribute in place, we're combining both explicit and implicit techniques. For more about explicit and implicit labeling, check out ["Labeled with Love"](https://www.aaron-gustafson.com/notebook/labeled-with-love/). By adding the `for` attribute to a label with the same value as the ID for the input element it corresponds to, the label becomes *explicitly* associated with that input element. Explicit labeling is great for screen reader users and when clicking/focusing that label, it will automatically focus the associated input element.

## Further reading

- [Don’t Use The Placeholder Attribute](https://www.smashingmagazine.com/2018/06/placeholder-attribute/) - Smashing Magazine (June 2018)
- [HTML5 Accessibility Chops: the placeholder attribute](https://blog.paciellogroup.com/2011/02/html5-accessibility-chops-the-placeholder-attribute/) - from the Paciello Group (February 2011)
- [Using @placeholder on Input](https://www.w3.org/WAI/GL/wiki/Using_@placeholder_on_input) - W3C (November 2012)
