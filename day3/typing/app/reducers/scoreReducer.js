
const scoreReducer = (state = {score: 0, streak: 0}, action) => {
    switch (action.type) {
        case 'ADD_SCORE':
            return Object.assign({}, state, {score: state.score + 1 });
        case 'ADD_STREAK':
            return Object.assign({}, state, {score: state.score + 1 }, {streak: state.streak + 1});
        case 'END_GAME':
        case 'END_STREAK':
            return Object.assign({}, state, {score: state.score + ((state.streak * (state.streak + 1)) / 2)}, {streak: 0});
        default:
            return state;
    }
};

export default scoreReducer;
