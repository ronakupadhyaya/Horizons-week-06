import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FinalScore from '../components/FinalScore';
import PlayGame from '../components/PlayGame';
import LeaderBoard from '../components/Leaderboard';

class TimeUp extends Component {
    handlePlayGame = () => {
        this.props.restartGame();
    }

    render() {
        return (
          <div>
            <FinalScore totalScore={this.props.totalScore}/>
            <div style={{textAlign: 'center', marginTop: 50}}>
            <PlayGame history={this.props.history} handlePlayGame={this.handlePlayGame}/>
            <LeaderBoard history={this.props.history} />
            </div>
          </div>
        );
    }
}

TimeUp.propTypes = {
    totalScore: PropTypes.number,
    restartGame: PropTypes.func,
    history: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        totalScore: state.gameReducer.totalScore,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        restartGame: () => dispatch({type: 'RESTART_GAME'}),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimeUp);
