import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About.js';


const App = () =>
    <BrowserRouter>
      <div>
          <h1>Redux Hangman</h1>
          <Route exact={true} path="/about" component={About}/>
          <Route exact={true} path="/" component={GameContainer}/>
          <Link to="/">Game</Link>
          <br/>
          <Link to="/about">About</Link>
      </div>
    </BrowserRouter>;

export default App;
