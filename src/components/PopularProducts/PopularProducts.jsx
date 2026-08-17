import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from "./PopularProducts.module.scss";

import coffeeData from '../../api/coffee.json';
import { Container } from "../Container/Container.jsx";

export const PopularProducts = () => {
  const renderStars = (rate) => {
    return '★'.repeat(Math.floor(rate)) + (rate % 1 !== 0 ? '½' : '');
  };

  return (
    <section className={style.popularProducts}>
      <Container>
        <div className={style.popularProducts__flex}>
          <h2 className={style.popularProducts__title}>Популярні товари</h2>
          <button type="button" className={style.popularProducts__allProducts}>
            Всі товари
          </button>
        </div>
        
        <div className={style.popularProducts__sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.popular-prev',
              nextEl: '.popular-next',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className={style.popularProducts__swiper}
          >
            {coffeeData.map((item) => (
              <SwiperSlide key={item._id.$oid}>
                <div className={style.productCard}>
                  <div className={style.productCard__imageWrapper}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={style.productCard__image}
                    />
                  </div>

                  <div className={style.productCard__content}>
                    <div className={style.productCard__rating}>
                      {renderStars(item.rate)}
                    </div>
                    <h3 className={style.productCard__title}>{item.name}</h3>
                    <p className={style.productCard__info}>{item.info}</p>
                    <div className={style.productCard__price}>
                      {item.price.value} {item.price.currency}
                    </div>
                    <button className={style.productCard__button}>
                      Детальніше
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button 
            className={`${style.popularProducts__btn} ${style.popularProducts__btnPrev} popular-prev`} 
            aria-label="Назад"
          >
            &#8592;
          </button>
          <button 
            className={`${style.popularProducts__btn} ${style.popularProducts__btnNext} popular-next`} 
            aria-label="Вперед"
          >
            &#8594;
          </button>
        </div>
      </Container>
    </section>
  );
};