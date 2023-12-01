import { CONTENTY_API } from "../../constants/contenty";

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
})

export default ElementEffect;
