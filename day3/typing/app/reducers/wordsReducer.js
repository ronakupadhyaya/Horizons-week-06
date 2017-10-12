import _ from 'underscore';
import * as types from '../actions/types';
import dictionary from '../dictionary';

// Generating starting state in preparation for START_GAME action
const numWords = 100;

// generateWords returns an array of `number` arrays each representing a word
// each word array looks like [letterObj]
// each letterObj looks like {letter: `l`, status: `string`}
// status can be `correct`, `incorrect`, `pending`
const generateWords = (number) => {
  const scrambled = _.shuffle(dictionary).slice(0, number);
  const ret = [];
  scrambled.forEach( (word) => {
    const wordArray = [];
    word.split('').forEach( (letter) => {
      wordArray.push({
        letter: letter,
        status: 'pending',
      });
    } );
    ret.push(wordArray);
  } );
  return ret;
};

// wordsReducer manages the `words` key of state
const wordsReducer = (state = [], action) => {
  switch(action.type) {
    case types.START_GAME: {
      if(state.length !== 0) {
        throw new Error(`${types.START_GAME} was dispatched when game is ongoing.`);
      }
      return generateWords(numWords);
    }

    case types.NEW_CHAR: {
      if(state.length === 0) {
        throw new Error(`${types.NEW_CHAR} was dispatched before game start.`);
      }
      const currPos = action.currPos;

      // catching cases where currPos is outside of array lengths
      if(currPos.word > state.length) {
        return state;
      } else if (currPos.char > state[currPos.word].length) {
        return state;
      }

      // Deep copying state
      const updatedState = state.map( (wordArray, i) => {
        if(i === currPos.word) {
          return wordArray.map( (charObj, j) => {
            if(j === currPos.char) {
              if(charObj.letter === action.char) {
                return Object.assign({}, charObj, {status: 'correct'});
              }
              return Object.assign({}, charObj, {status: 'incorrect'});
            }
            return Object.assign({}, charObj);
          } );
        }
        return wordArray.map( (charObj) => {
          return Object.assign({}, charObj);
        } );
      } ); // fuck deep copying
      return updatedState;
    }

    case types.NEXT_WORD: {
      const currPos = action.currPos;
      if(currPos.char < state[currPos.word].length - 1) {
        return state.map( (wordArray, i) => {
          // Get everything at indices j greater than currPos.char
          if(i === currPos.word) {
            return wordArray.map( (charObj, j) => {
              if(j >= currPos.char) {
                return Object.assign({}, charObj, {status: 'incorrect'});
              }
              return Object.assign({}, charObj);
            } );
          }
          // Else, we are at a later word so just copy them
          return wordArray.map( (charObj) => {
            return Object.assign({}, charObj);
          } );
        } );
      }
      // If currPos.char is at the end of a word (or after), do nothing
      return state;
    }

    case types.END_GAME: {
      // On END_GAME, reset the words key of state
      return [];
    }

    default: {
      return state;
    }
  }
};

export default wordsReducer;
