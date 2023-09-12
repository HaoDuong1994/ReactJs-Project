
import { Link } from "react-router-dom";
import "./CardAccessory.css";
import { useState } from "react";

function CardAccessory({ title, price, imgUrl, link }) {
    return (
        <div className="wrap-card">
            <div className="card__head">
                <Link to={"#"}>
                    <h4 className="card__title">{title}</h4>
                </Link>
            </div>
            <div className="card__body">
                <div className="card__img">
                    <img className="img-fluid" src={imgUrl} alt={title} />
                </div>

            </div>
            <div className="card__footer">
                <div className="card__info">
                    <p className="card__price">{price} VND</p>
                </div>
                <div className="card__controls">
                    <Link to={link} className="btn btn-primary btn-sm">
                        Xem chi tiết
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardAccessory;