import dictionary from '../dictionary';
import _ from 'underscore';
import types from '../actions/types';

const welcomeMessage = ['Welcome', 'to', 'the', 'typing', 'game!', 'Press', 'any', 'key', 'to', 'start...'].map((word) => word.split(''));

// The wordList array is exported as a 2D array with [wordIdx][letterIdx]

export default (state = welcomeMessage, action) => {
    switch (action.type) {
        case types.start:
            return _.shuffle(dictionary).slice(0, 100).map((word) => word.split(''));
        default:
            return state;
    }
};
