import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onInput, value }) => {
    return (
      <div className="main input">
        <input onChange={(e)=>onInput(e)} value={value} placeholder="Start typing..."/>
      </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    value: PropTypes.string
};

export default TextBox;
