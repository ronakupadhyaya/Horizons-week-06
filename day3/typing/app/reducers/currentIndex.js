import types from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case types.start:
            return [0, 0];
        case types.addChar:
            return [state[0], state[1] + 1];
        case types.nextWord:
            return [state[0] + 1, 0];
        default:
            return state;
    }
};
