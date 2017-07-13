import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InitialsInput from '../components/InitialsInput';
import SubmitButton from '../components/SubmitButton';

class Register extends Component {
    initInput(input) {
        this.props.setUsername(input);
    }

    render() {
        return (
          <div>
          <InitialsInput initInput={this.initInput.bind(this)} username={this.props.username}/>
          <SubmitButton setUsername={this.props.setUsername} username={this.props.username} totalScore={this.props.totalScore} history={this.props.history}/>
          </div>
        );
    }
}

Register.propTypes = {
    history: PropTypes.object,
    submitInit: PropTypes.func,
    initInput: PropTypes.func,
    totalScore: PropTypes.number,
    username: PropTypes.string,
    setUsername: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        totalScore: state.gameReducer.totalScore,
        value: state.gameReducer.value,
        username: state.gameReducer.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUsername: (u) => dispatch({type: 'SET_USERNAME', payload: u})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
