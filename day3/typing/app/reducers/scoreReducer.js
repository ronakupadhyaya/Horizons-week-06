import React from 'react';
import _ from 'underscore';

const scoreReducer = (state = [0, 0, 0, 0], action) => {
    switch(action.type) {
        case 'DECREMENT_TIMER':
            return state - 1;
        default:
            return state;
    }
};

export default scoreReducer;
