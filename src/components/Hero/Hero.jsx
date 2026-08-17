import React from "react";
import style from "./Hero.module.scss"
import hero from "../../assets/heroimg.png"
import { Container } from "../Container/Container.jsx"

export const Hero = () => {
    return (
        <>
        <section className="hero">
            <Container>
            <div className="hero__info">
                <h1 className="hero__title">Зернятко — твій шлях до справжньої кави</h1>
                <p className="hero__description">Ми створили місце, де кожен знайде все для свого кавового ритуалу: від зерен преміум-якості до стильних аксесуарів для приготування. Почни день із натхненням та обирай товари, що розкривають унікальний смак твоєї кави.</p>
                <button type="button" className="hero__products-button">До товарів</button>
                <button type="button" className="hero__category-button">Дослідити категорії</button>
            </div>
            <img src={hero} alt="hero" />
            </Container>
        </section>
        </>
    )
}