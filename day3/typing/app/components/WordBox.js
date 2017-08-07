import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ letterList, userInput }) => {
    return (
          <div className="main">
            <div className="wordbox">
                {
                  letterList.map(function(letter, index) {
                      if(userInput) {
                          if(letter === userInput[index]) {
                              (<span className="correct">{letter}</span>);
                          } else{
                              (<span className="wrong">{letter}</span>);
                          }
                      } else {
                          (<span>{letter}</span>);
                      }
                  })
                }
            </div>
          </div>
    );
};

WordBox.propTypes = {
    letterList: PropTypes.array,
    userInput: PropTypes.array
};

export default WordBox;
