const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require('moment');
const slugify = require("slugify");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).format('LL'); // E.g. May 31, 2019
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
  });

  // only content in the `posts/` directory
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("./src/posts/*").sort(function (a, b) {
      return a.date - b.date;
    });
  });

  // Universal slug filter strips unsafe chars from URLs
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@»]/g
    });
	});

	// Directories
	eleventyConfig.addPassthroughCopy("./src/fonts");

	// Social Media
	eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");
	eleventyConfig.addPassthroughCopy("./src/favicon.svg");
	eleventyConfig.addPassthroughCopy("./src/logo.svg");
	eleventyConfig.addPassthroughCopy("./src/logo-100x100.png");
	eleventyConfig.addPassthroughCopy("./src/logo-192x192.png");
	eleventyConfig.addPassthroughCopy("./src/logo-192x192.png");
	eleventyConfig.addPassthroughCopy("./src/logo-512x512.png");
	eleventyConfig.addPassthroughCopy("./src/safari-pinned-tab.svg");
	eleventyConfig.addPassthroughCopy("./src/favicon.ico");

	// Config
	eleventyConfig.addPassthroughCopy("./src/humans.txt");
	eleventyConfig.addPassthroughCopy("./src/manifest.json");
	eleventyConfig.addPassthroughCopy("./src/robots.txt");
	eleventyConfig.addPassthroughCopy("./src/sw.js");

  eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
	);

	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
});

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "./src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  };
};
