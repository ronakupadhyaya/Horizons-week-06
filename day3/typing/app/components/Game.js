import PropTypes from 'prop-types';
import React from 'react';
import Word from './Word';
import { connect } from 'react-redux';
import actionCreators from '../actions/index';

// Parses the 2D words array into an array of <Word> elements ready to be rendered

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: setInterval(this.props.countdown.bind(this), 1000),
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.countdown);
  }

  render() {
    const props = this.props;
    return (
      <div className="row">
        <div className="gameBox col-xs-8 col-xs-offset-2">
          {props.words.map( (wordArray, index) => {
            return <Word key={index} word={wordArray} />;
          } ) }
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  words: PropTypes.array,
  countdown: PropTypes.func,
};

const mapStateToProps = () => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countdown: () => dispatch(actionCreators.DECREMENT_TIMER),
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
