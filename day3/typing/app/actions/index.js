// import * as types from './types';

const createResetAction = () => {
    return {
        type: 'RESET_GAME'
    };
};

const createInputAction = (letter, wordList, currentIndex) => {
    if (letter === ' ') {
        return {
            type: 'SKIP'
        };
    }
    const currentLetter = wordList[currentIndex[0]][currentIndex[1]].letter;
    return {
        type: 'APPEND_LETTER',
        letter: letter,
        advance: currentIndex[1] !== wordList[currentIndex[0]].length - 1,
        correct: currentLetter === letter,
        currentIndex
    };
};

export {
    createResetAction,
    createInputAction
};
