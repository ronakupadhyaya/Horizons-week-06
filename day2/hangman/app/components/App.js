import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact path="/" component={GameContainer} />
        <Route exact path="/about" component={About} />
        <nav className="footer navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/">Game</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
        </nav>
    </div>;

export default App;
