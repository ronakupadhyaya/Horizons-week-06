const words = require('../dictionary.js');
import _ from 'underscore';

const defaultState = {
    wordList: [],
    userInput: '',
    currentIndex: [0, 0],
    timeLeft: 60,
    score: 0,
    gameOver: false,
    topTen: 0,
    streak: 0,
    showLeaderBoard: false
};
function cloneWordList(wordList) {
    return wordList.map(word =>
          word.map(letterObj =>
              Object.assign({}, letterObj)));
}

const gameReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'START_GAME':
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
            return {...state, wordList: wordsArray, currentIndex: [0, 0], userInput: ''};
        case 'RESTART_GAME':
            return defaultState;
        case 'CHAR_ADDED':
            const newState = {...state};
            const currentWord = newState.currentIndex[0];
            const currentLetter = newState.currentIndex[1];
            const anotherArray = cloneWordList(state.wordList);
            const compareLetter = anotherArray[currentWord][currentLetter];
            let newScore = newState.score;
            let newStreak = newState.streak;
            if(action.letter === compareLetter.letter) {
                anotherArray[currentWord][currentLetter].status = 'correct';
                newScore = newScore + 1;
            } else{
                anotherArray[currentWord][currentLetter].status = 'incorrect';
                newScore = newScore - 1;
                newStreak = 0;
            }
            const newIndexArr = [...state.currentIndex];
            newIndexArr[1] = newIndexArr[1] + 1;
            return {...state, wordList: anotherArray, currentIndex: newIndexArr, userInput: state.userInput + action.letter, score: newScore, streak: newStreak};
        case 'NEXT_WORD':
            const newIndex = [...state.currentIndex];
            // check through every word in current word;
            let anotherStreak = state.streak;
            let anotherScore = state.score;
            const nowWord = state.wordList[newIndex[0]];
            let allCorrect = true;
            for(let i = 0; i < nowWord.length; i++) {
                if(nowWord[i].status === 'incorrect') {
                    allCorrect = false;
                }
            }

            if(allCorrect)  {
                anotherStreak = anotherStreak + 1;
                anotherScore = anotherScore + anotherStreak;
            }
            newIndex[0] = newIndex[0] + 1;
            newIndex[1] = 0;
            return {...state, currentIndex: newIndex, userInput: state.userInput + ' ', streak: anotherStreak, score: anotherScore};
        case 'DECREMENT_TIMER':
            return {...state, timeLeft: state.timeLeft - 1};
        case 'END_GAME':
            const leaderboard = JSON.parse(localStorage.getItem('leaderboard'));
            let topTen = 0;
            for(const key in leaderboard) {
                if(leaderboard[key].score < state.score) {
                    topTen = parseInt(key, 10);
                    break;
                }
            }
            return {...state, currentIndex: [0, 0], userInput: '', timeLeft: 60, topTen: topTen, gameOver: true};
        case 'NEW_LEADER':
            const newLeaderboard = JSON.parse(localStorage.getItem('leaderboard'));
            newLeaderboard[action.place].name = action.initials;
            newLeaderboard[action.place].score = action.score;
            localStorage.setItem('leaderboard', JSON.stringify(newLeaderboard));
            console.log('NEW?');
            return {...state, showLeaderBoard: true};
        default:
            return state;
    }
};


export default gameReducer;
