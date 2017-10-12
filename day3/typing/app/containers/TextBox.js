import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    onInput(input) {
        if (input === ' ') {
            this.props.newWord();
        } else {
            this.props.addChar(input);
        }
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.userInput}
                onKeyPress={(e) => this.onInput(String.fromCharCode(e.which))}
            />
        );
    }
}

TextBox.propTypes = {
    userInput: PropTypes.string,
    addChar: PropTypes.func,
    newWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        userInput: state.game.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addChar: (input) => dispatch({type: 'ADD_CHAR', letter: input}),
        newWord: () => dispatch({type: 'NEW_WORD'})
    };
};

TextBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBox);

export default TextBox;
