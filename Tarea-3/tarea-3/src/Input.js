import React from 'react';
import './Input.scss';

const Input = (props) => {
    return (
        <input id={props.id} type={props.type} />
    );
}

export default Input;