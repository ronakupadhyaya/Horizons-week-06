import * as types from '../actions/types';

const GAME_LENGTH = 60;

const timerReducer = (state = [GAME_LENGTH, null], action) => {
    switch (action.type) {
        case types.actionStartTimer:
            return [state[0], action.id];
        case types.actionStartGame:
            if (state[1]) {
                clearInterval(state[1]);
            }
            return [GAME_LENGTH, null];
        case types.actionDecrementTimer:
            if (!(state[0])) {
                clearInterval(state[1]);
                return state;
            }
            return [state[0] - 1, state[1]];
        default:
            return state;
    }
};

export default timerReducer;
