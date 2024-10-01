import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetail";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<GetProductList />} path="/" />
        <Route element={<ProductDetails />} path="details/:id" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
