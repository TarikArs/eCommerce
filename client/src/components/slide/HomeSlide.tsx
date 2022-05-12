import "./slide.css";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
export default function HomeSlide() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }
  return <div className="slide">

  <Slide {...properties} />

  </div>;
}
