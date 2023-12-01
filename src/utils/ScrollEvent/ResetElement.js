import { CONTENTY_API } from "../Contenty/constants/contentyAPI";

const ResetElement = Object.freeze({
  shadow(element) {
    const shadowElementClassName = CONTENTY_API.shadow.shadowElementClassName;
    const isAlreadyReset = element.getElementsByClassName(shadowElementClassName).length > 0;
    
    if (!isAlreadyReset) {
      const shadowElement = document.createElement('div');
      shadowElement.classList.add(shadowElementClassName);
      element.insertBefore(shadowElement, element.firstChild);
    }
  },
  fade() {},
})

export default ResetElement;
