import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.setState({end: new Date(Date.now() + this.props.mins * 60000)});
    }
    componentDidMount() {
        this.interval = setInterval(this.update.bind(this), 100);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    update() {
        this.setState({secondsLeft: (this.state.end - Date.now()) / 1000});
    }
    render() {
        if(this.state.secondsLeft < 0) {
            return <h2>Time left: 0 seconds</h2>;
        }
        return <h2>Time left: {this.state.secondsLeft} seconds</h2>;
    }
}

Timer.propTypes = {
    mins: Number
};

export default Timer;
