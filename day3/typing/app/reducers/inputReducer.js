const inputReducer = (state = '', action) => {
    switch (action.type) {
        case 'CHAR_ADDED':
            return state + action.letter;
        case 'NEXT_WORD':
        case 'START_GAME':
        case 'END_GAME':
            return '';
        default:
            return state;
    }
};

export default inputReducer;
