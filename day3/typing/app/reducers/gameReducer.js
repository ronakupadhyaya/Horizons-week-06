import _ from 'underscore';
import dictionary from '../dictionary';

// import * as types from '../actions/types';

const shuffledWords = _.shuffle(dictionary);
const wordList = shuffledWords.slice(0, 100);

const initialState = wordList;

// console.log(initialState);

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.BAD_GUESS:
        //     const newState = [...state];
        //     newState.push(action.letter);
        //     return newState;
        // case types.GOOD_GUESS:
        //     const newState2 = [...state];
        //     newState2.push(action.letter);
        //     return newState2;
        default:
            return state;
    }
};

export default gameReducer;
