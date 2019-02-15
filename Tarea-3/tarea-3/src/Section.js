import React from 'react';

import SubHeadline from './SubHeadline';

const Section = (props) => {
    return (
        <div className="section">
            <SubHeadline text={props.title} />
            {props.children}
        </div>
    );
};

export default Section;