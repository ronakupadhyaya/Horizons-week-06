import words from '../dictionary'
import _ from 'underscore'

var shuffleWords = _.shuffle(words);
var hundredWords = shuffleWords.slice(0, 100);

const gameReducer = (state = hundredWords, action) {
  switch(action.type) {
    case " "
      return ;
  }
}
