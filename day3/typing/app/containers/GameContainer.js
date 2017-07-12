import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import Infobar from '../components/Infobar';
import { UserInputing } from '../actions/index';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intervaId: ''
        };
    }
    onInput(input) {
        console.log('nnn', input);
        if(this.props.timer === 60) {
            this.props.onStart();
            this.setState({intervalId: setInterval(()=>{
                if(this.props.timer === 0) {
                    this.props.onEnd();
                    clearInterval(this.intervalId);
                }else{
                    console.log('naah');
                    this.props.onTick();
                }
            }, 1000)});
        }
    }

    render() {
        return (
            <div>
                I am the game container!
              <WordBox/>
              <Infobar timer={this.props.timer}/>
              <TextBox onType={(input)=> this.onInput( input)}
                onUserInput={(input)=> this.props.onUserInput( input)}
              />
            </div>
        );
    }
}

GameContainer.propTypes = {
    onInput: PropTypes.func,
    onStart: PropTypes.func,
    onTick: PropTypes.func,
    onEnd: PropTypes.func,
    timer: PropTypes.number,
    onUserInput: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList.words,
        timer: state.timer.timer
    };
};

const mapDispatchToProps = (  dispatch ) => {
    return {
        onStart: () => dispatch({type: 'START_GAME'}),
        onTick: () => dispatch({type: 'DECREMENT_TIMER'}),
        onEnd: () => dispatch({type: 'END_GAME'}),
        onUserInput: (input) => dispatch(UserInputing(input)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
