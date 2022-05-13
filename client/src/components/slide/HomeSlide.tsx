import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slide.css";
export default function HomeSlide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  const items = [
    {
      key: 1,
      src: "./assets/slide/3.png",
      title: "50 % of your first Shopping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    },
    {
      key: 2,
      src: "./assets/slide/2.png",
      title: "Try our gamm now for free",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    },
    {
      key: 3,
      src: "./assets/slide/1.png",
      title: "Dress for your baby",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    },
  ];

  return (
    <div className="slide">
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
        {items.map((item) => (
          <Carousel.Item key={item.key} interval={1000}>
              <div className="caroussel-item">
                <div className="caroussel-item-content col-8">
                  <h1>{item?.title}</h1>
                  <p>{item.description}</p>
                  <button className="show-now-button" >Shop Now</button>
                </div>
                <div className="caroussel-item-image col-4">
                  <img
                    className="d-block w-100"
                    src={item.src}
                    alt={item.title}
                  />
                </div>
              </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
