#CONTENTY 이용방법

### 이벤트 태그 종류

- shadow: 스크롤을 내릴 수 록 어두워지는 효과
  ```html
  <div className={`${CONTENTY_API.className}`} data-contenty={`${CONTENTY_API.shadow.attributeName}`}>
  ```

- fade: 특정 위치에 도달하면 투명도를 높이며 나타난다.
  ```html
  <div className={`${CONTENTY_API.className}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
  ```
    - fadeUp: 특정 위치에 도달하면 투명도를 높이면서 15px 위로 올라오며 나타난다.
      ```html
      <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
      ```
    - fadeGetUp: 특정 위치에 도달하면 투명도를 높이면서 100% 위로 올라오며 나타난다.
      ```html
      <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeGetUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
      ```
    - fadeDown: 특정 위치에 도달하면 투명도를 높이면서 15px 아래로 내려오며 나타난다.
      ```html
      <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeDownClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
      ```
    - fadeGetDown: 특정 위치에 도달하면 투명도를 높이면서 100% 아래로 내려오며 나타난다.
      ```html
      <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeGetDownClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
      ```
    - fadeLeft: 특정 위치에 도달하면 투명도를 높이면서 15px 좌측으로 올라오며 나타난다.
      ```html
      <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeLeftClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
      ```
    - fadeGetLeft: 특정 위치에 도달하면 투명도를 높이면서 100% 좌측으로 올라오며 나타난다.
      ```html
      <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeGetLeftClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
      ```
    - fadeRight: 특정 위치에 도달하면 투명도를 높이면서 15px 우측으로 올라오며 나타난다.
      ```html
      <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeRightClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
      ```
    - fadeGetRight: 특정 위치에 도달하면 투명도를 높이면서 100% 우측으로 올라오며 나타난다.
      ```html
      <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeGetRightClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
      ```