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

const gameReducer = (state = {gameOver: 1, wordList: newState, userInput: '', currentIndex: [0, 0], timeLeft: 60, totalScore: 0, correct: 0, incorrect: 0}, action) => {
    const stateCopy = Object.assign({}, state);
    switch(action.type) {
        case 'GET_LIST':
            stateCopy.userInput = '';
            return stateCopy;
        case 'CHAR_ADDED':
            stateCopy.wordList = cloneWordList(state.wordList);
            console.log('length: ', stateCopy.wordList[stateCopy.currentIndex[0]].length);
            console.log('index: ', stateCopy.currentIndex[1]);
            if(stateCopy.currentIndex[1] < stateCopy.wordList[stateCopy.currentIndex[0]].length) {
                if(action.letter === stateCopy.wordList[stateCopy.currentIndex[0]][stateCopy.currentIndex[1]].letter) {
                    stateCopy.wordList[stateCopy.currentIndex[0]][stateCopy.currentIndex[1]].status = 'correct';
                    stateCopy.correct++;
                } else {
                    stateCopy.wordList[stateCopy.currentIndex[0]][stateCopy.currentIndex[1]].status = 'incorrect';
                    stateCopy.incorrect++;
                }
                stateCopy.currentIndex[1]++;
                stateCopy.userInput += action.letter;
            }  else {
                stateCopy.currentIndex[0]++;
                stateCopy.currentIndex[1] = 0;
            }


            return stateCopy;
        case 'NEXT_WORD':
            stateCopy.userInput = '';
            stateCopy.currentIndex[0]++;
            stateCopy.currentIndex[1] = 0;
            return stateCopy;
        case 'START_GAME':
            return {
                userInput: '',
                currentIndex: [0, 0],
                timeLeft: state.timeLeft - 1,
                wordList: state.wordList,
                totalScore: state.correct - state.incorrect,
                correct: state.correct,
                incorrect: state.incorrect,
                gameOver: state.gameOver
            };
        case  'DECREMENT_TIMER':
            return {
                userInput: state.userInput,
                currentIndex: state.currentIndex,
                timeLeft: state.timeLeft - 1,
                wordList: state.wordList,
                totalScore: state.correct - state.incorrect,
                correct: state.correct,
                incorrect: state.incorrect,
                gameOver: state.gameOver
            };
        case 'END_GAME':
            return {
                userInput: '',
                currentIndex: [0, 0],
                timeLeft: 0,
                wordList: state.wordList,
                correct: 0,
                incorrect: 0,
                totalScore: state.totalScore,
                gameOver: 0
            };
        case 'RESTART_GAME':
            const someState =  _.sample(words, 100);
            const newList = someState.map(word => {
                const wordSplit = word.split('');
                return wordSplit.map(letter => {
                    return {'letter': letter, 'status': 'pending'};
                });
            });

            return {
                gameOver: 1,
                currentIndex: [0, 0],
                totalScore: 0,
                correct: 0,
                incorrect: 0,
                wordList: newList,
                userInput: '',
                timeLeft: 60
            };
        default:
            return state;
    }
};

export default gameReducer;
