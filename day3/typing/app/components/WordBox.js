import React from 'react';
import PropTypes from 'prop-types';

// let letterCount = 0;
// let wordCount = 1;
// let streakFind = 0;
// let streakCount = 1;

class WordBox extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     letterCount: 0,
        //     wordCount: 1,
        //     streakFind: 0,
        //     streakCount: 1
        // };
    }
// // can we try? yup... dont we need a setStreak?
//     componentWillMount() {
//         // calculate streak
//         this.tellStreak();
//
//         // calculate wordCount
//         let wordCount = 1;
//         this.props.wordList.map((word, index) => {
//             if (!!this.props.userInput[index]) {
//                 if(word === this.props.userInput[index].trim()) {
//                     wordCount += 1;
//                 }
//             }
//         });
//         this.props.setScore(wordCount);
//     }
//
//     // FUNCTION TO KEEP TRACK AND UPDATE THE STREAK COUNT
//     tellStreak() {
//         // Go through each user input
//         let streakFind = 0;
//         let streakCount = 1;
//         this.props.userInput.forEach((word, index) => {
//             // If there is an actual word (not just empty space)
//             if (!!word.trim()) {
//                 // If that word is equal to a corresponding word in the box
//                 if (word.trim() === this.props.wordList[index]) {
//                     // Add one to the streak
//                     streakFind++;
//                     // If the streak is now greater, update the streak
//                     if(streakFind > streakCount) {
//                         streakCount = streakFind;
//                     }
//                     // If you the streak gets interupted, set the finder to zero
//                 } else {
//                     streakFind = 0;
//                 }
//             }
//         });
//         this.props.setStreak(streakCount);
//         // After this has been run, reset the finder so there isn't overlap
//         // streakFind = 0;
//     }

    render() {
        const { userInput, wordList } = this.props;
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

        // const logCount = function() {
        console.log('state is', this.state);
            // console.log('word count is', wordCount);
            // console.log('streak find is', streakFind);
            // console.log('streak count is', streakCount);
        // };

        return (
        <div>
          <div className="main">
            <div className="wordbox">
              {/* MAPPING FUNCTION THAT ENSURE DISPLAY IS CORRECT */}
              {ArrayOfWordLetters.map((letter, index) => {
                  // if(ArrayOfInputLetters[index] === letter) {
                  //     letterCount += 1;
                  // }
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
              })}
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
