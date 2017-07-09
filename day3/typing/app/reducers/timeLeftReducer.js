
const timeLeftReducer = (state = 60, {type}) => {
    switch (type) {
        case 'START_GAME':
            return state;
        case 'DECREMENT_TIMER':
            return state - 1;
        case 'END_GAME':
            return 60;
        default:
            return state;
    }
};

export default timeLeftReducer;
