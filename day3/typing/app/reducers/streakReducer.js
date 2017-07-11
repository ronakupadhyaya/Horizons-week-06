const streakReducer =  (state = {amount: 0, startScore: 0, length: 0}, action) => {
    switch(action.type) {
        case 'STREAK_HIT':
            const newState = Object.assign({}, state);
            newState.amount++;
            newState.startScore = action.startScore;
            newState.length = action.length;
            return newState;
        case 'STREAK_RESET':
            const newState1 = Object.assign({}, state);
            newState1.amount = 0;
            newState1.startScore = action.startScore;
            newState1.length = action.length;
            return newState1;
        default:
            return state;
    }
};

export default streakReducer;
