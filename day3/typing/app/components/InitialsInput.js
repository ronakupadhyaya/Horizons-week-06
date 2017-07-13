import React from 'react';
import PropTypes from 'prop-types';

const InitialsInput = ({ initInput, username }) => {
    const initType = (e) => {
        initInput(e.target.value);
    };

    return (
        <div style={{textAlign: 'center', marginTop: 200}}>
        <h1>Congratulations</h1>
        <h1>Enter your name: <input onChange={initType} type="text" className="initbox" value={username} /></h1>
        </div>
    );
};

InitialsInput.propTypes = {
    initInput: PropTypes.func,
    username: PropTypes.string
};

export default InitialsInput;
