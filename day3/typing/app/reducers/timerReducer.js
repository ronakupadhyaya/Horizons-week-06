const timerReducer = (state = 60, action) => {
    switch (action.type) {
        case 'START_GAME':
            return state - 1;
        case 'DECREMENT_TIMER':
            return state - 1;
        default:
            return state;
    }
};

export default timerReducer;
