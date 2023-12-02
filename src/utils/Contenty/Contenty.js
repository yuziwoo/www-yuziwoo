import { CONTENTY_API } from './constants/contentyAPI';
import MouseEvent from './MouseEvent/MouseEvent';
import ScrollEvent from './ScrollEvent/ScrollEvent';

class Contenty {
  // 메인 컨테이너 태그에 적용할 아이디 값
  #containerId = CONTENTY_API.idName;

  #container = null;
  #mouseEvent = null;
  #scrollEvent = null;

  static instanceCount = 0;

  setContenty() {
    if (Contenty.instanceCount === 0) return;

    if (this.#container === null && Contenty.instanceCount === 1) {
      this.#container = document.getElementById(this.#containerId);
      this.#mouseEvent = new MouseEvent();
      this.#scrollEvent = new ScrollEvent(this.#container);
    } else {
      this.changeDOM();
    }
  }

  static createInstance() {
    if (Contenty.instanceCount === 0) {
      Contenty.instanceCount += 1;
      return new Contenty();
    }
    return null;
  }

  getContainer() {
    return this.#container;
  }

  getContainerId() {
    return this.#containerId;
  }

  changeDOM() {
    this.#mouseEvent.setHoverEvent(this.#container);
    this.#scrollEvent.refresh();
  }
}

export default Contenty;
