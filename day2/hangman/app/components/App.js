import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import About from './About.js';

import GameContainer from '../containers/GameContainer';

const App = () =>
    <div>
        <h1>Alex's Redux Hangman</h1>
        {/* <GameContainer /> */}
          <Route path="/" exact component={GameContainer}/>
          <Route path="/about" component={About} />
        <a ><Link to={"/"}>Game</Link></a>
        <a ><Link to={"/about"}>About</Link></a>
    </div>;
export default App;
