import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { parse } from 'qs';

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com" },
  { "fName": "Graham", "lName": "Smith", "number": "(610)-256-6599", "email": "graham@joinhorizons.com" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com" },
  { "fName": "Graham", "lName": "Master", "number": "(612)-284-3678", "email": "senseibaybay@aol.com" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com" },
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov" }

];

const pplToFullLink = person => ({
    to: `/directory/${person.fName}/${person.lName}`,
    text: `${person.fName} ${person.lName}`,
    key: person.number
});

class Directory extends React.Component {
  render() {
    return (
      <div>
        <h1>Horizons Directory</h1>
        <Route path='/directory' exact='true' render = {()=><LinkList links={ppl.map(pplToFullLink)}/>}/>
        <Switch>
        <Route path={'/directory/surname/:lName'} exact="true" render= {(props)=>
          <LinkList
            links={ppl
              .filter(p => p.lName === props.match.params.lName).map(pplToFullLink)}/>}/>

        <Route path={'/directory/areacode/:areacode'} exact="true" render={(props)=> <LinkList links={
          ppl.filter(p=> p.number.substring(1,4) === props.match.params.areacode).map(pplToFullLink)}/>}/>

        <Route path={'/directory/:fName/:lName'} exact="true" component={Person}/>
      </Switch>
        <Route path={'/directory/:fName'} exact="true"
          render={ (props)=>
            <LinkList
              links={ppl
                .filter(p => p.fName === props.match.params.fName).map(pplToFullLink)}/>}/>
        <Route path={'/directory'} render={()=><Link to={'/directory'}>Back to Directory</Link>}/>
      </div>
    );
  }
};

class LinkList extends React.Component {
  render() {
    return (
        <ul>
          {this.props.links.map(link => (
            <li key={link.key}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
    );
  }
};

class Person extends React.Component {
  render() {
    // Array.prototype.find returns the first item satisfying the fn
    const person = ppl.find(p => (
      p.fName === this.props.match.params.fName &&
      p.lName === this.props.match.params.lName &&
      p.areacode === this.props.match.params.areacode
    ));

    return person ? (
      <div>
        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>

        Not the {`${person.fName}`} you're looking for? {' '}
        <div>
        <Link to={'/directory/'+this.props.match.params.fName}>Find a Different {person.fName}</Link>
        </div>
        <div>
          <Link to={'/directory/surname/'+this.props.match.params.lName}>Find a Different {person.lName}</Link>
        </div>
        <div>
          <Link to={'/directory/areacode/'+person.number.substring(1,4)}>Find all with area code {person.number.substring(0,5)}</Link>
        </div>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
