import ProductItemInCart from "./ProductInCarItem";
function ProductListInCart(props) {
  console.log(props);
  const { productIncart } = props;
  console.log(productIncart);
  return (
    <div style={{ marginBottom: "5px" }}>
      {productIncart.map((product) => {
        return <ProductItemInCart productIncartItem={product} />;
      })}
    </div>
  );
}
export default ProductListInCart;
