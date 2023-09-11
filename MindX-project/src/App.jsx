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
import GoogleLogin from "./Component/LoginGoogle/GoogleLogin";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import ProfilePage from "./Page/ProfilePage";
function App() {
  const [searchProduct, setSearchProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [productList, setProductList] = useState([]);
  const [productInCart, setProductInCart] = useState([]);
  const addProductFromApp = (object) => {
    const newProduct = [...productInCart, object];
    setProductInCart(newProduct);
  };
  useEffect(() => {
    document.title = "Shop quần áo";
  }, []);
  const { productsCollection, app } = useContext(FirebaseContext);
  const authen = getAuth(app);

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
      setLoading(false);
    };
    getProductData();
  }, []);
  const handleSearch = (value) => {
    const newProduct = productList.filter((product) => {
      return product.title.toLowerCase().includes(value);
    });
    setSearchProduct(newProduct);
  };
  console.log(searchProduct);
  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(authen, email, password);
    setUser("Sucess");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(authen, email, password).then((data) => {
      console.log(data);
      setUser("Sucess");
    });
  };
  if (loading)
    return (
      <div>
        <p>Loading...</p>
        <span className="spinner-border text-secondary"></span>
      </div>
    );

  if (user === null)
    return (
      <GoogleLogin
        handleSubmit={handleSubmit}
        handleSubmitSignIn={handleSubmitSignIn}
      />
    );
  return (
    <>
      <ProductListContext.Provider
        value={{
          productList,
          addProductFromApp,
          handleSearch,
          searchProduct,
        }}>
        <Router>
          <Header productInCart={productInCart} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/accessory" element={<AccessoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
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
