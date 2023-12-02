import { CONTENTY_API } from '../constants/contentyAPI';
import { throttle } from '../utils/throttle';
import effects from './effects';
import resets from './resets';

class ScrollEvent {
  #container;
  #elements = [];

  constructor(container) {
    this.#initialize(container);
    this.refresh();
  }

  #initialize(container) {
    this.#container = container;
    this.triggerPoint = window.innerHeight * 0.7;

    const throttleResize = throttle(() => {
      this.triggerPoint = window.innerHeight * 0.7;
      this.refresh()
    }, 500).bind(this);

    window.addEventListener('scroll', this.#scrollEventHandler.bind(this));
    window.addEventListener('resize', throttleResize);
  }

  #scrollEventHandler() {
    const scrollY = window.scrollY;

    this.#executeElementsEffect(scrollY);
  }

  #getContentyElements() {
    return [...this.#container.getElementsByClassName(CONTENTY_API.className)];
  }

  #isResetRequire(elements) {
    const isRequire =(
      !elements.every(element => element.classList.contains(CONTENTY_API.readyElementClassName))
      && elements.length > 0
      );

    return isRequire;
  }

  #executeReset(element) {
    const effect = element.getAttribute(CONTENTY_API.attributeName);
    try {
      if (effect in resets && effect in effects) {
        resets[effect](element);
        element.classList.add(CONTENTY_API.readyElementClassName);
        return;
      }
      throw new Error(CONTENTY_API.errorMessage.missingEffectName);
    } catch (e) {
      console.log(e);
    }
  }

  #resetss() {
    const contentyElements = this.#getContentyElements();

    if (!this.#isResetRequire(contentyElements)) return;

    contentyElements.forEach((element) => {
      if (!element.classList.contains(CONTENTY_API.readyElementClassName)) {
        this.#executeReset(element);
      }
    });
  }

  #refreshElementList() {
    const contentyElements = this.#getContentyElements();
    this.#elements = contentyElements.filter((element) => (
      element.classList.contains(CONTENTY_API.readyElementClassName)
      && !(element.classList.contains(CONTENTY_API.completeElementClassName))
    ));
  }

  #executeEffect(scrollY, triggerPoint, element, elements) {
    if (element.getBoundingClientRect().top > window.innerHeight) return;

    const effectName = element.getAttribute(CONTENTY_API.attributeName);

    effects[effectName](scrollY, triggerPoint, element, elements);
  }

  #executeElementsEffect(scrollY) {
    this.#elements.forEach((element, i, elements) => {
      this.#executeEffect(scrollY, this.triggerPoint, element, elements);
    });
  }

  refresh() {
    this.#resetss();
    this.#refreshElementList();

    this.triggerPoint = window.innerHeight * 0.7;

    this.#scrollEventHandler();
    setTimeout(this.#scrollEventHandler.bind(this), 500);
  }
}

export default ScrollEvent;
