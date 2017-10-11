const inputReducer = (state = '', action) => {
    switch (action.type) {
        case 'APPEND_LETTER':
            return state + action.letter;
        case 'SKIP':
            return '';
        default:
            return state;
    }
};

export default inputReducer;
