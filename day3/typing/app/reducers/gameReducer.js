import dictionary from '../dictionary';
import jay from 'underscore';

const words = jay.shuffle(dictionary).slice(0, 100);
const wordListState = [];
for(let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordArray = [];
    for(let j = 0; j < word.length; j++) {
        wordArray.push({letter: word[j], status: 'pending'});
    }
    wordListState.push(wordArray);
}
const gameReducer = (state = {paul: wordListState, currentIndex: [0, 0], userInput: ''}, action) => {
    switch (action.type) {
        case 'CHAR_ADDED':
            const newState = Object.assign({}, state);
            console.log(newState);
            const wordIndex = newState.currentIndex[0];
            const letterIndex = newState.currentIndex[1];
            if (action.letter === newState.paul[wordIndex][letterIndex].letter) {
                newState.paul[wordIndex][letterIndex].status = 'correct';
            } else {
                newState.paul[wordIndex][letterIndex].status = 'incorrect';
            }
            newState.currentIndex[1]++;
            newState.userInput = newState.userInput.concat(action.letter);
            return newState;
        case 'NEXT_WORD':
            const nextWordState = Object.assign({}, state);
            nextWordState.currentIndex[0]++;
            nextWordState.currentIndex[1] = 0;
            nextWordState.userInput = '';
            return nextWordState;
        default:
            console.log(state);
            return state;
    }
};

export default gameReducer;
