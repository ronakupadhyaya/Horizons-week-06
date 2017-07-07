import React from 'react';
import PropTypes from 'prop-types';

class WordBox extends React.Component {
    render() {
        const finalArr = [];
        // Rendering correct and incorrect characters
        this.props.userInput.forEach((word, index) => {
            const arr1 = word.split('');
            const arr2 = this.props.wordList[index].split('');
            arr2.forEach((char, index2) => {
                if(char === arr1[index2]) {
                    finalArr.push(<span style={{color: 'blue'}}>{char}</span>);
                }else{
                    finalArr.push(<span style={{color: 'yellow'}}>{char}</span>);
                }
            });
        });
        // rendering words that haven't been hit yet:
        this.props.wordList.slice(this.props.userInput.length).forEach((word) => {
            const temp = word.split('');
            const tempArr = temp.map(tempChar => <span style={{color: 'grey'}}>{tempChar}</span>);
            finalArr.push(tempArr);
            finalArr.push(<span>{' '}</span>);
        });

        return (
            <div className="wordbox">
              {finalArr}
            </div>
        );
    }
}

WordBox.propTypes = {
    wordList: PropTypes.array,
    userInput: PropTypes.array
};
//
// const mapStateToProps = (state) => {
//     return {
//         // YOUR MAP STATE TO PROPS HERE
//
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         // YOUR MAP DISPATCH TO PROPS HERE
//     };
// };

export default WordBox;
