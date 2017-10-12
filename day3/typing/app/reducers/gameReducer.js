import words from '../dictionary';
import _ from 'underscore';

const wordList = _.shuffle(words).slice(0, 100);

const wordListState = [];
for(let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    const wordArray = [];
    for (let j = 0; j < word.length; j++) {
        wordArray.push({letter: word[j], status: 'pending'});
    }
    wordListState.push(wordArray);
}

const gameReducer = (state = {wordListState, currentIndex: [0, 0], userInput: ''}, action ) => {
    switch(action.type) {
        case 'CHAR_ADDED':
            return{
                wordList: state.word.wordListState,
                userInput: state.word.userInput + action.letter
            };
        default:
            return state;
    }
};

export default gameReducer;
