module.exports = {
	author: "The A11Y Project Team",
	category: "Announcement",
	layout: "post",
	tags: ["announcements"],
	eleventyComputed: {
		eleventyNavigation: {
			key: (data) => data.title,
			title: (data) => data.title,
		},
	},
};
