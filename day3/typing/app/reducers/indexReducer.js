const indexReducer = (state = [0, 0], action) => {
    switch (action.type) {
        case 'START_GAME':
        case 'END_GAME':
            return [0, 0];
        case 'APPEND_LETTER':
            return action.advance ? [state[0], state[1] + 1] : state;
        case 'SKIP':
            return [state[0] + 1, 0];
        default:
            return state;
    }
};

export default indexReducer;
