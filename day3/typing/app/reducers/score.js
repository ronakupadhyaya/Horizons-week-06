import types from '../actions/types';

export default (state = 0, action) => {
    switch (action.type) {
        case types.start:
            return 0;
        case types.addChar:
            return state + (action.match ? 1 + action.streak : -1);
        default:
            return state;
    }
};
