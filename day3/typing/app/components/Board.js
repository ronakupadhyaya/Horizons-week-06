import React from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {
    const handleSubmit = () => {
        props.handlePlayGame();
        props.history.push('/');
    };

    const scores = Object.values(JSON.parse(localStorage.getItem('score')));
    return (
        <div>
            <h1>Leaderboard</h1>
            {scores.map((item, index) => {
                return (
                    <h2 key={index}>TOP {index + 1} {item.name} {item.score}</h2>
                );
            })}
            <input onClick={handleSubmit} type="button" value="Play Again" className="button"/>
        </div>
    );
};

Board.propTypes = {
    history: PropTypes.object,
    handlePlayGame: PropTypes.func
};

export default Board;
