import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import styles from './swiper.module.css';
import PATH from '../../constants/path';
import { CONTENT } from '../../constants/content';
import { ButtonLeft, ButtonRight } from '../interaction/interaction';
import { Link } from 'react-router-dom';
import scrollTop from '../../utils/scrollTop';

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
      slidesPerView: 4.4,
      spaceBetween: 10,
      pagination: {
        type: 'bullets',
        bulletClass: `${styles['pagination-bullet']}`,
        bulletActiveClass: `${styles['pagination-bullet-active']}`,
        horizontalClass: `${styles['pagination']}`,
        renderBullet(index, className) {
          return `<button class="${className}"><span></span></button>`;
        },
      },
    },
    1921: {
      slidesPerView: 5.2,
      spaceBetween: 10,
      pagination: {
        type: 'bullets',
        bulletClass: `${styles['pagination-bullet']}`,
        bulletActiveClass: `${styles['pagination-bullet-active']}`,
        horizontalClass: `${styles['pagination']}`,
        renderBullet(index, className) {
          return `<button class="${className}"><span></span></button>`;
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
        navigation={{
          prevEl: '.navigation-left',
          nextEl: '.navigation-right',
        }}
        loop={true}
        speed={500}
        autoplay={autoplay}
        pagination={pagination}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={breakpoints}
        onSlideChange={(swiper) => {
          slideChange(swiper);
        }}
        // transitionStart={(swiper) => {console.log(swiper.el, swiper.activeIndex, swiper.slides[swiper.activeIndex], swiper.offsetWidth, swiper.previousTranslate)}}
      >
        {contents.map((data, index) => (
          <SwiperSlide className={styles['swiper-slide']} key={`slide ${index}`} virtualIndex={index}>
            <Link className={styles['box']} to={`${PATH.content}${data.id}`} onClick={scrollTop}>
              <img src={imgSrc(data.id)} alt={data.title}/>
              <div className={styles['info']}>
                <h3 style={{ color: data.textColor }}>{data.title}</h3>
                <h1 style={{ color: data.textColor }}>{data.description}</h1>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${styles['navigation-wrap']} ${styles['navigation-left']}`}>
        <div className='navigation-left'>
          <button 
          onMouseDown={(e) => {
            e.currentTarget.style.transform= 'scale(1.1)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform= 'scale(1)';
          }}
          >
            <ButtonLeft color='white'/>
          </button>
        </div>
      </div>

      <div className={`${styles['navigation-wrap']} ${styles['navigation-right']}`}>
        <div className='navigation-right'>
          <button
          onMouseDown={(e) => {
            e.currentTarget.style.transform= 'scale(1.1)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform= 'scale(1)';
          }}
          >
            <ButtonRight color='white'/>
          </button>
        </div>
      </div>
    </div>
  )
};
