class ScrollDebouncer {
    constructor ( callback ) {
		this.callback = callback;
		this.bounceCheck = false;
		window.addEventListener('scroll', this.listener);
	}
	listener () {
		if (!this.bounceCheck) {
			window.requestAnimationFrame(()=>{this.frame});
			this.bounceCheck = true;
		}
	}
	frame () {
		this.bounceCheck = false;
		this.callback();
	}
	init (element = window) {
		element.addEventListener('scroll', this.listener);
		return this;
	}
}

module.exports = ScrollDebouncer;