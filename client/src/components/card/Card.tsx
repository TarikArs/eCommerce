import "./card.css";

interface CardProp {
  items: any;
  onClick: any;
}

export default function Card({ items, onClick }: CardProp) {
  return (
    <div className="card">
      {items.map((item: any, index: number) => (
        <div className="card-item" onClick={onClick} key={index}>
          <span className="card-item-flag">{item?.icon}</span>
          <span>{item?.text}</span>
        </div>
      ))}
    </div>
  );
}
