
const timeLeftReducer = (state = 5, {type}) => {
    switch (type) {
        case 'START_GAME':
            return state;
        case 'DECREMENT_TIMER':
            return state - 1;
        case 'END_GAME':
            return 5;
        default:
            return state;
    }
};

export default timeLeftReducer;
