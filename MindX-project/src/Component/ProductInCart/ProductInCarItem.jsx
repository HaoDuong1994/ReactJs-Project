import { useState } from "react";
import "./ProductItemInCart.css";
function ProductItemInCart(props) {
  const { productIncartItem, setTotalQuantity} = props;
  console.log(productIncartItem);
  const [quantity, setQuantity] = useState(1);


const handlePlus = () => {
  setQuantity(prev => ++prev);
  setTotalQuantity(prev => ++prev)
}
const handleMinus = () => {

  setQuantity(prev => --prev);
  setTotalQuantity(prev => --prev)
}

  return (
    <div className="product-item-wrapper">
      <img className="img-item-incart" src={productIncartItem.imgItem1} />
      <p>{productIncartItem.title}</p>
      <div className="d-flex gap-1">
        <button className="btn btn-sm btn-primary"onClick={handleMinus} >-</button>
        <input type="number" className="form-control" value={quantity} readOnly/>
        <button className="btn btn-sm btn-primary" onClick={handlePlus} >+</button>
      </div>
      <p>{productIncartItem.price * quantity}</p>
    </div>
  );
}

export default ProductItemInCart;
