import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({timer}) => {
    return (
    <div>
      Score: <br/>
      Time Remaining: {timer}<br/>
      Word Streak: <br/>
    </div>
  );
};

InfoBar.propTypes = {
    timer: PropTypes.number
};

export default InfoBar;
