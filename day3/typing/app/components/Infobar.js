import React from 'react';
import PropTypes from 'prop-types';


const Infobar = ({ timer}) => {
    return (
        <div>
          {/* <span> Time Remaining :{timer}</span><br/>
          <span> Score :{totalScore}</span><br/>
          <span> Streak :{streak}</span><br/> */}
        <span> Time Remaining :{timer}</span><br/>
        </div>
    );
};

Infobar.propTypes = {
    wordList: PropTypes.array,
    timer: PropTypes.number
};

export default Infobar;
