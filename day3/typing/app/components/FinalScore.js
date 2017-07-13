import React from 'react';
import PropTypes from 'prop-types';

const FinalScore = ({ totalScore }) => {
    return (
      <div style={{textAlign: 'center', marginTop: 70}}>
        <h1>Time Up</h1>
        <h1>Your Score: {totalScore}</h1>
      </div>
    );
};

FinalScore.propTypes = {
    totalScore: PropTypes.number,
};

export default FinalScore;
