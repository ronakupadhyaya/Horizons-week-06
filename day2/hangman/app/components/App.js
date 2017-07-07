import React from 'react';

import { Link, Route } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
  <div>
    <h1>Redux Hangman</h1>
    <Route exact path="/" component={GameContainer} />
    <Route exact path="/about" component={About} />
    <footer style={{'paddingTop': '20px'}}>
      <Link to="/"> To the Game </Link><br></br>
      <Link to="/about"> To About </Link>
    </footer>
  </div>;
export default App;
