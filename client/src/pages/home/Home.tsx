import BigMenu from "../../components/bigmenu/BigMenu";
import Category from "../../components/category/Category";
import HomeSlide from "../../components/slide/HomeSlide";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top-left col-3">
         
            <BigMenu />
        </div>
        <div className="home-top-right col-9">
          <HomeSlide />
        </div>
      </div>
      <div className="home-flash-deals">
        <Category title="Flash deals"  />
        <Category title="Top Rating icon" icon={<i className="category-icon fa-solid fa-star"></i>} />
      </div>
      <div className="home-top-categories"></div>
    </div>
  );
}
