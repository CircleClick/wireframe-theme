module.exports = (options, defaults) => {
    const object = {};

    for (const key in defaults) {
        if (defaults.hasOwnProperty(key)) {
            object[key] = defaults[key];
        }
    }
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            object[key] = options[key];
        }
    }
    
    return object;
}