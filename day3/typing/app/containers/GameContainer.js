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
            <div>
                I am the game container!
                {<WordBox wordList={this.props.wordList} />}
                <span className="incorrect">{this.props.timeLeft}</span>
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
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    newLetter: PropTypes.func,
    timeLeft: PropTypes.number,
    tick: PropTypes.func,
    started: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game.wordList,
        currentIndex: state.game.currentIndex,
        timeLeft: state.game.timeLeft,
        started: state.game.started
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newLetter: (input) => {
            dispatch({type: 'NEW_LETTER', letter: input});
        },
        tick: () => {
            dispatch({type: 'TICK'});
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
