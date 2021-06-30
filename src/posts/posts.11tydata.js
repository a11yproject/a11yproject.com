module.exports = {
	layout: "post",
	eleventyComputed: {
		eleventyNavigation: {
			key: ({ category }) => category,
			title: ({ title }) => title,
		},
	},
};
