const userInputReducer = (state = [], action) =>{
    switch(action.type) {
        case 'CHAR_ADDED':
            const newState = state.slice();
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};

export default userInputReducer;
