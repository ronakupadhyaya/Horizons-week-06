import React from 'react';
import { Link, Route } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from '../components/About';
// import NewGame from '../components/NewGame';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact={true} path="/" component={GameContainer} />
        <Route exact={true} path="/about" component={About} />
        {/* <Route exact={true} path="/new_game" component={NewGame} /> */}
        <div id="links">
          <Link to="/"> Game </Link>
          <Link to="/about"> About </Link>
          {/* <Link to="/new_game"> New Game </Link> */}
        </div>
    </div>;

export default App;
