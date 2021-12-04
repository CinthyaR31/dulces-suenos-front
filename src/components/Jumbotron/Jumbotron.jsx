import React from 'react'

import './Jumbotron.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Jumbotron() {

    return (
        <div class="jumbotron text-center" id="container-jumbotron">
            <h1 class="display-4">La magia en los postres</h1>
            <p class="lead">Todo lo que hacemos está hecho con amor, cada postre es una obra de arte única especialmente
                hecho para cada
                ocasión. El amor y el esmero que ponemos a cada postre es lo que lo hace mágico, utilizando productos de
                primera calidad.</p>
            <hr class="my-4" />
            <p>Nuestros productos son personalizados según los requerimientos de nuestros clientes, nos adaptamos a cada
                ocasión para hacer realidad tus sueños</p>
            <a id="boton_jumbotron" class="btn btn-primary btn-lg" href="#footer" role="button">Contactanos</a>
        </div>
    )
}
