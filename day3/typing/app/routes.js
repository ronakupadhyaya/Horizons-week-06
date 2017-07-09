// Sits in App to route containers
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameOver from './containers/GameOver';
import GameContainer from './containers/GameContainer';

// Switch for normal game and gameover screen
export default (
	<Switch>
		<Route exact path="/" component={GameContainer} />
		<Route path="/GameOver" component={GameOver}/>
	</Switch>
);
