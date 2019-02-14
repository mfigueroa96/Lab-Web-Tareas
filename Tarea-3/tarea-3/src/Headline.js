import React from 'react';

const Headline = (props) => {
    return (
        <h1 className="headline">
            {props.text}
        </h1>
    );
}

export default Headline;