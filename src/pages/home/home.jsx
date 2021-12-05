import React from "react";

//Components
import Carousel from "../../components/carousel";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import CardContainer from "../../components/CardContainer";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Jumbotron />
      <CardContainer />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;