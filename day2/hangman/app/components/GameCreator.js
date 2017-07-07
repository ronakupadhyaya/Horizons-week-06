import React from 'react';
import GameContainer from '../containers/GameContainer.js';
import {Link, Route} from 'react-router-dom';

const GameCreator = () =>
      <div>
        <Link to="/game">Start Game</Link>
        <Route exact path="/game" component={GameContainer} />
      </div>;


export default GameCreator;
