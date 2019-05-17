import React from 'react';

import './index.css';

const Display = (props) => {
    return (
        <div className="text-right display__display">
            <div className="display__result">{props.result}</div>
            <div className={"display__formula" + (props.error ? " error" : "")}>{props.formula}</div>
        </div>
    )
}

export default Display;