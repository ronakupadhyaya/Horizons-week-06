import React from 'react';
import { connect } from 'react-redux';

function InfoBar({currentTime, score}) {
    return (
        <div className="info-bar">
            <div className="time">Seconds left: {currentTime}</div>
            <div className="score">Score: {score}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentTime: state.game.currentTime,
        score: state.game.score
    };
};


export default connect(
    mapStateToProps,
)(InfoBar);
