import word from '../dictionary';
import _ from 'underscore';

const wordList = _.shuffle(word).slice(0, 100);

const gameReducer = (state = wordList, action) =>{
    return state;
};

export default gameReducer;
