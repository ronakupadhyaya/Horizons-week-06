import React from 'react';
import TextBox from './TextBox';
import PropTypes from 'prop-types';

const InfoBar = ({onInput, timer}) => {
    return(
    <div className="infoBar">
      <span> Score: {0}</span> <br />
      <div className="textBox">
        <TextBox onInput={() => onInput()}/>
      </div>
      <span> Time Remaining: {timer} seconds</span>
      <span>Word Streak: {0}</span>
    </div>
  );
};

InfoBar.propTypes = {
    onInput: PropTypes.func,
    timer: PropTypes.number
};
export default InfoBar;
