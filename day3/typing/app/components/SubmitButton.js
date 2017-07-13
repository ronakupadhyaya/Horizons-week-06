import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ username, history, totalScore, setUsername}) => {
    const handleSubmit = () => {
        const scores = JSON.parse(localStorage.getItem('score'));
        console.log('TOTALSCORE', totalScore);
        Object.values(scores).map((item) => {
            if (item.score === totalScore && !item.name) {
                item.name = username;
            }
        });
        localStorage.setItem('score', JSON.stringify(scores));

        setUsername('');

        history.push('/score');
    };
    return (
      <div style={{textAlign: 'center'}}>
        <input onClick={handleSubmit} type="button" value="Submit" className="button"/>
        </div>
    );
};

SubmitButton.propTypes = {
    history: PropTypes.object,
    username: PropTypes.string,
    totalScore: PropTypes.number,
    setUsername: PropTypes.func
};

export default SubmitButton;
