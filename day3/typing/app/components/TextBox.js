import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({onInput}) => {
    return(
        <input type="text" onChange={() => onInput()}/>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func
};
export default TextBox;
