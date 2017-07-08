import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    onInput = (input) => {
        if(this.props.time === 0) {
            console.log(this);
            this.props.onStartGame();
            const ourTimer = setInterval(() => this.props.onDecrementTimer(), 1000);
            setTimeout(() =>{
                clearInterval(ourTimer);
                this.props.onEndGame();
            }, 60000);
        }
    }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordsList={this.props.wordsList} />
                <TextBox onInput={this.onInput}/>
                <InfoBar time={this.props.time}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordsList: PropTypes.array,
    onStartGame: PropTypes.func,
    onEndGame: PropTypes.func,
    onDecrementTimer: PropTypes.func,
    time: PropTypes.number,
};

const mapStateToProps = (state) => {
    return {
        wordsList: state.gameReducer.wordsList,
        time: state.gameReducer.time,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => dispatch({type: 'START_GAME'}),
        onEndGame: () => dispatch({type: 'END_GAME'}),
        onDecrementTimer: () => dispatch({type: 'DECREMENT_TIMER'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
