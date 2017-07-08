import React from 'react';
import PropTypes from 'prop-types';
import uuid4 from 'uuid4';
// import Routes from '../routes';
// import GameContainer from '../containers/GameContainer';

const WordBox = ({wordList}) => {
    const finalArray = [];
    return (
      <div className="main">
        <div className="wordbox">
          {/* {wordList.map((word) =>
            word.split('').map((letter) => {
                return (<span>{letter}</span>);
            })
          ).join()} */}
          {wordList.forEach((word)=>{
              word.split('').forEach(letter =>
            finalArray.push(<span key ={uuid4()}>{letter}</span> )
          );
              finalArray.push(<span key ={uuid4()}>{' '}</span> );
          })}
          {finalArray}
        </div>
    </div>
  );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
