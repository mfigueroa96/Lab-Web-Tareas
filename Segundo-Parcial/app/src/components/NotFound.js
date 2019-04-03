import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/NotFound.scss';

export default class NotFound extends Component {
    componentWillMount() {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }

    render() {
        return <div className='not-found-section'>
            <div className='alert'>
                <img src='/assets/tequila-icon.png' />
                <h1>Oops! Algo anda mal con este tequila...</h1>
                <h2>No se encontró información para el número de serie ingresado.</h2>
                <Link to='/'>Ir al inicio</Link>
            </div>
        </div>
    }
}