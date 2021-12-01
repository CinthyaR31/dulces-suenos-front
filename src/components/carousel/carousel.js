import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgC1 from '../../assets/logos/Banner1.png';

export default class carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgC1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>¡Bienvenido a Dulces Sueños</h3>
                        <p>Repostería creativa</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Tortas</h3>
                        <p>Una esponjosa torta cubierta con ganache de chocolate, una fiesta en tu paladar</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Cupcakes</h3>
                        <p>Un delicioso detalle para cualquier ocasión</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
         );
    }
}
 