import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Board from '../components/Board';
import {push} from 'react-router-redux';
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
          <button onClick={() => {this.props.playGame(); this.props.onNavigateTo('/');}}> Play Game Again </button>
          </div>
        );
    }
  }
LeaderBoard.propTypes = {
    playGame: PropTypes.func,
    showLeaderBoard: PropTypes.bool,
    onNavigateTo: PropTypes.func
};

// const mapStateToProps = (state) => {
//     return {
//         showLeaderBoard: state.gameState.showLeaderBoard
//     };
// };

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => dispatch({type: 'RESTART_GAME'}),
        onNavigateTo: (dest) => dispatch(push(dest))
    };
};

export default connect(null, mapDispatchToProps)(LeaderBoard);
