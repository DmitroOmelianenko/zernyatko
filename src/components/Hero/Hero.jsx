import React from "react";
import style from "./Hero.module.scss";
import hero from "../../assets/heroimg.png";
import { Container } from "../Container/Container.jsx";

export const Hero = () => {
  return (
    <>
      <section className={style.hero}>
         <Container>
            <div className={style.hero__divFlex}>
          <div className={style.hero__info}>
            <h1 className={style.hero__title}>
              Зернятко — твій шлях до справжньої кави
            </h1>
            <p className={style.hero__description}>
              Ми створили місце, де кожен знайде все для свого кавового ритуалу: від зерен преміум-якості до стильних аксесуарів для приготування. Почни день із натхненням та обирай товари, що розкривають унікальний смак твоєї кави.
            </p>
            <button type="button" className={style.hero__productsButton}>
              До товарів
            </button>
            <button type="button" className={style.hero__categoryButton}>
              Дослідити категорії
            </button>
          </div>
          <img src={hero} alt="hero" />
          </div>
        </Container>
      </section>
    </>
  );
};