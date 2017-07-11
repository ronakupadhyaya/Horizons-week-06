import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ onInput, value }) => {
    const filterInput = (e) => {
        if (e.key.length === 1) {
            onInput(e.target.value + e.key);
        }
    };
    return (
      <div style={{ textAlign: 'center' }}>
        <input onChange={() => {}} onKeyUp={filterInput} type="text" className="textbox" value={value} placeholder="Start tying to begin.." />
      </div>
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    value: PropTypes.string,
};

export default TextBox;
