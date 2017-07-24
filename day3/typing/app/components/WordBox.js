import React from 'react';
import PropTypes from 'prop-types';

class WordBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="main">
          <div className="wordbox">
            {this.props.wordList.map((word, index) => this.props.format(index))}
          </div>
        </div>
      );
    }
}

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array,
    format: PropTypes.func
};
export default WordBox;
