import React from 'react';
import Timer from './Timer';

class InfoBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
          <span><Timer mins={this.props.time}/> score: {this.props.score} multiplier: {this.props.multiplier}</span>
        </div>
      );
    }
}

InfoBar.propTypes = {
    score: Number,
    multiplier: Number,
    time: Number
};

export default InfoBar;
