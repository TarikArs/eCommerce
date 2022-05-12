import BigMenu from "../../components/bigmenu/BigMenu";
import HomeSlide from "../../components/slide/HomeSlide";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top-left col-4">
            <BigMenu />
        </div>
        <div className="home-top-right col-8">
          <HomeSlide />
        </div>
      </div>
      <div className="home-flash-deals"></div>
      <div className="home-top-categories"></div>
    </div>
  );
}
