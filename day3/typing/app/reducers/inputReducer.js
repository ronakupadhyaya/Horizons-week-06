const initialState = {currentInput: '', allInput: []};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_INPUT':
            const newAll2 = [...state.allInput];
            newAll2.push('');
            const newState = Object.assign({}, state, {currentInput: '', allInput: newAll2});
            console.log(newState);
            return newState;
        case 'KEEP_INPUT':
            const newAll = [...state.allInput];
            if (newAll.length !== 0) {
                newAll[newAll.length - 1] = action.input;
                console.log('notequal', newAll);
            } else {
                newAll.push(action.input);
            }
            const newObj = Object.assign({}, state, {currentInput: action.input, allInput: newAll});
            return newObj;
        default:
            return state;
    }
};

export default inputReducer;
