import React from 'react';
import {Link} from 'react-router-dom';
const styling = {
    'border': '1px solid black',
    'borderRadius': '5px',
    'padding': '2px',
    'textDecoration': 'none',
    'backgroundColor': 'green',
    'color': 'white'
};
const PlayGameButton = ({ }) => {
    return(
      <span>
        <Link to="/" style={styling}>Play Game</Link>
      </span>
    );
};


export default PlayGameButton;
