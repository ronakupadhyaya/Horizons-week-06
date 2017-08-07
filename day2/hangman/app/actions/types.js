
export const onBadGuessClick = (inputLetter) => {
    return {
        type: 'BAD_GUESS',
        letter: inputLetter
    };
};

export const onGoodGuessClick = (inputLetter) => {
    return {
        type: 'GOOD_GUESS',
        letter: inputLetter
    };
};
