import "./ProductInCart.css";
import ProductListInCart from "../Component/ProductInCart/ProductInCarList";
function ProductIncartPage(props) {
  const { productInCart } = props;
  console.log(productInCart);
  return (
    <div className="cart-page-wrapper">
      <div className="cart-page">
        <div>
          <h2>Giỏ hàng của bạn</h2>
        </div>
        <div className="item-wrapper">
          <div className="item-container">
            <div>Giỏ hàng bạn đang có {productInCart.length} sản phẩm</div>
            <ProductListInCart productIncart={productInCart} />
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
            <div>Thông tin đơn hàng</div>
            <div>Tổng cần thanh toán</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductIncartPage;
