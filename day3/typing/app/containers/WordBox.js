import React from 'react';
import { connect } from 'react-redux';

function WordBox({words}) {
    console.log(words);
    return (
        <div className="word-box">
            {
                words.map((word) => (
                    word.map(({letter, status}) => (
                        <span className={status}>{letter}</span>
                    )).concat(<span> </span>)
                ))
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        words: state.game.wordList
    };
};


export default connect(
    mapStateToProps,
)(WordBox);
