---
layout: post
title: Screen readers don't use JavaScript
category: Myths
description: 97.6% of all screen readers have JavaScript enabled.
author: dave_rupert
last_updated: 2014-09-26
eleventyNavigation:
  key: Myths
  title: Screen readers don't use JavaScript
tags:
  - myths
further_reading:
  - url: https://www.w3.org/TR/WCAG20-TECHS/client-side-script.html
    title: "Client-side Scripting Techniques for WCAG 2.0"
    source: W3C
  - url: https://www.w3.org/TR/WCAG20-TECHS/failures.html#F42
    title: "WCAG 2.0 Failure: Scripting events to emulate links"
    source: W3C
---
A common misconception among web developers is that screen readers only read the non-JavaScript page. Due to this misconception, we sometimes assume it's unnecessary to make JavaScript apps and other functionality accessible. **This is categorically false.**

According to a January 2014 survey conducted by WebAIM, [97.6% of screen reader users have JavaScript enabled](https://webaim.org/projects/screenreadersurvey5/#javascript).

![JavaScript enabled: 97.6% vs. JavaScript disabled: 2.4%](https://chart.apis.google.com/chart?chxt=x%2Cy&chtt=Respondents%20with%20JavaScript%20Enabled&cht=p3&chl=Yes%7CNo&chs=500x200&chd=t:97.6%2C2.4&chco=AD3130)

Be sure to make efforts to ensure that all functionality (apps, custom UI controls, forms, etc) within your site is accessible with  JavaScript enabled as well as provide accessible fallbacks for the 2% of users (globally) with JavaScript disabled. A good starting point might be to use native anchor links and form inputs instead of custom scripted form elements.
