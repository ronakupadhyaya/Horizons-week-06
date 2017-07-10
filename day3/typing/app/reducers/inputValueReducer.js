const inputValueReducer = (state = '', action) =>{
    switch(action.type) {
        case 'INPUT_CHECK':
            const newState = action.input;
            return newState;

        default:return state;
    }
};
export default inputValueReducer;
