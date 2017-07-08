import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ time }) => {
    return (
      <div>
        <span>Time Remaining: {time}  </span>
        <span>Word Streak:   </span>
        <span>Score:   </span>
      </div>
    );
};

InfoBar.propTypes = {
    time: PropTypes.number,
};

export default InfoBar;
