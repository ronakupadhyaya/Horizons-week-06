import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList, userList }) => {
    return (
        <div className="wordbox">
          {wordList.map((word, index) => (
            (userList.length - 1 === index) ?
            <div className="word active-word">
                {
                    word.split('').map((letter, letterIndex) => (
                        letterIndex < userList[userList.length - 1].length ?
                            userList[userList.length - 1][letterIndex] === letter ?
                                <span className="correct">{letter}</span> :
                                <span className="incorrect">{letter}</span> :
                            <span>{letter}</span>
                    ))
                }
            </div> :
            <div className="word">
                {
                    word.split('').map((letter, letterIndex) => (
                        index < userList.length ?
                            userList[index][letterIndex] === letter ?
                                <span className="correct">{letter}</span> :
                                <span className="incorrect">{letter}</span> :
                            <span>{letter}</span>
                    ))
                }
            </div>
          ))}
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array,
    userList: PropTypes.array
};

export default WordBox;
