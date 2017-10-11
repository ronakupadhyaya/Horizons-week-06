import React from 'react';
import PropTypes from 'prop-types';

const Board = ({leaderBoard}) => {
    return (
      <div>
        <ul>
          {leaderBoard.slice(0, 5).map((leader) => <li> {leader.name}: ({leader.score})</li> )}
        </ul>
        <ul>
          {leaderBoard.slice(5, 10).map(leader => <li> {leader.name}: ({leader.score})</li> )}
        </ul>
      </div>
    );
};

Board.propTypes = {
    leaderBoard: PropTypes.array
};

export default Board;
