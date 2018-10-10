const setDefaults = require('./setDefaults');

const defaults = {
};


class Carousel {
    constructor ( carousels, options = {} ) {
        this.carousels = carousels;
        this.activeTarget = -1;

        this.config = setDefaults(options, defaults);
	}

	switch (carousel, target) {
		
		const rect = carousel.getBoundingClientRect();

		if (rect.top < window.innerHeight && rect.bottom >= 0) {

			for (let index = 0; index < carousel.cItems.length; index++) {
				carousel.cItems[index].classList.remove('carousel__item--active');
				carousel.cTabs[index].classList.remove('carousel__tab--active');
			}

			if (target >= carousel.cItems.length) target = 0;
			if (target < 0) target = carousel.cItems.length-1;
			carousel.cItems[target].classList.add('carousel__item--active');
			carousel.cTabs[target].classList.add('carousel__tab--active');
			carousel.cTarget = target;

		}
	}

	tick (element) {
		if (element.dataset.skip !== "true") {
			this.switch(element, element.cTarget+1);
		} else {
			element.dataset.skip = false;
		}
	}

	initiateCarousel (carousel) {
		const helper = ()=>{
			this.tick(carousel);
		};
		setInterval(helper, 5000);
	}

	initiate (carousels) {
		for (var i = 0; i < carousels.length; i++) {

			const ele = carousels[i];

			ele.classList.add("carousel__container--active");
			
			const items = ele.children;
			ele.cItems = items;

			const tabs = document.createElement("div");
			tabs.classList.add("carousel__tabs");
			ele.cTabs = tabs;


			for (let o = 0; o < ele.children.length; o++) {
				const tab = document.createElement("div");
				tab.classList.add("carousel__tab");
				tab.addEventListener("click", ()=>{
					this.switch(ele, tab.cTarget);
				});
				tab.cTarget = o;
				tabs.appendChild(tab);
			}
			tabs.children[0].classList.add("carousel__tab--active");
	
			ele.appendChild(tabs);
			this.initiateCarousel(ele);

		}
		window.addEventListener("resize", this.resize);
		this.resize();
	}

	resize () {
		for (var i = 0; i < this.carousels.length; i++) {
			const ele = this.carousels[i];
			var max = 0;
			for (var o = 0; o < ele.children.length; o++) {
				if (ele.children[o].offsetHeight > max) max = ele.children[o].offsetHeight;
			}
			ele.style.height = max+"px";
		}
	}
}

module.exports = Carousel;