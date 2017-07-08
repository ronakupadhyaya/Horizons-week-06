import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onType }) => {
    return (
    <input
        className="textbox"
        placeholder="Start typing to begin"
        value={''}
        onChange={(e) => {
            onType(e.target.value);
        }}
    ></input>
  );
};

TextBox.propTypes = {
    onType: PropTypes.func
};

export default TextBox;
