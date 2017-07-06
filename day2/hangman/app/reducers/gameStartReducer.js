const gameStartReducer = (state = false, action) => {
    switch (action.type) {
        case 'WORD_SET':
            return true;
        default:
            return state;
    }
};
export default gameStartReducer;
