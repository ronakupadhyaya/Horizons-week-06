/**
 * Created by ebadgio on 7/6/17.
 */
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

//  Array of TAs and their speeds
const teamMembers = [
    {name: "Syed",
        speed: 10},
    {name: "Nihar",
        speed: 20},
    {name: "Tom",
        speed: 314},
    {name: "Allie",
        speed: 4.6},
    {name: "Gisela",
        speed: 102.2},
    {name: "Graham",
        speed: 99},
    {name: "Jo",
        speed: 0.1},
    {name: "Jay",
        speed: 9999}
]

//DON'T TOUCH THIS
class Status extends React.Component {
    render(){
        if(this.props.location.pathname.length > 100){
            return (<Redirect to="/"/>
            )
        }
        return(<div></div>)
    }
}

// A helper function that gets speed of a certain person:
//  getSpeedOf("Jay") => 9999, etc
//  If it encounters errors finding the speed, returns null
function getSpeedOf(person){
    for (var i = 0; i < teamMembers.length; i ++){
        if(teamMembers[i].name == person)
            return teamMembers[i].speed
    }
    return null
}

// (suggested) Helpful Function to help with rendering final message
//  Input: two Strings, both should be names
//  Output: an appropriate message string ("P1 wins by x chicken legs!" etc)
function calcMessage(p1, p2){
    var p1Speed = getSpeedOf(p1);
    var p2Speed = getSpeedOf(p2);
    if (p1Speed > p2Speed){
        return 'P1 wins by' + ' ' + (p1Speed - p2Speed) + ' ' + 'chicken legs!'
    }
    else if (p2Speed > p1Speed){
        return 'P2 wins by' + ' ' +  (p2Speed - p1Speed) + ' '+ 'chicken legs!'
    }
    else{
        return 'It\'s a Tie!'
    }

}

// (suggested) Component that renders a final result
class FinalResult extends React.Component{
    render(){
        var p1 = this.props.match.params.ta;
        var p2 = this.props.match.params.ta2;
        console.log(p1,p2, this.props.match)
        return(
            <div>
                <p>P2 is:{' '}{p2}</p>
                <h3>{calcMessage(p1,p2)}</h3>
            </div>
        )
    }
}

// (suggested) Component that renders after first link clicked
//  should show second level links, as well as some final result
class P2Selection extends React.Component{
    render(){
        console.log('here',this.props.match.params.ta, this.props.match)
        return (
            <div>

                <p>P1 is:{' '}{this.props.match.params.ta} </p>
                <p>Select your Second Player!</p>
                {teamMembers.map((ta) => {
                    var nameList = ta.name.split(' ');
                    var to = '/subapp/chickenContest/' + this.props.match.params.ta
                    nameList.forEach((part) => to += ('/' + part));
                    return <Link style={style} to={to}>{ta.name}</Link>
                })}
                <div style={{'padding-top':'20px'}}>
                    <Route path={'/subapp/chickenContest/:ta/:ta2'} component={FinalResult} />
                </div>
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
                <Route path="/subapp/chickenContest" component={Status}/>
                <h1> Welcome to the Chicken Leg eating contest!</h1>
                <p> Select your First Player!</p>

                {teamMembers.map((ta) => {
                    var nameList = ta.name.split(' ');
                    var to = '/subapp/chickenContest';
                    nameList.forEach((part) => to += ('/' + part));
                    return <Link style={style} to={to}>{ta.name}</Link>
                })}
                <div style={{'padding-top':'20px'}}>
                    <Route path="/subapp/chickenContest/:ta" component={P2Selection}/>
                </div>





            </div>
        )
    }
}
let style = {
    'margin': '10px',
    'padding': '10px',
    'backgroundColor': 'black',
    'color': 'white'
};
export default App;