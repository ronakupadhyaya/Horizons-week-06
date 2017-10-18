import React from 'react';
import PropTypes from 'prop-types';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <input type="text" onKeyPress={(e) => this.props.keyInput(e.target.value)} value={this.props.userInput} />
      );
    }
}

TextBox.propTypes = {
    userInput: PropTypes.string,
    keyInput: PropTypes.func,
};

export default TextBox;
