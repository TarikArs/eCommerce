import "./itemcard.css";
export default function ItemCard() {
  return (
    <div className="item-card">
      <div className="item-card-header">
        <div className="sold-badge"></div>
      </div>
      <div className="item-card-image"></div>
      <div className="item-card-title"></div>
      <div className="item-card-stars"></div>
      <div className="item-card-botom">
        <div className="item-card-price"></div>
        <div className="item-card-add"></div>
      </div>
    </div>
  );
}
