const wordIndexReducer = (state = [0, 0], action) => {
    switch (action.type) {
        case 'INCREASE_FIRST':
            const newState = [...state];
            newState[0] = newState[0] + 1;
            newState[1] = 0;
            return newState;
        case 'INCREASE_SECOND':
            const newState2 = [...state];
            newState2[1] = state[1] + 1;
            return newState2;
        default:
            return state;
    }
};

export default wordIndexReducer;
