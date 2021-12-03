import React from 'react';
import imgProdc1 from '../../assets/logos/imagenes formulario/carta tortas.png';
import imgProdc2 from '../../assets/logos/imagenes formulario/carta cupcakes.png';
import imgProdc3 from '../../assets/logos/imagenes formulario/Carta entremet.png';
import './Formulario.css';

export default class formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            // <!-- SECCIÓN formulario cartas tortas-->
            <div class="container" id="Tabla_precios">
                <div class="card-deck mb-5" id="cartas_formulario">
                    {/* <!-- carta selección tortas--> */}
                    <div class="card" id="carta_tortas">
                        <img src={imgProdc1} class="card-img-top" alt="select tortas" />
                        <div class="card-body">
                            <h4 class="card-title text-center">Personaliza tu torta</h4>
                            <p class="card-text text-center">Selecciona el sabor de torta que más te guste, después escoge
                                un
                                relleno y finalmente, un color para la decoración. </p>
    
                            <h5>Selecciona el sabor base</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Chocolate</option>
                                <option value="2">Vainilla</option>
                                <option value="3">Yogurt griego</option>
                                <option value="4">Marmoleada</option>
                            </select>
                            <h5>Selecciona el sabor del relleno</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Ganache de chocolate</option>
                                <option value="2">Frutos rojos</option>
                                <option value="3">Duraznos y chantilly</option>
                                <option value="4">Maracuyá</option>
                            </select>
                            <h5>Selecciona el color de la decoración</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Azul</option>
                                <option value="2">Rosa</option>
                                <option value="3">Blanco crema</option>
                                <option value="4">Morado</option>
                            </select>
    
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Enviar pedido</button>
                        </div>
    
                    </div>
    
                    {/* <!-- carta selección cupcakes--> */}
                    <div class="card" id="carta_cupcakes">
                        <img src={imgProdc2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title text-center">Personaliza tus cupcakes</h4>
                            <p class="card-text text-center">Selecciona el sabor de la base del cupcake, escoge un relleno y
                                finalmente, selecciona un sabor para la decoración.</p>
    
    
                            <h5>Selecciona el sabor base</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Chocolate</option>
                                <option value="2">Vainilla</option>
                                <option value="3">Marmoleado</option>
    
                            </select>
                            <h5>Selecciona el sabor del relleno</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Ganache de chocolate</option>
                                <option value="2">Frutos rojos</option>
                                <option value="3">Maracuyá</option>
    
                            </select>
                            <h5>Selecciona el color de la decoración</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Azul</option>
                                <option value="2">Rosa</option>
                                <option value="3">Blanco crema</option>
                                <option value="4">Morado</option>
                            </select>
    
                        </div>
    
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Enviar pedido</button>
                        </div>
                    </div>
    
                    {/* -- carta selección entremet-- */}
                    <div class="card" id="carta_entremet">
                        <img src={imgProdc3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">Personaliza tu entremet</h4>
                            <p class="card-text">Primero, selecciona el sabor del mousse (base). Segundo, selecciona el
                                sabor
                                del relleno. Tercero, selecciona el color de la decoración.</p>
                            <h5>Selecciona el sabor base</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Arequipe</option>
                                <option value="2">Frutos rojos</option>
                                <option value="3">Café</option>
                                <option value="4">Chocolate</option>
                                <option value="5">Chocolate blanco</option>
    
                            </select>
                            <h5>Selecciona el sabor del relleno</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Guanabana</option>
                                <option value="2">Frutos rojos</option>
                                <option value="3">Maracuyá</option>
                                <option value="4">Mora</option>
    
                            </select>
                            <h5>Selecciona el color de la decoración</h5>
                            <select class="custom-select mb-2">
                                <option selected>Selecciona la opción</option>
                                <option value="1">Azul</option>
                                <option value="2">Rosa</option>
                                <option value="3">Rojo</option>
                                <option value="4">Morado</option>
                                <option value="5">Negro</option>
                            </select>
    
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Enviar pedido</button>
                        </div>
                    </div>
                </div>
            </div>


         );
    }
}