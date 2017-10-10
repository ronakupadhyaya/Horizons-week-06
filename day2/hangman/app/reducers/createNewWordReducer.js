

const createNewWordReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_WORD':
            const newState = [...state];
            for(let i = 0; i < action.word.length; i++) {
                if(i === 0 || i === 3 || i === 4) {
                    newState.push({letter: action.word[i].toUpperCase(), guessed: true });
                } else {
                    newState.push({letter: action.word[i].toUpperCase(), guessed: false});
                }
            }
            return newState;
        default:
            return state;
    }
};

export default createNewWordReducer;
