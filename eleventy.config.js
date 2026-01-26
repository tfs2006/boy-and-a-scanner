module.exports = function (eleventyConfig) {
    // Pass through copy for static assets
    eleventyConfig.addPassthroughCopy("src/**/*.svg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");
    eleventyConfig.addPassthroughCopy("src/CNAME");
    eleventyConfig.addPassthroughCopy("src/google*.html");
    eleventyConfig.addPassthroughCopy("src/css"); // CSS

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
