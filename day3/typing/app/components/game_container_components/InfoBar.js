import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const InfoBar = ({timeLeft, totalScore, streakCount}) => {
    return (
        <div>
            Time: {timeLeft} Score: {totalScore} Word Streak: {streakCount[0]}
        </div>
    );
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
    totalScore: PropTypes.number,
    streakCount: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        timeLeft: state.timeLeft,
        totalScore: state.totalScore,
        streakCount: state.streakCount
    };
};

const mapDispatchToProps = () => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoBar);
