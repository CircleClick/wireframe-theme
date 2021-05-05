module.exports = {
    map: { inline: false },
    parser: 'postcss-scss',
    dev: false,
    plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require('postcss-advanced-variables')(),
        require('postcss-nested')(),
        require('autoprefixer')(),
        require('postcss-assets')({
            loadPaths: ['src/img/'],
            cachebuster: true,
        }),
        require('postcss-sort-media-queries')(),
        require('cssnano')(),
    ],
}