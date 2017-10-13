import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList }) => {
    return (
        <div style={{width: '60%'}}>
            {
                wordList.map((word) => {
                    return (
                        <span>
                            {word.map((letter) => (<span className={letter.status}>{letter.letter}</span>))}
                            <span> </span>
                        </span>
              );})
            }
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
