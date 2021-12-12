# Technology

Technology decisions for The A11Y Project.


## Preferences

The A11Y Project uses the following technology:

- [Eleventy](https://www.11ty.dev/).
- [gulp.js](https://gulpjs.com/).
- JavaScript.
- JSON.
- Markdown.
- [Nunjucks](https://mozilla.github.io/nunjucks/)/HTML.
- [Node.js](https://nodejs.org/en/).
- [Sass](https://sass-lang.com/)/CSS.
- SVG.
- WAI-ARIA.

This is a deliberate choice intended to balance:

- Accessibility and interoperability.
- Ease of set up.
- Approachability for beginners.
- Cross-Operating System and browser support.
- Local and end-user performance.

When working on the website, please be sure to utilize these technology choices first, and stay with them if at all possible. Honoring these technology choices helps to keep the site easier to maintain.


## Avoid

These technologies were evaluated and purposefully not utilized. We are not interested in incorporating them into the project.

### Babel, webpack, etc.

These module bundlers are complicated to set up and maintain and not a good fit for a site of this size and complexity.

### CSS Custom Properties

We use Sass to control CSS-related variables to maximize compatibility with older and non-standard browsers.

### CSS-in-JS

We consider this approach to CSS to be an industry [antipattern](https://en.wikipedia.org/wiki/Anti-pattern).

### Docker and other containers

We intentionally use a relatively limited set of technologies, so our need for codifying our environment to the degree a container grants is less of a concern. Additionally, the computational resources needed to run a container may make working on the site difficult for more lower-power devices.

### ECMAScript 6

We use pre-ES6 JavaScript to maximize compatibility with older and non-standard browsers, as well as niche assistive technology.

### PostCSS

We use Sass in favor of PostCSS not only to lessen dependencies, but to also streamline the amount of learning someone needs to do to work with our site's CSS.

### React, Vue, and other Single Page Applications

Our content needs do not require the benefits of a Single Page Application approach. In addition, these technology choices would artificially inflate the level of complexity to work on the site, as well as introduce significant barriers for assistive technology users and low-power devices.

### YAML

We previously used YAML for storing data, but now preferring JSON. The exception to this is for Eleventy and Markdown frontmatter.
