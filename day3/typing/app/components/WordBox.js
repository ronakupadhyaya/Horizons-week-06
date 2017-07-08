import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({wordList, currentIndex, userInput}) => {
    let keyValue = 0;
    // wordList.map(word=> {
    //     word.split('').forEach(letter=> {
    //         let color = 'grey';
    //         if (userInput[0]) {
    //             if (wordList.indexOf(word) < 1 && word.indexOf(letter) < userInput[0].length) {
    //                 // console.log(letter, userInput[0].split('')[word.indexOf(letter)]);
    //                 if (letter === userInput[0].split('')[word.indexOf(letter)]) {
    //                     color = 'blue';
    //                     console.log('blue');
    //                 } else {
    //                     color = 'yellow';
    //                 }
    //             }
    //         }
    //     });
    //     return
    // });
    return (
      <div className="main">
        <div className="wordbox">
            {wordList.map(word => {
                return (
                  <span key={word}>{word.split('').map((letter, letterIndex)=> {
                      let color = 'grey';
                      // console.log(wordList.indexOf(word), word.indexOf(letter), currentIndex, userInput);
                      if (wordList.indexOf(word) < currentIndex[0] ||
                      (wordList.indexOf(word) === currentIndex[0] &&
                      letterIndex < currentIndex[1]) &&
                      userInput[currentIndex[0]]
                    ) {
                          console.log(wordList.indexOf(word) < currentIndex[0]);
                          console.log(wordList.indexOf(word) === currentIndex[0] &&
                            word.indexOf(letter) < currentIndex[1]);
                          if (letter === userInput[wordList.indexOf(word)].split('')[letterIndex]) {
                              console.log('blue');
                              color = 'blue';
                          } else {
                              color = 'red';
                          }
                      }
                      return (
                          <span key={keyValue++} style={{color: color}}>{letter}</span>
                      );
                  })} </span>
              );
            })
          };
        </div>
      </div>
  );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array
};

export default WordBox;
