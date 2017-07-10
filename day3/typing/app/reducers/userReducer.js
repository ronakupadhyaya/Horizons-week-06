const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'USER_TYPE':
            const copyState = [...state];
            const newState = action.letters.split(' ');
            const newSpace = [];
            newState.forEach((word) => newSpace.push(word + ' '));
            return newSpace;
        default:
            return state;
    }
};

export default userReducer;
