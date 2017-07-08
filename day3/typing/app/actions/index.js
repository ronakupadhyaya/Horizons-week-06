import types from './types';

export const startGame = () => {
    return {type: types.start};
};
export const endGame = () => {
    return {type: types.end};
};
export const decrementTimer = () => {
    return {type: types.decTime};
};
export const addCharacter = (input, streak, match) => {
    return {type: types.addChar, input, streak, match};
};
export const nextWord = () => {
    return {type: types.nextWord};
};
