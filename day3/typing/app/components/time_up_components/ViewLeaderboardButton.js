import React from 'react';
import {Link} from 'react-router-dom';

class ViewLeaderboardButton extends React.Component {

    render() {
        return (
            <div>
                <button>
                    <Link to="/leaderboard">See Leaderboard</Link>
                </button>
            </div>
        );
    }
}

export default ViewLeaderboardButton;
