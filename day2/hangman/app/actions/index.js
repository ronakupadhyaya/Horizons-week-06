// Action Creators


const handleBadGuess = (inputLetter) => {
    return ({
        type: 'BAD_GUESS',
        letter: inputLetter
    });
};


const handleGoodGuess = (inputLetter) => {
    return ({
        type: 'GOOD_GUESS',
        letter: inputLetter
    });
};
// import * as types from './types';

export { handleBadGuess, handleGoodGuess };
