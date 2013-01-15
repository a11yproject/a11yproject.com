---
layout: post
title: |
    How To Add Keyboard Navigation with Access Keys
tldr: Access Keys are simple shortcuts that allow for simple keyboard navigation
# date:
# last_updated:
categories:
  - How-tos
---
Access keys are a very simple accessibility tool to implement. By doing so, it allows users to navigate to specified sections of your site via keyboard shortcuts (alt + _key_ on Windows, or control + _key_ on Macintosh, although some browsers use other modifiers). So for instance, to add an access key to your header, to allow users to get back to your homepage, you would use the following:

    <h1><a href="/" accesskey="1">Title of My Site</h1>

This would allow a user to hit “control + 1″ (or “alt + 1″) on any page of your site to get back to the homepage.

Now one of the difficulties with access keys is letting your users know they exist. One option is to add a title attribute alongside each accesskey, which could tip-off users when they mouse over the element for future reference, like so:

    <h1><a href="/" accesskey="1" title="Homepage shortcut key = 1">Title of My Site</h1>

There are other ways to advertise access keys. [See this Wikipedia entry for suggestions](http://en.wikipedia.org/wiki/Access_key).

So which keys should you use you ask? That’s a great question. There’s nothing in the HTML spec indicating which keys/values should be used, but there are sets that have become widely adopted around the web. According to the UK Government accessibility guidelines, you should use the following:

<table class="table table-striped table-bordered">
  <thead>
    <tr><th colspan="2">UK Government Shortcuts</th></tr>
    <tr><th>Access key</th><th>Target</th></tr>
  </thead>
  <tbody>
    <tr><td>S</td><td>Skip navigation</td></tr>
    <tr><td>1</td><td>Home page</td></tr>
    <tr><td>2</td><td>What’s new</td></tr>
    <tr><td>3</td><td>Site map</td></tr>
    <tr><td>4</td><td>Search</td></tr>
    <tr><td>5</td><td>FAQs</td></tr>
    <tr><td>6</td><td>Help</td></tr>
    <tr><td>7</td><td>Complaints procedure</td></tr>
    <tr><td>8</td><td>Terms and conditions</td></tr>
    <tr><td>9</td><td>Feedback form</td></tr>
  </tbody>
</table>

I simple way to get started would be to include access keys for the homepage (“1″), content (use “c” for instance), navigation (“s”) and search (“4″).