const userListReducer = (state = [], action) => {
    switch(action.type) {
        case 'USER_TYPE':
            const newState = [...state];
            newState.push(action.letter);
            return newState;
        default:
            return state;
    }
};

export default userListReducer;
