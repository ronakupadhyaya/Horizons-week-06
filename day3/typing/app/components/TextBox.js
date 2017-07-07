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
            // onChange={(e) => {console.log(e.target.value);
            //     onInput(e.target.value);
            // }}
        />
  );
};

TextBox.propTypes = {
    onInput: PropTypes.func,
    onUserTyping: PropTypes.func
};

export default TextBox;
