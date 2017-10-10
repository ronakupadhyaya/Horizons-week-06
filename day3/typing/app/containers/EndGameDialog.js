import React from 'react';
import { connect } from 'react-redux';

function EndGameDialog({score, close}) {
    return (
        <div className="end-game">
            <div className="score">
                <p>Time's up!</p>
                <p>Your score: {score}</p>
            </div>
            <button onClick={close} className="start-game">Go back</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        score: state.game.score
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch({type: 'CLOSE_DIALOG'})
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EndGameDialog);
