import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ value }) => {
    console.log('value: ', value);
    return (<div>
      <input className="textbox" type="text" onKeyPress={value} placeholder="Start typing to begin"/>
    </div>);
};

TextBox.propTypes = {
    value: PropTypes.func
};

export default TextBox;
