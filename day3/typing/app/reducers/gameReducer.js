import words from '../dictionary';
import _ from 'underscore';
import * as types from '../actions/types';

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
        case types.actionStartGame:
            return createWordList();
        case types.actionAppendLetter:
            const newState = state.map((word) => {
                return word.map((letter) => {
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
