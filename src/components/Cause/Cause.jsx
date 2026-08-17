import React from "react";
import sun from "./cause.img/suny.svg";
import tea from "./cause.img/tea.svg";
import calendar from "./cause.img/calendar.svg"
import style from "./Cause.module.scss"
import { Container } from "../Container/Container.jsx"


export const Cause = () => {
    return (
        <>
        <section className={style.cause}>
            <Container>
            <h2 className={style.cause__title}>Чому варто обрати Зернятко?</h2>
            <ul className={style.cause__list}>
                <li className={style.cause__item}>
                    <img src={sun} className={style.cause__vector} alt="" />
                    <h3 className={style.cause__name}>Смак і якість</h3>
                    <p className={style.cause__description}>Лише відібрані кавові зерна та товари від перевірених виробників.</p>
                </li>
                <li className="cause__item">
                    <img src={tea} className="cause__vector" alt="" />
                    <h3 className={style.cause__name}>Усе для кавового ритуалу</h3>
                    <p className={style.cause__description}>Від турки до кавомолки — ми зібрали повний набір для ідеальної чашки.</p>
                </li>
                <li className="cause__item">
                    <img src={calendar} className="cause__vector" alt="" />
                    <h3 className={style.cause__name}>Натхнення щодня</h3>
                    <p className={style.cause__description}>Кава, яка підкреслить твій настрій та стане головною частиною ранкової звички.</p>
                </li>
            </ul>
            </Container>
        </section>
        </>
    )
}