import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com", "areacode": "1234" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com", "areacode": "1234" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com", "areacode": "1234" },
  { "fName": "Graham", "lName": "Smith", "number": "(610)-256-6599", "email": "graham@joinhorizons.com", "areacode": "7234" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com", "areacode": "7234" },
  { "fName": "Graham", "lName": "Master", "number": "(612)-284-3678", "email": "senseibaybay@aol.com", "areacode": "7234" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com", "areacode": "5234" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com", "areacode": "5234" },
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov", "areacode": "5234" },
  { "fName": "Lisa", "lName": "Gandhi", "number": "(124)-293-2965", "email": "lghandi@howrse.com", "areacode": "5234" }

];

const pplToFullLink = person => ({
    to: `/directory?fName=${person.fName}&lName=${person.lName}`,
    text: `${person.fName} ${person.lName}`,
    key: person.number
});

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let queries = this.props.location.search.slice(1).split('&');
    let people = ppl.slice();
    let fName = "";
    let lName = "";
    let areacode = "";
    for (let i = 0; i < queries.length; i++) {
      queries[i] = queries[i].split('=');
      if (queries[i][0] === 'fName') {
        fName = queries[i][1];
      } else if (queries[i][0] === 'lName') {
        lName = queries[i][1];
      } else if (queries[i][0] === 'areacode') {
        areacode = queries[i][1];
      }
    }
    if (fName && lName) {
      return (
        <Person fName={fName} lName={lName}/>
      )
    }
    if (fName) {
      people = people.filter(p => p.fName === fName);
    }
    if (lName) {
      people = people.filter(p => p.lName === lName);
    }
    if (areacode) {
      people = people.filter(p => p.areacode === areacode);
    }
    return (
      <LinkList links={people.map(pplToFullLink)} />
    )
  }
}

class Directory extends React.Component {
  render() {
    return (
      <div>
        <h1>Horizons Directory</h1>
        <Switch>
          <Route path='/directory' exact={true} render={({location}) => <Display location={location}/>}/>
       </Switch>
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
      p.fName === this.props.fName &&
      p.lName === this.props.lName
    ));

    return person ? (
      <div>
        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>
        <h3>Area code: {person.areacode}</h3>

        Not the {`${person.fName}`} you're looking for?
        <br/>
        <Link to={`/directory?fName=${person.fName}`}>Find others with same first name</Link>
        <br/>
        <Link to={`/directory?lName=${person.lName}`}>Find others with same last name</Link>
        <br/>
        <Link to={`/directory?areacode=${person.lName}`}>Find others with same area code</Link>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
