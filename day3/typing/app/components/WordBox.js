import React, {Component} from 'react';
import PropTypes from 'prop-types';

// class WordBox extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render(){
//       return(
//
//       )
//     }
// }
const WordBox = ({wordList}) => {
    return(
      <div className="wordbox">
        {wordList}
      </div>
    );
};

WordBox.propTypes = {
    wordList: PropTypes.array
};

export default WordBox;
