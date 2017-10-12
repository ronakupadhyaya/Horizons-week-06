import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TextBox extends React.Component {
    render() {
        return (
      <input type="text" value = {this.props.userInput} onKeyPress= {(e) => this.props.inputFunction(String.fromCharCode(e.which))}/>

    );
    }

}


TextBox.propTypes = {
    userInput: PropTypes.string,
    inputFunction: PropTypes.func
};


const mapStateToProps = (state) => {
    return {
        userInput: state.game.userInput
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextBox);
