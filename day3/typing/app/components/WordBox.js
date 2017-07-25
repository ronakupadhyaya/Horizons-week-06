import React from 'react';
import PropTypes from 'prop-types';

let cnt = 0;

class WordBox extends React.Component {
    constructor(props) {
        super(props);
    }
    checkEquals(index, index2) {
        if(index + index2 === 0) {
            cnt = 0;
        }
        if(this.props.words[index].split('')[index2] === this.props.typed[index + index2] && cnt < this.props.typed.length) {
            cnt += 1;
            return {backgroundColor: 'blue'};
        }
        return null;
    }
    render() {
        return (
        <div className="container" >
          <div className="wordBox" >
              {this.props.words.map((word, index) => {
                  return (<span>
                    {word.split('').map((letter, index2) => {
                        const style = this.checkEquals(index, index2);
                        return <span style={style} key={Math.random() * Number.MAX_VALUE}>{letter}</span>;
                    })}{' '}
                  </span>);
              })}
          </div>
        </div>
      );
    }
}

WordBox.propTypes = {
    words: PropTypes.array,
    typed: PropTypes.array
};

export default WordBox;
