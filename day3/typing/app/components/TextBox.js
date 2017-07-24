import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({onInput, theInput, checkKey}) =>
    <center><input onKeyDown={checkKey} value={theInput} onChange={(evt) => onInput(evt.target.value)} style={{width: '80%'}} type="text" placeholder="Start typing to begin..."></input></center>;

TextBox.propTypes = {
    onInput: PropTypes.func,
    theInput: PropTypes.string,
    checkKey: PropTypes.func
};
export default TextBox;
