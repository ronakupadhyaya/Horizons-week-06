
// My code for Man of Hangman
// import React from 'react';
// import imgUrls from '../data/data';
// import PropTypes from 'prop-types';
//
// const Man = ({ badGuesses, guessedLetters }) => {
//     return (
//       <div>
//         <p>
//             <span id="incorrect"> Incorrect guesses: {badGuesses} </span>
//             {guessedLetters.map((letter) => <span>{letter}</span>)}
//         </p>
//
//         <img src={imgUrls[badGuesses]}/>
//       </div>
//   );
// };
//
// Man.propTypes = {
//     badGuesses: PropTypes.number,
//     guessedLetters: PropTypes.array
// };
//
// export default Man;

// Ricky's code for Man for Hangman: gets Bad Guesses straight from redux state
import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Man = ({ badGuesses, guessedLetters }) => {
    return (
      <div>
        <p>
            <span id="incorrect"> Incorrect guesses: {badGuesses} </span>
            {guessedLetters.map((letter) => <span>{letter}</span>)}
        </p>

        <img src={imgUrls[badGuesses]}/>
      </div>
  );
};

Man.propTypes = {
    badGuesses: PropTypes.number,
    guessedLetters: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Man);
