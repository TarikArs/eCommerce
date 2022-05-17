import ItemCard from "../itemcard/ItemCard";
import "./category.css";

interface CategoryProps {
  title: string;
  icon?: any;
  link?: string;
}

export default function Category({ title, icon, link }: CategoryProps) {
  const items = [
    {
      id: 1,
      title: "Smart watch",
      price: "100 €",
      stars: 5,
      sold: "-56%",
      image: "./assets/cards/1.jpg",
    },
    {
      id: 2,
      title: "Adidas Shoes",
      price: "250 €",
      stars: 4.5,
      sold: "-20%",
      image: "./assets/cards/1.jpg",
    },
    {
      id: 2,
      title: "Mac Book air",
      price: "1250 €",
      stars: 4.5,
      sold: "-50%",
      image: "./assets/cards/1.jpg",
    },
    {
      id: 2,
      title: "Mac Book air",
      price: "1250 €",
      stars: 2,
      sold: "-50%",
      image: "./assets/cards/1.jpg",
    },
  ];
  return (
    <div className="category">
      <div className="category-header">
        <div className="category-header-title">
          <i className="fa-solid fa-bolt category-icon"></i>
          <div>
            <h3>{title}</h3>
          </div>
        </div>
        <div className="category-header-see">View All</div>
      </div>
      <div className="category-cards">
        {items.map((item) => (
          <ItemCard item={item} onClick={() => console.log("Clicked")} />
        ))}
      </div>
    </div>
  );
}
