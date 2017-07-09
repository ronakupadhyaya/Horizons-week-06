import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FinalScore from '../components/time_up_components/FinalScore';
import PlayGameButton from '../components/time_up_components/PlayGameButton';
import ViewLeaderboardButton from '../components/time_up_components/ViewLeaderboardButton';


class TimeUp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('im here');
        console.log('props in did mount', this.props);
    }

    render() {
        console.log('final score in time up', this.props.finalScore);
        return (
            <div>
                <FinalScore />
                <PlayGameButton />
                <ViewLeaderboardButton />
            </div>
        );
    }
}

TimeUp.propTypes = {
    finalScore: PropTypes.number
};

const mapStateToProps = (state) => {
    console.log('state in end', state.totalScore);
    return {
        finalScore: state.totalScore
    };
};

const mapDispatchToProps = () => { // dispatch
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeUp);
