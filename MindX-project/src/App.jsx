import { useState } from "react";
import Header from "./Component/Header/Header";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Page/MainPage";
import ProductPage from "./Page/ProductPage";
import AccessoryPage from "./Page/AccessoryPage";
import ContactPage from "./Page/ContactPage";
import ProductPageDetail from "./Page/ProductPageDetail";
import { createContext, useContext } from "react";
import { FirebaseContext } from "./firebase";
import { doc, getDocs } from "firebase/firestore";
import ProductIncartPage from "./Page/ProductIncartPage";
export const ProductListContext = createContext();
function App() {
  const [productList, setProductList] = useState([]);
  const [productInCart, setProductInCart] = useState([]);
  console.log(productInCart);
  const addProductFromApp = (object) => {
    const newProduct = [...productInCart, object];
    setProductInCart(newProduct);
  };
  useEffect(() => {
    document.title = "Shop quần áo";
  }, []);
  const { productsCollection } = useContext(FirebaseContext);
  useEffect(() => {
    const getProductData = async () => {
      const data = await getDocs(productsCollection);
      let finalData = [];

      data.forEach((doc) => {
        let object = doc.data();
        object.idUrl = doc.id;
        finalData.push(object);
      });
      setProductList(finalData);
    };
    getProductData();
  }, []);
  if (productList === []) return null;
  return (
    <>
      <ProductListContext.Provider
        value={{
          productList,
          addProductFromApp,
        }}>
        <Router>
          <Header productInCart={productInCart} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/accessory" element={<AccessoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:productID" element={<ProductPageDetail />} />
            <Route
              path="/cartProduct"
              element={<ProductIncartPage productInCart={productInCart} />}
            />
          </Routes>
        </Router>
      </ProductListContext.Provider>
    </>
  );
}

export default App;
