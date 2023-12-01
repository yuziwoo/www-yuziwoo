import { useEffect } from 'react';
import { useContenty } from '../../utils/Contenty/ContentyContext';

import './home.css';
import { CONTENTY_API } from '../../constants/contentyAPI';
import { Flake1half } from '../../components/interaction/interaction';
import API from '../../constants/api';

const Home = (props) => {
  // const contents = props.contents;
  const contentyInstance = useContenty();

  useEffect(() => {
    contentyInstance.setContenty();
  }, [contentyInstance]);

  return(
    <div className='home'>
      <div className={`main-wrap`}>
        <section className='main-section' style={{backgroundImage: `url('./img/home/home-bg.jpg')`}}>
          <div className='represent-title'>
            <div className='wrap'>
              <h1 className='font-playfairDisplay'>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1 className='font-playfairDisplay'>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1 className='font-playfairDisplay'>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
              <h1 className='font-playfairDisplay'>&nbsp;&nbsp;&nbsp;Code. Create. Captivate.&nbsp;</h1>
            </div>
          </div>

          <div className='ocean-img-box'>
            <div className='ocean-img-wrap'>
              <picture>
                <source media='(max-width: 860px)' srcSet='./img/home/home-1-860.jpg'></source>
                <img src='./img/home/home-1.jpg' alt='바다 이미지'/>
              </picture>
            </div>
          </div>

          <div className='bottom'>
            <div className='wrap'>
              <h2>바다를 좋아하는 개발자의</h2>
            </div>
            <div className='wrap'>
              <h2>여유를 담은 웹 스튜디오</h2>
            </div>
          </div>
        </section>

        <section className='section1'>
          <div className='sticky-heading'>
            <div className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeGetRightClassName} interaction`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>
              <div className='wrap'>
                <Flake1half color={`${API.color.symbolBlack}`}/>
                <Flake1half color={`${API.color.symbolBlack}`}/>
              </div>
            </div>
            <div className='text'>
              <div className='heading'>
                <h1>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>L</span>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>I</span>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>K</span>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>E</span>
                </h1>
                <h1 className='font-nanumMyungjo'>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>O</span>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>C</span>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>E</span>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>A</span>
                  <span className={`${CONTENTY_API.className} ${CONTENTY_API.fade.fadeUpClassName}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>N</span>
                </h1>
              </div>
              <p className={`${CONTENTY_API.className}`} data-contenty={`${CONTENTY_API.fade.attributeName}`}>마치 바다처럼, 우리는 웹사이트에 파도를 실어요.</p>
            </div>
          </div>

          <div style={{paddingBottom: '1200px'}}></div>
        </section>
      </div>
    </div>
  )
};

export default Home;