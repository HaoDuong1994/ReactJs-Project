import { useState } from "react";
import "./ProductItemInCart.css";
function ProductItemInCart(props) {
  const { productIncartItem,setQuantity,quantity } = props;
  console.log(productIncartItem);


  return (
    <div className="product-item-wrapper">
      <img className="img-item-incart" src={productIncartItem.imgItem1} />
      <p>{productIncartItem.title}</p>
      <div className="d-flex gap-1">
        <button className="btn btn-sm btn-primary"onClick={() => setQuantity(prev => prev == 1 ? 1 : --prev)} >-</button>
        <input type="number" className="form-control" value={quantity} readOnly/>
        <button className="btn btn-sm btn-primary" onClick={() => setQuantity(prev => ++prev)} >+</button>
      </div>
      <p>{productIncartItem.price * quantity}</p>
    </div>
  );
}

export default ProductItemInCart;
