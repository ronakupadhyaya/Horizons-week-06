import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    onInput(/* input */) {
        if(this.props.timer === 60) {
            this.props.onStartGame();
            this.interval = setInterval(()=> {
                if(this.props.timer < 1) {
                    this.props.onEndGame();
                    clearInterval(this.interval);
                }else{
                    this.props.onDecrementTimer();
                }
            }, 1000);
        }
    }

    render() {
        return (
            <div>
                I am the game container!
                {
                    // YOUR GAME COMPONENT HERE
                }
                <WordBox wordList={this.props.wordList} />
                <InfoBar onInput={()=> this.onInput()} timer={this.props.timer}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    timer: PropTypes.number,
    onStartGame: PropTypes.func,
    onDecrementTimer: PropTypes.func,
    onEndGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game.wordList,
        timer: state.game.timer,
        userInput: state.game.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch({type: 'START_GAME'}),
        onDecrementTimer: () => dispatch({type: 'DECREMENT_TIMER'}),
        onEndGame: () => dispatch({type: 'END_GAME'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
