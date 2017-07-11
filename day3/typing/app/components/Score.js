import React from 'react';
import TimeUp from '../containers/TimeUp';
import PropTypes from 'prop-types';

const Score = (props) => {
    return (
    <div>
      <h1 className="title">Typing Game</h1>
      <TimeUp history={props.history}/>
    </div>
    );
};

Score.propTypes = {
    history: PropTypes.object,
};

export default Score;
