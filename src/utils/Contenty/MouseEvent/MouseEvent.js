import MOUSE_EVENT_API from './constants/mouseEventAPI';
import throttleRemoveTail from './throttleRemoveTail';
import throttleMousemoveEndHandler from './throttleMousemoveEndHandler';


class MouseEvent {
  #container = document.createElement('div');
  #pointer = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  #tail = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');

  #mousemoveEventHandler;

  point = {
    prevX: 0,
    prevY: 0,
    currentX: 0,
    currentY: 0,
    circleReduction: 0,
    speed: 0,
    speedMax: 5,
    diameter: 8,
    list: [],
  };

  constructor() {
    this.#initialize();
  }

  #initialize() {
    this.#renderHTML();
    this.#setupEventListeners();
    this.#removeEventOnTouch();
  }

  #renderHTML() {
    this.#container.id = 'contenty-mouseEvent';
    this.#pointer.id = 'contenty-mouseEvent-pointer';
    this.#tail.id = 'contenty-mouseEvent-tail';

    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    svgElement.appendChild(this.#pointer);
    svgElement.appendChild(this.#tail);

    this.#container.appendChild(svgElement);
    document.body.insertBefore(this.#container, document.body.firstChild);
  }

  #setupEventListeners() {
    this.#mousemoveEventHandler = this.#mousemoveEvent.bind(this);
    window.addEventListener('mousemove', this.#mousemoveEventHandler);

    this.setHoverEvent(document.body);
  }

  #removeEventOnTouch() {
    const touchEventHandler = () => {
      this.#container.remove();
      window.removeEventListener('mousemove', this.#mousemoveEventHandler);
      document.body.removeEventListener('touchstart', touchEventHandler);
    };

    document.body.addEventListener('touchstart', touchEventHandler);
  }

  #calculateSpeed() {
    const speedX = this.point.currentX - this.point.prevX;
    const speedY = this.point.currentY - this.point.prevY;
    let speed = Math.sqrt(speedX ** 2 + speedY ** 2);

    if (speed > 40) {
      speed = 40;
    }

    const finalSpeed = speed / 40;

    if (this.point.speed < this.point.speedMax) {
      if (this.point.speed + finalSpeed > this.point.speedMax) {
        this.point.speed = this.point.speedMax;
      } else {
        this.point.speed += finalSpeed;
      }
    }

    throttleMousemoveEndHandler(this.point, this.#container, this.#pointer);
  }

  #drawPointer() {
    this.#pointer.setAttribute('cx', this.point.currentX);
    this.#pointer.setAttribute('cy', this.point.currentY);
    this.#pointer.setAttribute('r', this.point.diameter - this.point.speed);
  }

  #addHoverEvents(elements) {
    [...elements].forEach(element => {
      element.addEventListener('mouseover', () => {
        this.#container.classList.add(MOUSE_EVENT_API.className.mouseHover);
      });

      element.addEventListener('mouseout', () => {
        this.#container.classList.remove(MOUSE_EVENT_API.className.mouseHover);
        this.point.list = [];
      });
    });
  }

  #drawTail() {
    const points = [`${this.point.currentX},${this.point.currentY}`];

    if (this.point.list.length >= MOUSE_EVENT_API.maxPointListCount) {
      this.point.list.pop();
    }

    this.point.list.unshift(points);
    this.#tail.setAttribute('points', this.point.list.join(' '));

    throttleRemoveTail(this.point, this.#tail);
  }

  #mousemoveEvent(e) {
    this.#container.classList.add(MOUSE_EVENT_API.className.mousemove);

    this.point.currentX = e.clientX;
    this.point.currentY = e.clientY;

    this.#calculateSpeed();
    this.#drawPointer();
    this.#drawTail();

    this.point.prevX = this.point.currentX;
    this.point.prevY = this.point.currentY;
  }

  setHoverEvent(element) {
    // DOM change시 seHoverEvent() 함수를 실행해주세요.
    const buttons = element.getElementsByTagName('button');
    const anchors = element.getElementsByTagName('a');

    this.#addHoverEvents(buttons);
    this.#addHoverEvents(anchors);
  }
}

export default MouseEvent;
