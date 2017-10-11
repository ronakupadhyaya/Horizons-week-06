import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onInput, userInput, newLetter }) => {
    return (
        <input type="text"
          onKeyPress={() => onInput(userInput, newLetter)}
        />
    );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    newLetter: PropTypes.func,
    userInput: PropTypes.string
};

export default TextBox;
