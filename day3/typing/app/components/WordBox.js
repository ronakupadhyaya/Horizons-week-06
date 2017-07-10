import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

const WordBox = (wordList) => {
    return (
      <div>
        <div class="main">
          <div class="wordbox">
            <span class="correct">h</span>
            <span class="correct">e</span>
            <span class="correct">l</span>
            <span class="correct">l</span>
            <span class="correct">o</span>
            <span class="wrong">h</span>
            <span class="correct">e</span>
            <span class="correct">l</span>
            <span class="wrong">l</span>
            <span class="correct">o</span>
            words that you have not typed yet go here
            {/* placeholder text
            placeholder text
            placeholder text
            placeholder text */}
          </div>
        </div>
      </div>
  );
};

wordbox.propTypes = {
    wordList: PropTypes.string
};

export default WorBox;
