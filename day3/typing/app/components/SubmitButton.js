import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = (props) => {
    const handleSubmit = () => {
        props.history.push('/score');
    };
    return (
        <input onClick={handleSubmit} type="button" value="Submit" className="button"/>
    );
};

SubmitButton.propTypes = {
    history: PropTypes.object,
};

export default SubmitButton;
