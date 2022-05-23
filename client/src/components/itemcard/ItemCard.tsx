import "./itemcard.css";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { Link } from "react-router-dom";

/** Create Interface props for Card */
interface CardProps {
  item: any;
  onClick: any;
}

export default function ItemCard({ item, onClick }: CardProps) {
  return (
    <div className="item-card">
      <Link to={`/product/${item.id}`}>
        <div className="item-card-header">
          <div className="sold-badge">{item?.sold}</div>
        </div>
        <div className="item-card-image">
          <img src={item?.image} alt="item" width={150} />
        </div>
      </Link>
      <div className="item-card-footer">
        <div className="item-card-title">
          <h5>{item.title}</h5>
        </div>
        <div className="item-card-stars">
          <Rating
            onClick={() => console.log("Rated")}
            size={20}
            ratingValue={item.stars}
          />
        </div>
        <div className="item-card-bottom">
          <div className="item-card-price">{item.price}</div>

          <div className="item-card-add">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
