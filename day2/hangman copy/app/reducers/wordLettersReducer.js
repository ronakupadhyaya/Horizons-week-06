// import * as types from '../actions/types';

const wordLettersReducer = (state = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newState = state.map((obj) => {
                if (obj.letter === action.letter) {
                    const newObj = Object.assign({}, obj, {guessed: true});
                    return newObj;
                }
                return obj;
            });
            return newState;
        case 'NEW_WORD':
            const wordArr = action.word.split('');
            const newWordState = wordArr.map((letter) => {
                const obj = {letter: letter.toUpperCase(), guessed: false};
                return obj;
            });
            return newWordState;
        default:
            return state;
    }
};

export default wordLettersReducer;
