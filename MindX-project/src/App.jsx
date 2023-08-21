import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Component/Header/Header";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Page/MainPage";
import ProductPage from "./Page/ProductPage";
import AccessoryPage from "./Page/AccessoryPage";
import ContactPage from "./Page/ContactPage";
function App() {
  useEffect(() => {
    document.title = "Shop quần áo";
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/accessory" element={<AccessoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
