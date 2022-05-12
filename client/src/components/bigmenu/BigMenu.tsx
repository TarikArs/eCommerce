/** import big menucss */
import "./bigmenu.css";
export default function BigMenu() {
  const items = [
    {
      text: "fashions",
      link: "/",
      icon: <i className="fas fa-tshirt"></i>,
    },
    {
      text: "Phones",
      link: "/phones",
      icon: <i className="fas fa-mobile-alt"></i>,
    },
    {
      text: "Laptops",
      link: "/laptops",
      icon: <i className="fas fa-laptop"></i>,
    },
    {
      text: "Bikes",
      link: "/bikes",
      icon: <i className="fas fa-bicycle"></i>,
    },
    {
      text: "Accessories",
      link: "/accessories",
      icon: <i className="fas fa-headphones"></i>,
    },
    {
      text: "Gifts",
      link: "/gifts",
      icon: <i className="fas fa-gift"></i>,
    },
    {
      text: "Beauty",
      link: "/beauty",
      icon: <i className="fas fa-heart"></i>,
    },
    {
      text: "Baby",
      link: "/baby",
      icon: <i className="fas fa-baby"></i>,
    },
  ];
  const onClick = (item: any) => {
    console.log(item);
  };
  return (
    <div className="bigmenu">
      <div className="bigmenu-header">
        <i className="fas fa-bars bigmenu-item-flag"></i>
        <span>Categories</span>
      </div>
      {items.map((item: any, index: number) => (
        <div className="bigmenu-item" onClick={() => onClick(item)} key={index}>
          <span className="bigmenu-item-flag">{item?.icon}</span>
          <span>{item?.text}</span>
        </div>
      ))}
    </div>
  );
}
