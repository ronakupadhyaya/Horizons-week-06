// import words from '../dictionary';
// import _ from 'underscore';

const typedListReducer = (state = [], action) => {
    switch(action.type) {
        case 'ON_TYPE':
            const newState = [...state];
            newState.push(action.letter);
            console.log(newState);
            return newState;
        default:
            return state;
    }
};

export default typedListReducer;
