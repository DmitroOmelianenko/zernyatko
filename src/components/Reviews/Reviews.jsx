import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from "./Reviews.module.scss"

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
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title">Останні відгуки</h2>

        <div className="reviews__slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: '.reviews__btn--prev',
              nextEl: '.reviews__btn--next',
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
            className="reviews__swiper"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="review-card">
                  <div className="review-card__rating">
                    {renderStars(review.rating)}
                  </div>
                  <p className="review-card__text">{review.text}</p>
                  <div className="review-card__author">{review.author}</div>
                  <a href={review.productLink} className="review-card__product">
                    {review.productName}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="reviews__controls">
            <button className="reviews__btn reviews__btn--prev" aria-label="Назад">
              &#8592;
            </button>
            <button className="reviews__btn reviews__btn--next" aria-label="Вперед">
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};