const currentIndexReducer = (state = [0, 0], {type}) => {
    switch (type) {
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
        case 'END_GAME': {
            return [0, 0];
        }
        default:
            return state;
    }
};

export default currentIndexReducer;
