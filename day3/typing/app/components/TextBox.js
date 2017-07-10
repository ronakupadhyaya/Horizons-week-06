import React from 'react';
import PropTypes from 'prop-types';

let started = false;
const TextBox = ({onInput, onTyping}) => {
    return (
    <div>
      <input className="input"
        placeholder="Start typing to begin"
        onChange={(e) => {
            onTyping(e.target.value);
            if (!started) {
                onInput(e.target.value);
                started = true;
                console.log(started);
            }
        }}>
      </input>
    </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    onTyping: PropTypes.func
};

export default TextBox;
