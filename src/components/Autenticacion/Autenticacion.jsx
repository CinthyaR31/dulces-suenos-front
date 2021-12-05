import React from 'react';
import axios from "axios";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const REACT_URL = process.env.REACT_APP_URL;

export default class autenticacion extends React.Component {

    state = {
        pedidos: [],
        usuario: null,
        mostrarModalIniciarSesion: false,
        mostrarModalCrearUsuario: false,
        mostrarModalPedidos: false,
        formIniciarSesion: {
            email: '',
            password: ''
        },
        formCrearUsuario: {
            nombre: '',
            email: '',
            password: ''
        }
    }


    constructor() {
        super();
        this.state.usuario = this.consultarSesionLocal();
    }

    consultarSesionLocal = () => {
        return localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;
    }

    guardarSesionLocal = (usuario) => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }

    estaAutenticado = () => {
        return !!(this.consultarSesionLocal());
    }

    mostrarModalCrearUsuario = () => {
        this.setState({mostrarModalCrearUsuario: !this.state.mostrarModalCrearUsuario});
    }

    mostrarModalIniciarSesion = () => {
        this.setState({mostrarModalIniciarSesion: !this.state.mostrarModalIniciarSesion});
    }

    mostrarModalPedidos = () => {
        this.setState({mostrarModalPedidos: !this.state.mostrarModalPedidos});

        if (!this.state.mostrarModalPedidos) {
            this.traerPedidosPorUsuario(this.state.usuario._id);
        }

    }

    traerPedidosPorUsuario(id) {
        console.log("${REACT_URL}pedidos/${id}", `${REACT_URL}pedidos/${id}`)
        axios.get(`${REACT_URL}pedidos/${id}`).then(response => {
            console.log("response aaaa", response)
            this.setState({pedidos: response.data});
        }).catch(error => {
            console.log(error.message);
        })
    }

    cambiosFormularioIniciarSesion = async (event) => {
        event.persist();
        await this.setState({
            formIniciarSesion: {
                ...this.state.formIniciarSesion,
                [event.target.name]: event.target.value
            }
        })
        console.log("this.state.formIniciarSesion", this.state.formIniciarSesion)
    }

    cambiosFormularioCrearUsuario = async (event) => {
        event.persist();
        await this.setState({
            formCrearUsuario: {
                ...this.state.formCrearUsuario,
                [event.target.name]: event.target.value
            }
        })
        console.log("this.state.formCrearUsuario", this.state.formCrearUsuario)
    }

    autenticar = async () => {

        if (this.state.formIniciarSesion.email === '' || this.state.formIniciarSesion.password === '') {
            return alert('Falta email o contraseña');
        }
        await axios.post(`${REACT_URL}autenticacion`, this.state.formIniciarSesion).then(response => {
            this.mostrarModalIniciarSesion();
            const usuario = response.data.body;
            this.guardarSesionLocal(usuario);
            this.setState({usuario: usuario})
        }).catch(error => {
            alert("Usuario o contraseña invalida");
        })
    }


    crearUsuario = async () => {

        if (this.state.formCrearUsuario.email === '' ||
            this.state.formCrearUsuario.password === '' ||
            this.state.formCrearUsuario.nombre === ''
        ) {
            return alert('Falta email o contraseña o nombre');
        }


        await axios.post(`${REACT_URL}usuarios`, this.state.formCrearUsuario).then(response => {
            this.mostrarModalCrearUsuario();
            const usuario = response.data.body;
            this.guardarSesionLocal(usuario);
            this.setState({usuario: usuario})
        }).catch(error => {
            alert("Email ya esta en uso");
        })
    }


    cerrarSesion = () => {
        if (localStorage.getItem('usuario')) {
            localStorage.removeItem('usuario');
        }
        this.setState({usuario: null})
    }

    render() {
        const stateGlobal = this.state;
        return (
            <div className="padre">
                {stateGlobal.usuario ?
                    <h6>Bienvenido {stateGlobal.usuario.nombre}</h6> : ''
                }

                <ButtonGroup>
                    <ButtonGroup>
                        {this.estaAutenticado() ?
                            <DropdownButton as={ButtonGroup} title="Mi Cuenta" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={() => this.mostrarModalPedidos()}>Ver mis pedidos</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={() => this.cerrarSesion()}>Cerrar
                                    Sesion</Dropdown.Item>
                            </DropdownButton>
                            :
                            <DropdownButton as={ButtonGroup} title="Autenticacion" id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="1" onClick={() => this.mostrarModalIniciarSesion()}>Inicia
                                    sesion</Dropdown.Item>
                                <Dropdown.Item eventKey="2"
                                               onClick={() => this.mostrarModalCrearUsuario()}>Registrate</Dropdown.Item>
                            </DropdownButton>
                        }

                    </ButtonGroup>

                </ButtonGroup>

                {/*Modal Iniciar Sesion*/}
                <Modal isOpen={this.state.mostrarModalIniciarSesion}>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}} onClick={() => this.mostrarModalIniciarSesion()}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" name="email" id="email"
                                   onChange={this.cambiosFormularioIniciarSesion}
                            />
                            <br/>
                            <label htmlFor="nombre">Contraseña</label>
                            <input className="form-control" type="password" name="password" id="password"
                                   onChange={this.cambiosFormularioIniciarSesion}
                            />
                            <br/>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <button className="btn btn-primary" onClick={() => this.autenticar()}>Autenticar
                        </button>
                        <button className="btn btn-danger" onClick={() => this.mostrarModalIniciarSesion()}>Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

                {/*Modal Crear Usuario*/}
                <Modal isOpen={this.state.mostrarModalCrearUsuario}>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}} onClick={() => this.mostrarModalCrearUsuario()}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre"
                                   onChange={this.cambiosFormularioCrearUsuario}
                            />
                            <br/>
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" name="email" id="email"
                                   onChange={this.cambiosFormularioCrearUsuario}
                            />
                            <br/>
                            <label htmlFor="nombre">Contraseña</label>
                            <input className="form-control" type="password" name="password" id="password"
                                   onChange={this.cambiosFormularioCrearUsuario}
                            />
                            <br/>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <button className="btn btn-primary" onClick={() => this.crearUsuario()}>Crear
                        </button>
                        <button className="btn btn-danger" onClick={() => this.mostrarModalCrearUsuario()}>Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

                {/*Modal Crear Pedidos*/}
                <Modal isOpen={this.state.mostrarModalPedidos} size="lg" style={{maxWidth: '1000px', width: '100%'}} >
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}} onClick={() => this.mostrarModalPedidos()}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        {(stateGlobal.pedidos.length > 0) ?

                            <table className="table table-striped table-responsive">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Sabor Base</th>
                                    <th>Sabor Relleno</th>
                                    <th>Color Decoracion</th>
                                    <th>Fecha Creacion</th>
                                    <th>Costo</th>
                                    <th>Estado</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.pedidos.map(pedido => {
                                    return (
                                        <tr id={pedido._id}>
                                            <td>{pedido._id}</td>
                                            <td>{pedido.nombre_producto}</td>
                                            <td>{pedido.sabor_base}</td>
                                            <td>{pedido.sabor_relleno}</td>
                                            <td>{pedido.color_decoracion}</td>
                                            <td>{pedido.fecha_creacion}</td>
                                            <td>{new Intl.NumberFormat("es-CO").format(pedido.costo)}</td>
                                            <td><span className="badge bg-primary">{pedido.estado}</span></td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            :
                            <h2>Ud no tiene pedidos, pidelos ahora !!!! :)</h2>
                        }


                    </ModalBody>

                    <ModalFooter>
                        <button className="btn btn-danger" onClick={() => this.mostrarModalPedidos()}>Cancelar
                        </button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}