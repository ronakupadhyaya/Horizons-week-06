import React from 'react';
import PropTypes from 'prop-types';
// import Box from './Box';

const TextBox = ({ onInput }) => {
    let userinput;
    return (
        <input className="typedInput"
            type="text"
            ref={node => {userinput = node;}}
            onChange={()=>onInput(userinput)}
            placeholder="Start typing here"
        />
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    onUserTyping: PropTypes.func
};

export default TextBox;
