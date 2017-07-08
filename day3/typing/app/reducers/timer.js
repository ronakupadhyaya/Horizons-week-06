import types from '../actions/types';

export default (state = 0, action) => {
    switch (action.type) {
        case types.start:
            return 60;
        case types.decTime:
            return state - 1;
        case types.end:
            return 0;
        default:
            return state;
    }
};
