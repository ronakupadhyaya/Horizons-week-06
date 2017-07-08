import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({onInput}) => {
    return (
    <div>
      <input
        onChange={(e) => {onInput(e.target.value); }}>
      </input>
        {/* <button onClick={onInput()}></button> */}
    </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func
};

export default TextBox;
