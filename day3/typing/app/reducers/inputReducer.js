const initialState = [''];

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_GAME':
            const tempState2 = [...state];
            tempState2[tempState2.length - 1] = tempState2[tempState2.length - 1] + action.input;
            return tempState2;
        case 'USER_INPUT':
            const tempState = [...state];
            tempState[tempState.length - 1] = tempState[tempState.length - 1] + action.input;
            return tempState;
        case 'NEW_WORD':
            const tempState3 = [...state];
            tempState3.push('');
            return tempState3;
        default:
            return state;
    }
};

export default inputReducer;
