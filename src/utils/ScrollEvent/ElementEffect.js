import { CONTENTY_API } from "../Contenty/constants/contentyAPI";

const ElementEffect = Object.freeze({
  shadow(element, scrollY) {
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
  fade(element, scrollY, elements) {
    if (element.getBoundingClientRect().top > window.innerHeight) return;
    const triggerPoint = window.innerHeight * 0.7;
    const eventPos = element.getBoundingClientRect().top + window.scrollY - triggerPoint;

    if (scrollY >= eventPos) {
      element.classList.add(CONTENTY_API.completeClassName);
      const index = elements.findIndex((value) => value === element);
      elements.splice(index, 1);
    }
  },
})

export default ElementEffect;
