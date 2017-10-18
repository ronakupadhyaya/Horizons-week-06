import React from 'react';
import PropTypes from 'prop-types';

class WordBox extends React.Component {
    constructor(props) {
        super(props);
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
        <div className="wordbox">
          { elements }
        </div>
      );
    }
}

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
