import { CONTENTY_API } from './constants/contentyAPI';
import MouseEvent from './MouseEvent/MouseEvent';
import ScrollEvent from '../ScrollEvent/ScrollEvent';

class Contenty {
  // 메인 컨테이너 태그에 적용할 아이디 값
  #containerId = CONTENTY_API.idName;

  #container = null;
  #mouseEvent = null;
  #scrollEvent = null;

  setContenty() {
    if (this.#container === null) {
      this.#container = document.getElementById(this.#containerId);
      this.#mouseEvent = new MouseEvent();
      this.#scrollEvent = new ScrollEvent(this.#container);
    } else {
      this.changeDOM();
    }
    this.#scrollEvent.resetElements();
  }

  getContainer() {
    return this.#container;
  }

  getContainerId() {
    return this.#containerId;
  }

  changeDOM() {
    this.#mouseEvent.setHoverEvent(this.#container);
  }
}

export default Contenty;
