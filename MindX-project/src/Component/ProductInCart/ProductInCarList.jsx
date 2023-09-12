import { useState } from "react";
import ProductItemInCart from "./ProductInCarItem";
function ProductListInCart(props) {
  console.log(props);
  const { productIncart,setTotalQuantity } = props;
  const [quantity, setQuantity] = useState(1);


  console.log(productIncart);
  return (
    <div style={{ marginBottom: "5px" }}>
      {productIncart.map((product,index) => {
        return <ProductItemInCart setTotalQuantity={setTotalQuantity} key={index} productIncartItem={product} quantity={quantity} onPlus={() => setQuantity(prev => ++prev)} />;
      })}
    </div>
  );
}
export default ProductListInCart;
