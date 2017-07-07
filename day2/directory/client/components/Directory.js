import React from 'react';
import { /* Route, */ Link } from 'react-router-dom';

import { parse } from 'qs'; 

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com" },
  { "fName": "Graham", "lName": "Smith", "number": "(610)-256-6599", "email": "graham@joinhorizons.com" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com" },
  { "fName": "Graham", "lName": "Master", "number": "(611)-284-3678", "email": "senseibaybay@aol.com" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com" },
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov" }

];

const pplToFullLink = person => ({
    to: `/directory?fName=${person.fName}&lName=${person.lName}`,
    text: `${person.fName} ${person.lName}`,
    key: person.number
});

class Directory extends React.Component {
  render() {
    var searchedPpl = [...ppl];
    const query = parse(location.search.substr(1));

    for (var key in query) {
      if (key === 'number') {
        searchedPpl = searchedPpl.filter(person => person.number.includes(query[key]))
      }
      else {
        searchedPpl = searchedPpl.filter(person => person[key] === query[key])
      }
    }
    if (query.hasOwnProperty('fName') && query.hasOwnProperty('lName')) {
      const person = ppl.find(p => (
        p.fName === query['fName'] &&
        p.lName === query['lName']
      ));
      return (
        <Person person={person} />
      )
    }
    return (
      <div>
        <h1>Horizons Directory</h1>
        <LinkList links={searchedPpl.map(pplToFullLink)} />
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
    const person = this.props.person;
    return person ? (
      <div>
        <h1>Horizons Directory</h1>
        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>

        <p>Not the {`${person.fName}`} you're looking for? {' '}
        <Link to={'/directory/?fName=' + person.fName}>Find Other {`${person.fName}`}s</Link>
        </p>
        <p>
        Looking for others with the last name, {`${person.lName}`}?
        <Link to={'/directory/?lName=' + person.lName}> Find Other {`${person.lName}`}s</Link>
        </p>
        <p>
        Trying to find others with the area code, {`${this.props.person.number.slice(1,4)}`}?
        <Link to={'/directory/?number=' + person.number.slice(1,4)}> Find in Area</Link>
        </p>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}

export { 
  Directory,
  Person
};
