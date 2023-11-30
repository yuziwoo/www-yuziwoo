class WheelEvent {
  constructor() {
    this.prevScrollY = window.scrollY;
    this.currentScrollY = window.scrollY;

    window.addEventListener('wheel', this.eventHandler.bind(this));
  }

  eventHandler(e) {
    this.currentScrollY = window.scrollY;
  }
}

export default WheelEvent;
