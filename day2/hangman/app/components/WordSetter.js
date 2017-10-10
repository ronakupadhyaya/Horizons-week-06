import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

let WordSetter = ({ setWord }) => {
    let wordInput;
    return (
        <form>
            <input type="text"
                placeholder="New word for Hangman"
                ref={node => {wordInput = node;}}
            />
            <button onClick={(e) => {
                e.preventDefault();
                setWord(wordInput.value);
            }
            }>
                Set word
            </button>
        </form>
    );
};

WordSetter.propTypes = {
    setWord: PropTypes.func,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    setWord: (word) => {
        dispatch({type: 'SET_WORD',
                word: word});
    },
});

WordSetter = connect(mapStateToProps, mapDispatchToProps)(WordSetter);

export default WordSetter;
