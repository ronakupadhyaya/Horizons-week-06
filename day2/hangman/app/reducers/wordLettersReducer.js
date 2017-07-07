/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */
// import * as types from '../actions/types';
import { GOOD_GUESS, NEW_GAME } from '../actions/types';

import satWords from '../words';

const wordToGuess = satWords[Math.floor(Math.random() * 500)];

const initialStateArray = wordToGuess.word.toUpperCase().split('').map((letter) => (
    {letter: letter, guessed: false}
));

const initialState = {
    letters: initialStateArray,
    won: false,
    definition: wordToGuess.definition
};

const wordLettersReducer = (state = initialState, action) => {
    const newStateArray = state.letters.map((part) => {
        return part.letter === action.inputLetter && !(part.guessed) ?
            Object.assign({}, part, {guessed: true}) :
            part;
    });
    const newState = !newStateArray.some((part) => (!part.guessed)) ?
        {letters: newStateArray, won: true, definition: state.definition} :
        {letters: newStateArray, won: false, definition: state.definition};
    switch(action.type) {
        case GOOD_GUESS:
            return newState;
        case NEW_GAME:
            const newWordToGuess = satWords[Math.floor(Math.random() * 500)];
            const newGameStateArray = newWordToGuess.word.toUpperCase().split('').map((letter) => (
                {letter: letter, guessed: false}
            ));

            const newGameState = {
                letters: newGameStateArray,
                won: false,
                definition: newWordToGuess.definition
            };
            return newGameState;
        default:
            return state;
    }
};

export default wordLettersReducer;
