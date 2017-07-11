import React from 'react';
import PropTypes from 'prop-types';
// const inlineStyle = (letter) => ({
//     'border': 'solid',
//     'width': '50px',
//     'height': '50px',
//     'display': 'flex',
//     'alignItems': 'center',
//     'justifyContent': 'center',
//     'backgroundColor': letter.guessed ? 'red' : 'yellow'
// });
const wordboxStyle = {
    'border': '2px solid gray',
    'borderRadius': '5px',
    'padding': '10px',
    'width': '80vw'
};
const correctLetter = {
    'color': 'blue',
    'backgroundColor': 'yellow'
};
const wrongLetter = {
    'color': 'black',
    'backgroundColor': 'red',
    'textDecoration': 'line-through'
};
const regLetter = {
    'color': 'grey'
};
const matchedLetter = (letter, index, inputs) => {
    if (index > inputs.length - 1) {
        return regLetter;
    }
    if (inputs[index] === letter) {
        return correctLetter;
    }
    return wrongLetter;
};
const WordBox = ({ wordList, inputLetters }) => {
    const letterList = wordList.join(' ').split('');
    return (
        <div style={wordboxStyle}>
            {letterList.map((letter, index)=><span style={matchedLetter(letter, index, inputLetters)}>{letter}</span>)}
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    inputLetters: PropTypes.array
};

export default WordBox;
