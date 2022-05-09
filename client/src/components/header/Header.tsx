import { useState } from "react";
import Card from "../card/Card";
import "./header.css";
/** Todo : Transform this array to data.tsx */
const langs = [
  {
    text: "EN",
    icon: <img src="./assets/united-states.png" width={20} alt="USA" />,
  },
  {
    text: "FR",
    icon: <img src="./assets/france.png" width={20} alt="France" />,
  },
];

const currencies = [
  {
    text: "Euro",
    icon: <i className="fa-solid fa-euro-sign"></i>,
  },
  {
    text: "Pound",
    icon: <i className="fa-solid fa-sterling-sign"></i>,
  },
];

export default function Header() {
  const [showMenuLang, setShowLangMenu] = useState(false);
  const [showMenuCurrency, setShowMenuCurrency] = useState(false);

  const [selectedLang, setSelectedLang] = useState(langs[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <div className="header">
      <div className="header-left">
        <div className="header-left-phone">
          <span>
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="header-span">+1 4562 45178</span>
        </div>
        <div className="header-left-mail">
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span className="header-span">mail@contact.com</span>
        </div>
      </div>
      <div className="header-rigth">
        <span className="header-span">Need Help ?</span>
        <div
          className="sub-header-rigth dropdown"
          onClick={() => setShowLangMenu(!showMenuLang)}
        >
          <span>{selectedLang?.text}</span>
          <span className="header-chevron">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
          {showMenuLang && (
            <Card
              items={langs}
              onClick={() => {
                console.log("Lang selected");
              }}
            />
          )}
        </div>
        <div
          className="sub-header-rigth dropdown"
          onClick={() => setShowMenuCurrency(!showMenuCurrency)}
        >
          <span>{selectedCurrency?.text}</span>
          <span className="header-chevron">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
          {showMenuCurrency && (
            <Card
              items={currencies}
              onClick={() => {
                console.log("Lang selected");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
