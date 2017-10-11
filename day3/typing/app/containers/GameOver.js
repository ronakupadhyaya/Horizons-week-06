import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class GameOver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initials: ''
        };
        this.handleInputchange = this.handleInputchange.bind(this);
        this.submitChange = this.submitChange.bind(this);
    }

    handleInputchange(event) {
        this.setState({initials: event.target.value});
    }

    submitChange() {
        this.props.enterLeaderBoard(this.props.topTen, this.state.initials, this.props.score);
    }
    render() {
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
    enterLeaderBoard: PropTypes.func
};
const mapStateToProps = (state) => {
    return{
        score: state.gameState.score,
        topTen: state.gameState.topTen
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        restartGame: () => dispatch({type: 'RESTART_GAME'}),
        enterLeaderBoard: (place, initials, score) => dispatch({type: 'NEW_LEADER', place, initials, score})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
