module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({ "./_src/_public/**/*": "/" })
    return {
        dir: {
            input: "_src",
            output: "_site"
        }
    }
}