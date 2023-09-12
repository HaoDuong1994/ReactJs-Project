import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import accessories from "../fakeApi/accessories.json";



function AccessoryDetailPage({ img, title, price }) {
    const params = useParams();
    const id = params.accessoryId;
    const [accessory, setAccessory] = useState();
    useEffect(() => {
        const accessoryRes = accessories.find((item) => {
            return item.id === Number(id);
        })
        setAccessory(accessoryRes);
    }, [id])

    return <div className="container mt-5" >
        <div className="row">
            <div className="col-lg-4">
                <img src={accessory?.img} height={500} style={{ border: "1px solid #000", objectFit: "cover" }} alt="" className="w-100" />
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <img src={accessory?.img} height={100} style={{ border: "1px solid #000", objectFit: "cover" }} alt="" className="w-100" />
                    </div>
                    <div className="col-lg-4">
                        <img src={accessory?.img} height={100} style={{ border: "1px solid #000", objectFit: "cover" }} alt="" className="w-100" />
                    </div>
                    <div className="col-lg-4">
                        <img src={accessory?.img} height={100} style={{ border: "1px solid #000", objectFit: "cover" }} alt="" className="w-100" />
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <h2>{accessory?.title}</h2>
                <p> <span className="text-danger">Giá bán: </span>{accessory?.price} vnđ</p>
                <hr />
                <p>
                    {accessory?.desc}
                </p>
                <a href="#" className="btn btn-primary text-white">Đặt hàng</a>
            </div>
        </div>
    </div>
}

export default AccessoryDetailPage;