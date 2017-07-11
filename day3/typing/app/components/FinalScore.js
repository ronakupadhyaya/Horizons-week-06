import React from 'react';
import PropTypes from 'prop-types';

const FinalScore = ({ score }) => {
    return(
      <div>
        Final Score: {score}
      </div>
    );
};

FinalScore.propTypes = {
    score: PropTypes.number
};

export default FinalScore;
