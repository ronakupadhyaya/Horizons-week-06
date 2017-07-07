import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { chooseWord } from '../actions/index';
// import { Link } from 'react-router-dom';

const NewGame = ({ onChooseWord }) => {
    let input;
    let word = '';

    return (
        <div>
            <h2> New Game </h2>
            <h4> Choose word to be guessed </h4>
            <input type="text"
                value={word}
                ref={node => {input = node;}}
                onChange={() => {
                    word += input.value;
                    console.log('WORD', word);
                }}
            />
            <button onClick={() => onChooseWord(word)}>Submit</button>
        </div>
    );
};

NewGame.propTypes = { onChooseWord: PropTypes.func };

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChooseWord: (inputLetter) => {
            dispatch(chooseWord(inputLetter));
            window.location.replace('/');
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewGame);
