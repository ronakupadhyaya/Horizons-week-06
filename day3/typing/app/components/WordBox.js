import React from 'react';
import PropTypes from 'prop-types';


class WordBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let elements = [];
        for (let i = 0; i < this.props.wordList.length; i++) {
            const word = this.props.wordList[i];
            for (let j = 0; j < word.length; j++) {
                if (word[j].status === 'incorrect') {
                    elements.push(<span className="wrong">{word[j].letter}</span>);
                }else if (word[j].status === 'correct') {
                    elements.push(<span className="correct">{word[j].letter}</span>);
                }else {
                    elements.push(<span className="pending">{word[j].letter}</span>);
                }
            }
            elements.push(' ');
        }
        return (
        <div>
          {elements}
        </div>
      );
    }
}

WordBox.propTypes = {
    wordList: PropTypes.array
};
export default WordBox;
