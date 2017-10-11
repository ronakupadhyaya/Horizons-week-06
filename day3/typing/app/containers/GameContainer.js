import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from './WordBox';

class GameContainer extends React.Component {
    onInput(input) {
        // YOUR ON INPUT FUNCTION HERE
    }
    render() {
        return (
            <div>
                I am the game container!
                {
                    <WordBox wordList={this.props.wordList} />
                }
            </div>
        );
    }
}

GameContainer.propTypes = {
    wordList: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        wordList: state.game
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // YOUR MAP DISPATCH TO PROPS HERE
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
