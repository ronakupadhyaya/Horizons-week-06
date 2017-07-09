const streakCountReducer = (state = [0, 0], {type}) => {
    switch (type) {
        case 'ADD_TO_STREAK_COUNT': {
            const copyArr = [...state];
            let n = copyArr[1];
            let sumK = copyArr[0];
            n++;
            sumK = (n * (n + 1) / 2);
            return [sumK, n];
        }
        case 'CANCEL_STREAK': {
            return [0, 0];
        }
        case 'END_GAME': {
            return [0, 0];
        }
        default:
            return state;
    }
};

export default streakCountReducer;
