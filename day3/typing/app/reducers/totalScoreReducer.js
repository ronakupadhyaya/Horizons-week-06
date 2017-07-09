const totalScoreReducer = (state = 0, {type, streakPoints}) => {
    switch (type) {
        case 'BAD_GUESS': {
            return state - 1;
        }
        case 'CORRECT_GUESS': {
            return state + 1;
        }
        case 'CANCEL_STREAK': {
            return state + streakPoints;
        }
        case 'END_GAME': {
            return 0;
        }
        default:
            return state;
    }
};

export default totalScoreReducer;
