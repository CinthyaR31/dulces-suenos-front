import React from 'react'

import './CardContainer.css';
import Card from '../Card';

//imgs
import product1 from '../../assets/logos/productos1.jpg';
import product2 from '../../assets/logos/productos2.jpg';
import product3 from '../../assets/logos/productos3.jpg';


export default function CardContainer() {

    return (

        <div class="container" id="Seccion_especialidades">
            <div className="col-12 mb-2">
                <h2 className="text-center">Nuestras especialidades</h2>
            </div>
            <div className="card-group justify-content-center">
                <Card img={product1} title="Tortas" description="Torta ligera y esponjosa con relleno frutal" button="Ver detalle" />
                <Card img={product2} title="Cupcakes" description="Pequeñas tortas con rellenos frutales y decorados con crema chantilly" button="Ver detalle" />
                <Card img={product3} title="Postres Entremet" description="Suave mousse con rellenos frutales sobre una capa de bizcochuelo y una crujiente galleta" button="Ver detalle" />
            </div>
        </div>
    )
}
