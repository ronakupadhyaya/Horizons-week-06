import React from 'react';
import Routes from '../routes';
import GameContainer from '../containers/GameContainer';

const WordBox = ({ wordList }) => {
  return (
    <div class="main">
    <div class="wordbox">
      {wordList.map(word => <span>{word}</span>)}
    </div>
    </div>
  )
}

export default WordBox;
