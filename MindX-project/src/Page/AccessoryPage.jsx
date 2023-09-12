import ProductItem from "../Component/Product/ProductItem";
import "./AccessoryPage.css";
import accessories from "../fakeApi/accessories.json";
import CardAccessory from "../Component/CardAccessory/CardAccessory";


function AccessoryPage() {
  return <div className="container">
    <div className="wrap-accessory">
      <h2>Tất cả phụ kiện</h2>
      <hr />
      <div className="row">
        {accessories.map((item) => {
          return (
            <div className="col-lg-3" key={item.id}>
              <CardAccessory title={item.title} imgUrl={item.img} price={item.price} link={`/accessories/${item.id}`} ></CardAccessory>
            </div>
          )
        })}
      </div>
    </div>
  </div>
}

export default AccessoryPage;
