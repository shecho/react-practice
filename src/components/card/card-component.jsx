import React from 'react';
import './card-style.css';

export const Card = (props) =>{
    return(
        <div>
            <h1>{props.nombreUsuario}</h1>
            <p>{props.email}</p>
        </div>
    )
}