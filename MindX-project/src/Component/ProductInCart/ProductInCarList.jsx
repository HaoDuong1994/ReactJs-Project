import ProductItemInCart from "./ProductInCarItem";
function ProductListInCart(props) {
  console.log(props);
  const { productIncart,setQuantity,quantity } = props;
  console.log(productIncart);
  return (
    <div style={{ marginBottom: "5px" }}>
      {productIncart.map((product,index) => {
        return <ProductItemInCart key={index} productIncartItem={product} quantity={quantity} setQuantity={setQuantity} />;
      })}
    </div>
  );
}
export default ProductListInCart;
