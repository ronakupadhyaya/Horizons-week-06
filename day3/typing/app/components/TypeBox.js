import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../actions/index';

class TypeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
    };
  }

  handleKeyPress(e) {
    e.preventDefault();
    if(e.key === ' ') {
      this.props.onSpace(this.props.currPos, this.props.words);
      this.setState({
        textInput: '',
      });
    } else {
      this.props.onCharInput(e.key, this.props.currPos, this.props.words);
      this.setState({
        textInput: this.state.textInput + e.key,
      });
    }
  }

  render() {
    return (
      <div className="row typeBox">
        <div className="col-xs-6 col-xs-offset-3 text-center">
          <input type="text"
            onKeyPress={(e) => this.handleKeyPress(e)}
            value={this.state.textInput}
            className="typeBoxInput"/>
        </div>
      </div>
    );
  }
}

TypeBox.propTypes = {
  onCharInput: PropTypes.func,
  onSpace: PropTypes.func,
  currPos: PropTypes.object,
  words: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    currPos: state.currPos,
    words: state.words,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCharInput: (char, currPos, words) => dispatch(actionCreators.newChar(char, currPos, words)),
    onSpace: (currPos, words) => dispatch(actionCreators.nextWord(currPos, words)),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TypeBox);
