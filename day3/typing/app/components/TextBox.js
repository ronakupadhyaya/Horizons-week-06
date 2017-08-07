import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ handleInput })=>{
    return (
      <div>
          <input type="text" name="userInput" placeholder="Type Here..." onChange={(e) => handleInput(e.target.value)}></input>
      </div>
    );
};

TextBox.propTypes = {
    handleInput: PropTypes.func
};

export default TextBox;
