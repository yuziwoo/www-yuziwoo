import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './swiper.module.css';
import PATH from '../../constants/path';
import { CONTENT } from '../../constants/content';

export const SwiperHome = (props) => {
  const contents = props.contents;

  const imgSrc = (id) => {
    return PATH.contentThumb(id);
  }

  const autoplay = {
    delay: 3000,
    disableOnInteraction: false,
  }

  const pagination = {
    clickable: true,
    horizontalClass: `${styles['pagination-fraction']}`,
    type: 'fraction',
    currentClass: `${styles['pagination-current']}`,
    totalClass: `${styles['pagination-total']}`,
    renderFraction(current, total) {
      return `<span class=${current}></span> <span>/</span> <span class=${total}></span>`
    },
  }

  const breakpoints = {
    1081: {
      slidesPerView: 3.2,
      spaceBetween: 10,
      pagination: {
        type: 'bullets',
        bulletClass: `${styles['pagination-bullet']}`,
        bulletActiveClass: `${styles['pagination-bullet-active']}`,
        horizontalClass: `${styles['pagination']}`,
        renderBullet(index, className) {
          return `<span class="${className}"></span>`;
        },
      },
    },
  }

  const slideChange = (swiper) => {
    if (window.innerWidth <= CONTENT.style.mobMaxWidth) {
      const slides = swiper.slides;
      const max = slides.length - 1;
      const activeIndex = swiper.activeIndex;
      const nextIndex = activeIndex === max ? 0 : activeIndex + 1;
      const prevIndex = activeIndex === 0 ? max : activeIndex - 1;
      const width = swiper.width;
      
      const activeSlide = swiper.slides[activeIndex];
      activeSlide.getElementsByTagName('h1')[0].style.transform = `translateX(0px)`;
      activeSlide.getElementsByTagName('h3')[0].style.transform = `translateX(0px)`;

      const nextSlide = swiper.slides[nextIndex];
      nextSlide.getElementsByTagName('h1')[0].style.transform = `translateX(${width / 2}px)`;
      nextSlide.getElementsByTagName('h3')[0].style.transform = `translateX(${width / 3 * 2}px)`;

      const prevSlide = swiper.slides[prevIndex];
      prevSlide.getElementsByTagName('h1')[0].style.transform = `translateX(-${width / 2}px)`;
      prevSlide.getElementsByTagName('h3')[0].style.transform = `translateX(-${width / 3 * 2}px)`;
    }
  }

  return (
    <div className={styles['home-wrapper']}>
      <Swiper
        className={styles['home']}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={500}
        autoplay={autoplay}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        breakpoints={breakpoints}
        onSlideChange={(swiper) => {
          slideChange(swiper);
        }}
        // transitionStart={(swiper) => {console.log(swiper.el, swiper.activeIndex, swiper.slides[swiper.activeIndex], swiper.offsetWidth, swiper.previousTranslate)}}
      >
        {contents.map((data, index) => (
          <SwiperSlide className={styles['swiper-slide']} key={`slide ${index}`} virtualIndex={index}>
            <div className={styles['box']} onClick={() => { props.navigate(`${PATH.content}${data.id}`); }}>
              <img src={imgSrc(data.id)} alt={data.title}/>
              <div className={styles['info']}>
                <h3>{data.brand}</h3>
                <h1>{data.description}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};
