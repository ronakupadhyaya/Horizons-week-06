const currentIndexReducer = (state = 0, action) =>{
    switch(action.type) {
        case 'CHAR_ADDED':
            return state + 1;
        default:
            return state;
    }
};

export default currentIndexReducer;
