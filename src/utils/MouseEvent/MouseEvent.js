import MOUSE_EVENT from "../../constants/mouseEvent";
import { throttle } from "../throttle";

const throttleSpeed = throttle((point, wrap, pointer) => {
  if (point.speed > 0) {
    point.speed = 0;
    pointer.setAttribute('r', point.diameter - point.speed);
    wrap.classList.remove(MOUSE_EVENT.className.mousemove);
  }
}, 30);

let polylineInterval;

const throttlePolyline = throttle((point, wrap, polyline) => {
  clearInterval(polylineInterval);

  polylineInterval = setInterval(() => {
    if (point.list.length === 0 || wrap.classList.contains(MOUSE_EVENT.mousemove)) {
      clearInterval(polylineInterval);
    }

    point.list.pop();
    polyline.setAttribute('points', point.list.join(' '));
  }, 20)
}, 20);

class MouseEvent {
  constructor() {
    this.wrap = document.getElementById('mouse-event');
    this.pointer = document.getElementById('mouse-pointer');
    this.polyline = document.getElementById('mouse-polyline');

    this.point = {
      prevX: 0,
      prevY: 0,
      currentX: 0,
      currentY: 0,
      list: [],
      listTotal: 12,
      circleReduction: 0,
      speed: 0,
      speedMax: 5,
      diameter: 8,
    }

    window.addEventListener(MOUSE_EVENT.className.mousemove, this.mousemove.bind(this));
    this.setMouseHoverEvent(document.body);
  }

  setSpeed() {
    const speedX = this.point.currentX - this.point.prevX;
    const speedY = this.point.currentY - this.point.prevY;
    let speed = Math.sqrt((speedX ** 2) + (speedY ** 2));

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

    throttleSpeed(this.point, this.wrap, this.pointer);
  }

  setPointer() {
    this.pointer.setAttribute('cx', this.point.currentX);
    this.pointer.setAttribute('cy', this.point.currentY);
    this.pointer.setAttribute('r', this.point.diameter - this.point.speed);
  }

  addHoverEvents(elements) {
    [...elements].forEach((element) => {
      element.addEventListener('mouseover', () => {
        this.wrap.classList.add(MOUSE_EVENT.className.mouseHover);
      })

      element.addEventListener('mouseout', () => {
        this.wrap.classList.remove(MOUSE_EVENT.className.mouseHover);
        this.point.list = [];
      })
    })
  }

  setMouseHoverEvent(element) {
    const buttons = element.getElementsByTagName('button');
    const anchors = element.getElementsByTagName('a');

    this.addHoverEvents(buttons);
    this.addHoverEvents(anchors);
  }

  drawPloyline() {
    const points = [`${this.point.currentX},${this.point.currentY}`];

    if (this.point.list.length >= this.point.listTotal) {
      this.point.list.pop();
    }

    this.point.list.unshift(points);
    this.polyline.setAttribute('points', this.point.list.join(' '));

    throttlePolyline(this.point, this.wrap, this.polyline);
  }

  mousemove(e) {
    this.wrap.classList.add(MOUSE_EVENT.className.mousemove);
    
    this.point.currentX = e.clientX;
    this.point.currentY = e.clientY;

    this.setSpeed();
    this.setPointer();
    this.drawPloyline();

    this.point.prevX = this.point.currentX;
    this.point.prevY = this.point.currentY;
  }
}

export default MouseEvent;