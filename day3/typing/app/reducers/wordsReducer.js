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
      if(state.gameStarted) {
        throw new Error(`${types.START_GAME} was dispatched when game is ongoing.`);
      }
      return generateWords(numWords);
    }

    case types.NEW_CHAR: {
      if(!state.gameStarted) {
        throw new Error(`${types.NEW_CHAR} was dispatched before game start.`);
      }
      return state;
    }

    case types.DECREMENT_TIMER: {
      // Check if gameStarted was updated to be false to reset words
      if(!state.gameStarted) {
        return [];
      }
      return state;
    }

    default: {
      return state;
    }
  }
};

export default wordsReducer;
