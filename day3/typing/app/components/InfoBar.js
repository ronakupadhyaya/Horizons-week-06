import React from 'react';
import PropTypes from 'prop-types';


class InfoBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div>
          {
            (this.props.timeLeft < 10) ? <div>Time Left: <span className="red"><b>{this.props.timeLeft}</b></span> Seconds!</div> : <div>Time Left: <b>{this.props.timeLeft}</b> Seconds</div>
          }
          <div className="score"> Score: <b>{this.props.totalScore}</b></div>
        </div>
      );
    }
}

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    totalScore: PropTypes.number
};
export default InfoBar;
