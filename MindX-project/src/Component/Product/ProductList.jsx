import ProductItem from "./ProductItem";
// import { productList } from "./productsList"; Chổ này lỗi
import "./product.css";
// import { FirebaseContext } from "../../firebase"; chổ này lỗi
import { useContext } from "react";
// import { doc, getDocs } from "firebase/firestore"; chổ này lỗi
// import { useEffect } from "react"; chổ này lỗi
// import { useState } from "react"; chổ này lỗi
import { ProductListContext } from "../../App";
function ProductList() {
  const { productList, searchProduct } = useContext(ProductListContext);
  console.log(productList);
  console.log(searchProduct);
  return (
    <div className="product-list-wrapper">
      <img
        className="product-img-cover"
        src="https://as1.ftcdn.net/v2/jpg/05/29/33/80/1000_F_529338076_XnKogxVjg4jnOxzY3WB5LANCcyYcucbb.jpg"
      />
      <h2>Tất cả sản phẩm</h2>
      <div className="list-item-product">
        {searchProduct.length !== 0
          ? searchProduct.map((product, index) => {
              return <ProductItem key={index + 1} product={product} />;
            })
          : productList.map((product, index) => {
              return <ProductItem key={index + 1} product={product} />;
            })}
      </div>
    </div>
  );
}
export default ProductList;
