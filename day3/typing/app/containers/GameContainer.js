import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox';
// import TextBox from './TextBox';

class GameContainer extends React.Component {
    startTick() {
        setInterval(() => {
            this.props.tick();
        }, 1000);
    }

    render() {
        let input;

        return (
            this.props.gameOver ?
            <div>
                I am the game container!
                {<WordBox wordList={this.props.wordList} />}
                <span className="incorrect">Time: {this.props.timeLeft}</span>
                <span style={{marginLeft: '50vw'}} className="incorrect">Score: {this.props.score}</span>
                <br></br>
                <input type="text"
                    placeholder="Guess a letter"
                    value={''}
                    ref={node => {input = node;}}
                    onChange={() => {
                        this.props.newLetter(input.value);
                        !this.props.started ? this.startTick() : console.log('hi');
                    }}
                />
            </div>
            :
            <div>
                <h1>Time's up!</h1>
                <h2>Your Score: {this.props.score}</h2>
                <button onClick={() => this.props.newGame}>Play Game</button>
                <button>View Leaderboard</button>
            </div>

        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    newLetter: PropTypes.func,
    timeLeft: PropTypes.number,
    score: PropTypes.number,
    tick: PropTypes.func,
    started: PropTypes.bool,
    gameOver: PropTypes.bool,
    newGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game.wordList,
        currentIndex: state.game.currentIndex,
        timeLeft: state.game.timeLeft,
        score: state.game.score,
        started: state.game.started,
        gameOver: state.game.gameOver
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newLetter: (input) => {
            dispatch({type: 'NEW_LETTER', letter: input});
        },
        tick: () => {
            dispatch({type: 'TICK'});
        },
        newGame: () => {
            dispatch({type: 'NEW_GAME'});
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
