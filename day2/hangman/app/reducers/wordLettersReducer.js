/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

// const wordLettersReducer =

// export default wordLettersReducer;

const wordLettersReducer = (state = [{letter: 'H', guessed: false},
{letter: 'O', guessed: false},
{letter: 'R', guessed: false},
{letter: 'I', guessed: false},
{letter: 'Z', guessed: false},
{letter: 'O', guessed: false},
{letter: 'N', guessed: false},
{letter: 'S', guessed: false}], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const wordState = state.slice();
            for (let i = 0; i < wordState.length; i++) {
                if (wordState[i].letter === action.letter) {
                    wordState[i].guessed = true;
                }
            }
            return wordState;
        case 'NEW_GAME':
            const newWord = state.slice(0, action.word.length);
            const word = action.word.slice();
            word.split('');
            for (let i = 0; i < newWord.length; i++) {
                newWord[i].letter = word[i];
            }
            return newWord;
        default:
            return state;
    }
};

export default wordLettersReducer;
