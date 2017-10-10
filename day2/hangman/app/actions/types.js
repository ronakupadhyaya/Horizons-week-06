/* Action types */
const badGuess = (letter) => ({
    type: 'BAD_GUESS',
    letter: letter,
});

export default { badGuess };
