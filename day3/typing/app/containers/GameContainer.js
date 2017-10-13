import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WordBox from '../components/WordBox';
import TextBox from '../components/TextBox';
import InfoBar from '../components/InfoBar';

const GameContainer = ({ words, currentIndex }) => {
    return (
        <div className="box-container">
          <WordBox words={words} />
          <TextBox />
          {currentIndex ? <InfoBar /> : null}
        </div>
    );
};

GameContainer.propTypes = {
    words: PropTypes.array,
    currentIndex: PropTypes.array,
};

const mapStateToProps = (state) => ({
    words: state.game.words,
    currentIndex: state.game.currentIndex,
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
