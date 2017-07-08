import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid';

const WordBox = ({renderState}) => {
    // const letterArray = [];
    // let count = 0;
    // wordList.forEach((word) => {
    //     for(let i = 0; i < word.length; i ++) {
    //         letterArray.push(<span>{word[i]}</span>)
    //     //     if(count + i < userList.length) {
    //     //         // console.log(userList);
    //     //         if(userList[count] === word[i]) {
    //     //             // console.log('correct', userList[count], word[i]);
    //     //             letterArray.push(<span key={uuidv1()} className="correct">{word[i]}</span>);
    //     //         }else{
    //     //             // console.log('wrong', userList[count], count, word[i]);
    //     //             letterArray.push(<span key={uuidv1()} className="wrong">{word[i]}</span>);
    //     //         }
    //     //     }else{
    //     //         // console.log('not found', word[i]);
    //     //         letterArray.push(<span key={uuidv1()}>{word[i]}</span>);
    //     //     }
    //     //     count += 1;
    //     // }
    //     // letterArray.push(<span key={uuidv1()}>{' '}</span>);
    //     // count += 1;
    // });
    return (
        <div className="main">
            <div className="wordbox">
                {renderState}
            </div>
        </div>
    );
};

WordBox.propTypes = {

    renderState: PropTypes.array,
};

export default WordBox;
