import { CONTENTY_API } from "../constants/contentyAPI";

const ResetElement = Object.freeze({
  shadow(element) {
    const shadowElement = document.createElement('div');
    shadowElement.classList.add(CONTENTY_API.shadow.shadowElementClassName);
    element.insertBefore(shadowElement, element.firstChild);
  },
  fade() {},
})

export default ResetElement;
