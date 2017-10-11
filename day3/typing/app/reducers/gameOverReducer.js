import * as types from '../actions/types';

const gameOverReducer = (state = false, action) => {
    switch (action.type) {
        case types.actionEndGame:
            return true;
        case types.actionStartGame:
            return false;
        default:
            return state;
    }
};

export default gameOverReducer;
