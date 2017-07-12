import React from 'react';
import PropTypes from 'prop-types';

const InitialsInput = ({ initInput, value }) => {
    const initType = (e) => {
        initInput(e.target.value);
    };

    return (
        <div>
        <h1>Congratulations</h1>
        <h1>Enter your name: <input onClick={initType} type="text" value={value} className="initbox"/></h1>
        </div>
    );
};

InitialsInput.propTypes = {
    initInput: PropTypes.func,
    value: PropTypes.string,
};

export default InitialsInput;
