import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import TextBox from '../components/TextBox';

class GameContainer extends React.Component {
    onInput(input) {
        console.log('INPUT', input);
    }

    render() {
        const elements = [];
        for (let i = 0; i < this.props.wordList.length; i++) {
            const word = this.props.wordList[i];
            for (let j = 0; j < word.length; j++) {
                elements.push(<span className={word[j].status}>{word[j].letter}</span>);
            }
            elements.push(' ');
        }
        return (
          <div>
            <div className="wordbox">
                I am the game container!
                {elements}
            </div>
            <TextBox userInput= {this.props.userInput} inputFunction = {(abc) => this.props.addChar(abc)}
             />
          </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    userInput: PropTypes.string,
    addChar: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game.wordListState,
        currentIndex: state.game.currentIndex,
        userInput: state.game.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addChar: (input) => dispatch({type: 'CHAR_ADDED', letter: input})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
