const infobarReducer = (state = {timer: 0, totalScore: 0, currentStreak: 0}, action) => {
    switch(action.type) {
        case 'START_GAME':
            return {timer: 60, totalScore: 0, currentStreak: 0};
        case 'END_GAME':
            const temp2 = Object.assign({}, state);
            temp2.timer = 0;
            return temp2;
        case 'DECREMENT_TIMER':
            const temp = Object.assign({}, state);
            temp.timer = state.timer - 1;
            return temp;
        default:
            return state;
    }
};

export default infobarReducer;
