import React from 'react';
import {Link, Route} from 'react-router-dom';

import About from './About';
import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Redux Hangman</h1>
        <Route exact={true} path="/" component={GameContainer}/>
        <Route path="/about" component={About}/>
          <footer>
          <Link to="/about"><button> About </button></Link>
          <Link to="/"><button> Game </button></Link>
        </footer>
    </div>;

export default App;
