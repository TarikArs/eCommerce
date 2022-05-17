import { useState } from "react";
import Card from "../card/Card";
import "./navbar.css";
const categories = [
  {
    text: "Car",
    icon: <i className="fas fa-car"></i>,
  },
  {
    text: "Clothes",
    icon: <i className="fas fa-tshirt"></i>,
  },
  {
    text: "Electronics",
    icon: <i className="fas fa-tv"></i>,
  },
  {
    text: "Laptop",
    icon: <i className="fas fa-laptop"></i>,
  },
];
export default function Navbar() {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-container col-2">
        <img className="logo" src="./assets/logo.png" alt="logo" />
      </div>
      <div className="search-bar col-6">
        <div className="search-bar-icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="search-bar-input-container">
          <input
            type="text"
            className="search-bar-input"
            placeholder="Search"
          />
        </div>
        <div className="search-bar-categories">
          <div
            className="search-bar-categories-icon"
            onClick={() => setShowCategory(!showCategory)}
          >
            <span>Categories </span><i className="fa fa-chevron-down"></i>
            {showCategory && (
              <Card
                items={categories}
                onClick={() => console.log("Categori selected")}
              />
            )}
          </div>
        </div>
      </div>
      <div className="col-2 d-flex">
        <div className="icon-container">
          <i className="fas fa-shopping-cart"></i>
          <div className="badge">
            <span>1</span>
          </div>
        </div>
        <div className="icon-container">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
}
