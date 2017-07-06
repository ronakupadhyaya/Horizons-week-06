import types from '../actions/types';
const guessedLettersReducer = (state = [], action) => {
    switch(action.type) {
        case types.goodGuess:
            if(state.indexOf(action.letter) === -1) {
                const newState = [...state];
                newState.push(action.letter);
                return newState;
            }
            return state;
        case types.badGuess:
            if(state.indexOf(action.letter) === -1) {
                const newState = [...state];
                newState.push(action.letter);
                return newState;
            }
            return state;
        default: return state;
    }
};

export default guessedLettersReducer;
