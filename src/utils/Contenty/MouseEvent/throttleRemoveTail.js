import { throttle } from "../utils/throttle";

let removePointsInterval;

const throttleRemoveTail = throttle((point, tail) => {
  clearInterval(removePointsInterval);

  removePointsInterval = setInterval(() => {
    if (point.list.length === 0) {
      clearInterval(removePointsInterval);
    }

    point.list.pop();
    tail.setAttribute('points', point.list.join(' '));
  }, 20)
}, 20);

export default throttleRemoveTail;