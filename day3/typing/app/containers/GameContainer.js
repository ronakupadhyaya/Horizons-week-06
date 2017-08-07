import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';
import * as actions from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: null,
        };
    }

    componentWillReceiveProps({ timer }) {
        console.log(timer);
        if(timer <= 0) {
            this.props.endGame();
            clearInterval(this.state.intervalId);
        }
    }

    onInput(input) {
        if(!this.props.isGameStarted) {
            this.props.startGame();
            const newId = setInterval(this.props.decrementTimer, 1000);
            this.setState({intervalId: newId});
        }
        this.props.newInput(input);
        this.onInput = this.onInput.bind(this);
    }

    render() {
        return (
            <div>
                {
                }
                <InfoBar timer={this.props.timer}/>
                <WordBox letterList={this.props.letterList} userInput={this.props.userInput}/>
                <TextBox handleInput={(input) => this.onInput(input)}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    onInput: PropTypes.func,
    newInput: PropTypes.func,
    letterList: PropTypes.array,
    userInput: PropTypes.array,
    isGameStarted: PropTypes.bool,
    decrementTimer: PropTypes.func,
    startGame: PropTypes.func,
    timer: PropTypes.number,
    endGame: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        letterList: state.gameReducer.letterList,
        isGameStarted: state.gameReducer.isGameStarted,
        timer: state.gameReducer.timer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => dispatch(actions.startGame()),
        endGame: () => dispatch(actions.endGame()),
        decrementTimer: () => dispatch(actions.decrementTimer()),
        newInput: (input) => dispatch(actions.newInput(input)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
