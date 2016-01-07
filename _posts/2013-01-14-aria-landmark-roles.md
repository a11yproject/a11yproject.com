---
layout: post
title: |
    Quick Tip: Aria Landmark Roles and HTML5 Implicit Mapping
description: Use ARIA Landmark Roles to help assistive devices navigate the markup.
# date:
# last_updated:
categories:
  - Quick Tips
---
[ARIA Landmark Roles](http://www.w3.org/TR/wai-aria/roles) help assistive device users navigate your site ([example video by Leone Watson on YouTube](https://youtu.be/IhWMou12_Vk)). Important roles to be aware of are:

* **banner** – Typically the “header” of your page that includes the name of the site
* **search** – For the search form ([how to implement](http://adrianroselli.com/2015/08/where-to-put-your-search-role.html))
* **main** – This would designate the main content area on your site
* **navigation** – Use on any navigation list, typically on the nav element
* **contentinfo** – Typically the "footer" of your page that contains information about the parent document such as copyrights and links to privacy statements

To add a role to an element, simply add the "role" as an attribute:

    <header role="banner" class="site-header">

So, why do you see this warning when you [validate your html](https://validator.w3.org/)?

<p class="info warning"><strong>Warning</strong>: <span>The <code>banner</code> role is unnecessary for element <code>header</code>.</span></p><p class="location">From line <span class="first-line">60</span>, column <span class="first-col">1712</span>; to line <span class="last-line">60</span>, column <span class="last-col">1758</span></p><p class="extract"><code>/a&gt;&lt;/div&gt; <b>&lt;header class="header fixed-pos" role="banner"&gt;</b>&lt;div c</code></p>

You see the warning ([consider fixing/changing](https://www.paciellogroup.com/blog/2015/08/short-note-on-html-conformance-checking/)) because in HTML5, several of the landmark roles are implicit via the native structural elements.

**HTML5 Implicit Mappings**

<table class="table table-striped table-bordered">
  <thead>
    <tr>
        <th>Landmark Role</th>
        <th>HTML5 Structural Element</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>banner (if not within an article or section element)</td>
        <td>
          &lt;header&gt;
        </td>
    </tr>
    <tr>
        <td>main</td>
        <td>
          &lt;main&gt; (only use one per page)
        </td>
    </tr>
    <tr>
        <td>navigation</td>
        <td>
          &lt;nav&gt;
        </td>
    </tr>
    <tr>
        <td>contentinfo</td>
        <td>
          &lt;footer&gt;
        </td>
    </tr>
    <tr>
        <td>article</td>
        <td>
          &lt;article&gt;
        </td>
    </tr>
    <tr>
        <td>complementary</td>
        <td>
          &lt;aside&gt;
        </td>
    </tr>
    <tr>
        <td>region</td>
        <td>
          &lt;section&gt;
        </td>
    </tr>
  </tbody>
</table>

The good news is most modern [desktop browsers](http://stevefaulkner.github.io/html-mapping-tests/) (except IE) support this mapping. However, [iOS Safari](https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks-example.html) does not. OUCH! For now, it’s probably best to implement the landmark roles and ignore these warnings.