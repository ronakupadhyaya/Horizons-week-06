function newWordReducer(state = [], action) {
    switch (action.type) {
        case 'NEW_WORD':
            const newState = action.word.map((letter) => {
                return {letter, guessed: false};
            });
            return newState;
        default:
            return state;
    }
}

export default newWordReducer;
