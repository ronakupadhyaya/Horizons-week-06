

const chooseWordReducer = (state = [], action) => {
    switch(action.type) {
        case 'CHOOSE_WORD':
            console.log(action, state);
            let newState = state.split('');
            newState = newState.map(letter => {
                return {letter, guessed: false};
            });
            return newState;
        default:
            return state;
    }
};

export default chooseWordReducer;
