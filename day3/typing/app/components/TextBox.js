import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({userInput, onInput}) => {
    return(
      <div>
        <input placeholder="Enter your text" className="textbox" type="text" value={userInput} onKeyPress={(e) => onInput(e.which)}/>
      </div>
    );
};

TextBox.propTypes = {
    userInput: PropTypes.string,
    onInput: PropTypes.func
};

export default TextBox;
