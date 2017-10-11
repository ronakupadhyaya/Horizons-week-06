import React from 'react';
import { Link, Route } from 'react-router-dom';
import GameContainer from '../containers/GameContainer';
import About from '../components/About';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact={true} path="/" component={GameContainer}/>
        <Route exact={true} path="/about" component={About}/>
      <div style={{paddingTop: '10px'}}>
        <Link to="/" style={{width: '10px'}}>Game</Link>
        <Link to="/about" style={{width: '10px', paddingLeft: '10px'}}>About</Link>
      </div>
    </div>;

export default App;
