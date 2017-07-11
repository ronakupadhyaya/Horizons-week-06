
const scoreReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            return state + 1;
        case 'ADD_STREAK':
            return state + action.value;
        default:
            return state;
    }
};

export default scoreReducer;
