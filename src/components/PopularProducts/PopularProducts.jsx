import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from "./PopularProducts.module.scss"

import coffeeData from '../../api/coffee.json';
import { Container } from "../Container/Container.jsx"

export const PopularProducts = () => {
  const renderStars = (rate) => {
    return '★'.repeat(Math.floor(rate)) + (rate % 1 !== 0 ? '½' : '');
  };

  return (
    <section className="popular-products">
        <Container>
      <div className="container">
        <div className='popular-products__flex'>
        <h2 className="popular-products__title">Популярні товари</h2>
        <button type="button" className='popular-products__all-products'>Всі товари</button>
        </div>
        <div className="popular-products__slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.popular-products__btn--prev',
              nextEl: '.popular-products__btn--next',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true, /* Вмикає динамічні крапки (анімацію зменшення крайніх) */
              dynamicMainBullets: 1, /* По центру 1 головна крапка, решта зменшуються по боках */
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="popular-products__swiper"
          >
            {coffeeData.map((item) => (
              <SwiperSlide key={item._id.$oid}>
                <div className="product-card">
                  <div className="product-card__image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-card__image"
                    />
                  </div>

                  <div className="product-card__content">
                    <div className="product-card__rating">
                      {renderStars(item.rate)}
                    </div>
                    <h3 className="product-card__title">{item.name}</h3>
                    <p className="product-card__info">{item.info}</p>
                    <div className="product-card__price">
                      {item.price.value} {item.price.currency}
                    </div>
                    <button className="product-card__button">
                      Детальніше
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="popular-products__btn popular-products__btn--prev" aria-label="Назад">
            &#8592;
          </button>
          <button className="popular-products__btn popular-products__btn--next" aria-label="Вперед">
            &#8594;
          </button>
        </div>
      </div>
      </Container>
    </section>
  );
};