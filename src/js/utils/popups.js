const setDefaults = require('./setDefaults');

const defaults = {
};


class Carousel {
    constructor ( popups, options = {} ) {
        this.popups = popups;
        this.activeTarget = -1;

        this.config = setDefaults(options, defaults);
	}

	dismiss (e) {
		this.parentElement.removeChild(this);
		resumeAutoplayVideos();
		document.body.style.overflowY = "";
	}
	
	listener (e) {
		e.preventDefault();
		pauseAutoplayVideos();
		var popup = document.createElement("div");
		popup.classList.add("plugin-popup__container");
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
		window.requestAnimationFrame(function () {popup.classList.add("plugin-popup__container--active")});
		
		const dismiss = this.dismiss.bind(this);
		popup.addEventListener("click", dismiss);

		document.body.style.overflowY = "hidden";
	}

	initiate () {
		for (var i = 0; i < this.popups.length; i++) {
			const element = this.popups[i];
			const bound = this.listener.bind(element);
			element.addEventListener("click", bound);
		}
	}
}

module.exports = Carousel;