const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyPluginTOC = require("eleventy-plugin-nesting-toc");

const slugify = require("slugify");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(eleventyPluginTOC, {
		wrapper: "div",
		tags: ["h2", "h3"],
		wrapperClass: "l-toc",
	});
	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return dateObj.toISOString();
	});

	/**
	 * Returns a humnan-readable date
		E.g. May 31, 2019
	 */

	eleventyConfig.addFilter("dateReadable", (value) => {
		const date = new Date(value);
		const utcDate = new Date(
			date.getUTCFullYear(),
			date.getUTCMonth(),
			date.getUTCDate()
		);
		const formatOpts = {
			timezone: "UTC",
			day: "numeric",
			month: "long",
			year: "numeric",
		};
		return new Intl.DateTimeFormat("en-US", formatOpts).format(utcDate);
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	eleventyConfig.addFilter("getPostsByAuthor", (posts, author) => {
		return posts.filter((a) => {
			return a.data.author === author;
		});
	});

	// only content in the `posts/` directory
	eleventyConfig.addCollection("posts", function (collection) {
		return collection.getFilteredByGlob("./src/posts/*").sort(function (a, b) {
			return a.date - b.date;
		});
	});

	// Universal slug filter strips unsafe chars from URLs
	eleventyConfig.addFilter("slugify", function (str) {
		return slugify(str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, ""), {
			lower: true,
			replacement: "-",
			remove: /[*+~.·,()'"`´%!?¿:@»]/g,
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
	let markdownItOpts = {
		html: true,
		breaks: true,
		linkify: true,
	};

	const implicitFigureOpts = {
		figcaption: true, // Convert title to figcaption
		lazy: true, // add loading="lazy" to img inside figure
	};

	const markdownLib = require("markdown-it")(markdownItOpts)
		.use(require("markdown-it-footnote"))
		.use(require("markdown-it-anchor"))
		.use(
			require("./src/_11ty/markdown-it-implicit-figure"),
			implicitFigureOpts
		);

	eleventyConfig.setLibrary("md", markdownLib);

	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		if (outputPath && outputPath.endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}

		return content;
	});

	return {
		templateFormats: ["md", "njk", "html", "liquid"],

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
			output: "dist",
		},
	};
};
