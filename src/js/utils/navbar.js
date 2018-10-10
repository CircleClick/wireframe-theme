const setDefaults = require('./setDefaults');

const navbarClasses = [
    "navbar__logo--inverted",
    "navbar--black",
    "navbar--light",
    "navbar--dark",
    "navbar--translucent",
    "navbar--transparent",
];

const defaults = {
    additionalClasses: []
};


class Navbar {
    constructor ( navbar, targets, options = {} ) {
        this.targets = targets;
        this.activeTarget = -1;
        this.navbar = navbar;

        this.config = setDefaults(options, defaults);
    }

    applyMultipleClasses (target, classes) {
        if (typeof classes == "string") classes = classes.split(" ");
        for (let i = 0; i < classes.length; i++) {
            target.classList.add(classes[i]);
        }
    }

    removeNavbarModifiers () {
        for (let i = 0; i < navbarClasses.length; i++) {
            document.body.classList.remove(navbarClasses[i]);
        }
    }

    navbarAnchorListener (e) {
        const link = this.getAttribute("href");
        const split = link.split("#");
        if (split.length > 1) {
            const target = document.body.querySelector("a[name="+split[1]+"]");
            if (target) {
                e.preventDefault();
                target.scrollIntoView({behavior: 'smooth'});
                document.body.classList.remove("navbar__dropdown--active");
            }
        }
    }

    scrollListener () {
        if (window.scrollY === 0 && document.body.classList.contains("special__scroll__target")) {
            this.removeNavbarModifiers();
            this.applyMultipleClasses(document.body, document.body.dataset.navbar);
            activeTarget = -1;
        } else {
            if (scrollTargets.length == 0) return;
            let target = 0;
            for (var i = scrollTargets.length-1; i >= 0; i--) {
                let m = 0;
                const rect = scrollTargets[i].getBoundingClientRect();

                if (scrollTargets[i].dataset.navbar.match(/translucent/i) == null &&
                    scrollTargets[i].dataset.navbar.match(/transparent/i) == null) {
                        m += this.navbar.offsetHeight;
                }
                m += getTopPadding(scrollTargets[i]);

                if (rect.top-m <= 0) {
                    target = i;
                    i = -1;
                }
            }
            if (target != activeTarget) {
                activeTarget = target;
                this.removeNavbarModifiers();
                this.applyMultipleClasses(document.body, scrollTargets[target].dataset.navbar);
            }
        }
    }
}

module.exports = Navbar;