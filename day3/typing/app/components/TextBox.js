import React from 'react';
import PropTypes from 'prop-types';

const TextBox = (props) => {
    return <input name="gameInput" onChange={(e) => props.onInput(e.target.value)} />;
};

TextBox.propTypes = {
    onInput: PropTypes.func,
};

export default TextBox;
