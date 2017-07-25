import React from 'react';
import { Link } from 'react-router-dom';

let id = 0;

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <center><h1>Leaderboard</h1></center>
            <ol>
              {JSON.parse(localStorage.getItem('topTen')).map((person, index) =>
                  <li key={id++}>{person.name} ({person.score})</li>
              )}
            </ol>
            <br/>
            <br/>
            <Link to="/leaderboard">To leaderboard</Link>
            <br/>
            <Link to="/">Back to game</Link>
        </div>
        );
    }
}

export default Leaderboard;
