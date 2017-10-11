import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';

class GameOver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initials: ''
        };
        this.handleInputchange = this.handleInputchange.bind(this);
        this.submitChange = this.submitChange.bind(this);
    }
    componentDidMount() {
        console.log('Got in?', this.props.showLeaderBoard);
        if(this.props.showLeaderBoard) {
            console.log('props', this.props);
        }
    }
    handleInputchange(event) {
        this.setState({initials: event.target.value});
    }

    submitChange() {
        this.props.enterLeaderBoard(this.props.topTen, this.state.initials, this.props.score);
    }
    render() {
        if(this.props.showLeaderBoard) {
            console.log('dispatch');
            this.props.onNavigateTo('/leaderboard');
        }
        const {score, topTen} = this.props;
        if(topTen) {
            return (
              <div style={{textAlign: 'center'}}>
                  <p> Congratulations!! You are in the top ten! </p>
                  <span>Enter your initials: <input value={this.state.initials} onChange={this.handleInputchange}></input></span>
                  <button onClick={this.submitChange}> Submit </button>
              </div>
            );
        }
        return(
          <div>
            <p> Game Over! </p>
            <p> Your score:  {score}</p>
            <button onClick={() => this.props.restartGame()}> Restart Game </button>
          </div>
        );
    }
}

GameOver.propTypes = {
    score: PropTypes.number,
    restartGame: PropTypes.func,
    topTen: PropTypes.number,
    place: PropTypes.number,
    enterLeaderBoard: PropTypes.func,
    showLeaderBoard: PropTypes.bool,
    onNavigateTo: PropTypes.func
};
const mapStateToProps = (state) => {
    return{
        score: state.gameState.score,
        topTen: state.gameState.topTen,
        showLeaderBoard: state.gameState.showLeaderBoard
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        restartGame: () => dispatch({type: 'RESTART_GAME'}),
        enterLeaderBoard: (place, initials, score) => dispatch({type: 'NEW_LEADER', place, initials, score}),
        onNavigateTo: (dest) => dispatch(push(dest))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
