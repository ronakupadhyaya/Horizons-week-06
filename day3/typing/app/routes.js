import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameContainer from './containers/GameContainer';
import Score from './components/Score';
import RegisterContainer from './containers/RegisterContainer';
import LeaderBoard from './containers/LeaderBoardContainer';

export default (
	<Switch>
		<Route exact path="/" component={GameContainer} />
		<Route exact path="/register" component={RegisterContainer} />
		<Route exact path="/score" component={Score} />
		<Route exact path="/leaderboard" component={LeaderBoard} />
	</Switch>
);
