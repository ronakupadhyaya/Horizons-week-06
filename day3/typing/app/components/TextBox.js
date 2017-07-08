import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({onInput, value}) => {
    let input;
    return (
      <div>
          <input type="text"
              value = {value}
              onChange = {() => onInput(input.value)}
              ref={node => {input = node;}}
          />
      </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    value: PropTypes.string
};

export default TextBox;
