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
import React from 'react';
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
    if(this.props.location.pathname.length > 30){
      return (<Redirect to="/"/>
      )
    }
    return(
      <div>You are at: {this.props.location.pathname}
        <p> Welcome to the chicken leg eating contest </p>
      </div>
    )
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
  var winner = getSpeedOf(p1) > getSpeedOf(p2) ? p1 : p2;
  var difference = getSpeedOf(p1) > getSpeedOf(p2) ? getSpeedOf(p1) - getSpeedOf(p2) : getSpeedOf(p2) -getSpeedOf(p1)
  return(
    <p>{winner} wins by  {difference} chicken legs!</p>
  )
}

// (suggested) Component that renders a final result
class FinalResult extends React.Component{
  render(){
    console.log(this.props.match.url.split('/')[1], this.props.match.url.split('/')[2])
    return(
      <div>
        <p>P2 is: {this.props.match.url.split('/')[2]} </p>
        {
          calcMessage(this.props.match.url.split('/')[1], this.props.match.url.split('/')[2])
        }
      </div>
    )
  }
}

// (suggested) Component that renders after first link clicked
//  should show second level links, as well as some final result
class P2Selection extends React.Component{

  render(){
    var memberName = this.props.match.url.split('/')[1];
    return (
      <div>
        <p> P1 is: {memberName}</p>
          {
            teamMembers.map(member => {
              return <Link to={this.props.match.url + '/' +member.name}>{member.name} </Link>
            })
          }
          <Route path="/chicken/:player1/:player2" component={FinalResult} />
      </div>
    )
  }
}

class ChickenApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <Route path="/chicken" component={Status}/>
                    <span> Select your first player </span>
          {
            teamMembers.map(member => {
              return <Link to={'/chicken/' + member.name}>{member.name} </Link>
            })
          }
          <Route path="/chicken/:player1" component={P2Selection} />
          </div>
      )
  }
}

export default ChickenApp;
