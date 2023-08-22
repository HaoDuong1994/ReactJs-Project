import { useParams } from "react-router-dom";
import ProductList from "../Component/Product/ProductList";
import { productList } from "../Component/Product/productsList";
function ProductPageDetail() {
  const { productID } = useParams();
  console.log(productID);
  return <div>Hello from product page detail {productID}</div>;
}
export default ProductPageDetail;
