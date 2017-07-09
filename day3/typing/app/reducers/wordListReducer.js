import dictionary from '../dictionary';
import _ from 'underscore';

let shuffled = _.shuffle(dictionary);

const wordListReducer = (state = shuffled.slice(0, 100), action) => {
    switch (action.type) {
        case 'NEW_GAME':
            shuffled = _.shuffle(dictionary);
            return shuffled.slice(0, 100);
        case 'END_GAME':
            shuffled = _.shuffle(dictionary);
            return shuffled.slice(0, 100);
        default:
            return state;
    }
};

export default wordListReducer;
