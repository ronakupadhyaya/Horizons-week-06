import PropTypes from 'prop-types';
import React from 'react';
import Word from './Word';

// Parses the 2D words array into an array of <Word> elements ready to be rendered

const Game = (props) => {
  return (
    <div className="row">
      <div className="gameBox col-xs-8 col-xs-offset-2">
        {props.words.map( (wordArray, index) => {
          return <Word key={index} word={wordArray} />;
        } ) }
      </div>
    </div>
  );
};

Game.propTypes = {
  words: PropTypes.array,
};


export default Game;
