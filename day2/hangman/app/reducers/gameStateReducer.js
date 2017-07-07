const gameStateReducer = (state = [], action) =>{
    switch (action.type) {
        case 'START_GAME':
            const wrdSplit = action.word.split('');
            const emptyArr = [];
            wrdSplit.forEach((letter) => emptyArr.push({letter: letter, guessed: false}));
            return emptyArr;
        default:
            return state;
    }
};


export default gameStateReducer;
