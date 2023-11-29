import { useEffect, useState } from 'react';
import { useContenty } from '../../utils/Contenty/ContentyContext';

import './home.css';

const Home = (props) => {
  // const contents = props.contents;
  const contentyInstance = useContenty();

  useEffect(() => {
    contentyInstance.setContenty();
  }, [contentyInstance]);

  const [isScrollDown, setIsScrollDown] = useState(true);
  const wheelEventHandler = (e) => {
    if (e.deltaY > 0 && !isScrollDown) {
      setIsScrollDown(true);
      return
    }

    if (e.deltaY < 0 && isScrollDown) {
      setIsScrollDown(false);
    }
  }

  return(
    <div className={`home`} onWheel={wheelEventHandler}>
      <div className={`main-wrap`}>
        <section className={`main-section`} style={{backgroundImage: `url('./img/home/home-bg.jpg')`}}>
          <div className='represent-title'>
            <div className={`${isScrollDown ? 'scroll-down' : 'scroll-up'} wrap`}>
              <h1>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
            </div>
          </div>

          <div className='bottom'>
            <div className='wrap'>
              <h2>바다를 좋아하는 개발자의</h2>
            </div>
            <div className='wrap'>
              <h2>여유를 담은 퍼블리싱 스튜디오</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default Home;