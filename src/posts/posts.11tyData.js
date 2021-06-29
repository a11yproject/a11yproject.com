module.exports = {
	layout: "post",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      title: data => data.title
    }
  }
};
