import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timer, streak, score}) =>
    <center>
    <div>
      <p style={{color: 'red', display: 'inline'}}>Time remaining: {timer / 1000} seconds&emsp;&emsp;&emsp;</p>
      <p style={{color: 'red', display: 'inline'}}>Score: {score}&emsp;&emsp;&emsp;</p>
      <p style={{color: 'red', display: 'inline'}}>Word Streak: +{streak}</p>
    </div>
  </center>;

InfoBar.propTypes = {
    timer: PropTypes.number,
    streak: PropTypes.number,
    score: PropTypes.number
};

export default InfoBar;
