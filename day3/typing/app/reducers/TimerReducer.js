const timerReducer = (state = 0, action) => {
    switch (action.type) {
        case 'START_GAME':
            const newState = 60000;
            return newState;
        case 'DECREMENT_TIMER':
            return state - 1000;
        default:
            return state;
    }
};

export default timerReducer;
