import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Board from '../components/Board';
class LeaderBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const leaderBoard = JSON.parse(localStorage.getItem('leaderboard'));
        console.log('leaders', leaderBoard);
        const arrOfObj = [];
        for(const key in leaderBoard) {
            if(leaderBoard.hasOwnProperty(key)) {
                console.log('key', key);
                arrOfObj.push(leaderBoard[key]);
            }
        }
        return(
          <div>
          <Board leaderBoard={arrOfObj} />
          <button onClick={() => this.props.playGame()}> Play Game Again </button>
          </div>
        );
    }
  }
LeaderBoard.propTypes = {
    playGame: PropTypes.func
};
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => dispatch({type: 'RESTART_GAME'})
    };
};

export default connect(null, mapDispatchToProps)(LeaderBoard);
