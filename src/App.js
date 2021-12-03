import React from "react";
import "./App.css";


//Components
import Carousel from "./components/carousel/carousel";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Jumbotron />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
