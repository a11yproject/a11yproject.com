---
title: Call for Chart Keyboard Navigation Standards
description: Charts with mouse interactions should have equivalent keyboard interactions, but what should those be?
category: Background
author: Julianna Langston
date: 2024-02-18
tags:
  - background
---

# Call for Chart Keyboard Navigation Standards

Charts and graphs are pushing the barriers for how densely they can convey information. More and more, users expect graphs to have interactive tooltips, zooming and panning, or other features to help with exploration. To handle the growing level of complexity, many developers turn to existing libraries to handle building dynamic, responsive, and interactive charts.

Unfortunately, while all of these interactions are designed to work with the mouse, many libraries struggle to provide parity for keyboard-only users. (The struggle is even greater for screen reader users, but I'm only going to focus on keyboard-only users in this article.)

You can find Github issues requesting keyboard navigation support for [Chart.js](https://github.com/chartjs/Chart.js/issues/1976), [Recharts](https://github.com/recharts/recharts/issues/2729), [Plotly.js](https://github.com/plotly/plotly.js/issues/562), [eCharts](https://github.com/apache/echarts/issues/18585), [Nivo](https://github.com/plouc/nivo/issues/126), and so on. But... what would that keyboard navigation actually look like?

If these were libraries that provided common UI components, like drop down menus, listboxes, or sliders, there are standards for what that keyboard navigation should look like. Contributors can review the WAI-ARIA standards, look at code examples, and understand what the expected result is.

However, when contributors or maintainers of charting libraries get requests for keyboard navigation, there's no standard to rely on. They have to make it up.

Some navigation is obvious. Let's take the example of a line plot with a single line.

Let's say a mouse user can hover over points on that line, which causes a tooltip to pop up with the values for that point.

Now, to provide a keyboard-only user an equivalent experience, we can make that chart a tab stop (with `tabIndex="0"`), and then use Left/Right arrow keys to move you between points. This feels straight forward.

What if the chart has 2 lines? How do you navigate between the lines? I can think of a couple of options:
1. Wrapping around
2. Up/down arrow keys
3. Keyboard shortcuts
4. Making each series into its own tab stop

But which one is the best? What kinds of situations will cause problems for these options? Who knows!

Several libraries have tried to take a stab at answering some of these questions, and it's no surprise that their solutions look very different.

* [Highcharts](https://www.highcharts.com/docs/accessibility/accessibility-module) (with the accessibility module). You can tab to a data point in a chart. From there, you can use the left/right arrow keys to navigate along the line. When you get to the end of the line, you'll wrap around to another line. You can also use the up/down arrow keys to navigate between lines, and up/down is mostly consistent with where the points are visually (making up/down inconsistent within a single series). Home takes you to the beginning of the first series listed in the legend, and End takes you to the last point of the series listed last in the legend. The legend is a separate tab stop, which you can navigate with infinitely wrapping left/right arrow keys.
* [Recharts](https://master--63da8268a0da9970db6992aa.chromatic.com/?path=/docs/api-accessibility--docs) (with the `accessibilityLayer` prop). The recharts tooltip is a single vertical line that covers all series of data, which negates the question of switching series. Users can use the left/right arrow keys to navigate from point to point.
[Chart2Music](https://www.chart2music.com/docs/) is a tool I work on that adds keyboard navigation to existing charts. C2M users can use left/right arrow keys to navigate the chart, page up/down to switch between series, up/down arrow keys to navigate between individual metrics in a boxplot or candlestick, along with a variety of other keyboard shortcuts.
[Victory](https://commerce.nearform.com/open-source/victory/docs/new#accessibility-features) surfaces the `tabIndex` property to developers, so that every data point can be added to the tab order, and a keyboard-only user has to tab through the entire chart before they can move on. Victory's accessibility page demos this, but only after multiple tab traps.
[SAS Graphics Accelerator](https://chromewebstore.google.com/detail/sas-graphics-accelerator/ockmipfaiiahknplinepcaogdillgoko?pli=1) is a chrome extension that was specifically designed to enable data exploration for blind and low vision users. You can navigate groups using left/right arrow keys, change groups by pressing "g", and switch between a box plot's "statistics" by pressing "t", among other keyboard shortcuts.
[Quorum Language](https://quorumlanguage.com/tutorials/charts/charttextnavigation.html#navigating_charts_on_the_keyboard), a programming language intended for education, and provides keyboard navigation support for the charts it generates. You can arrow between sections of the chart (the axes, the legend, and the data), and then press enter to "zoom in" on those areas. From there, you can use arrow keys to move between series, and press enter again to "zoom in" on a particular series. 

Other libraries also provide example code, so that developers can build their own examples. [Kendo UI recommends](https://docs.telerik.com/kendo-ui/knowledge-base/chart-series-keyboard-navigation) left/right arrow keys that wrap around. [TradingView recommends](https://tradingview.github.io/lightweight-charts/tutorials/a11y/keyboard) left/right arrow keys to pan a chart, and up/down for zooming.

Charts with mouse-based interactions should support keyboard equivalents, and we should demand that support from any software that builds interactive charts. That said, we can't expect those libraries to innovate new keyboard interactions.

Over the last decade, I have worked on implementing keyboard navigation for a dozen data visualization libraries or products. To kick off a discussion for standards, here are some basic interactions or questions that I've regularly needed to answer.

1. Navigating left/right
1. Does the navigation change if the chart is vertical v horizontal?
1. Moving between groups/series of data
1. If a series has a lot of data, should you be able to "skip" sections, using page up/down? What about Home/End?
1. Zooming
1. Panning
1. Selecting/brushing one or more data points
1. Activating a data point or series of data
1. Navigating a legend
1. If different items are in the tab order, what dictates the tab order?

Interactive charts are proliferating across the web, and we need to consider them like any other UI component. When we rely on component developers to innovate on keyboard interactions, we wind up with a collection of wildly different models.

Accessibility is at its best when it's consistent and reliable. The ARIA spec works to bring that to UI components. Charts need a navigation spec too.
