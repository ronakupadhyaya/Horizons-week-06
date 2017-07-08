const userInputReducer = (state = [[]], {type, char}) => {
    console.log('state in reducer', state);
    switch (type) {
        case 'CHAR_ADDED': {
            const listCopy = [...state];
            const currWord = listCopy.pop();
            currWord.push(char);
            listCopy.push(currWord);
            return listCopy;
        }
        case 'NEXT_WORD': {
            const listCopy = [...state];
            listCopy.push([]);
            console.log('listCopy', listCopy);
            return listCopy;
        }
        default:
            return state;
    }
};

export default userInputReducer;
