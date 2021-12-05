import React from "react";

import { Link } from "react-router-dom";

import "./error404.css"

function Error404() {
  return (
    <div className="background text-center">
      <div className="custom-card">
        <h1 className="display-1">404</h1>
        <h1 className="display-5">Lo sentimos, la pagina que buscabas no existe.</h1>
        <Link to="/">
          <button className="btn btn-outline-primary button-custom" >Volver al inicio</button>
        </Link>

      </div>
    </div>
  );
}

export default Error404;
