import React, { useState, useMemo } from 'react';
import styles from './Categories.module.scss';
import coffeeData from '../../../api/coffee.json';
import { Container } from '../../Container/Container';

export const CategoriesPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = useMemo(() => {
    const map = new Map();

    coffeeData.forEach((item) => {
      const categoryId = item.category?.$oid;
      const categoryTitle = item.category?.$title;

      if (categoryId && !map.has(categoryId)) {
        map.set(categoryId, {
          id: categoryId,
          title: categoryTitle,
          info: item.info,
          image: item.image,
        });
      }
    });

    return Array.from(map.values());
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className={styles.section}>
        <Container>
      <div className="container">
        <h2 className={styles.title}>Категорії</h2>

        <div className={styles.grid}>
          {categories.slice(0, visibleCount).map((cat) => (
            <div key={cat.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardInfo}>{cat.info}</p>
            </div>
          ))}
        </div>

        {visibleCount < categories.length && (
          <div className={styles.actions}>
            <button
              className={styles.moreBtn}
              onClick={handleShowMore}
            >
              Показати більше
            </button>
          </div>
        )}
      </div>
      </Container>
    </section>
  );
};