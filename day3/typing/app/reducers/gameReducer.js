import moreWords from '../dictionary';
import {shuffle} from 'underscore';

function newWords() {
    const words = shuffle(moreWords).slice(0, 100);

    const wordListState = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordArray = [];
        for (let j = 0; j < word.length; j++) {
            wordArray.push({letter: word[j], status: 'pending'});
        }
        wordListState.push(wordArray);
    }
    return wordListState;
}

function cloneWordList(wordList) {
    return wordList.map(word =>
          word.map(letterObj =>
              Object.assign({}, letterObj)));
}

function gameReducer(state = [[], [0, 0], '', 60, 0, false], action) {
    switch (action.type) {
        case 'START_GAME' :
            const nState = state.slice();
            nState[0] = newWords();
            nState[1][0] = 0;
            nState[1][1] = 0;
            nState[2] = '';
            nState[3] = 60;
            nState[4] = 0;
            return nState;
        case 'DECREMENT_TIMER' :
            const mState = state.slice();
            mState[3] -= 1;
            return mState;
        case 'END_GAME':
            const oState = state.slice();
            oState[1][0] = 0;
            oState[1][1] = 0;
            oState[2] = '';
            oState[5] = true;
            return oState;
        case 'CHAR_ADDED':
            const newState = state.slice();
            const newWordList = cloneWordList(newState[0]);
            let newInputArray = newState[2].slice();
            newInputArray += action.letter;
            newState[2] = newInputArray;
            if (action.letter === newWordList[newState[1][0]][newState[1][1]].letter) {
                newWordList[newState[1][0]][newState[1][1]].status = 'correct';
                newState[0] = newWordList;
                newState[1][1] += 1;
                newState[4] += 1;
            }else {
                newWordList[newState[1][0]][newState[1][1]].status = 'incorrect';
                newState[0] = newWordList;
                newState[1][1] += 1;
                newState[4] -= 1;
            }
            return newState;
        case 'NEXT_WORD':
            const newerState = state.slice();
            newerState[2] = '';
            newerState[1][0] += 1;
            newerState[1][1] = 0;
            return newerState;
        case 'RESTART_GAME':
            const rState = state.slice();
            rState[5] = false;
            rState[1][0] = 0;
            rState[1][1] = 0;
            rState[4] = 0;
            rState[3] = 60;
            rState[0] = [];
            return rState;
        default:
            return state;
    }
}

export default gameReducer;
