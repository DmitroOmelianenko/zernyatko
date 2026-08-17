import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from "./Reviews.module.scss";
import { Container } from "../Container/Container.jsx";

const reviewsData = [
  {
    id: 1,
    rating: 5,
    text: 'Дуже сподобалася ця кава! Смак насичений, з легкою гірчинкою й ароматом шоколаду. Ідеально підходить для ранкового еспресо.',
    author: 'Олена Коваль',
    productName: 'Еспресо Класік',
    productLink: '#',
  },
  {
    id: 2,
    rating: 5,
    text: 'Френч-прес якісний і зручний у використанні. Скло міцне, фільтр добре працює, кава виходить ароматною й чистою. Точно вартий своєї ціни.',
    author: 'Ігор Петров',
    productName: 'Френч-прес Classic 600 мл',
    productLink: '#',
  },
  {
    id: 3,
    rating: 5,
    text: 'Купив для роботи — тримає тепло кілька годин, дизайн мінімалістичний і стильний. Дуже зручно брати з собою каву в дорогу.',
    author: 'Ігор Шевченко',
    productName: 'Термочашка Зернятко 350 мл',
    productLink: '#',
  },
  {
    id: 4,
    rating: 5,
    text: 'Чудова арабіка! М’який смак без зайвої кислотності. Замовляю вже втретє, доставка завжди швидка.',
    author: 'Марія Бойко',
    productName: 'Колумбія Супремо',
    productLink: '#',
  },
];

export const Reviews = () => {
  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <section className={style.reviews}>
      <Container>
        <h2 className={style.reviews__title}>Останні відгуки</h2>

        <div className={style.reviews__sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: '.rev-prev',
              nextEl: '.rev-next',
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
            className={style.reviews__swiper}
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div className={style.reviewCard}>
                  <div className={style.reviewCard__rating}>
                    {renderStars(review.rating)}
                  </div>
                  <p className={style.reviewCard__text}>{review.text}</p>
                  <div className={style.reviewCard__author}>{review.author}</div>
                  <a href={review.productLink} className={style.reviewCard__product}>
                    {review.productName}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={style.reviews__controls}>
            <button
              type="button"
              className={`${style.reviews__btn} ${style.reviews__btnPrev} rev-prev`}
              aria-label="Назад"
            >
              &#8592;
            </button>
            <button
              type="button"
              className={`${style.reviews__btn} ${style.reviews__btnNext} rev-next`}
              aria-label="Вперед"
            >
              &#8594;
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};