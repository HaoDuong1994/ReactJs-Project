import "./product.css";
import { Link, NavLink } from "react-router-dom";
function ProductItem(props) {
  const { productItem } = props;
  return (
    <div className="item-product">
      <h4 className="productItem-name">{productItem.name}</h4>
      <img className="item-product-img" src={productItem.img[0]} />
      <p className="productItem-price">{productItem.price}</p>
      <button className="productItem-btn">
        <Link to={`/product/${productItem.name}`}>Xem chi tiết</Link>
      </button>
    </div>
  );
}
export default ProductItem;
