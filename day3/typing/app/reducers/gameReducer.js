// import * as types from '../actions/types';
const _ = require('underscore');

import words from '../dictionary';
const shuffled = _.shuffle(words).slice(0, 100);
const startingState = {wordList: shuffled};

const gameStateReducer = (state = startingState, action) => {
    console.log('bye', state);
    switch(action.type) {
        // case 'START_GAME':
        //     return state;
        // case 'DECREMENT_TIMER':
        //     timer -= 1;
        //     if(timer === 0) {
        //         this.props.onEndGame();
        //     }
        //     return state;
        // case 'END_GAME':
        //     clearInterval(this.interval);
        //     return state;
        default:
            return state;
    }
};

export default gameStateReducer;
