import React from 'react';
import { connect } from 'react-redux';

function InfoBar({currentTime}) {
    return (
        <div className="info-bar">
            <div className="time">Seconds left: {currentTime}</div>
            <div className="score">Score: 0</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentTime: state.game.currentTime
    };
};


export default connect(
    mapStateToProps,
)(InfoBar);
