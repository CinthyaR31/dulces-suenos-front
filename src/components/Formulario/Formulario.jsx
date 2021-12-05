import React from 'react';
import imgProdc1 from '../../assets/logos/imagenes formulario/carta tortas.png';
import imgProdc2 from '../../assets/logos/imagenes formulario/carta cupcakes.png';
import imgProdc3 from '../../assets/logos/imagenes formulario/Carta entremet.png';
import './Formulario.css';
import axios from "axios";

const fecha = new Date();
const REACT_URL = process.env.REACT_APP_URL;

export default class formulario extends React.Component {

    state = {
        usuario: null,
        formTortas: {
            nombre_producto: 'torta',
            sabor_base: '',
            sabor_relleno: '',
            color_decoracion: '',
            estado: 'nuevo',
            costo: 50000,
            usuario_id: '',
            fecha_creacion: fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate()
        },
        formCupcakes: {
            nombre_producto: 'cupcakes',
            sabor_base: '',
            sabor_relleno: '',
            color_decoracion: '',
            estado: 'nuevo',
            usuario_id: '',
            costo: 30000,
            fecha_creacion: fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate()
        },
        formEntremet: {
            nombre_producto: 'entremet',
            sabor_base: '',
            sabor_relleno: '',
            color_decoracion: '',
            estado: 'nuevo',
            usuario_id: '',
            costo: 6000,
            fecha_creacion: fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate()
        },
    }

    constructor(props) {
        super(props);
        this.consultarSesionLocal();
    }


    cambiosFormTortas = async (event) => {
        event.persist();
        await this.setState({
            formTortas: {
                ...this.state.formTortas,
                [event.target.name]: event.target.value
            }
        })
        console.log("this.state.formTortas", this.state.formTortas)
    }

    cambiosFormEntremet = async (event) => {
        event.persist();
        await this.setState({
            formEntremet: {
                ...this.state.formEntremet,
                [event.target.name]: event.target.value
            }
        })
        console.log("this.state.formEntremet", this.state.formEntremet)
    }

    cambiosFormCupcakes = async (event) => {
        event.persist();
        await this.setState({
            formCupcakes: {
                ...this.state.formCupcakes,
                [event.target.name]: event.target.value
            }
        })
        console.log("this.state.formCupcakes", this.state.formCupcakes)
    }

    consultarSesionLocal = () => {
        return localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;
    }

    enviarPedido = async (formulario) => {
        const usuario = this.consultarSesionLocal();
        console.log("usuario before", usuario)
        await this.setState({usuario: usuario})
        console.log("usuario after", this.state.usuario)

        if (formulario.sabor_base === '' ||
            formulario.sabor_relleno === '' ||
            formulario.color_decoracion === '') {
            return alert("Alguno de los campos del pedido esta incompleto");
        }

        if (!this.state.usuario?._id) {
            return alert('Debes iniciar sesion para poder realizar el pedido');
        }

        formulario.usuario_id = this.state.usuario._id;

        await axios.post(`${REACT_URL}pedidos`, formulario).then(response => {
            console.log("response > ", response)
            alert(`Tu pedido se creo satisfactoriamente con el #${response.data.body._id} ve a la tabla de tus pedidos`);
            window.location = '/';
        }).catch(error => {
            alert("Usuario o contraseña invalida");
        })


    }

