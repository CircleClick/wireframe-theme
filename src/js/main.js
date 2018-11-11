const Navbar = require('./plugins/navbar');
const Popups = require('./plugins/popups');
const Carousel = require('./plugins/carousels');
const AutoplayVideos = require('./plugins/autoplayVideos');

const Platform = require('./utils/platform');

const ScrollDebouncer = require('./utils/scrollDebouncer');

var fadeAnimations = [];
var fadeAnimationsPrimed = [];
var autoplay = {};


function scrollListener () {
    autoplay.listener();

    const sizer = window.innerHeight/1.35;
    const sizer2 = window.innerHeight;
    for (var i = fadeAnimationsPrimed.length-1; i >= 0; i--) {

        const element = fadeAnimationsPrimed[i];
        const rect = element.getBoundingClientRect();

        if (!element.classList.contains("primed")) {

            element.classList.remove("primed");
            fadeAnimationsPrimed.splice(i,1);

        } else if (rect.top < sizer) {

            element.classList.remove("primed");
            fadeAnimationsPrimed.splice(i,1);

        } else if (rect.top < sizer2) {
            setTimeout(function () {element.classList.remove("primed")}, 4000);
        }

    }
}

const scrollInstance = new ScrollDebouncer(scrollListener);


function navbarListener (e) {
    e.preventDefault();
    document.body.classList.toggle("navbar__dropdown--active");
    return false;
}


function initiateFadeAnimations () {
    for (var i = 0; i < fadeAnimations.length; i++) {
        const ele = fadeAnimations[i];
        ele.classList.add("primed");
        fadeAnimationsPrimed.push(ele);
    }
}

window.addEventListener("DOMContentLoaded", function () {
	
	const popupLinks = document.getElementsByClassName("plugin-popup__link");
	const popups = new Popups(popupLinks);
	popups.initiate();

	autoplay = new AutoplayVideos(document.getElementsByTagName("video"));
	
	const carousel = new Carousel();
	carousel.initiate(document.getElementsByClassName("carousel__container"));


    fadeAnimations = document.body.querySelectorAll(".fade__animation, .fade__animation--psuedo");
    initiateFadeAnimations();

    const navAnchorLinks = document.getElementsByTagName("a");
    for (let i = 0; i < navAnchorLinks.length; i++) {
        navAnchorLinks[i].addEventListener("click", Navbar.navbarAnchorListener);
	}

    scrollListener();
	
}); 
