import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ( {onHandleChange, valueState} ) => {
    return (
        <div>
            <input type="text" placeholder="User Input" value={valueState} onChange={(event) => onHandleChange(event.target.value)}/>
        </div>
    );
};

TextBox.propTypes = {
    onHandleChange: PropTypes.func,
    valueState: PropTypes.string
};

export default TextBox;
