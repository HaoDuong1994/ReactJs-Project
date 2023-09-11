import { useParams } from "react-router-dom";
// import ProductList from "../Component/Product/ProductList"; // Ở đây cũng lỗi
// import { productList } from "../Component/Product/productsList"; // Ở đây cũng lỗi
import { FirebaseContext } from "../firebase";
import { useContext } from "react";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import "./ProductDetail.css";
import { ProductListContext } from "../App";
function ProductPageDetail() {
  const { addProductFromApp } = useContext(ProductListContext);
  const [productDetail, setProductDetail] = useState({});
  const [mainImg, setMainImg] = useState(
    "https://5.imimg.com/data5/SELLER/Default/2023/4/298964821/EV/KO/FX/4475180/garment-display-rack.jpeg"
  );
  const { productID } = useParams();
  const { productsCollection } = useContext(FirebaseContext);
  const singleData = doc(productsCollection, productID);
  useEffect(() => {
    const productDetailData = async () => {
      const getSingleData = await getDoc(singleData);
      setProductDetail(getSingleData.data());
    };
    productDetailData();
  }, [productID]);
  // if (productDetail === {}) return null; Chổ này lỗi khi chạy á anh
  return (
    <div>
      <div className="product-container">
        <div className="img-wrapper">
          <img className="main-img" src={mainImg} />
          <div className="img-item-wrapper">
            <img
              onMouseOver={() => {
                setMainImg(productDetail.imgItem1);
              }}
              className="img-item"
              src={productDetail.imgItem1}
            />
            <img
              onMouseOver={() => {
                setMainImg(productDetail.imgItem2);
              }}
              className="img-item margin-left"
              src={productDetail.imgItem2}
            />
            <img
              onMouseOver={() => {
                setMainImg(productDetail.imgItem3);
              }}
              className="img-item margin-left"
              src={productDetail.imgItem3}
            />
          </div>
        </div>
        <div className="content-wrapper">
          <div>
            <h2>{productDetail.title}</h2>
          </div>
          <div>
            <span>Giá bán: </span>
            <span style={{ color: "red" }}>{productDetail.price}</span>
          </div>
          <div className="size-item">
            Chọn size:
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
          </div>
          <div>
            <span>Vận chuyển:</span>
            <span> Miễn phí vận chuyển</span>
          </div>
          <div>{productDetail.detailContent}</div>
          <div>
            Một số lưu ý khi bảo quản quần áo
            <ul>
              <li>
                Trước khi giặt, hãy dành thời gian phân chia quần áo theo màu
                sắc, chất liệu để chúng không bị phai màu
              </li>
              <li>
                Việc ngâm quần áo trong muối ăn giữ cho màu nhuộm trang phục
                được bền. Trước khi giặt, bạn hãy ngâm chúng trong dung dịch
                muối từ 1 đến 2 tiếng. Tiếp sau đó, hãy xả hết nước muối, giũ
                sạch rồi mới giặt nhé.
              </li>
              <li>
                Mọi người thường không chú ý đến nhiệt độ nước khi giặt. Giặt
                nước quá nóng sẽ khiến quần áo dễ bị nhăn, một số chất liệu như
                thun, len… dễ bị co, giãn. Nên giặt quần áo bằng nước lạnh để
                giúp bảo vệ quần áo và tiết kiệm được nhiên liệu, tiền bạc
              </li>
            </ul>
          </div>
          <div>
            <button
              onClick={() => {
                addProductFromApp(productDetail);
              }}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPageDetail;
