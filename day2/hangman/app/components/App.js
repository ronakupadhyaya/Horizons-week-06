import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import GameContainer from '../containers/GameContainer';
import About from './About';

const App = () =>
	<BrowserRouter>
	    <div>
	        <h1>Redux Hangman</h1>
	        <Route path="/" exact={true} component={GameContainer} />
	        <Route path="/about" exact={true} component={About} />
	        <Link to="/">Main</Link>
	        <Link to="/about">About</Link>
	    </div>
    </BrowserRouter>;

export default App;
