const initialState = [
];


const guessedLetterReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            const newState = state.concat(action.letter);
            return newState;
        default:
            return state;
    }
};

export default guessedLetterReducer;
