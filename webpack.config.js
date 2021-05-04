module.exports = {
    mode: 'production',
    entry: {
        main: `${__dirname}/src/js/main.js`
    },
    target: 'web',
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].min.js'
    }
};