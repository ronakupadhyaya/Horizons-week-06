import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../actions/index';
import Game from '../components/Game';

class GameContainer extends React.Component {
  render() {
    return (
          <div className="container game-container">
              <Game words={this.props.words} />
              <div className="row text-center">
                <input type="submit"
                  className="btn btn-success startButton"
                  onClick={() => this.props.onStartClick()}
                  value="Start Game"/>
              </div>
          </div>
      );
  }
}

GameContainer.propTypes = {
  words: PropTypes.array,
  onStartClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    words: state.words,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(actionCreators.startGame());
    },
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
