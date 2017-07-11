import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onInput }) => {
    let input;
    return(
    <input type="text"
        value={''}
        ref={node => {input = node;}}
        onChange={() => onInput(input.value.toLowerCase())}
    />
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func
};

export default TextBox;
