import React from 'react';
import { connect } from 'react-redux';

function WordBox({words}) {
    return (
        <div className="word-box">
            { words.join(' ') }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        words: state.game.wordList
    };
};


export default connect(
    mapStateToProps
)(WordBox);
