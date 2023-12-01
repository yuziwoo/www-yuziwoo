import { CONTENTY_API } from '../../constants/contentyAPI';
import ElementEffect from './ElementEffect';
import ResetElement from './ResetElement';
class WheelEvent {
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
    this.eventHandler();
  }

  resetElementsDeep() {
    this.elements = [...this.container.getElementsByClassName(CONTENTY_API.className)]
        .filter((element) => (
          element.getAttribute('data-contenty') in ResetElement
          && element.getAttribute('data-contenty') in ElementEffect
        ));

    this.elements.forEach((element) => {
      ResetElement[`${element.getAttribute('data-contenty')}`](element);
    });
  }

  triggerElementsEffect(scrollY) {
    this.elements.forEach((element, index, elements) => {
      ElementEffect[`${element.getAttribute('data-contenty')}`](element, scrollY, elements);
    });
  }
}

export default WheelEvent;
