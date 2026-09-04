import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { PopularProducts } from "./components/PopularProducts/PopularProducts";
import { Cause } from "./components/Cause/Cause";
import { PopularCategories } from "./components/PopCategory/PopCategory";
import { Reviews } from "./components/Reviews/Reviews";
import { Footer } from "./components/Footer/Footer";
import { CategoriesPage } from "./components/pages/CategoriesPage/CategoriesPage";
import { ProductsPage } from "./components/pages/ProductsPage/ProductsPage";
import { MainPage } from "./components/pages/MainPage/MainPage";

const App = () => {
  return (
    <BrowserRouter basename="/zernyatko">
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <MainPage />
          } 
        />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<ProductsPage />}/>
               </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;