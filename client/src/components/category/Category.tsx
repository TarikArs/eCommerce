import ItemCard from "../itemcard/ItemCard";
import "./category.css";

interface CategoryProps {
  title: string;
  icon?: any;
  link?: string;
}

export default function Category({ title, icon, link }: CategoryProps) {
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
            <ItemCard />
      </div>
    </div>
  );
}
