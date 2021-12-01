import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './inicio.css';

export default class inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Container id="ini-container">        
                    <Navbar collapseOnSelect expand="lg" variant="light">
                        
                            <Navbar.Brand href="#home">
                                    <img
                                        src="front\logos\logo-dulces-suenos-small.png" width="30" height="30" className="d-inline-block align-top" alt=""
                                    />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#">Inicio</Nav.Link>
                                    <Nav.Link href="#Seccion_especialidades">Especialidades</Nav.Link>
                                    <Nav.Link href="#Creaciones">Creaciones</Nav.Link>
                                    <Nav.Link href="#Tabla_precios">Tabla de precios</Nav.Link>
                                    <Nav.Link href="#footer">Contacto</Nav.Link>
                                </Nav>
                                
                            </Navbar.Collapse>
                        
                    </Navbar>
            </Container>

               
            
          );
    }
}