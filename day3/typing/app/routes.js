import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameContainer from './containers/GameContainer';
import Score from './components/Score';

export default (
	<Switch>
		<Route exact path="/score" component={Score} />
		<Route exact path="/" component={GameContainer} />
	</Switch>
);
