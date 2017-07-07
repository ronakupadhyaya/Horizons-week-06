
const timeReducer = (state = 60, action) => {
    switch (action.type) {
        case 'START_GAME':
            return 60;
        case 'DECREMENT_TIMER':
            return state - 1;
        case 'END_GAME':
            return 0;
        default:
            return state;
    }
};

export default timeReducer;
