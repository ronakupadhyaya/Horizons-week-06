import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ userInput }) => {
    return (
      <form>
        <input type="text"/>
      </form>
    );
};


TextBox.propTypes = {
    userInput: PropTypes.string
};

export default TextBox;
