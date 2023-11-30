import { useEffect } from 'react';
import { useContenty } from '../../utils/Contenty/ContentyContext';

import './home.css';

const Home = (props) => {
  // const contents = props.contents;
  const contentyInstance = useContenty();

  useEffect(() => {
    contentyInstance.setContenty();
  }, [contentyInstance]);

  return(
    <div className={`home`}>
      <div className={`main-wrap`}>
        <section className={`main-section`} style={{backgroundImage: `url('./img/home/home-bg.jpg')`}}>
          <div className='represent-title'>
            <div className={`wrap`}>
              <h1>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
            </div>
          </div>

          <div className='ocean-img-box'>
            <div className='ocean-img-wrap'>
              <img src='./img/home/home-1.jpg' alt='바다 이미지'/>
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