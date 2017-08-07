import * as types from './types';

export const startGame = ()=>(
    {
        type: types.START_GAME
    }
);

export const endGame = ()=>(
    {
        type: types.END_GAME
    }
);

export const decrementTimer = ()=>(
    {
        type: types.DECREMENT_TIMER
    }
);

export const newInput = (input)=>(
    {
        type: types.NEW_INPUT,
        input: input
    }
);
