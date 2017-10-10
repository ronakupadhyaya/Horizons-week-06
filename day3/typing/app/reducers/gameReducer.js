import words from '../dictionary';
import _ from 'underscore';

export default function(state = {wordList: ['test']}, action) {
    switch (action.type) {
        case 'START':
            console.log('START');
            return Object.assign({},
                state,
                {wordList: _.sample(words, 100)});
        default:
            return state;
    }
}
