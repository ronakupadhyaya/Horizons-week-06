import words from '../dictionary';
import _ from 'underscore';
const shuffledWords = _.shuffle(words);

const gameReducer = (state = {wordList: shuffledWords, userInput: [], currentIndex: [0, 0]}, action) => {
    switch (action.type) {
        case 'START_GAME':
            console.log('start game ction triggered');
            return state;
            // return Object.assign({}, state, {wordList: shuffledWords.slice(0, 100)});
        case 'CHAR_ADDED':
            // console.log('char added action triggered with word', action.word);
            // console.log('user input inside charadded is', state.userInput);
            const newword = action.word;
            const newInput = [...state.userInput];
            newInput[state.currentIndex[0]] = newword;
            return Object.assign({}, state, {userInput: newInput});
        case 'NEXT_WORD':
            return Object.assign({}, state, {currentIndex: [state.currentIndex[0] + 1, 0]});
        case 'DECREMENT_TIMER':
        case 'END_GAME':
        default:
            return state;
    }
};
export default gameReducer;
