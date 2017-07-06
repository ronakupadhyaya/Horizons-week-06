const startReducer = (state = false, action) => {
    switch(action.type) {
        case 'SET_ANSWER':
            return true;
        default:
            return state;
    }
};

export default startReducer;
