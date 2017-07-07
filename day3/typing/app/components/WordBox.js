import React from 'react';
import PropTypes from 'prop-types';
// import Box from './Box';

const WordBox = ({ wordList, userInput, currentIndex }) => {
    // let userindex = 0;
    // let i = 0;
    // const elmts = [];
    // // const currentWordIndex = currentIndex[0];
    // // const currentCharIndex = currentIndex[1];
    // console.log('userinput inside wordbox is', userInput);
    // // mapwords() {
    // wordList.map(elem => <span className={'correct'}>{elemChar}</span>)
    // for (let i = 0; i < wordList.length; i++) {
    //     console.log('entered for loop', elmts);
    //     const word = wordList[i];
    //     console.log('in wordbox word is ', word);
    //     for (let j = 0; j < word.split('').length; i++) {
    //         const char = word[j];
    //         // console.log('user ');
    //         if(userInput.length < i) {
    //             if(userInput[i].length < j) {
    //                 if(char === userInput[i][j]) {
    //                     console.log('char matched');
    //                     elmts.push(<span className="correct">{char}</span>);
    //                 }else {
    //                     elmts.push(<span className="wrong">{char}</span>);
    //                 }
    //             }
    //         }else {
    //             elmts.push(<span className="char">{char}</span>);
    //         }
    //     }
    // }
    // }
        // while(i < word.length){
        //     if(char === wordList[i]){
        //
        //     }
        // }
    return (
      <div className="wordBox">
          {console.log('current userinput i wordbox', userInput)}
          {wordList.map((word, i) => {
              //   console.log('wordlist word index is ', i);
              return (<div className="word"> {word.split('').map((char, j) => {
                  let classname = 'char';
                  if(i < userInput.length && j < userInput[i].length) {
                      if(userInput[i][j] === char) {
                          classname = 'correct';
                          //   return (<span className="correct">{char}</span>);
                      } else {
                          classname = 'wrong';
                          //   return (<span className="wrong">{char}</span>);
                      }
                  }
                  return (<span className={classname}>{char}</span>);
              })}
              </div>);
          }
          )}
      </div>
  );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    currentIndex: PropTypes.array
};

export default WordBox;
