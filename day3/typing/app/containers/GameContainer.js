import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/index';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
    }

    render() {
        return (
            <div>
                I am the game container!
                <WordBox wordList={this.props.wordList} />
                <TextBox />
                <InfoBar />
            </div>
        );
    }
}

// const GameContainer = (props) => {
//   const { wordList } = props;
//   return (
//     <div>
//       I am the game container!
//       {
//         props.wordList
//       }
//     </div>
//   )
// }
GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    onInput: PropTypes.func,
    wordList: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.wordList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
