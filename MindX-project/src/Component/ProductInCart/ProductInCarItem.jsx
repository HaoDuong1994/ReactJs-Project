import "./ProductItemInCart.css";
function ProductItemInCart(props) {
  const { productIncartItem } = props;
  console.log(productIncartItem);
  return (
    <div className="product-item-wrapper">
      <img className="img-item-incart" src={productIncartItem.imgItem1} />
      <p>{productIncartItem.title}</p>
      <p>{productIncartItem.price}</p>
    </div>
  );
}

export default ProductItemInCart;
