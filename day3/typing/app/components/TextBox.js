import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onInput, value }) => {
    let wordInput;
    return (
    <div>
      <input
        ref={node => { wordInput = node; }}
        value={value}
        onChange={() => onInput(wordInput.value)}
        type="text"
      />
    </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    value: PropTypes.string
};


export default TextBox;
