
const newGameReducer = (state = [{letter: 'H', guessed: false},
{letter: 'O', guessed: false},
{letter: 'R', guessed: false},
{letter: 'I', guessed: false},
{letter: 'Z', guessed: false},
{letter: 'O', guessed: false},
{letter: 'N', guessed: false},
{letter: 'S', guessed: false}], action) => {
    switch (action.type) {
        case 'NEW_GAME':
            const newWord = state.slice(0, action.word.length);
            const word = action.word.slice();
            word.split('');
            for (let i = 0; i < newWord.length; i++) {
                newWord[i].letter = word[i];
            }
            return newWord;
        default:
            return state;
    }
};

export default newGameReducer;
