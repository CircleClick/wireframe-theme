class ScrollDebouncer {
    constructor ( callback ) {
		this.callback = callback;
		this.bounceCheck = false;
	}
	listener () {
		if (!this.bounceCheck) {
			window.requestAnimationFrame(this.frame);
			this.bounceCheck = true;
		}
	}
	frame () {
		this.bounceCheck = false;
		this.callback();
	}
}

module.exports = ScrollDebouncer;