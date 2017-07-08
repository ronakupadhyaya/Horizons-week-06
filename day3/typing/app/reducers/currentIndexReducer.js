const currentIndexReducer = (state = [0, 0], {type}) => {
    switch (type) {
        case 'START_GAME':
            return [0, 0];
        case 'CHAR_ADDED': {
            const copyIndex = [...state];
            copyIndex[1]++;
            return copyIndex;
        }
        case 'NEXT_WORD': {
            const copyIndex = [...state];
            copyIndex[0]++;
            copyIndex[1] = 0;
            return copyIndex;
        }
        default:
            return state;
    }
};

export default currentIndexReducer;
