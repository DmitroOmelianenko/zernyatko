import React from "react";
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { PopularProducts } from "./components/PopularProducts/PopularProducts"
import { Cause } from "./components/Cause/Cause";
import { PopularCategories } from "./components/PopCategory/PopCategory";
import { Reviews } from "./components/Reviews/Reviews";
import { Footer } from "./components/Footer/Footer"

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <PopularProducts />
    <Cause />
    <PopularCategories />
    <Reviews />
    <Footer />
    </>
  )
}

export default App