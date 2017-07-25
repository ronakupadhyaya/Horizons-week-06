import React from 'react';
import PropTypes from 'prop-types';

class InfoBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style;
        (this.props.time === 0) ? style = {color: 'red'} : style = {color: 'black'};
        return (
        <div>
          <span style={style}> Time left: {this.props.time}</span>
          <span> Score: {this.props.score} Multiplier: {this.props.multiplier}</span>
        </div>
      );
    }
}

InfoBar.propTypes = {
    score: PropTypes.number,
    multiplier: PropTypes.number,
    time: PropTypes.number
};

export default InfoBar;
