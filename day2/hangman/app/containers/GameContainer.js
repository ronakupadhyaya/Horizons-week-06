import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { inputNew: 'Test' };
    }
    render() {
        let input;
        let input2;
    // let variableHoldingInputField;
        const letterInAnswer = letter => this.props.wordLetters.some(
      letterObj => letterObj.letter === letter);
      /* the ref node thing in the code below is another way
      to handle input in React Forms */
        return (
        <div>
          <input type="password"
            value={this.state.inputNew}
            ref={node => {input2 = node;}}
            onChange={() => {
                this.setState({inputNew: input2.value});
                this.props.onNew(input2.value);
            }
            }
          />
          <Man badGuesses={this.props.badGuesses} />
          <div>
            Guessed: {this.props.guessedLetters.map(letter => <span>{letter} </span>)}
          </div>
          <Board wordLetters={this.props.wordLetters} />
          <input type="text"
            value={''}
            ref={node => {input = node;}}
            onChange={() => letterInAnswer(input.value) ? this.props.onGoodGuess(input.value) : this.props.onBadGuess(input.value) }
          />
        </div>
      );
    }
  }

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onNew: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBadGuess: (inputLetter) => dispatch({type: 'BAD_GUESS', letter: inputLetter}),
        onGoodGuess: (inputLetter) => dispatch({type: 'GOOD_GUESS', letter: inputLetter}),
        onNew: (word) => dispatch({type: 'NEW_GAME', word: word})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
