import { CONTENTY_API } from '../../constants/contentyAPI';
import MouseEvent from '../MouseEvent/MouseEvent';
import WheelEvent from '../WheelEvent/WheelEvent';

class Contenty {
  // 메인 컨테이너 태그에 아이디 값을 적용해주세요.
  #containerId = CONTENTY_API.idName;

  constructor() {
    this.container = null;
    this.mouseEvent = null;
    this.wheelEvent = null;
  }

  setContenty() {
    if (this.container === null) {
      this.container = document.getElementById(this.#containerId);
      this.mouseEvent = new MouseEvent();
      this.wheelEvent = new WheelEvent(this.container);
    } else {
      this.changeDOM();
    }
    this.wheelEvent.resetElements();
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
