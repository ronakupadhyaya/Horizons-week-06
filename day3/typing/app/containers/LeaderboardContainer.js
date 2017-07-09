import React from 'react';
// import { connect } from 'react-redux';
import Leaderboard from '../components/leaderboard_components/Leaderboard';


class LeaderboardContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Current Leaders</h1>
                <Leaderboard />
            </div>
        );
    }
}

export default LeaderboardContainer;
