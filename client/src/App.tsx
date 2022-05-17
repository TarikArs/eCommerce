import React from "react";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
