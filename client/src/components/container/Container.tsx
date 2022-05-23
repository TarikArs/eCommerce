import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Single from "../../pages/single/Single";
import "./container.css";
export default function Container() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Single />} />
      </Routes>
      
    </div>
  );
}
