import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
        if(this.props.userInput !== ' ') {
            this.props.onAddChar(input);
        } else {
            this.props.onNextWord();
        }
    }

    render() {
        console.log(this.props.wordList);
        const elements = [];
        for (let i = 0; i < this.props.wordList.paul.length; i++) {
            for (let j = 0; j < this.props.wordList.paul[i].length; j++) {
                elements.push(this.props.wordList.paul[i][j]);
            }
            elements.push({letter: ' ', status: 'space'});
        }
        console.log('LOOK HERE', elements);
        return (
            <div className="gameContainer">
              <div>
                {
                  elements.map((x) => <span className= {x.status}>{x.letter}</span>)
                }
              </div>
              <input type="text" value= {this.props.userInput} placeholder="hey" onKeyPress= {() => this.onInput(this.props.userInput)}/>
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.object,
    position: PropTypes.array,
    userInput: PropTypes.string,
    onAddChar: PropTypes.func,
    onNextWord: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game,
        position: state.game.currentIndex,
        userInput: state.game.userInput
        // YOUR MAP STATE TO PROPS HERE
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
        onAddChar: (letter)=> dispatch({type: 'CHAR_ADDED', letter: (letter)}),
        // onNextWord: () => dispatch(nextWord())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
