import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onInput }) => {
    return (
      <div className="main">
      <input onChange={(event) => onInput(event.target.value)} type="text" value=""/>
      </div>
    );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
};

export default TextBox;
