const dict = require('../dictionary');
import _ from 'underscore';

const newState = [];
const wordShuffle = _.shuffle(dict);
for(let i = 0; i < 100; i++) {
    newState.push(wordShuffle[i]);
}

const wordList = (state = newState, action) => {
    switch(action.type) {
        // case 'WORD_SHUFFLE':
        //     const newState = state;
        //     const wordShuffle = _.shuffle(dict);
        //     for(let i = 0; i < 100; i++) {
        //         newState.push(wordShuffle[i]);
        //     }
        //     return newState;
        default:
            return state;
    }
};

export { wordList };
