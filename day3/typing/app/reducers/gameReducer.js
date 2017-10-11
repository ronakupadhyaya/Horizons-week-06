const words = require('../dictionary.js');
import _ from 'underscore';

const defaultState = {
    wordList: [],
    userInput: '',
    currentIndex: [0, 0],
    timeLeft: 60
};
function cloneWordList(wordList) {
    return wordList.map(word =>
          word.map(letterObj =>
              Object.assign({}, letterObj)));
}

const gameReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'CREATE_GAME':
            let newArray = [...state.wordList];
            newArray = _.shuffle(words);
            newArray = newArray.slice(0, 100);
            const wordsArray = [];
            for(let i = 0; i < newArray.length; i++) {
                const letterArray = [];
                for(let j = 0; j < newArray[i].length; j++) {
                    // append each letter status
                    letterArray.push({
                        letter: newArray[i][j],
                        status: 'pending'
                    });
                }
                wordsArray.push(letterArray);
            }
            return {...state, wordList: wordsArray};
        case 'CHAR_ADDED':
            const newState = {...state};
            console.log('NEWSTATE', newState);
            const currentWord = newState.currentIndex[0];
            const currentLetter = newState.currentIndex[1];
            const anotherArray = cloneWordList(state.wordList);
            const compareLetter = anotherArray[currentWord][currentLetter];
            if(action.letter === compareLetter.letter) {
                anotherArray[currentWord][currentLetter].status = 'correct';
            } else{
                anotherArray[currentWord][currentLetter].status = 'incorrect';
            }
            const newIndexArr = [...state.currentIndex];
            newIndexArr[1] = newIndexArr[1] + 1;
            return {...state, wordList: anotherArray, currentIndex: newIndexArr, userInput: state.userInput + action.letter};
        case 'NEXT_WORD':
            const newIndex = [...state.currentIndex];
            newIndex[0] = newIndex[0] + 1;
            return {...state, currentIndex: newIndex};
        default:
            return state;
    }
};


export default gameReducer;
