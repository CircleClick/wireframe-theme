

(function(root, factory) {

    // AMD
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(root);
        });
    }

    // Node.js or CommonJS
    else if (typeof exports === 'object') {
        module.exports = factory;
    }

    // Browser globals
    else {
        root.scrollAnim = factory(root);
    }

})(this, function(root) {

    'use strict';

	var scrollAnim = {};


	return scrollAnim;
});