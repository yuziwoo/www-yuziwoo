import { throttle } from "../utils/throttle";
import MOUSE_EVENT_API from "./constants/mouseEventAPI";

const throttleMousemoveEndHandler = throttle((point, wrap, pointer) => {
  point.speed = 0;
  wrap.classList.remove(MOUSE_EVENT_API.className.mousemove);
  pointer.setAttribute('r', point.diameter - point.speed);
}, 30);

export default throttleMousemoveEndHandler;