import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

import { startGame, timer, endGame } from '../actions/index';

let id;
class GameContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         id: 0
    //     };
    // }

    onInput() {
        this.intervalId = setInterval(() => {
        // this.setState({id: id});
            if (this.props.timer === 0) {
                this.props.onEndGame();
                clearInterval(this.intervalId);
            } else {
                this.props.onTimer();
            }
        }, 1000);
    }

    // componentWillUnMount() {
    //     clearInterval(this.state.id);
    // }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordList={this.props.wordList}/>
                <TextBox onInput={this.onInput.bind(this)}/>
                <InfoBar timer={this.props.timer}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    timer: PropTypes.number,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    onStartGame: PropTypes.func,
    onTimer: PropTypes.func,
    onEndGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList,
        timer: state.timer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onStartGame: () => {
            dispatch(startGame());
        },
        onTimer: () => {
            dispatch(timer());
        },
        onEndGame: () => {
            dispatch(endGame());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
