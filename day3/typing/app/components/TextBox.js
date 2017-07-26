import React from 'react';
import PropTypes from 'prop-types';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    handleType(letter) {
        if (letter.target.value[letter.target.value.length - 1] === ' ') {
            this.props.typing(letter);
            this.setState({input: ''});
        } else {
            this.setState({input: letter.target.value});
        }
    }

    render() {
        return (
          <input
            onChange={(letter) => this.handleType(letter)}
            className="textbox"
            type="text"
            placeholder="Start typing to begin..."
            value={this.state.input}
          />
        );
    }
}

TextBox.propTypes = {
    typing: PropTypes.func
};

export default TextBox;
