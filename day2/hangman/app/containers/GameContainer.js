import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import Man from '../components/Man'
import Board from '../components/Board'
import {onBadGuess} from '../actions/index.js'

const GameContainer = ({ badGuesses, wordLetters, onBadGuessClick }) => {
  let input
  // const letterInAnswer = letter => wordLetters.some(
  //    letterObj => letterObj.letter === letter);

  /* the ref node thing in the code below is another way
  to handle input in React Forms */
  return (
    <div>
      <Man badGuesses={badGuesses} />
      <Board wordLetters={wordLetters} />
      <input type="text"
        value={''}
        ref={ node => { input = node }}
        onChange={() => onBadGuessClick(input.value) }
      />
    </div>
  )
}

GameContainer.propTypes = {
  badGuesses: PropTypes.number,
  wordLetters: PropTypes.array,
  onBadGuessClick: PropTypes.func
}

const mapStateToProps = (/* state */) => {
  return {
    badGuesses: 0,
    wordLetters: [
      {letter: 'H', guessed: true},
      {letter: 'O', guessed: false},
      {letter: 'R', guessed: false},
      {letter: 'I', guessed: false},
      {letter: 'Z', guessed: true},
      {letter: 'O', guessed: false},
      {letter: 'N', guessed: true},
      {letter: 'S', guessed: false}
    ]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBadGuessClick: (inputLetter) => dispatch(onBadGuess(inputLetter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer)
