// Action Creators

export function onBadGuess (inputLetter) {
  return {
    type: 'BAD_GUESS',
    letter: inputLetter
  }
}
