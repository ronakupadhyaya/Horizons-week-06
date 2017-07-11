import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onType, onSpace }) => {
    return (
    <div className="textbox">
      <input onChange={(e) => {
          if (e.target.value === ' ') {
              onSpace();
          } else {
              onType(e.target.value);
          }
          e.target.value = '';
      }} />
    </div>
  );
};

TextBox.propTypes = {
    onType: PropTypes.func,
    onSpace: PropTypes.func
};

export default TextBox;
