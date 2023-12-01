# CONTENTY

- 컨텐츠 퍼블리싱을 도와주는 라이브러리입니다.
- 제작 및 저작권 yuziwoo, 허가 없는 사용을 금지합니다.

## 사용 방법

1. ContentyProvider 태그로 최상단 태그를 감싸주세요.
  ```JSX
  import Contenty from './utils/Contenty/Contenty';
  import { ContentyProvider } from './utils/Contenty/ContentyContext';

  const contentyInstance = new Contenty();

  const App = () => {
    return (
      <ContentyProvider contentyInstance={contentyInstance}>
        <div className="App">
        </div>
      </ContentyProvider>
    )
  }
  ```

2. 컨텐츠를 담을 메인 컨테이너 태그에 ID 값을 넣어주세요.
  ```JSX
  import { useContenty } from '../../../utils/Contenty/ContentyContext';

  const Container = () => {
    const contentyInstance = useContenty();

    return (
      <main id={`${contentyInstance.getContainerId()}`}></main>
    )
  }
  ```

3. component가 mount, update 될 때마다 `setContenty()` 메서드를 실행시켜주세요.
  ```JSX
  import { useContenty } from '../../../utils/Contenty/ContentyContext';

  const MyComponent = () => {
    const contentyInstance = useContenty();

    useEffect(() => {
      contentyInstance.setContenty();
    }, [contentyInstance]);
  }
  ```

4. 컨테이너 태그 내부에 이벤트 태그를 형식에 맞게 넣으면 이벤트가 자동으로 적용됩니다.

## 이벤트 태그 종류

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