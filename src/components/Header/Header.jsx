import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import shoppingCart from "../../assets/shopping_cart.svg";
import burger from "../../assets/burger.svg";
import { Container } from "../Container/Container.jsx";
import style from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                <Link to="/" className={style.header__logoLink}>
                    <img src={logo} alt="Зернятко" />
                    <span>Зернятко</span>
                </Link>

                <ul className={style.header__navigation}>
                    <li className={style.header__navigationItem}>
                        <Link to="/" className={style.header__navigationLink}>
                            Головна
                        </Link>
                    </li>
                    <li className={style.header__navigationItem}>
                        <Link to="/products" className={style.header__navigationLink}>
                            Товари
                        </Link>
                    </li>
                    <li className={style.header__navigationItem}>
                        <Link to="/categories" className={style.header__navigationLink}>
                            Категорії
                        </Link>
                    </li>
                </ul>

                <ul className={style.header__logInfoList}>
                    <li className={style.header__logInfoItem}>
                        <button type="button" className={style.header__logInButton}>Вхід</button>
                    </li>
                    <li className={style.header__logInfoItem}>
                        <button type="button" className={style.header__signInButton}>Зареєструватися</button>
                    </li>
                </ul>

                <img src={burger} className={style.header__burger} alt="burger" />
                <div className={style.header__borderCart}>
                    <img src={shoppingCart} alt="header__shoppingCart" />
                </div>
            </Container>
        </header>
    );
};