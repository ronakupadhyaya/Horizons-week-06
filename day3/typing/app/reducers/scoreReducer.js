const scoreReducer = (state = {timeLeft: 0, totalScore: 0, streakCount: 0}, action) => {
    switch (action.type) {
        case 'START_GAME':
            console.log('scoreReducer STARTGAME TRIGGERED');
            return Object.assign({}, state, {timeLeft: 60});
        case 'DECREMENT_TIMER':
            // console.log(action.streak);
            return Object.assign({}, state, {timeLeft: state.timeLeft - 1});
        case 'CHANGE_SCORE':
            // console.log(action.streak);
            const totalStreaks = action.streak.reduce((sum, val) => {
                const points = sum + (( val * (val + 1)) / 2 );
                return points;
            }, 0);
            return Object.assign({}, state, {streakCount: totalStreaks, totalScore: action.correctLetters + totalStreaks - action.wrongLetters});
        case 'END_GAME':
            console.log('ENDGAME TRIGGERED');
            return state;
        default:
            return state;
    }
};
export default scoreReducer;
