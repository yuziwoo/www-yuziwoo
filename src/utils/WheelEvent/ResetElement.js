import { CONTENTY_API } from "../../constants/contenty";

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
})

export default ResetElement;
