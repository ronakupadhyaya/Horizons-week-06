const guessedLettersReducer = (state = 0, action) =>{
    switch(action.type) {
        case 'BAD_GUESS':
            const newArr = [...state];
            newArr.push(action.letter);
            return newArr;

        default:
            return state;
    }
};

export default guessedLettersReducer;
