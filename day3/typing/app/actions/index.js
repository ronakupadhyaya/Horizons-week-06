import * as types from './types';

const newCharActionCreator = (type, currPos, words) => ({
    type: 'CHAR_ADDED',
    currPos,
    words,
});

export default { newCharActionCreator };
