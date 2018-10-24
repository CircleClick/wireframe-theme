const Navbar = require('./plugins/navbar');
const Popups = require('./plugins/popups');
const Carousel = require('./plugins/carousels');

const Platform = require('./utils/platform');

var videos = [];
var fadeAnimations = [];
var fadeAnimationsPrimed = [];



var bounceCheck = false;
function scrollDebouncer () {
    if (!bounceCheck) {
        window.requestAnimationFrame(scrollListener);
        bounceCheck = true;
    }
}

function scrollListener () {
    bounceCheck = false;
    autoplayListener();

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
function autoplayListener () {
    for (var i = 0; i < videos.length; i++) {
        if (videos[i].autoplay === true) {
            const element = videos[i];
            const rect = element.getBoundingClientRect();
    
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                if (element.dataset.visible != "true") {
                    element.dataset.visible = true;
                    element.play();
                }
            } else if (element.dataset.visible) {
                element.dataset.visible = false;
                element.pause();
            }
        }
    }
}
window.addEventListener("scroll", scrollDebouncer);



function navbarListener (e) {
    e.preventDefault();
    document.body.classList.toggle("navbar__dropdown--active");
    return false;
}

function pauseAutoplayVideos () {
    for (var i = 0; i < videos.length; i++) {
        const element = videos[i];
        if (element.autoplay) element.pause();
    }
}

function resumeAutoplayVideos () {
    for (var i = 0; i < videos.length; i++) {
        const element = videos[i];
        if (element.autoplay && element.dataset.visible) element.play();
    }
}

function initiateFadeAnimations () {
    for (var i = 0; i < fadeAnimations.length; i++) {
        const ele = fadeAnimations[i];
        ele.classList.add("primed");
        fadeAnimationsPrimed.push(ele);
    }
}

window.addEventListener("DOMContentLoaded", function () {

    const ad_social_links = document.getElementsByClassName('ad-social__icon');
    for (let index = 0; index < ad_social_links.length; index++) {
        const element = ad_social_links[index];
        element.addEventListener('click', ()=>{
            gtag('event', 'click', {
                'event_category': 'social',
                'event_label': element.dataset.platform,
            });
        })
    }


    if (true || !iOS) {
        const videoEles = document.querySelectorAll("[data-autoplay-src]");
        for (var i = 0; i < videoEles.length; i++) {
            const element = videoEles[i];
            const vid = document.createElement("video");
            vid.setAttribute("muted", "true");
            vid.setAttribute("autoplay", "true");
            vid.setAttribute("loop", "true");
            vid.setAttribute("playsinline", "true");
            vid.setAttribute("poster", "/wp-content/themes/ix-theme/assets/img/hero-video-poster.jpg");
            vid.classList.add("autoplay__video");

            vid.muted = true;
            vid.autoplay = true;
            vid.loop = true;
            // if (element.dataset.autoplaySrcSmall && window.innerWidth < 768) vid.src = element.dataset.autoplaySrcSmall;
            vid.src = element.dataset.autoplaySrc;
            element.appendChild(vid);
            
            const rect = vid.getBoundingClientRect();
            if (rect.top < window.innerHeight) vid.dataset.visible = true;
            else vid.dataset.visible = false;
        }
    }

    scrollTargets = document.getElementsByClassName("scroll__target");
    scrollDebouncer();


    document.getElementById("navbar-toggle").addEventListener("click", navbarListener);
    document.getElementById("navbar-toggle-2").addEventListener("click", navbarListener);
	
	const popupLinks = document.getElementsByClassName("plugin-popup__link");
	const popups = new Popups(popupLinks);
	popups.initiate();

	videos = document.getElementsByTagName("video");
	
	carousel = new Carousel();
	carousel.initiate(document.getElementsByClassName("carousel__container"));


    fadeAnimations = document.body.querySelectorAll(".fade__animation, .fade__animation--psuedo");
    initiateFadeAnimations();

    const navAnchorLinks = document.getElementsByTagName("a");
    for (let i = 0; i < navAnchorLinks.length; i++) {
        navAnchorLinks[i].addEventListener("click", navbarAnchorListener);
    }
}); 
