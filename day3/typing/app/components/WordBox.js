import React from 'react';
import PropTypes from 'prop-types';
// import Box from './Box';

const WordBox = ({ wordList, userInput}) => {
    let correctLetters = 0;
    let correctWords = 0;
  //   const letterList = wordList.join(' ').split('');
  //   const inputLetters = userInput.join(' ').split('');
  //   return (
  //     <div className="wordBox">
  //         {letterList.map((char, i) => {
  //             let classname = 'char';
  //             if(char !== ' ' && i < inputLetters.length) {
  //                 if(inputLetters[i] === char) {
  //                     classname = 'correct';
  //                 } else {
  //                     classname = 'wrong';
  //                 }
  //             }
  //             return (<span className={classname}>{char}</span>);
  //         })}
  //     </div>
  // );
    return (
        <div className="wordBox">
            {/* {console.log('current userinput i wordbox', userInput)} */}
            {wordList.map((word, i) => {
                // console.log(this);
                  //   console.log('wordlist word index is ', i);
                const wordDiv = (<div className={'word ' + {i}} key={i} id={i} > {
                    word.split('').map((char, j) => {
                        let classname = 'na';
                        // console.log('current word being built is', this);
                        // if(word.length ) IF WORD LENGTH IS NOT SAME AS INPUT LENGTH AT THAT INDEX THEN
                        // if(word.length !== userInput[i]) {
                        //     // make this words dif (access by key) the color red
                        //
                        // }
                        if(userInput && userInput[i]) {
                            if(i < userInput.length && j < userInput[i].length) {
                                if(userInput[i][j] === char) {
                                    classname = 'correctChar';
                                    correctLetters += 1;
                                    //   return (<span className="correct">{char}</span>);
                                } else {
                                    classname = 'wrongChar';
                                    //   return (<span className="wrong">{char}</span>);
                                }
                            }
                        }
                        return (<span key={i + '' + j} className={classname}>{char}</span>);
                    })
                    // classname !== 'na' && classname === 'wrong' ? correctWords += 1 : '';
                }
                </div>);
                const correctWordDiv = document.getElementById(i);
                if( word === userInput[i]) {
                    // console.log('matched word');
                    correctWords += 1;
                    // console.log('correct word ', document.getElementById(i));
                    correctWordDiv.setAttribute('class', 'word correctWord');
                } else{
                    // const wrongWordDiv = document.getElementById(i);
                    // wrongWordDiv.setAttribute('class', 'word incorrect');
                    // correctWordDiv.setAttribute('style', 'background-color: yellow');
                }
                return wordDiv;
            }
            )}
            {/* {console.log('correctWords: ', correctWords, '    correct letters: ', correctLetters)} */}
        </div>
  );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array
};

export default WordBox;
