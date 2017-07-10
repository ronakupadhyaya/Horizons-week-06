import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ userWord, correctWord}) => {
    const style = {
        display: 'inline-block',
        marginRight: '0.7em'
    };

    const chars = correctWord.split('').map((correctChar, i) => {
        const userChar = userWord ? userWord[i] : undefined;
        let className = '';
        if (userChar) {
            className = userChar === correctChar ? 'correct' : 'wrong';
        }
        return (<span key={i} className={className}>{correctChar}</span>);
    });

    return (
      <div className="inactive" style={style}>
        {chars}
      </div>
  );
};

Word.propTypes = {
    userWord: PropTypes.string,
    correctWord: PropTypes.string,
};

export default Word;
