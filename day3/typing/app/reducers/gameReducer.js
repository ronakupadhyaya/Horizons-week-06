import words from '../dictionary.js';
import _ from 'underscore';

const startingState =  _.sample(words, 100);

const newState = startingState.map(word => {
    const wordSplit = word.split('');
    return wordSplit.map(letter => {
        return {'letter': letter, 'status': 'pending'};
    });
});

function cloneWordList(wordList) {
    return wordList.map(word =>
          word.map(letterObj =>
              Object.assign({}, letterObj)));
}

//         [{letter: 'I', status: 'correct'}],
const gameReducer = (state = {wordList: newState, userInput: '', currentIndex: [0, 0]}, action) => {
    const stateCopy = Object.assign({}, state);
    switch(action.type) {
        case 'GET_LIST':
            state.userInput = '';
            return state;
        case 'CHAR_ADDED':
            stateCopy.wordList = cloneWordList(state.wordList);
            if(action.letter === stateCopy.wordList[stateCopy.currentIndex[0]][stateCopy.currentIndex[1]].letter) {
                stateCopy.wordList[stateCopy.currentIndex[0]][stateCopy.currentIndex[1]].status = 'correct';
            }else {
                stateCopy.wordList[stateCopy.currentIndex[0]][stateCopy.currentIndex[1]].status = 'incorrect';
            }
            stateCopy.currentIndex[1]++;
            stateCopy.userInput += action.letter;
            return stateCopy;
        case 'NEXT_WORD':
            stateCopy.userInput = '';
            stateCopy.currentIndex[0]++;
            stateCopy.currentIndex[1] = 0;
            return stateCopy;
        default:
            return state;
    }
};

export default gameReducer;
