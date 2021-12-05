import React from "react";

//Components
import Carousel from "../../components/carousel";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Carousel />
      <Jumbotron />
      <Formulario />
      <Footer />
    </div>
  );
}

export default Home;
