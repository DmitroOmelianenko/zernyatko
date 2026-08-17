import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from "./PopCategory.module.scss";
import { Container } from "../Container/Container.jsx";
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
    <section className={style.popularCategories}>
      <Container>
        <div className={style.popularCategories__header}>
          <h2 className={style.popularCategories__title}>Популярні категорії</h2>
          <button type="button" className={style.popularCategories__allBtn}>
            Всі категорії
          </button>
        </div>

        <div className={style.popularCategories__sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.pop-cat-prev',
              nextEl: '.pop-cat-next',
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
            className={style.popularCategories__swiper}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div className={style.categoryCard}>
                  <div className={style.categoryCard__imageWrapper}>
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className={style.categoryCard__image}
                    />
                  </div>
                  <div className={style.categoryCard__content}>
                    <h3 className={style.categoryCard__title}>{cat.title}</h3>
                    <p className={style.categoryCard__info}>{cat.info}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className={`${style.popularCategories__btn} ${style.popularCategories__btnPrev} pop-cat-prev`}
            aria-label="Назад"
          >
            &#8592;
          </button>
          <button
            type="button"
            className={`${style.popularCategories__btn} ${style.popularCategories__btnNext} pop-cat-next`}
            aria-label="Вперед"
          >
            &#8594;
          </button>
        </div>
      </Container>
    </section>
  );
};