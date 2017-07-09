const startGameReducer = (state, action) => {
    switch (action.type) {
        case 'START_GAME':
            this.interval = setInterval();
            return state;
        default:
            return state;

    }
};
