import { CONTENTY_API } from '../../constants/contenty';
import ElementEffect from './ElementEffect';
import ResetElement from './ResetElement';
class WheelEvent {
  /** 
   * 사용 방법
   * html 태그에 아래와 같이 class와 data-contenty값을 적용해주세요.
   * <div className={`${CONTENTY_API.className}`} data-contenty={`${CONTENTY_API.event.attributeName}`}>
  */
  constructor(container) {
    this.container = container;
    this.elements = [];

    window.addEventListener('wheel', this.eventHandler.bind(this));
  }

  eventHandler() {
    this.scrollY = window.scrollY;

    this.triggerElementsEffect(this.scrollY);
  }

  resetElements() {
    const isShallowReset = this.elements.every((elementObj, index) => elementObj.element === this.container.getElementsByClassName(CONTENTY_API.className)[index])
      && this.elements.length > 0;

    if (isShallowReset) {
      this.eventHandler();
      return;
    }

    this.resetElementsDeep();
  }

  resetElementsDeep() {
    this.elements = [...this.container.getElementsByClassName(CONTENTY_API.className)];

    this.elements.forEach((element) => {
      ResetElement[`${element.getAttribute('data-contenty')}`](element);
    });
  }

  triggerElementsEffect(scrollY) {
    this.elements.forEach((element) => {
      ElementEffect[`${element.getAttribute('data-contenty')}`](element, scrollY);
    });
  }
}

export default WheelEvent;
