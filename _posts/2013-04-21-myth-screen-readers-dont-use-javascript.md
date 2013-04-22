---
layout: post
title: |
    MYTH: Screen readers don’t use JavaScript
description: |
    98.6% of all screen readers have JavaScript enabled.
categories:
  - Myths
---
A common misconception among web developers is that screen readers only read the non-JavaScript page. Due to this misconception, we sometimes assume it's unnecessary to make JavaScript apps and other functionality accessible. **This is categorically false.**

According to a May 2012 survey conducted by WebAIM, [98.6% of screen reader users have JavaScript enabled](http://webaim.org/projects/screenreadersurvey4/#javascript).

![Javascript enabled: 98.6% vs. Javascript disbaled: 1.4%](http://chart.apis.google.com/chart?chxt=x,y&chtt=Respondents%20with%20JavaScript%20Enabled&cht=p&chl=Yes|No&chs=400x300&chd=t:98.6,1.4&chco=009900,990000)

Be sure to make efforts to ensure that all functionality (apps, custom UI controls, forms, etc) within your site is accessible with  JavaScript enabled as well as provide accessible fallbacks for the 2% of users (globally) with JavaScript disabled. A good starting point might be to use native anchor links and form inputs instead of custom scripted form elements.

### Futher Reading

- [Client-side Scripting Techniques for WCAG 2.0](http://www.w3.org/TR/WCAG20-TECHS/client-side-script.html)
- [WCAG 2.0 Failure: Scripting events to emulate links](http://www.w3.org/TR/WCAG20-TECHS/failures.html#F42)