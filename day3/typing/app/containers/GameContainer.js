import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';

class GameContainer extends React.Component  {
    onInput = (input) => {
        // YOUR ON INPUT FUNCTION HERE
        const inputValue = String.fromCharCode(input.which);
        console.log('input: ', inputValue);
        if(inputValue === '8') {
            console.log('you cannot do this.');
        }  else{
            if(inputValue.trim() !== '') {
                this.props.charAdded(inputValue.trim());
            }else {
                this.props.nextWord();
            }
        }
    };

    render() {
        return (
            <div>
                <WordBox wordList={this.props.wordList}/>
				<TextBox value={this.onInput}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    newGame: PropTypes.func,
    charAdded: PropTypes.func,
    nextWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.game.wordList,
        currentIndex: state.game.currentIndex,
        userInput: state.game.userInput,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        newGame: () => dispatch({type: 'GET_LIST'}),
        charAdded: (inputLetter) => dispatch({type: 'CHAR_ADDED', letter: inputLetter}),
        nextWord: () => dispatch({type: 'NEXT_WORD'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
