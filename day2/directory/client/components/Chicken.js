import React from 'react';
import { Link, Route } from 'react-router-dom';

//  Array of TAs and their speeds
let id = 0;

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

function getSpeedOf(person){
  for (var i = 0; i < speeds.length; i ++){
    if(speeds[i].name == person)
      return speeds[i].speed;
  }
  return null;
}

function calcMessage(p1, p2){
  console.log("P1: " + p1);
  console.log("P2: " + p2);
  if (p1 === p2) {
    return 'Tie!';
  }
  let p1Amt = 0;
  let p2Amt = 0;
  for (let i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].name === p1) {
      p1Amt = teamMembers[i].speed;
    } else if (teamMembers[i].name === p2) {
      p2Amt = teamMembers[i].speed;
    }
  }
  let diff = Math.abs(p1Amt - p2Amt);
  if (p1Amt > p2Amt) {
    return 'P1 wins by ' + diff + ' chicken legs!';
  } else if (p2Amt > p1Amt) {
    return 'P2 wins by ' + diff + ' chicken legs!';
  }
}

class FinalResult extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <p>P2 is {this.props.match.params.ta}</p>
        <p>{calcMessage(this.props.match.url.split('/')[2], this.props.match.url.split('/')[3])}</p>
      </div>
    )
  }
}

class P2Selection extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <p>P1 is {this.props.match.params.ta}</p>
        <p>Select your second player!</p>
        <ul>
          {teamMembers.map((person) => <li key={id++}><Link to={this.props.match.url + '/' + person.name}>{person.name}</Link></li>)}
        </ul>
        <Route path={this.props.match.url + '/:ta'} component={FinalResult}/>
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
          <p>Welcome to the Chicken Leg Contest! Select your first player!</p>
          <ul>
            {teamMembers.map((person) => <li key={id++} ><Link to={'/chickenleg/' + person.name}>{person.name}</Link></li>)}
          </ul>
          <Route path={'/chickenleg/:ta'} component={P2Selection}/>
          </div>
      );
  }
}

export default Chicken;
