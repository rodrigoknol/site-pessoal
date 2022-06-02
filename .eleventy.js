module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "client/assets": "/" }, () => {
    return {
      passthroughFileCopy: true,
    };
  });

  return {
    htmlTemplateEngine: "njk",
  };
};