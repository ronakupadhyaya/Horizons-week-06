import React from 'react';
import PropTypes from 'prop-types';

const PlayGame = (props) => {
    const handleSubmit = () => {
        props.handlePlayGame();
        props.history.push('/');
    };
    return (
      <input onClick={handleSubmit} type="button" value="Play Again" className="button"/>
    );
};


PlayGame.propTypes = {
    history: PropTypes.object,
    handlePlayGame: PropTypes.func
};

export default PlayGame;
