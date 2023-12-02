const ERROR_PREFIX = '[CONTENTY ERROR]';

const errorMessage = Object.freeze({
  missingEffectName: `${ERROR_PREFIX} 존재하지 않는 이펙트 이름입니다.`,
})

const shadow = Object.freeze({
  attributeName: 'shadow',
  shadowElementClassName: 'contenty-shadow',
})

const fade = Object.freeze({
  attributeName: 'fade',
  fadeUpClassName: 'fadeUp',
  fadeGetUpClassName: 'fadeGetUp',
  fadeDownClassName: 'fadeDown',
  fadeGetDownClassName: 'fadeGetDown',
  fadeLeftClassName: 'fadeLeft',
  fadeGetLeftClassName: 'fadeGetLeft',
  fadeRightClassName: 'fadeRight',
  fadeGetRightClassName: 'fadeGetRight',
})

export const CONTENTY_API = Object.freeze({
  idName: 'contenty',
  className: 'contenty',
  attributeName: 'data-contenty',
  readyElementClassName: 'contenty-ready',
  completeElementClassName: 'contenty-on',
  errorMessage,
  shadow,
  fade,
})