/* Reducer for the badGuesses substate */
/* This reducer's state will be a simple integer */

import types from '../actions/types';

const badGuessesReducer = (state = 0, action)=>{
    switch(action.type) {
        case types.badGuess: return state + 1;
        /* don't do state++ because this modifies the state*/
        default: return state;
    }
};

export default badGuessesReducer;
