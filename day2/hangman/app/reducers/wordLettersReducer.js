/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

let word = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = (state = word, action)=>{
    switch(action.type) {
        case 'NEW_GAME':
            const newGameState = [];
            for(let i = 0; i < action.word.length; i++) {
                const objt = {};
                objt.letter = action.word[i];
                objt.guess = false;
                newGameState.push(objt);
            }
            word = newGameState;
            return newGameState;
        case 'GOOD_GUESS':
            const newState = word.slice();
            newState.forEach((wobject)=>{
                if(wobject.letter.toLowerCase() === action.letter.toLowerCase()) {
                    wobject.guessed = true;
                }
            });
            // console.log(newState);
            // const nwObj = Object.assign({}, state);
            // nwObj.guessed = true;
            return newState;
        default:return state;
    }
};
export default wordLettersReducer;
