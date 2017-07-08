import types from '../actions/types';

export default (state = 0, action) => {
    switch (action.type) {
        case types.start:
            return 0;
        case types.addChar:
            return (action.match ? state + 1 : 0);
        default:
            return state;
    }
};
