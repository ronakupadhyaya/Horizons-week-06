import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Leaderboard extends React.Component {
    render() {
        const leaders = JSON.parse(localStorage.getItem('leaders'));
        const leaderArray = Object.keys(leaders).map(key => leaders[key]);
        return (
            <div>
                <ul>
                    {leaderArray.map((player, index) => {
                        return (<li key={index}>{index + 1}: {player.name} {'(' + player.score + ')'}</li>);
                    })}
                </ul>
                <button>
                    <Link to="/end">Go Back</Link>
                </button>
            </div>
        );
    }
}

Leaderboard.propTypes = {};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => { // dispatch
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Leaderboard);