    render() {
        return (

            // <!-- SECCIÓN formulario cartas tortas-->
            <div class="container" id="Tabla_precios">
                <div class="card-deck mb-5" id="cartas_formulario">
                    {/* <!-- carta selección tortas--> */}
                    <div class="card" id="carta_tortas">
                        <img src={imgProdc1} class="card-img-top" alt="select tortas"/>
                        <div class="card-body">
                            <h4 class="card-title text-center">Personaliza tu torta</h4>
                            <p class="card-text text-center">Selecciona el sabor de torta que más te guste, después
                                escoge
                                un
                                relleno y finalmente, un color para la decoración. </p>

                            <h5>Selecciona el sabor base</h5>
                            <select class="custom-select mb-2" name="sabor_base" onChange={this.cambiosFormTortas}>
                                <option selected>Selecciona la opción</option>
                                <option value="Chocolate">Chocolate</option>
                                <option value="Vainilla">Vainilla</option>
                                <option value="Yogurtgriego">Yogurt griego</option>
                                <option value="Marmoleada">Marmoleada</option>
                            </select>
                            <h5>Selecciona el sabor del relleno</h5>
                            <select class="custom-select mb-2" name="sabor_relleno" onChange={this.cambiosFormTortas}>
                                <option selected>Selecciona la opción</option>
                                <option value="Ganache de chocolate">Ganache de chocolate</option>
                                <option value="Frutos rojos">Frutos rojos</option>
                                <option value="Duraznos y chantilly">Duraznos y chantilly</option>
                                <option value="Maracuyá">Maracuyá</option>
                            </select>
                            <h5>Selecciona el color de la decoración</h5>
                            <select class="custom-select mb-2" name="color_decoracion"
                                    onChange={this.cambiosFormTortas}>
                                <option selected>Selecciona la opción</option>
                                <option value="Azul">Azul</option>
                                <option value="Rosa">Rosa</option>
                                <option value="Blanco crema">Blanco crema</option>
                                <option value="Morado">Morado</option>
                            </select>

                        </div>

                        <input type="hidden" name="costo" value="50000"/>
                        <h2 className="text-center">50.000 COP</h2>

                        <div class="card-footer">
                            <button type="button" class="btn btn-primary btn-lg btn-block"
                                    onClick={() => this.enviarPedido(this.state.formTortas)}
                            >Enviar pedido
                            </button>
                        </div>

                    </div>

                    {/* <!-- carta selección cupcakes--> */}
                    <div class="card" id="carta_cupcakes">
                        <img src={imgProdc2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title text-center">Personaliza tus cupcakes</h4>
                            <p class="card-text text-center">Selecciona el sabor de la base del cupcake, escoge un
                                relleno y
                                finalmente, selecciona un sabor para la decoración.</p>


                            <h5>Selecciona el sabor base</h5>
                            <select class="custom-select mb-2" name="sabor_base" onChange={this.cambiosFormCupcakes}>
                                <option selected>Selecciona la opción</option>
                                <option value="Chocolate">Chocolate</option>
                                <option value="Vainilla">Vainilla</option>
                                <option value="Marmoleado">Marmoleado</option>

                            </select>
                            <h5>Selecciona el sabor del relleno</h5>
                            <select class="custom-select mb-2" name="sabor_relleno" onChange={this.cambiosFormCupcakes}>
                                <option selected>Selecciona la opción</option>
                                <option value="Ganache de chocolate">Ganache de chocolate</option>
                                <option value="Frutos rojos">Frutos rojos</option>
                                <option value="Maracuyá">Maracuyá</option>

                            </select>
                            <h5>Selecciona el color de la decoración</h5>
                            <select class="custom-select mb-2" name="color_decoracion"
                                    onChange={this.cambiosFormCupcakes}>
                                <option selected>Selecciona la opción</option>
                                <option value="Azul">Azul</option>
                                <option value="Rosa">Rosa</option>
                                <option value="Blanco crema">Blanco crema</option>
                                <option value="Morado">Morado</option>
                            </select>

                        </div>

                        <input type="hidden" name="costo" value="30000"/>
                        <h2 className="text-center">30.000 COP</h2>
                        <div class="card-footer">
                            <button type="button" class="btn btn-primary btn-lg btn-block"
                                    onClick={() => this.enviarPedido(this.state.formCupcakes)}
                            >Enviar pedido
                            </button>
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
                            <select class="custom-select mb-2" name="sabor_base" onChange={this.cambiosFormEntremet}>
                                <option selected>Selecciona la opción</option>
                                <option value="Arequipe">Arequipe</option>
                                <option value="Frutos rojos">Frutos rojos</option>
                                <option value="Café">Café</option>
                                <option value="Chocolate">Chocolate</option>
                                <option value="Chocolate blanco">Chocolate blanco</option>

                            </select>
                            <h5>Selecciona el sabor del relleno</h5>
                            <select class="custom-select mb-2" name="sabor_relleno" onChange={this.cambiosFormEntremet}>
                                <option selected>Selecciona la opción</option>
                                <option value="Guanabana">Guanabana</option>
                                <option value="Frutos rojos">Frutos rojos</option>
                                <option value="Maracuyá">Maracuyá</option>
                                <option value="Mora">Mora</option>

                            </select>
                            <h5>Selecciona el color de la decoración</h5>
                            <select class="custom-select mb-2" name="color_decoracion"
                                    onChange={this.cambiosFormEntremet}>
                                <option selected>Selecciona la opción</option>
                                <option value="Azul">Azul</option>
                                <option value="Rosa">Rosa</option>
                                <option value="Rojo">Rojo</option>
                                <option value="Morado">Morado</option>
                                <option value="Negro">Negro</option>
                            </select>

                        </div>

                        <input type="hidden" name="costo" value="6000"/>
                        <h2 className="text-center">6.000 COP</h2>

                        <div class="card-footer">
                            <button type="button" class="btn btn-primary btn-lg btn-block"
                                    onClick={() => this.enviarPedido(this.state.formEntremet)}
                            >Enviar pedido
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}