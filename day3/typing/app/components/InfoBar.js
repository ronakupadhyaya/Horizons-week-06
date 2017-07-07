import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextBox from './TextBox.js';

class InfoBar extends React.Component {
    render() {
        this.props.onEnd(this.props.timer);
        return (
            <div>
              <span>Score: {this.props.totalScore}</span>
              <TextBox onInput={this.props.onInput} />
              <span>Time Remaining: {this.props.timer} </span><span>Word Streak: {this.props.currentStreak}</span>
            </div>
        );
    }
}

InfoBar.propTypes = {
    timer: PropTypes.number,
    totalScore: PropTypes.number,
    currentStreak: PropTypes.number,
    onInput: PropTypes.func,
    onEnd: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        timer: state.gameInfo.timer,
        totalScore: state.gameInfo.totalScore,
        currentStreak: state.gameInfo.currentStreak
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoBar);
