import dictionary from '../dictionary';
import _ from 'underscore';

const wordList = _.sample(dictionary, 100);

const initialState = wordList.map((word) => {
    return  word.split('').map((letter) => {
        return {letter: letter, status: 'pending'};
    });
});

function cloneWordList(words) {
    return words.map(word =>
          word.map(letterObj =>
              Object.assign({}, letterObj)));
}


const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHAR_ADDED':
            const newState = [ ...state ];

            for (let i = 0; i < newState.length; i++) {

            }
            return 0;
        default:
            return state;
    }
};

export default gameReducer;
