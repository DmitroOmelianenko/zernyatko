import React, { useState } from 'react';
import style from "./Footer.module.scss"
import logo from "../../assets/logo.svg"
import { Container } from "../Container/Container.jsx"

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = event.target.elements.email.value;
     setEmail(inputData);
  };

  return (
    <footer className={style.footer}>
        <Container>
      <div className={style.container}>
        <div className={style.footer__top}>
          <div className={style.footer__logo}>
            <span className={style.footer__logoIcon}>
                <img src={logo} alt="logo" />
            </span>
            <span className={style.footer__logoText}>Зернятко</span>
          </div>

          <div className={style.footer__nav}>
            <h3 className={style.footer__title}>Меню</h3>
            <ul className={style.footer__menu}>
              <li><a href="/">Головна</a></li>
              <li><a href="/products">Товари</a></li>
              <li><a href="/categories">Категорії</a></li>
            </ul>
          </div>

          <div className={style.footer__subscribe}>
            <h3 className={style.footer__title}>Підписатися</h3>
            <p className={style.footer__text}>
              Приєднуйтесь до нашої розсилки, щоб бути в курсі новин та акцій.
            </p>
            <form className={style.footer__form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Введіть ваш email"
                name="email"
                className={style.footer__input}
                required
              />
              <button type="submit" className={style.footer__submitBtn}>
                Підписатися
              </button>
            </form>
            {email && setTimeout(() => {
              setEmail('');
            }, 5000) && <p className={style.footer__emailDisplay}>{email}</p>}
          </div>
        </div>

        <div className={style.footer__bottom}>
          <p className={style.footer__copyright}>
            © 2025 Зернятко. Всі права захищені.
          </p>
          <div className={style.footer__socials}>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
      </Container>
    </footer>
  );
};