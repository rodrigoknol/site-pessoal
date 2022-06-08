module.exports = function (eleventyConfig) {
  // Route overides
  eleventyConfig.addPassthroughCopy({ "client/assets": "/" }, () => {
    return {
      passthroughFileCopy: true,
    };
  });
};
