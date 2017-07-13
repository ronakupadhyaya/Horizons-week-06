import React, { Component } from 'react';
import Board from '../components/Board';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
    handlePlayGame = () => {
        this.props.restartGame();
    }

    render() {
        return (
            <div style={{textAlign: 'center', marginTop: 50}}>
                <Board handlePlayGame={this.handlePlayGame} history={this.props.history}/>
            </div>
        );
    }
}

LeaderBoard.propTypes = {
    restartGame: PropTypes.func,
    history: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
    return {
        restartGame: () => dispatch({type: 'RESTART_GAME'}),
    };
};


export default connect(null, mapDispatchToProps)(LeaderBoard);
