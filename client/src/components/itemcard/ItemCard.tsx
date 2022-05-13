import "./itemcard.css";
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";

export default function ItemCard() {
  const [rating, setRating] = useState(0) // initial rating value

 
  return (
    <div className="item-card">
      <div className="item-card-header">
        <div className="sold-badge">-56%</div>
      </div>
      <div className="item-card-image">
        <img src="./assets/cards/1.jpg" alt="item" width={150} />
      </div>
      <div className="item-card-footer">
        <div className="item-card-title">
          <h5>Smart watch</h5>
        </div>
        <div className="item-card-stars">
          <Rating onClick={()=>console.log('Rated') }  size={20} ratingValue={4} />
        </div>
        <div className="item-card-bottom">
          <div className="item-card-price">115 €</div>
          <div className="item-card-add">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>

  );
}
