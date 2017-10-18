const indexReducer = (state = [0, 0], action) => {
    switch(action.type) {
        case 'UPDATE_INDEX':
            return 0;
        default:
            return state;
    }
};

export default indexReducer;
