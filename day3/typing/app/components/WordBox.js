import React from 'react';
import PropTypes from 'prop-types';

let letterCount = 0;
let wordCount = 0;
let streakFind = 0;
let streakCount = 0;

class WordBox extends React.Component {

    componentWillMount() {
        this.props.setScore(wordCount);
        this.props.setStreak(streakCount);
    }
    render() {
        const { userInput, wordList} = this.props;
  // SET UP TO CONVERT THE ARRAY OF WORDS INTO LETTERS
        const ArrayOfWordLetters = [];
        wordList.forEach((word) => {
            for (let i = 0; i < word.length; i++) {
                ArrayOfWordLetters.push(word[i]);
            }
            ArrayOfWordLetters.push(' ');
        });
// SET UP TO CONVERT THE ARRAY OF USER INPUT INTO LETTERS
        const ArrayOfInputLetters = [];
        userInput.forEach((word) => {
            for (let i = 0; i < word.length; i++) {
                ArrayOfInputLetters.push(word[i]);
            }
        });
// FUNCTION TO SET WORD COUNT TO ZERO
        const setWordToZero = function() {
            wordCount = 0;
        };

        const logCount = function() {
            console.log('word count is', wordCount);
            console.log('streak find is', streakFind);
            console.log('streak count is', streakCount);
        };

// FUNCTION TO KEEP TRACK AND UPDATE THE STREAK COUNT
        const tellStreak = function() {
          // Go through each user input
            userInput.forEach((word, index) => {
              // If there is an actual word (not just empty space)
                if(!!word.trim()) {
                  // If that word is equal to a corresponding word in the box
                    if (word.trim() === wordList[index]) {
                      // Add one to the streak
                        streakFind ++;
                        // If the streak is now greater, update the streak
                        if(streakFind > streakCount) {
                            streakCount = streakFind;
                        }
                        // If you the streak gets interupted, set the finder to zero
                    } else {
                        streakFind = 0;
                    }
                }
            });
            // After this has been run, reset the finder so there isn't overlap
            streakFind = 0;
        };
        return (
        <div>
          <div className="main">
            <div className="wordbox">
              {/* MAPPING FUNCTION THAT ENSURE DISPLAY IS CORRECT */}
              {ArrayOfWordLetters.map((letter, index) => {
                  if(ArrayOfInputLetters[index] === letter) {
                      letterCount += 1;
                  }
                  if(ArrayOfInputLetters[index] === ' ') {
                      return <span>{letter}</span>;
                  }
                  if(letter === ' ') {
                      return <span>{letter}</span>;
                  }
                  if(letter === ArrayOfInputLetters[index]) {
                      return <span className="correct">{letter}</span>;
                  }
                  if(letter !== ArrayOfInputLetters[index] && !!ArrayOfInputLetters[index]) {
                      return <span className="wrong">{letter}</span>;
                  }
                  return <span>{letter}</span>;
              })
              }

              {setWordToZero()}
              {tellStreak()}
              { wordList.map((word, index) => {
                  if (!!userInput[index]) {
                      if(word === userInput[index].trim()) {
                          wordCount += 1;
                      }
                  }
              })
              }
              {logCount()}
            </div>
          </div>
        </div>
      );
    }
}

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    setScore: PropTypes.func,
    setStreak: PropTypes.func,
};


export default WordBox;
