import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({handleInput}) => {
    let input;
    return (
        <input type="text"
            value={''}
            ref={node => {input = node;}}
            placeholder="Start Typing to Begin!"
            onChange={()=> {handleInput(input.value);}}
        />
    );
};

TextBox.propTypes = {
    handleInput: PropTypes.func
};

export default TextBox;
