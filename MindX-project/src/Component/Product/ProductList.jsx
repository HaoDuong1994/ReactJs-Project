import ProductItem from "./ProductItem";
import { productList } from "./productsList";
import "./product.css";

function ProductList() {
  console.log(productList);
  return (
    <div className="product-list-wrapper">
      <img
        className="product-img-cover"
        src="https://as1.ftcdn.net/v2/jpg/05/29/33/80/1000_F_529338076_XnKogxVjg4jnOxzY3WB5LANCcyYcucbb.jpg"
      />
      <h2>Tất cả sản phẩm</h2>
      <div className="list-item-product">
        {productList.map((productItem) => {
          return <ProductItem productItem={productItem} />;
        })}
      </div>
    </div>
  );
}
export default ProductList;
