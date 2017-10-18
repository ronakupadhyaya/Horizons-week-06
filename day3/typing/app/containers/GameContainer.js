import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/wordBox';
import TextBox from '../components/TextBox';
import actionIndex from '../action/index';

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
        console.log(input);
        this.props.onInput(input, this.props.currentIndex, this.props.wordList);
    }

    render() {
        return (
            <div>
                <WordBox wordList={this.props.wordList}/>
                <TextBox keyInput={(e) => this.onInput(e)}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    userInput: PropTypes.array,
    onInput: PropTypes.func,
};


const mapStateToProps = (state) => {
    return {
        // YOUR MAP STATE TO PROPS HERE
        wordList: state.gameReducer,
        currentIndex: state.indexReducer,
        userInput: state.inputReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInput: (input, index, wordList) => {
            dispatch({type: 'CHAR_ADDED', letter: input, index: index, wordList: wordList});
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
