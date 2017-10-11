import words from '../dictionary';
import _ from 'underscore';

const createWordList = () => {
    const sample = _.sample(words, 100);
    return sample.map(word => {
        return word.split('').map(letter => {
            return {
                letter: letter,
                status: 'pending'
            };
        });
    });
};

const gameReducer = (state = createWordList(), action) => {
    switch (action.type) {
        case 'RESET_GAME':
            return createWordList();
        case 'APPEND_LETTER':
            const newState = state.map((word, i) => {
                return word.map((letter, j) => {
                    return Object.assign({}, letter);
                });
            });
            newState[action.currentIndex[0]][action.currentIndex[1]].status = action.correct ? 'correct' : 'incorrect';
            return newState;
        default:
            return state;
    }
};

export default gameReducer;
