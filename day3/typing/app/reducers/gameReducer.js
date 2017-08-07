import words from '../dictionary';
import _ from 'underscore';
import * as types from '../actions/types';

const shuffledWords = _.shuffle(words);
const hundredShuffled = shuffledWords.slice(0, 100);
const finalArr = [];
hundredShuffled.forEach(function firstLoop(word) {
    word.split('').forEach(function secondLoop(letter) {
        finalArr.push(letter);
    });
    finalArr.push(' ');
});

console.log(hundredShuffled);
console.log(finalArr);

const initialState = {
    letterList: finalArr,
    timer: 7,
    isGameStarted: false,
    userInput: []
};

const gameReducer = (state = initialState, action)=>{
    switch(action.type) {
        case types.START_GAME:
            return Object.assign({}, state, { isGameStarted: true });
        case types.END_GAME:
            return Object.assign({}, state, { isGameStarted: false, timer: 7 });
        case types.DECREMENT_TIMER:
            return Object.assign({}, state, { timer: state.timer - 1 });
        case types.NEW_INPUT:
            const newArr = action.input.split('');
            const listOfLetters = [...state.letterList];
            for(var i = 0; i < newArr.length; i++){
              if(newArr[i] === state.letterList[i]){
                listOfLetters.
              }
            }
            return Object.assign({}, state, { userInput: newArr});
        default: return state;
    }
};

export default gameReducer;
