import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class GameOver extends React.Component  {

    handleClick = () => {
        this.props.restartGame();
    };

    render() {
        return (
            <div>
				<div className="wordBox">
					Time's Up!
					Your Score: {this.props.totalScore}
                    <button onClick={this.handleClick.bind(this)}> Play Game </button>
				</div>
            </div>
        );
    }
}

GameOver.propTypes = {
    totalScore: PropTypes.number,
    restartGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        totalScore: state.game.totalScore

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        restartGame: () => dispatch({type: 'RESTART_GAME'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameOver);
