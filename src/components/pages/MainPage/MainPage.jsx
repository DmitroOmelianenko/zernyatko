import React from "react";
import { Header } from "../../Header/Header";
import { Hero } from "../../Hero/Hero";
import { PopularProducts } from "../../PopularProducts/PopularProducts";
import { Cause } from "../../Cause/Cause";
import { PopularCategories } from "../../PopCategory/PopCategory";
import { Reviews } from "../../Reviews/Reviews";
import { Footer } from "../../Footer/Footer";

export const MainPage = () => {
    return (
        <>
              <Hero />
              <PopularProducts />
              <Cause />
              <PopularCategories />
              <Reviews />
        </>
    )
}