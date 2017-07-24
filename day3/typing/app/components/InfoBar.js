import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({ timerValue }) => (
  <div>
    Time: {timerValue >= 0 ? timerValue : 0}
  </div>
);

InfoBar.propTypes = {
    timerValue: PropTypes.number,
};

export default InfoBar;
