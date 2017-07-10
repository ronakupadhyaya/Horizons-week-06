import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timer, score, streak}) => {
    return (
    <div>
      Score: {score}<br/>
      Time Remaining: {timer}<br/>
      Word Streak: {streak}<br/>
    </div>
  );
};

InfoBar.propTypes = {
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number
};

export default InfoBar;
