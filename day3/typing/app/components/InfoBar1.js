import React from 'react';
import PropTypes from 'prop-types';

const InfoBar = ({time, score}) => {
    return(
      <div>
        <div >
          Time: {time}
        </div><br></br>
        <div >
          Score: {score}
        </div><br></br>
      </div>
    );
};

InfoBar.propTypes = {
    time: PropTypes.number,
    score: PropTypes.number,
};

export default InfoBar;
