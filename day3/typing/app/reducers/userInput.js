import types from '../actions/types';

export default (state = [], action) => {
    let newState;
    switch (action.type) {
        case types.start:
            return [];
        case types.addChar:
            newState = state.slice(0, state.length - 1);
            newState.push(action.input.split(''));
            return newState;
        case types.nextWord:
            newState = state.slice();
            newState.push([]);
            return newState;
        default:
            return state;
    }
};
