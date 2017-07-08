import React from 'react';
import _ from 'underscore';

const timerReducer = (state = 10, action) => {
    switch(action.type) {
        case 'DECREMENT_TIMER':
            return Math.max((state - 1), 0);
        default:
            return state;
    }
};

export default timerReducer;
