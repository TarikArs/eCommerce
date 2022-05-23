import React from "react";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

//import React router dom
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Container />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
