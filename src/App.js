import React from "react";
import "./App.css";


//Components
import Carousel from "./components/carousel/carousel";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;
