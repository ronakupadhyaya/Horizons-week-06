import PropTypes from 'prop-types';
import React from 'react';

class TextBox extends React.Component {
    render() {
        return(
<input type="text" value = {this.props.userInput} onKeyPress= {(e)=> this.onInput(String.fromCharCode(e.which))}/>
    );
    }
}

TextBox.propTypes = {
    userInput: PropTypes.string,
    inputFunction: PropTypes.func
};

export default TextBox;
