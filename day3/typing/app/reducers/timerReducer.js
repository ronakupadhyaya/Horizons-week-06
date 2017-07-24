const gameReducer = (state = {timer: 60000, pid: 0}, action) => {
    switch (action.type) {
        case 'START_GAME':
            return Object.assign({}, state, {pid: action.pid});
        case 'DECREMENT_TIMER':
            return Object.assign({}, state, {timer: state.timer - 1000});
        default:
            return state;
    }
};

export default gameReducer;
