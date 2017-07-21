import {BAD_GUESS, GOOD_GUESS} from '../actions/types';

const badGuessesReducer = (state = [], action) => {
    switch(action.type) {

        case BAD_GUESS:
        case GOOD_GUESS:
            const tempArr = state.slice();
            tempArr.push(action.inputLetter);
            return tempArr;
        default:
            return state;
    }
};

export default badGuessesReducer;
