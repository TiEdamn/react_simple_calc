import React from 'react';

import './index.css';

const Button = (props) => {
    return (
        <div className="col-md-3">
            <button className="btn btn-block btn-success button__btn" onClick={props.onClick}>{props.element}</button>
        </div>
    )
}

export default Button