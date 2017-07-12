import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({onType, onUserInput}) => {
    let input;
    return (
        <div className= "textbox" className = "main">
          <input type="textarea" style={{width: 700, height: 100 }}
                // value={''}
                ref={node => {input = node;}}
                onChange={() => {onType(input.value); onUserInput(input.value);}}
                placeholder="Start typing to begin...."
            />
        </div>
    );
};


TextBox.propTypes = {
    onType: PropTypes.func,
    onUserInput: PropTypes.func,
};
export default TextBox;
