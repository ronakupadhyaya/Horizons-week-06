import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const InfoBar = ({ timeLeft }) => {
    return (
      <div className="info-bar">
        <span>Time Left: {timeLeft}</span>
        <span>Score: </span>
      </div>
    );
};

InfoBar.propTypes = {
    timeLeft: PropTypes.number,
};

const mapStateToProps = state => ({
    timeLeft: state.timeLeft,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);
