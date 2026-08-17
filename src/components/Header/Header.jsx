import React from "react";
import logo from "../../assets/logo.svg"
import shoppingCart from "../../assets/shopping_cart.svg"
import burger from "../../assets/burger.svg";
import { Container } from "../Container/Container.jsx"
import style from "./Header.module.scss"

export const Header = () => {
    return (
        <>
            <header className={style.header}>
               <Container>                    
                    <a href="" className={style.header__logoLink}>
                        <img src={logo} alt="" />
                        <span>Зернтяко</span>
                        
                    </a>
                <ul className={style.header__navigation}>
                    <li className={style.header__navigationItem}>
                        <h2 className={style.header__navigationLink}>Головна</h2>
                    </li>
                    <li className={style.header__navigationItem}>
                        <h2 className={style.header__navigationLink}>Товари</h2>
                    </li>
                    <li className={style.header__navigationItem}>
                        <h2 className={style.header__navigationLink}>Категорії</h2>
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
        </>
    )
}