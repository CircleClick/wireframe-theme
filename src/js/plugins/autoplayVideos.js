const setDefaults = require('../utils/setDefaults');

const defaults = {
};


class AutoplayVideo {
    constructor ( videos, options = {} ) {
        this.videos = videos;
        this.activeTarget = -1;

		this.config = setDefaults(options, defaults);
		
		window.addEventListener('blur', this.pauseVideos);
		window.addEventListener('focus', this.resumeVideos);
	}

	pauseVideos () {
		if (this.videos) {
			for (var i = 0; i < this.videos.length; i++) {
				const element = this.videos[i];
				if (element.autoplay) element.pause();
			}
		}
	}
	
	resumeVideos () {
		if (this.videos) {
			for (var i = 0; i < this.videos.length; i++) {
				const element = this.videos[i];
				if (element.autoplay && element.dataset.visible) element.play();
			}
		}
	}
	
	listener () {
		for (var i = 0; i < this.videos.length; i++) {
			if (this.videos[i].autoplay === true) {
				const element = this.videos[i];
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

	initiate (videos) {
        this.videos = videos;
	}
}

module.exports = AutoplayVideo;