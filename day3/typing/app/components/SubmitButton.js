import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({submitFunc}) =>
    <button onClick={() => submitFunc()} style={{width: '70%'}} className="btn btn-success">Submit</button>;

SubmitButton.propTypes = {
    submitFunc: PropTypes.func
};
export default SubmitButton;
