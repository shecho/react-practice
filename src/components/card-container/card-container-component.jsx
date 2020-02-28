import React from 'react';
import './card-container-style.css';
import {Card} from '../card/card-component';

export const CardContainer = (props) => {
    return (
        <div className="card-container">
            <Card nombreUsuario = {props.nombreUsuario} email={props.email} />
        </div>
    )
}