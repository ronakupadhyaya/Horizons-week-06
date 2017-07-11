const scoreReducer = (state = 0, action) =>{
    switch(action.type) {
        case 'UP_SCORE':
            return state + 1;
        case 'DOWN_SCORE':
            return state - 1;
        default:
            return state;
    }
};

export default scoreReducer;
