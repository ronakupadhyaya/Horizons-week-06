import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.createGame();
        this.onInput = this.onInput.bind(this);
    }

    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
        const letter = String.fromCharCode(input);
        if(letter !== ' ') {
            this.props.addChar(letter);
        } else{
            this.props.nextWord();
        }
    }

    render() {
        let output = [];
        for(let i = 0; i < this.props.wordList.length; i++) {
            const word = this.props.wordList[i];
            for(let j = 0; j < word.length; j++) {
                const letter = word[j];
                switch(letter.status) {
                    case 'pending':
                        output.push(<span>{letter.letter}</span>);
                        break;
                    case 'correct':
                        output.push(<span className="correct">{letter.letter}</span>);
                        break;
                    case 'incorrect':
                        output.push(<span className="wrong">{letter.letter}</span>);
                        break;
                    default:
                        output.push(<span>{letter.letter}</span>);
                }
            }
            output.push(<span> </span>);
        }
        const {userInput} = this.props;
        return (
            <div>
                I am the game container!

                    <WordBox wordList={output} />
                    <TextBox userInput={userInput} onInput = {this.onInput} />

            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    createGame: PropTypes.func,
    userInput: PropTypes.string,
    addChar: PropTypes.func,
    currentIndex: PropTypes.array,
    nextWord: PropTypes.func
};

const mapStateToProps = (state) => {
    console.log('STATE', state);
    return {
        wordList: state.gameState.wordList,
        userInput: state.gameState.userInput,
        currentIndex: state.gameState.currentIndex
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        createGame: () => dispatch({type: 'CREATE_GAME'}),
        addChar: (char) => dispatch({type: 'CHAR_ADDED', letter: char}),
        nextWord: () => dispatch({type: 'NEXT_WORD'})
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
