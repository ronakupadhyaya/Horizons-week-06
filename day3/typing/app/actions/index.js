import * as types from './types';

const createResetAction = () => {
    return {
        type: types.actionStartGame
    };
};

const createInputAction = (letter, wordList, currentIndex) => {
    if (letter === ' ') {
        return {
            type: types.actionSkip
        };
    }
    const currentLetter = wordList[currentIndex[0]][currentIndex[1]].letter;
    return {
        type: types.actionAppendLetter,
        letter: letter,
        advance: currentIndex[1] !== wordList[currentIndex[0]].length - 1,
        correct: currentLetter === letter,
        currentIndex
    };
};

const createTimerAction = (actionType, id, counter) => {
    if (actionType === 'startTimer') {
        return {
            type: types.actionStartTimer,
            id: id
        };
    }
    if (counter === 0) {
        return {
            type: types.actionEndGame
        };
    }
    return {
        type: types.actionDecrementTimer
    };
};

export {
    createResetAction,
    createInputAction,
    createTimerAction
};
