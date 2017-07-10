import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onChange }) => {
    return (
      <input type="text" placeholder="Start typing to begin..." onChange={(input) => onChange(input)}></input>
  );
};

TextBox.propTypes = {
    onChange: PropTypes.func
};

export default TextBox;
