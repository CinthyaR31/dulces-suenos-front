import React from 'react';
import LogoFooter from '../../assets/logos/logo-dulces-suenos.png';
import './Footer.css'

export default class footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            // PIE DE PAGINA
            <footer id="footer">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        {/* <!-- logo--> */}
                        <a href="#" className="col-2 text-reset text-uppercase d-flex align-items-center">
                            <img src={LogoFooter} alt="logo dulces sueños" width="90"/>
                        </a>
        
        
                        {/* <!-- Datos basicos--> */}
                        <ul className="col-6 list-unstyled ">
                            <li className="font-weight-bold text-uppercase">¿Dónde encontrarnos?</li>
                            <li><a className="text-reset">Dirección: Carrera 73 #41-43, Bogotá.</a></li>
                            <li><a className="text-reset">Telefono: 316 872 74 90</a></li>
                        </ul>
        
                        {/* //redes sociales */}
                        <ul className="col-3 list-unstyled container-redes-sociales">
                            <li className="font-weight-bold text-uppercase">Redes sociales</li>
                            <li className="justify-content-between">
                                {/* <!--FB--> */}
                                <a href="https://www.facebook.com/Reposter%C3%ADa-dulces-sue%C3%B1os-105822964812543"
                                    target="_blank" className="text-reset">
                                    <i className="fa fa-facebook-official"></i>
                                </a>
                                {/* <!--insta--> */}
                                <a href="https://www.instagram.com/resposteria_dulcessuenos/?hl=es-la" target="_blank"
                                    className="text-reset">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
        
                    </nav>
        
                </div>
        
            </footer>

         );
    }
}
 
