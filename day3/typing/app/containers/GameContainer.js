import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import rootReducer from '../reducers/index';
import Wordbox from '../components/Wordbox';
import Textbox from '../components/Textbox';
import InfoBar from '../components/InfoBar';
import { startGame, decreaseTime, endGame } from '../actions/index';

class GameContainer extends React.Component {
    onInput(input) {
        this.props.wordList;
    }

    render() {
        return (
            <div>
                I am the game container!
                <Textbox />
            </div>
        );
    }
}

// const GameContainer = (props) => {
//  const { wordList } = props;
//  const wordList = props.wordList;
//   return (
//     <div>
//         I am the game container!
//         {wordList}
//     </div>
//   );
// }

GameContainer.propTypes = {
    // badGuesses: PropTypes.number,
    // wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array,
    onGameStart: PropTypes.func,
    onDecreaseTime: PropTypes.func,
    onEndGame: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        wordList: state.wordList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGameStart: (start) => {
            dispatch(startGame(start));
        },
        onDecreaseTime: (time) => {
            dispatch(decreaseTime(time));
        },
        onEndGame: (status) => {
            dispatch(endGame(status));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
