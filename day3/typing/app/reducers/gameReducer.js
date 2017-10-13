import words from '../dictionary.js';
import _ from 'underscore';

const initializeState = () => ({
    words: _.sample(words, 100).map(word => (
      word.split('').map(letter => (
        {letter, status: 'pending'}
      ))
    )),
    currentIndex: [0, 0]
});

const gameReducer = (state = {words: [], currentIndex: null}, action) => {
    switch (action.type) {
        case 'START_GAME':
            return initializeState();
        case 'CHAR_ADDED':
            const w = state.currentIndex[0];
            const l = state.currentIndex[1];
            const temp = state.words.map(word => (
              word.map(letter => (
                Object.assign({}, letter)
              ))
            ));
            temp[w][l].letter === action.letter ? temp[w][l].status = 'correct' : temp[w][l].status = 'incorrect';
            return {words: temp, currentIndex: [w, l + 1]};
        case 'NEXT_WORD':
            return {words: state.words, currentIndex: [state.currentIndex[0] + 1, 0]};
        case 'END_GAME':
            return {words: state.words, currentIndex: []};
        default:
            return state;
    }
};

export default gameReducer;
