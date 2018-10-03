const Platform = require('./utils/platform');
const Navbar = require('./utils/navbar');

var carousels = [];
var videos = [];
var fadeAnimations = [];
var fadeAnimationsPrimed = [];


function getTopPadding (element) {
    var style = element.currentStyle || window.getComputedStyle(element),
    margin = parseFloat(style.marginTop),
    padding = parseFloat(style.paddingTop);
    return margin+padding;
}

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

function videoPopupRemoveListener (e) {
    this.parentElement.removeChild(this);
    resumeAutoplayVideos();
    document.body.style.overflowY = "";
}
function videoPopupListener (e) {
    e.preventDefault();
    pauseAutoplayVideos();
    var popup = document.createElement("div");
    popup.classList.add("video__popup--container");
    var iframe = document.createElement("iframe");
    iframe.src = this.dataset.embed;
    //<iframe width="560" height="315" src="https://www.youtube.com/embed/EkBwLtog0VA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.setAttribute("allowfullscreen", true);
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("frameborder", "0");
    iframe.classList.add("youtube-responsive-embed");
    
    popup.appendChild(iframe);
    document.body.appendChild(popup);
    window.requestAnimationFrame(function () {popup.classList.add("active")});

    popup.addEventListener("click", videoPopupRemoveListener);
    document.body.style.overflowY = "hidden";
}

function initiateCarousel (cell) {
    setInterval(function () {
        if (cell.dataset.skip !== "true") {
            const rect = cell.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                const tabs = cell.children[cell.children.length-1];
                for (var i = 0; i < cell.children.length-1; i++) {
                    if (cell.children[i].classList.contains("active")) {
                        cell.children[i].classList.remove("active");
                        if (i == cell.children.length-2) {
                            cell.children[0].classList.add("active");
                            tabs.children[0].classList.add("active");
                            tabs.children[cell.children.length-2].classList.remove("active");
                        } else {
                            cell.children[i+1].classList.add("active");
                            tabs.children[i+1].classList.add("active");
                            tabs.children[i].classList.remove("active");
                        }
                        i = cell.children.length;
                    }
                }
            }
        } else {
            cell.dataset.skip = false;
        }
    }, 5000);
}

function carouselResizeListener () {
    for (var i = 0; i < carousels.length; i++) {
        const ele = carousels[i];
        var max = 0;
        for (var o = 0; o < ele.children.length; o++) {
            if (ele.children[o].offsetHeight > max) max = ele.children[o].offsetHeight;
        }
        ele.style.height = max+"px";
    }
}

function carouselTabControl (e) {
    e.preventDefault();
    this.dataset.clicked = true;
    var number = 0;
    for (var i = 0; i < this.parentElement.children.length; i++) {
        this.parentElement.children[i].classList.remove("active");
        if (this.parentElement.children[i].dataset.clicked === "true") number = i;
    }
    this.dataset.clicked = false;
    this.classList.add("active");
    this.parentElement.parentElement.dataset.skip = true;
    for (var i = 0; i < this.parentElement.parentElement.children.length-1; i++) {
        this.parentElement.parentElement.children[i].classList.remove("active");
    }
    this.parentElement.parentElement.children[number].classList.add("active");
}

function initiateCarousels () {

    for (var i = 0; i < carousels.length; i++) {
        const ele = carousels[i];
        ele.classList.add("active");
        const tabs = document.createElement("div");
        tabs.classList.add("carousel--tabs");

        for (let o = 0; o < ele.children.length; o++) {
            const tab = document.createElement("div");
            tab.classList.add("carousel--tab");
            tab.addEventListener("click", carouselTabControl);
            tabs.appendChild(tab);
        }
        tabs.children[0].classList.add("active");

        ele.appendChild(tabs);
        initiateCarousel(ele);
    }
    window.addEventListener("resize", carouselResizeListener);
    carouselResizeListener();
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
    const videoPopups = document.getElementsByClassName("video__popup");
    for (var i = 0; i < videoPopups.length; i++) {
        const element = videoPopups[i];
        element.addEventListener("click", videoPopupListener);
    }

    videos = document.getElementsByTagName("video");
    carousels = document.getElementsByClassName("carousel--container");
    initiateCarousels();

    fadeAnimations = document.body.querySelectorAll(".fade__animation, .fade__animation--psuedo");
    initiateFadeAnimations();

    const navAnchorLinks = document.getElementsByTagName("a");
    for (let i = 0; i < navAnchorLinks.length; i++) {
        navAnchorLinks[i].addEventListener("click", navbarAnchorListener);
    }
}); 
