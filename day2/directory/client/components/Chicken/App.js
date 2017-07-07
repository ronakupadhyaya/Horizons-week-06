//Some basic setup - this looks different from the videos cause
//  we're using Codepen and importing works differently
import React from 'react';
import {
  BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

//  Array of TAs and their speeds
const teamMembers = [
    {
        name: "Syed",
        speed: 10
    },
    {
        name: "Nihar",
        speed: 20
    },
    {
        name: "Tom",
        speed: 314
    },
    {
        name: "Allie",
        speed: 4.6
    },
    {
        name: "Gisela",
        speed: 102.2
    },
    {
        name: "Graham",
        speed: 99
    },
    {
        name: "Jo",
        speed: 0.1
    },
    {
        name: "Jay",
        speed: 9999
    }
]

//DON'T TOUCH THIS
class Status extends React.Component {
    render() {
        if (this.props.location.pathname.length > 30) {
            return (<Redirect to="/" />
            )
        }
        return (
            <div>You are at: {this.props.location.pathname}
            </div>
        )
    }
}

// A helper function that gets speed of a certain person: 
//  getSpeedOf("Jay") => 9999, etc
//  If it encounters errors finding the speed, returns null
function getSpeedOf(person) {
    for (var i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].name == person)
            return teamMembers[i].speed
    }
    return null
}

// (suggested) Helpful Function to help with rendering final message
//  Input: two Strings, both should be names
//  Output: an appropriate message string ("P1 wins by x chicken legs!" etc)
function calcMessage(p1, p2) {
    const p1Spd = getSpeedOf(p1);
    const p2Spd = getSpeedOf(p2);
    if (p1Spd === p2Spd) {
        return p1 + ' tied with ' + p2 + '!';
    }
    if (p1Spd > p2Spd) {
        return p1 + ' won by ' + (p1Spd - p2Spd) + ' chicken legs!';
    }
    else {
        return p2 + ' won by ' + (p2Spd - p1Spd) + ' chicken legs!';
    }
}

// (suggested) Component that renders a final result
class FinalResult extends React.Component {
    render() {
        return (
            <div>
                <p>Player 2 is {this.props.match.params.p2}</p>
                <p>{calcMessage(this.props.match.params.p1, this.props.match.params.p2)}</p>
            </div>
        )
    }
}

// (suggested) Component that renders after first link clicked
//  should show second level links, as well as some final result
class P2Selection extends React.Component {
    render() {
        return (
            <div>
                <p>Player 1 is {this.props.match.params.p1}</p>
                {teamMembers.map((person) => <Link to={this.props.match.url + '/' + person.name}>{person.name}</Link>)}
                <Route path='/chicken/:p1/:p2' component={FinalResult} />
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route path="/" component={Status} />
                {teamMembers.map((person) => <Link to={`/chicken/${person.name}`}>{person.name}</Link>)}
                <Route path='/chicken/:p1' component={P2Selection} />
            </div>
        )
    }
}

export default App;
