import "./product.css";
function ProductItem(props) {
  console.log(props);
  return (
    <div className="item-product">
      <h4
        style={{
          textAlign: "center",
        }}>
        SƠ MI ADAM ĐEN GHI
      </h4>
      <img
        className="item-product-img"
        src="https://product.hstatic.net/1000366669/product/smbb05_c870faaa3f7248be9742213cd8967330_large.jpg"
      />
      <p>300000 vnd</p>
      <button>Xem chi tiết</button>
    </div>
  );
}
export default ProductItem;
