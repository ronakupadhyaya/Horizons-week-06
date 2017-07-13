import React from 'react';
import PropTypes from 'prop-types';

const LeaderBoard = (props) => {
    const handleSubmit = () => {
        props.history.push('/leaderboard');
    };

    return (
      <form>
        <input onClick={handleSubmit} type="submit" value="View Leader Board" className="button"/>
      </form>
    );
};

LeaderBoard.propTypes = {
    history: PropTypes.object,
};

export default LeaderBoard;
