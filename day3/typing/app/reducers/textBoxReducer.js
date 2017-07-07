const textBoxReducer = (state = {userInput: [], currentIndex: [0, 0]}, action) => {
    switch(action.type) {
        case 'CHAR_ADDED':
            const temp = state.userInput.slice();
            const previous = state.userInput[state.currentIndex[0]];
            temp[state.currentIndex[0]] = previous ? previous + action.character : action.character;
            return {userInput: temp, currentIndex: state.currentIndex};
        case 'NEXT_WORD':
            const temp2 = state.currentIndex.slice();
            temp2[0] = state.currentIndex[0] + 1;
            return {userInput: state.userInput, currentIndex: temp2};
        default:
            return state;
    }
};

export default textBoxReducer;
