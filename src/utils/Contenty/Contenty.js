import MouseEvent from '../MouseEvent/MouseEvent';
import WheelEvent from '../WheelEvent/WheelEvent';

class Contenty {
  #containerId = 'contenty';

  constructor() {
    this.container = null;
    this.mouseEvent = null;
    this.wheelEvent = null;
  }

  setContenty() {
    if (this.container === null) {
      this.container = document.getElementById(this.#containerId);
      this.mouseEvent = new MouseEvent();
      this.wheelEvent = new WheelEvent();
    } else {
      this.changeDOM();
    }
  }

  getContainer() {
    return this.container;
  }

  getContainerId() {
    return this.#containerId;
  }

  changeDOM() {
    this.mouseEvent.setMouseHoverEvent(this.container);
  }
}

export default Contenty;
