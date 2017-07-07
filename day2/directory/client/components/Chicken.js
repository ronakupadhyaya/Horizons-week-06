//Some basic setup - this looks different from the videos cause
//  we're using Codepen  and importing works differently

import React from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

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
  if(p1===p2)return "Tie!";
  const s1=getSpeedOf(p1);
  const s2=getSpeedOf(p2);
  if(s1>s2){
    const result= p1 + " wins by " + (s1-s2).toString() + " chicken legs";
    return result
  }else {
    const result= p2 + " wins by " + (s2-s1).toString() + " chicken legs";
    return result
  }
}

// (suggested) Component that renders a final result
class FinalResult extends React.Component{
  render(){

    return(
      <div>
        P2 is {this.props.match.params.tao}
        <p>{calcMessage(this.props.match.params.ta,this.props.match.params.tao)}</p>
      </div>
    )
  }
}

// (suggested) Component that renders after first link clicked
//  should show second level links, as well as some final result
class P2Selection extends React.Component{
  render(){
    return (
      <div>
        P1 is {this.props.match.params.ta}
        <p>Select your second player!</p>
        {teamMembers.map(ta=><a className="box"><Link to={this.props.match.url + "/" + ta.name}>{ta.name}</Link></a>)}
        <Route path="/subapp/chicken/:ta/:tao" component={FinalResult} />
      </div>
    )
  }
}

class Chicken extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <p>Welcome to the Chicken Leg Contest!</p>
          <p>Select your first player!</p>
          {teamMembers.map(ta=><a className="box"><Link to={'/subapp/chicken/'+ta.name}>{ta.name}</Link></a>)}
          <Route path="/subapp/chicken/:ta" component={P2Selection} />
        </div>
      )
  }
}

export default Chicken;
