import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox';
// import TextBox from './TextBox';

class GameContainer extends React.Component {

    // onInput(val) {
    //     const last = val.slice(-1);
    //     newLetter(last);
    // }

    render() {
        return (
            <div>
                I am the game container!
                {<WordBox wordList={this.props.wordList} />}

                <input type="text"
                    placeholder="Guess a letter"
                    value={''}
                    ref={node => {this.props.userInput = node;}}
                    onChange={() => console.log('wtf', this.props.userInput)}
                />

            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.string,
    currentIndex: PropTypes.array,
    newLetter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game.wordList,
        userInput: state.game.userInput,
        currentIndex: state.game.currentIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newLetter: (input) => {
            dispatch({type: 'NEW_LETTER', letter: input});
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
