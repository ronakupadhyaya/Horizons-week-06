import React from 'react';
import { Route, Link } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from '../components/About';

const App = () => (
  <div>
    <h1>Redux Hangman</h1>
    <Route path={'/about'} component={About}/>
    <Route path={'/'} component={GameContainer} exact/>
    <ul>
      <li><Link to={'/'}>Game</Link></li>
      <li><Link to={'/about'}>About</Link></li>
    </ul>
  </div>
);

export default App;
