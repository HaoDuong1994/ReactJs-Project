import "./product.css";
import { Link, NavLink } from "react-router-dom";
function ProductItem(props) {
  // if (props.productList === null) return null;
  const { title, img, price, idUrl } = props.product;

  return (
    <div className="item-product">
      <h4 className="productItem-name">{title}</h4>
      <img className="item-product-img" src={img} />
      <p className="productItem-price">{`${price}VND`}</p>
      <button className="productItem-btn">
        <Link to={`/product/${idUrl}`}>Xem chi tiết</Link>
      </button>
    </div>
  );
}
export default ProductItem;
