import { useEffect } from 'react';
import { useContenty } from '../../utils/Contenty/ContentyContext';

import ContentList from '../../components/contentList/ContentList';
import { SwiperHome } from '../../components/swiper/SwiperComponent';
import styles from './home.module.css';

const Home = (props) => {
  const contents = props.contents;
  const contentyInstance = useContenty();

  useEffect(() => {
    contentyInstance.setContenty();
  }, []);

  return(
    <div className={styles['home']}>
      <div className={styles['main-wrap']}>
        <section className={styles['sec1']}>
          <h1 className={styles['title']}>WEB SITES & PAGES</h1>
          <h2 className={styles['subTitle']}>제작하고 싶은 웹사이트, 웹페이지의 종류를 확인해요.</h2>
          <div className={styles['swiper-wrap']}>
            <SwiperHome contents={contents} navigate={props.navigate}/>
          </div>
        </section>
  
        <section className={styles['sec2']}>
          <h1 className={styles['title']}>BEST TOP 6</h1>
          <h2 className={styles['subTitle']}>가장 인기가 많은 페이지들을 모았어요.</h2>
          <ContentList contents={contents} navigate={props.navigate}/>
        </section>
      </div>
    </div>
  )
};

export default Home;