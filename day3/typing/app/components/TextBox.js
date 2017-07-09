import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onInput, value }) => {
    return (
      <div>
        <input onChange={(event) => onInput(event.target.value)} type="text" className="textbox" value={value} placeholder="Start tying to begin.." />
      </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    value: PropTypes.string,
};

export default TextBox;
