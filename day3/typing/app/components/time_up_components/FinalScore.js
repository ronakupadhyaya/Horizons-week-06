import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FinalScore extends React.Component {
    render() {
        return (
            <div>
                <div className="main">
                    <h1>Time's up!</h1>
                </div>
                <div className="wordbox">
                    <p>Your score: {this.props.finalScore}</p>
                </div>
            </div>
        );
    }
}

FinalScore.propTypes = {
    finalScore: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        finalScore: state.totalScore
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FinalScore);
