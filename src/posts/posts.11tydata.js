// Tags cannot have non-alphabetical characters
const FORBIDDEN_TAG_CHARS_EXP = new RegExp("[^a-zA-Z]");

module.exports = {
	layout: "post",
	eleventyComputed: {
		eleventyNavigation: {
			key: ({ category }) => category,
			title: ({ title }) => title,
		},
		tags: ({ category, tags }) => {
			if (tags) {
				return tags;
			} else {
				return [category.replace(FORBIDDEN_TAG_CHARS_EXP, "").toLowerCase()];
			}
		},
	},
};
