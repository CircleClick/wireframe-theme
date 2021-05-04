module.exports = {
    mode: 'development',
    entry: {
        main: `${__dirname}/src/js/main.js`
    },
    target: 'web',
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].min.js'
    }
};