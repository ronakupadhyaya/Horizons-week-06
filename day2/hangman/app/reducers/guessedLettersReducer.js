/**
 * Created by ebadgio on 7/6/17.
 */
const guessedLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'BAD_GUESS':
            return [...state, action.letter];
        case 'GOOD_GUESS':
            return [...state, action.letter];
        default:
            return state;
    }
};

export default guessedLettersReducer;
