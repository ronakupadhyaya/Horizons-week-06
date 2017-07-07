import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onInput }) => {
    return (
      <div>
        <input onChange={(event) => onInput(event.target.value)} type="text" name="input" value="" placeholder="Type to start" />
      </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
};

export default TextBox;
