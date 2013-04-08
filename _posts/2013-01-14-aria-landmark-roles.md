---
layout: post
title: |
    Quick Tip: ARIA Landmark Roles
description: Use ARIA Landmark Roles to help assistive devices navigate the markup.
# date:
# last_updated:
categories:
  - Quick Tips
---
[ARIA Landmark Roles](http://www.w3.org/TR/wai-aria/roles) help assistive devices navigate your site. Important roles to be aware of include:

* **banner** – Typically the “header” of your page that includes the name of the site
* **search** – For the search form
* **form** - Group of elements that as a whole, assemble a form (please note that there isn't a great deal of legacy support for this role)</li>
* **main** – This would designate the main content area on your site
* **navigation** – Use on any navigation list, typically on the nav element
* **contentinfo** – Typically the "footer" of your page that contains information about the parent document such as copyrights and links to privacy statements

To add a role to an element, simply add the "role" as an attribute:

    <header role="banner" class="site-header">
