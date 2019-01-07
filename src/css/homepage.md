# Styleguide

This styleguide is a living styleguide, a reference that automatically stays up-to-date with the live website. This ensures that everyone working on the site always has a shared understanding of how the component parts that make up the site should look and behave.

The styleguide is organized into the following sections:

## Overview

This is the page you're currently reading.

## [Logic]()

This is documentation for the underlying [Sass](https://sass-lang.com/) logic used to build many of the site's classes. It covers [variables](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_) and [maps](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps), [functions](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions), and [mixins](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins).

## [TODO]()

Why this exists.

## [TODO]()

Why this exists.

## Why Sass?

Internet Explorer is still a [very popular desktop browser](https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22deviceType%22%3A%7B%22%24in%22%3A%5B%22Desktop%2Flaptop%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Custom%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222017-11%22%2C%22dateEnd%22%3A%222018-11%22%2C%22plotKeys%22%3A%5B%7B%22browser%22%3A%22Chrome%22%7D%2C%7B%22browser%22%3A%22Internet%20Explorer%22%7D%2C%7B%22browser%22%3A%22Firefox%22%7D%2C%7B%22browser%22%3A%22Edge%22%7D%2C%7B%22browser%22%3A%22Safari%22%7D%5D%2C%22segments%22%3A%22-1000%22%7D). The pre-processed logic Sass offers helps us ensure the site will look and perform well on this browser.

## Style authoring

Please follow these following guidelines when writing  styles for this site:

### stylelint

This site uses [stylelint](https://github.com/stylelint/stylelint) to help ensure consistent formatting. stylelint is a linter for Sass, much like how [JSHint](https://jshint.com/) is a linter for JavaScript. Linters are sets of rules that help you watch out for potential errors in your code. 

Please make sure your preferred code editor supports stylelint, and to install support for it. This will help make Pull Requests easier for the site maintainers.

### Comments

Use Sass-style comments (`//`). When writing comments that speak to the selector's overall purpose, keep them on their own line. 

Please keep comments no more than 80 characters long. If you need more room, please use a line break to help keep things legible.

#### Exceptions

Mark any declaration that overrides the styleguide with an exception comment (`// EXCEPTION:`). This will help us identify and codify areas where the styleguide is weak and could be improved.

#### Hacks

Place a hack comment (`// HACK:`) after values when the declaration is atypical or isn't immediately self-evident (ex: browser compatibility hacks, z-index, etc. ).

### Imports

Please use Sass to handle importing partials. Using CSS's [`@import`](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) rule is considered an anti-pattern, as it generates extra HTTP requests. It's better to let Sass stitch files together. 

### Selectors

#### IDs

Do not use [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)s as selectors. They create a high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) that makes it difficult to work with.

#### !important

Only use `!important` to [force immutability](https://csswizardry.com/2016/05/the-importance-of-important/). A good example of this would be for styling the `hidden` attribute, where you want to guarantee that hidden content stays that way.

If you are using it to override something in the cascade, it signals an opportunity to re-write your CSS and lessen the specificity. 

#### JavaScript hooks

Use either [HTML data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) or CSS classes with a prefix of `js-` as a hook for JavaScript. For ease of maintenance, do not include visual styling with attributes or classes that are used for logic.

#### Nesting

Avoid nesting selectors when possible. If you need to nest selectors, try to keep it only one level deep. Never nest your selectors more than two.

Exceptions to this are nesting pseudo classes and elements, media queries, and other features like [`@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports), where it makes sense to couple the selector with its parent.

#### State

Prefer using [semantic selectors for state](https://css-tricks.com/user-facing-state/) in place of CSS classes. For example, use `[disabled] { … }` in place of `.is-disabled { … }`.






