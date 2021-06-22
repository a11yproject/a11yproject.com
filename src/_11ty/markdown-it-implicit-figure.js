/**
 * Adapted from `markdown-it-image-figures` v1.2.0
 * @see https://github.com/Antonio-Laguna/markdown-it-image-figures/tree/5031c17edf4fd5b69845917d91683ae9ccef5bc2
 */

/**
 * Remove an attribute from a markdown-it token
 * @param {Object} token A markdown-it token
 * @param {String} attrName The name of the attribute to remove from the token
 */
function removeAttrFromToken(token, attrName) {
	token.attrs.splice(token.attrIndex(attrName), 1);
}

module.exports = function implicitFigurePlugin(md, options = {}) {

	function implicitFigure(state) {
		// do not process first and last token
		for (let i = 1, l = state.tokens.length; i < l - 1; ++i) {
			const token = state.tokens[i];

			if (token.type !== "inline") {
				continue;
			}
			// children: image alone, or link_open -> image -> link_close
			if (
				!token.children ||
				(token.children.length !== 1 && token.children.length !== 3)
			) {
				continue;
			}
			// one child, should be img
			if (token.children.length === 1 && token.children[0].type !== "image") {
				continue;
			}
			// three children, should be image enclosed in link
			if (token.children.length === 3) {
				const [childrenA, childrenB, childrenC] = token.children;
				const isEnclosed =
					childrenA.type !== "link_open" ||
					childrenB.type !== "image" ||
					childrenC.type !== "link_close";

				if (isEnclosed) {
					continue;
				}
			}
			// prev token is paragraph open
			if (i !== 0 && state.tokens[i - 1].type !== "paragraph_open") {
				continue;
			}
			// next token is paragraph close
			if (i !== l - 1 && state.tokens[i + 1].type !== "paragraph_close") {
				continue;
			}

			// We have inline token containing an image only.
			// Previous token is paragraph open.
			// Next token is paragraph close.
			// Lets replace the paragraph tokens with figure tokens.
			const figure = state.tokens[i - 1];
			figure.type = "figure_open";
			figure.tag = "figure";
			figure.attrPush(["role", "figure"]);
			state.tokens[i + 1].type = "figure_close";
			state.tokens[i + 1].tag = "figure";

			if (options.dataType) {
				figure.attrPush(["data-type", "image"]);
			}

			if (options.tabindex) {
				// add a tabindex property
				// you could use this with css-tricks.com/expanding-images-html5
				figure.attrPush(["tabindex", "-1"]);
			}

			let image;

			if (options.link && token.children.length === 1) {
				[image] = token.children;
				const link = new state.Token("link_open", "a", 1);
				link.attrPush(["href", image.attrGet("src")]);

				token.children.unshift(link);
				token.children.push(new state.Token("link_close", "a", -1));
			}

			// for linked images, image is one off
			image =
				token.children.length === 1 ? token.children[0] : token.children[1];

			if (options.lazy) {
				image.attrPush(["loading", "lazy"]);
			}

			const figCaption =
				options.figcaption === true ? image.attrGet("title") : null;

			if (figCaption) {
				const [captionContent] = md.parseInline(figCaption, state.env);
				figure.attrPush([
					"aria-label",
					md.renderer.renderInlineAsText(captionContent.children),
				]);

				token.children.push(
					new state.Token("figcaption_open", "figcaption", 1)
				);
				token.children.push(...captionContent.children);
				token.children.push(
					new state.Token("figcaption_close", "figcaption", -1)
				);

				removeAttrFromToken(image, "title");
			}

			if (options.copyAttrs && image.attrs) {
				const f = options.copyAttrs === true ? "" : options.copyAttrs;
				// Copying so any further changes aren't duplicated
				figure.attrs = image.attrs
					.filter(([k]) => k.match(f))
					.map((a) => Array.from(a));
			}
		}
	}

	md.core.ruler.before("linkify", "figure", implicitFigure);
};
