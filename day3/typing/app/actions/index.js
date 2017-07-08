import * as types from './types';

const onStart = (dispatch) => (
    dispatch({type: types.START_GAME})
);


const onEnd = (dispatch) => (
    dispatch({type: types.END_GAME})
);

const onDecrement = (dispatch) => (
    dispatch({type: types.DECREMENT_TIMER})
);

export default {onStart, onEnd, onDecrement};
