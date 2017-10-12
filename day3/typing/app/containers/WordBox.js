import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class WordBox extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
    }

    render() {
        const output = [];
        this.props.wordList.forEach((word) => {
            word.forEach((letter) => {
                output.push(<span className={letter.status}>{letter.letter}</span>);
            });
            output.push(<span> </span>);
        });

        return (
            <div>
                I am the game container!<br></br>
                {output.map((s, idx) => <span key={s + idx}>{s}</span>)}
            </div>
        );
    }
}

WordBox.propTypes = {
    wordList: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game.wordList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

WordBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(WordBox);

export default WordBox;
