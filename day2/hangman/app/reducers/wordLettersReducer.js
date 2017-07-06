/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const wordLettersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GOOD_GUESS':
            const newList = state.slice();
            newList.forEach((item, index)=>{
                if(item.letter === action.letter) {
                    newList[index].guessed = true;
                }
            });
            return newList;
        case 'CHOSEN':
            const list = action.wordChosen.split('');
            return list.map((item, index)=>{
                if(index % 2 === 0) {
                    return {letter: item, guessed: true};
                }
                return {letter: item, guessed: false};
            });
        default:
            return state;
    }
};

export default wordLettersReducer;
