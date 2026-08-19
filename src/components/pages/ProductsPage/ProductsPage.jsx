import React, { useState } from 'react';
import styles from './Products.module.scss';
import coffeeData from '../../../api/coffee.json';
import { Container } from '../../container/Container';

const categoriesList = [
  'Усі',
  'Кава в зернах',
  'Мелена кава',
  'Кавоварки та аксесуари',
  'Гаджети для бариста',
  'Чашки та термоси',
  'Фільтри та витратні матеріали',
  'Капсульна кава',
  'Розчинна кава',
  'Сиропи та добавки',
  'Подарункові набори',
  'Зберігання кави',
  'Печиво та солодощі до кави',
];

const brandsList = [
  'Lavazza',
  'Illy',
  'Bialetti',
  'Hario',
  'Timemore',
  'Svit Kavy',
  'Foundation Coffee Roasters',
  'Rocket Espresso',
];

export const ProductsPage = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  // Простий стан для відкриття/закриття фільтрів на мобілці
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const renderStars = (rate) => {
    return '★'.repeat(Math.floor(rate)) + (rate % 1 !== 0 ? '½' : '');
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className={styles.CategoriesPage}>
        <Container>
      <div className="container">
        <h1 className={styles.CategoriesPage__title}>Всі товари</h1>

        <div className={styles.CategoriesPage__layout}>
          {/* САЙДБАР / ФІЛЬТРИ */}
          <aside className={styles.CategoriesPage__sidebar}>
            <div className={styles.CategoriesPage__filterHeader}>
              <h3 className={styles.CategoriesPage__filterTitle}>Фільтри</h3>
              <button type="button" className={styles.CategoriesPage__resetBtn}>
                Очистити всі
              </button>
            </div>
            <p className={styles.CategoriesPage__counter}>Показано 15 з 100</p>

            {/* Дропдаун-кнопка для мобілки */}
            <div className={styles.CategoriesPage__selectWrapper}>
              <button
                type="button"
                className={`${styles.CategoriesPage__selectBtn} ${
                  isFilterOpen ? styles['CategoriesPage__selectBtn--open'] : ''
                }`}
                onClick={toggleFilter}
              >
                <span>Фільтри</span>
                <span className={styles.CategoriesPage__arrow}>
                  {isFilterOpen ? '▲' : '▼'}
                </span>
              </button>

              {/* Випадаючий список категорій */}
              <ul
                className={`${styles.CategoriesPage__categoryList} ${
                  isFilterOpen ? styles['CategoriesPage__categoryList--open'] : ''
                }`}
              >
                {categoriesList.map((cat, index) => (
                  <li
                    key={cat}
                    className={`${styles.CategoriesPage__categoryItem} ${
                      index === 0 ? styles['CategoriesPage__categoryItem--active'] : ''
                    }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Бренд (ховатиметься на мобілці за замовчуванням або залишається внизу) */}
            <div className={styles.CategoriesPage__desktopFilters}>
              <div className={styles.CategoriesPage__filterGroup}>
                <div className={styles.CategoriesPage__filterHeader}>
                  <h3 className={styles.CategoriesPage__filterTitle}>Бренд/Виробник</h3>
                  <button type="button" className={styles.CategoriesPage__resetBtn}>
                    Очистити
                  </button>
                </div>

                <div className={styles.CategoriesPage__checkboxList}>
                  {brandsList.map((brand) => (
                    <label key={brand} className={styles.CategoriesPage__checkboxLabel}>
                      <input type="checkbox" className={styles.CategoriesPage__checkboxInput} />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.CategoriesPage__filterGroup}>
                <div className={styles.CategoriesPage__filterHeader}>
                  <h3 className={styles.CategoriesPage__filterTitle}>Ціна</h3>
                  <button type="button" className={styles.CategoriesPage__resetBtn}>
                    Очистити
                  </button>
                </div>

                <div className={styles.CategoriesPage__rangeWrapper}>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    className={styles.CategoriesPage__rangeInput}
                  />
                  <div className={styles.CategoriesPage__rangeValues}>
                    <span>0</span>
                    <span>5000</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* КАРТКИ ТОВАРІВ */}
          <main className={styles.CategoriesPage__content}>
            <div className={styles.CategoriesPage__grid}>
              {coffeeData.slice(0, visibleCount).map((item) => (
                <article key={item._id.$oid} className={styles.CategoriesPage__card}>
                  <div className={styles.CategoriesPage__cardImageWrapper}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.CategoriesPage__cardImage}
                    />
                  </div>

                  <div className={styles.CategoriesPage__cardBody}>
                    <div className={styles.CategoriesPage__cardRating}>
                      {renderStars(item.rate)}
                    </div>
                    <h3 className={styles.CategoriesPage__cardTitle}>{item.name}</h3>
                    <p className={styles.CategoriesPage__cardInfo}>{item.info}</p>
                    <div className={styles.CategoriesPage__cardPrice}>
                      {item.price.value} {item.price.currency}
                    </div>
                    <button type="button" className={styles.CategoriesPage__cardBtn}>
                      Детальніше
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {visibleCount < coffeeData.length && (
              <div className={styles.CategoriesPage__actions}>
                <button
                  type="button"
                  className={styles.CategoriesPage__moreBtn}
                  onClick={handleShowMore}
                >
                  Показати більше
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
      </Container>
    </div>
  );
};