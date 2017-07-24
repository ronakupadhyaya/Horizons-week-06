import words from '../dictionary'
import _ from 'underscore'

var shuffleWords = _.shuffle(words);
var wordList = shuffleWords.slice(0, 100);

const gameReducer = (state = wordList, action) {
  switch(action.type) {
    case " "
      return ;
  }
}

export default gameReducer
