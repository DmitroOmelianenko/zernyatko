import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from "./Reviews.module.scss";
import { Container } from "../Container/Container.jsx";


export const Reviews = () => {
  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://6a9abdd99a7ec1b817d288b6.mockapi.io/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

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
            {reviews.map((review) => (
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