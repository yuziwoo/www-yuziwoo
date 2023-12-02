import { CONTENTY_API } from "../constants/contentyAPI";

const effects = Object.freeze({
  shadow(scrollY, triggerPoint, element, elements) {
    const eventStartPos = element.getBoundingClientRect().top + window.scrollY;
    const eventDist = element.offsetHeight;
    const eventEndPos = eventDist + eventStartPos;

    const effectElement = element.getElementsByClassName(CONTENTY_API.shadow.shadowElementClassName)[0];
    
    if (scrollY >= eventStartPos && scrollY <= eventEndPos) {
      const moved = scrollY - eventStartPos;
      const opacity = moved / eventDist;
      effectElement.style.opacity = opacity;
    }
  },
  
  fade(scrollY, triggerPoint, element, elements) {
    const executePos = element.getBoundingClientRect().top + window.scrollY - triggerPoint;

    if (scrollY >= executePos) {
      element.classList.add(CONTENTY_API.completeElementClassName);
      
      const index = elements.findIndex((value) => value === element);
      elements.splice(index, 1);
    }
  },
})

export default effects;