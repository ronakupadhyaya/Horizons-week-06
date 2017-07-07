import React from 'react';
import Routes from '../routes';
import GameContainer from '../containers/GameContainer';

const WordBox = ({ wordsList }) => {
    <div className="main">
      <div className="wordbox">
        {wordsList.map((character) => <span>{character}</span>)}
      </div>
    </div>
};

export default WordBox;
