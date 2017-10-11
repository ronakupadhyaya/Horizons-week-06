import React from 'react';
import PropTypes from 'prop-types';

const WordBox = ({ wordList }) => {
    return (
        <div>
            {
              wordList.map(word => word.map(letter => <span
                  className={letter.status}>{letter.letter}</span>))
            }
        </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
