import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from "./PopCategory.module.scss"
import { Container } from "../Container/Container.jsx"
import coffeeData from '../../api/coffee.json';

export const PopularCategories = () => {
  const categories = useMemo(() => {
    const map = new Map();

    coffeeData.forEach((item) => {
      const title = item.category?.$title;
      if (title && !map.has(title)) {
        map.set(title, {
          id: item.category.$oid || title,
          title: title,
          image: item.image,
          info: item.info,
        });
      }
    });

    return Array.from(map.values());
  }, []);

  return (
    <section className="popular-categories">
      <div className="container">
        <div className="popular-categories__header">
          <h2 className="popular-categories__title">Популярні категорії</h2>
          <button className="popular-categories__all-btn">Всі категорії</button>
        </div>

        <div className="popular-categories__slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.popular-categories__btn--prev',
              nextEl: '.popular-categories__btn--next',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 1,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="popular-categories__swiper"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div className="category-card">
                  <div className="category-card__image-wrapper">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="category-card__image"
                    />
                  </div>
                  <div className="category-card__content">
                    <h3 className="category-card__title">{cat.title}</h3>
                    <p className="category-card__info">{cat.info}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="popular-categories__btn popular-categories__btn--prev"
            aria-label="Назад"
          >
            &#8592;
          </button>
          <button
            className="popular-categories__btn popular-categories__btn--next"
            aria-label="Вперед"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};