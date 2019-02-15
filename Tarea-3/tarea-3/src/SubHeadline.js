import React from 'react';
import './SubHeadline.scss';

const SubHeadline = (props) => {
    return (
        <h2 className="sub-headline">
            {props.text}
        </h2>
    );
}

export default SubHeadline;
