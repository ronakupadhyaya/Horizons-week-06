import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import LeaderBoard from './containers/LeaderBoard';
import GameContainer from './containers/GameContainer';
import {withRouter} from 'react-router-dom';

export default (
	<Switch>
		<Route exact path="/" component={GameContainer} />
		<Route path="/leaderboard" component={LeaderBoard} />
	</Switch>
);
