import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class GameOver extends React.Component {
    constructor(props) {
        super(props);
    }
    OnRestart() {

    }
    render() {
        return (
        <div className="newbox">
          <h2><center>Time's Up!</center></h2>
          <div><center>Your Score: <b>{this.props.totalScore}</b></center></div>
          <span><button className="startButton" onClick={() => this.props.onRestart()}>Start New Game</button></span>
        </div>
      );
    }
}

GameOver.propTypes = {
    totalScore: PropTypes.number,
    onRestart: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        gameOver: state.gameReducer[5]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRestart: () => dispatch({type: 'RESTART_GAME'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameOver);
