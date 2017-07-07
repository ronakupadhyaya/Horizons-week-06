import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Man = ({ badGuesses }) => {
    return (
      <div>
        <p>{badGuesses}</p>
        <img src={imgUrls[badGuesses]}/>
      </div>
  );
};

Man.propTypes = {
    badGuesses: PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        badGuesses: state.badGuesses
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Man);
// connect creates a container, so Man is no longer a component but a container
