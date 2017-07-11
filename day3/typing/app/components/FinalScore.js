import React from 'react';
import PropTypes from 'prop-types';

const FinalScore = ({ totalScore }) => {
    return (
      <div>
        <h1>Time Up</h1>
        <h1>Your Score: </h1>
        {totalScore}
      </div>
    );
};

FinalScore.propTypes = {
    totalScore: PropTypes.number,
};

export default FinalScore;
