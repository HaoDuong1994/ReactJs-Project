import "./ProductInCart.css";
import ProductListInCart from "../Component/ProductInCart/ProductInCarList";
import { useState } from "react";
function ProductIncartPage(props) {
  const { productInCart } = props;
  console.log(productInCart);
  const [quantity, setQuantity] = useState(1);
  

  return (
    <div className="cart-page-wrapper">
      <div className="cart-page">
        <div>
          <h2>Giỏ hàng của bạn</h2>
        </div>
        <div className="item-wrapper">
          <div className="item-container">
            <div>Giỏ hàng bạn đang có {productInCart.length} sản phẩm</div>
            <ProductListInCart productIncart={productInCart} quantity={quantity} setQuantity={setQuantity}/>
            <div>
              <h4>Dịch vụ tại shop</h4>
              <ul>
                <li>Miễn phí giao hàng với hóa đơn trên 500k</li>
                <li>
                  TP.HCM nhận hàng trong 12h. Tỉnh thành khác trong 72h sau khi
                  đặt
                </li>
                <li>Bảo hành sản phẩm.</li>
                <li>
                  Sản phẩm được đổi trong 7 ngày, nguyên tag, chưa sử dụng, giặt
                  ủi, có mùi lạ
                </li>
                <li>
                  Sản phẩm đổi giá trị bằng hoặc lớn hơn, sản phẩm Sale không áp
                  dụng đổi
                </li>
              </ul>
            </div>
          </div>
          <div className="item-payment-wrapper">
            <div>
              <h2 className="item-payment-heading">Thông tin đơn hàng</h2>
            </div>
            <div className="payment-total">
              <p>Tổng tiền</p>
              <p className="payment-total-price">
                {productInCart.reduce((totalPrice, currrentPrice) => {
                  return (totalPrice + Number(currrentPrice.price)) * quantity;
                }, 0)}
              </p>
            </div>
            <div className="voucher-content">
              Bạn có thể nhập mã giảm giá khi thanh toán
            </div>
            <button className="btn btn-secondary">Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductIncartPage;
