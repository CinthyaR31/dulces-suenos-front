import React from 'react'

import './Card.css';

export default function Card(props) {

    const { img, title, description, button } = props;

    return (

        <div className="card wrap justify-content-center col-lg-4 col-sm-6">
            <img src={img} class="card-img-top" alt="carta torta flores" />
            <div class="card-body">
                <h5 class="card-title text-center">{title}</h5>
                <p class="card-text text-center">{description}</p>
            </div>
        </div>
    )
}
