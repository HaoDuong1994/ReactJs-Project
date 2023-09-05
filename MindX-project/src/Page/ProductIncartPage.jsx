import "./ProductInCart.css";
function ProductIncartPage(props) {
  const { productInCart } = props;
  console.log(productInCart);
  return (
    <div className="cart-page-wrapper">
      <div>
        <h2>Giỏ hàng của bạn</h2>
      </div>
      <div className="item-wrapper">
        <div className="item-container"></div>
        <div className="item-payment-wrapper"></div>
      </div>
    </div>
  );
}
export default ProductIncartPage;
