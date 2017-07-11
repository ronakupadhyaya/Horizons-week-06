import React from 'react';
import PropTypes from 'prop-types';


const ViewLeaderboardButton = ({ }) => {
    return(
    <span>
      <button>View Leaderboard</button>
    </span>
  );
};

ViewLeaderboardButton.propTypes = {
    timer: PropTypes.number,
    score: PropTypes.number,
    streak: PropTypes.number
};

export default ViewLeaderboardButton;
