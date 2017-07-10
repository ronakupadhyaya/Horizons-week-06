function GameState()  {
    return{
        type: 'GAME_STATE'
    };
}
function UserInputing(input)  {
    return{
        type: 'INPUT_CHECK',
        input: input
    };
}
export{ GameState, UserInputing };
