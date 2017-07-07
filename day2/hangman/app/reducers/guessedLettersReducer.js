const guessedLettersReducer = (state = [], action)=>{
    switch(action.type) {
        case 'NEW_GAME':
            const nState = [];
            return nState;
        case 'BAD_GUESS':
            const bState = state.slice();
            bState.push(action.letter);
            return bState;
        case 'GOOD_GUESS':
            const gState = state.slice();
            gState.push(action.letter);
            return gState;
        default:return state;
    }
};
export default guessedLettersReducer;
