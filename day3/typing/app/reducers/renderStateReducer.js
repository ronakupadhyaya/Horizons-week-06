import words from '../dictionary';
import React from 'react';
import _ from 'underscore';

const wordList = _.shuffle(words).slice(0, 100);
const letterArray = [];
wordList.forEach((word) => {
    for(let i = 0; i < word.length; i ++) {
        letterArray.push(<span>{word[i]}</span>);
    }
    letterArray.push(<span>{' '}</span>);
});
const correct = 0;
const wrong = 0;
const streak = 0;
const score = 0;
const initialState = [letterArray, correct, wrong, streak, score];
const renderStateReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'START_GAME':
        case 'SCORE':
            const newState = [...state];
                        // newState[action.index] =
            if(newState[0][action.index].props.children === action.input) {
                newState[0][action.index] = <span className="correct">{newState[0][action.index].props.children}</span>;
                newState[1] += 1;
                newState[3] += 1;
                newState[4] += 1 + newState[3];
            }else{
                newState[0][action.index] = <span className="wrong">{newState[0][action.index].props.children}</span>;
                newState[2] += 1;
                newState[3] = 0;
            }
            return newState;
        default:
            // console.log('render', state);
            return state;
    }
};

export default renderStateReducer;
