import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import PlayGameButton from '../components/PlayGameButton.js';
import FinalScore from '../components/FinalScore.js';
import ViewLeaderboardButton from '../components/ViewLeaderboardButton.js';


class TimeUp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <h1>Times Up!</h1>
            <FinalScore score={this.props.score} />
            <PlayGameButton />
            <ViewLeaderboardButton score={this.props.score}/>
          </div>
        );
    }
}

TimeUp.propTypes = {
    score: PropTypes.number
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        score: state.scoreReducer.score,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeUp);
