const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600, 900, 1200, 1500, 1800],
    formats: ["avif", "webp", "jpeg", null],
    outputDir: "./client/assets/image/opmized/",
    urlPath: "/image/opmized/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

module.exports = function (eleventyConfig) {
  // Route overides
  eleventyConfig.addPassthroughCopy({ "client/assets": "/" }, () => {
    return {
      passthroughFileCopy: true,
    };
  });

  // Image optmizer
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
};
