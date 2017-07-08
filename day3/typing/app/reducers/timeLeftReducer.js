
const timeLeftReducer = (state = 60, {type}) => {
    switch (type) {
        case 'START_GAME':
            return 60;
        case 'DECREMENT_TIMER':
            return state - 1;
        default:
            return state;
    }
};

export default timeLeftReducer;
