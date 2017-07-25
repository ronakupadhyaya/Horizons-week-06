import React from 'react';
import PropTypes from 'prop-types';

const FinalScore = ({score}) =>
    <h2>Final Score: {score}</h2>;

FinalScore.propTypes = {
    score: PropTypes.number
};


export default FinalScore;
