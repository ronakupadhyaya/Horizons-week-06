const inputBoxReducer = (state = '', action) => {
    switch (action.type) {
        case 'INPUT':
            return action.input;
        default:
            return state;
    }
};

export default inputBoxReducer;
