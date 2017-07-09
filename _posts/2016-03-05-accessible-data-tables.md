---
layout: post
title: | 
    How&ndash;to: Create accessible data tables.
description: What you need to create an accessible data table.
published: true
author: Franklyn Roth
categories:
  - How-tos
---

The semantic purpose of a data table is to present tabular data. Sighted users can quickly scan the table but a screen reader goes through line by line. Proper markup must be added to help the screen reader make the correct associations that a sighted user would.

## Example of an accessible data table.
{% highlight html %}
	<table>
    <caption>Monthly Budget</caption>
    <thead>
        <tr>
            <th scope="col">Month</th>
            <th scope="col">Amount Earned</th>
            <th scope="col">Amount Spent</th>
            <th scope="col">Amount Saved</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">January</th>
            <td>$2500</td>
            <td>$1500</td>
            <td>$500</td>
        </tr>
        <tr>
            <th scope="row">February</th>
            <td>$2700</td>
            <td>$1500</td>
            <td>$700</td>
        </tr>
    </tbody>
</table>
{% endhighlight %}

Making an accessible table isn’t hard and can be broken down into two main things.

1. Add a table caption.

2. Mark row and column headings using the 'scope' attribute

## Table Captions
Table captions are added right after the opening `<table>` tag with `<caption>Your caption goes here</caption>`. 
	
The screen reader will then say “Table with 3 rows and 4 columns, Monthly Budget” or something to that effect. Without this, the screen reader will just start reading off the values inside the table, which is going to be frustrating and not super useful. Imagine reading an entire table cell by cell and then piecing together what the table is trying to tell you.

<p data-height="268" data-theme-id="0" data-slug-hash="zqOKvY" data-default-tab="result" data-user="franklynroth" class="codepen">See the Pen <a href="http://codepen.io/franklynroth/pen/zqOKvY/">Accessible Data Tables</a> by Franklyn (<a href="http://codepen.io/franklynroth">@franklynroth</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


## Row and Column Headings
For sighted users, row and column headings of tables are often highlighted visually. The screen reader will need this information coded into the markup.

Column headers should be marked using `scope="col"`. The `scope="col"` typically goes on the `<th>` element. If the `<th>` is a column like the <strong>"Amount Earned", "Amount Spent" and "Amount Saved"</strong> in my example, you would put them all as `scope="col"`. This lets the screen reader know that the `<th>`’s are column headers for that entire column. Column headers should be unique.

Row headers should be marked up using `scope="row"`. The `scope="row"` is typically put on the first `<th>` in the row. In this case <strong>"January" and "February"</strong> would get them. For optimal usability, the row header selected should be sufficiently unique and readable to identify the row. 

The screen reader will most likely be able to figure out what is a column header and row header, but assigning this makes it unambiguous to the screen reader on what is a row or column header and how to proceed.


That’s pretty much it on how to make an accessible table. Use them for tabular data, assign a caption and use `scope="col"` or `scope="row"`.
