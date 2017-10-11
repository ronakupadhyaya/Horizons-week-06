//Some basic setup - this looks different from the videos cause
//  we're using Codepen and importing works differently
import {
    Redirect
} from 'react-router';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import React from 'react'

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
            return (<Redirect to="/chicken" />
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
function getPlayer(person) {
    for (var i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].name == person)
            return teamMembers[i]
    }
    return null
}

// (suggested) Helpful Function to help with rendering final message
//  Input: two Strings, both should be names
//  Output: an appropriate message string ("P1 wins by x chicken legs!" etc)
function calcMessage(p1, p2) {
    var p1 = getPlayer(p1);
    var p2 = getPlayer(p2);
    var winner = p1.speed > p2.speed ? p1 : p2.speed > p1.speed ? p2 : ''
    var loser = winner === p1 ? p2 : winner === p2 ? p1 : ''
    return <p>{winner ? winner.name + ' wins by ' + (winner.speed - loser.speed) + ' chicken legs!' : 'Tie!'}</p>
}

// (suggested) Component that renders a final result
class FinalResult extends React.Component {
    getP1() {
        this.url = this.props.match.url.split('/')
        return this.url[this.url.length - 2]
    }
    getP2() {
        this.url = this.props.match.url.split('/')
        return this.url[this.url.length - 1]
    }
    render() {
        return (
            <div>
                <h4>P2: {this.getP2()}</h4>
                <Route exact={true} path='/chicken/:p1/:p2' render={() => calcMessage(this.getP1(), this.getP2())} />
            </div>
        )
    }
}

// (suggested) Component that renders after first link clicked
//  should show second level links, as well as some final result
class P2Selection extends React.Component {
    getName() {
        this.url = this.props.match.url.split('/')
        return this.url[this.url.length - 1]
    }
    render() {
        return (
            <div>
                <h4>P1: {this.getName()}</h4>
                <h4>Select your second player:</h4>
                {teamMembers.map(x => <span key={x.name}><Link to={this.props.match.url + '/' + x.name}>{x.name}</Link></span>)}
                <Route path='/chicken/:ta/:ta' component={FinalResult} />
            </div>
        )
    }
}

class ChickenContest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route path="/chicken" component={Status} />
                <h3>Welcome to the Chicken Leg Contest!</h3>
                <h4>Select your first player:</h4>
                {teamMembers.map(x => <span key={x.name}><Link to={'/chicken/' + x.name}>{x.name}</Link></span>)}
                <Route path='/chicken/:ta' component={P2Selection} />
            </div>
        )
    }
}

export default ChickenContest;