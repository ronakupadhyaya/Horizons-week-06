const totalScoreReducer = (state = 0, {type, streakPoints}) => {
    switch (type) {
        case 'BAD_GUESS': {
            return state - 1;
        }
        case 'CORRECT_GUESS': {
            return state + 1;
        }
        case 'CANCEL_STREAK':
            console.log('streak points', streakPoints);
            return state + streakPoints;
        default:
            return state;
    }
};

export default totalScoreReducer;
