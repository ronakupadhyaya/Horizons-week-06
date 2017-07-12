import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InitialsInput from '../components/InitialsInput';
import SubmitButton from '../components/SubmitButton';

class RegisterContainer extends Component {
    initInput(input) {
        const scores = JSON.parse(localStorage.getItem('score'));
        Object.values(scores).map((item) => {
            if (item.score === this.props.totalScore) {
                item.name = input;
            }
        });
        localStorage.setItem('score', JSON.stringify(scores));
    }

    render() {
        return (
          <div>
          <InitialsInput initInput={this.initInput} value={this.props.value}/>
          <SubmitButton/>
          </div>
        );
    }
}

RegisterContainer.propTypes = {
    history: PropTypes.object,
    submitInit: PropTypes.func,
    initInput: PropTypes.func,
    totalScore: PropTypes.number,
    value: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        totalScore: state.gameReducer.totalScore,
        value: state.gameReducer.value,
    };
};

export default connect(mapStateToProps)(RegisterContainer);
