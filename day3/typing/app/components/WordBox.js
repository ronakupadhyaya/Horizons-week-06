import React from 'react';
import PropTypes from 'prop-types';

// import Routes from '../routes';
// import GameContainer from '../containers/GameContainer';

const checkWord = () => {
    if (this.props.wordList[this.props.currentIndex[0]][this.props.currentIndex[1]] === this.props.userInputArray[this.props.currentIndex[1]]) {
        return 'blue';
    }
    if (this.props.wordList[this.props.currentIndex[0]][this.props.currentIndex[1]] !== this.props.userInputArray[this.props.currentIndex[1]]) {
        return 'yellow';
    }
};

class WordBox extends React.Component {
    render() {
        return (
            <div className="word_box">
                {
                    this.props.wordList.map((word) => <span className={checkWord} key={word}>{word} </span>)
                }
            </div>
        );
    }
}


WordBox.propTypes = {
    wordList: PropTypes.array,
    currentIndex: PropTypes.array,
    userInputArray: PropTypes.array
};

export default WordBox;
