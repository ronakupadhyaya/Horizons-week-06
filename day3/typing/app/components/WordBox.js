import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

let id = 0;
const WordBox = ({ wordList, userInput }) => {
    const inputArray = userInput.split(' ');
    const helperFunc = (ind1, ind2, letter) => {
        if(!inputArray[ind1][ind2]) {
            return 'inactive';
        }
        if(inputArray[ind1][ind2] === letter) {
            return 'correct';
        }
        return 'wrong';
    };
    return (
        <div className="main">
          <div className= "wordbox">
            {wordList.map((word, ind1)=> <span> {word.split('').map((letter, ind2) =>
            <span key={id++} className= {helperFunc(ind1, ind2, letter)}>{letter}</span> )}</span>
          )
            }
          </div>
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.string
};
const mapStateToProps = (state) => {
    return {
        wordList: state.wordList.words,
        userInput: state.userInput
    };
};
const mapDispatchToProps = ( /* dispatch*/ ) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordBox);
