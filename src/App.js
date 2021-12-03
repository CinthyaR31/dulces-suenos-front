import React from "react";
import "./App.css";

//Components
import Carousel from "./components/carousel/carousel";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Jumbotron />
      <CardContainer />
    </div>
  );
}

export default App;
