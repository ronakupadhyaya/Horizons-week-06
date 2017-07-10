import * as types from '../actions/types';
//importing words from app/dictionary.js
// can we just say "words"? how do we know it's words
import words from '../dictionary';

//Reducer is like a switch

const shuffled = -.shuffle(words) //it's gonna be an array of words as strings
const firstHundred = shuffled.slice(0,99) // an array of the first 100 shuffled words (as strings)

const gameReducer = (state = {wordList: firstHundred}, action) => {
    switch (action.type) {
        case 'GAME_START':
            return ;
        default:
            return state;
    }
};

export default gameReducer;
