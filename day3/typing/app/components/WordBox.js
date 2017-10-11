import React, {Component} from 'react';
import PropTypes from 'prop-types';

const WordBox = ({wordList}) => {
    return(
      <div className="wordbox">
        {wordList}
      </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
