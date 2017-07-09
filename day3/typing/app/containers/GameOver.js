// Component for taking care of game over
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Component
class GameOver extends React.Component {
    render() {
        return (
        <div className="main">
          <span id="gameover">GAME OVER</span>
          <p>Your Score: {this.props.score}</p>
          <p>Speed: {this.props.onIndex} characters per minute</p>
          <Link to="/" onClick={()=>this.props.newGame()}>Play Again</Link>
        </div>
      );
    }
}
// Validate
GameOver.propTypes = {
    score: PropTypes.number,
    onIndex: PropTypes.number,
    newGame: PropTypes.func
};
// Props
const mapStateToProps = (state) => {
    return {
        score: state.gameReducer.score,
        onIndex: state.gameReducer.onIndex,
    };
};
// Dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        newGame: () => dispatch({type: 'RESTART_GAME'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameOver);
