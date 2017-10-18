const inputReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE':
            return 0;
        default:
            return state;
    }
};

export default inputReducer;
