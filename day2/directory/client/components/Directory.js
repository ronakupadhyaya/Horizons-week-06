import React from 'react';
import { Route, Link } from 'react-router-dom';
import { parse } from 'qs';

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com" },
  { "fName": "Graham", "lName": "Smith", "number": "(611)-256-6599", "email": "graham@joinhorizons.com" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com" },
  { "fName": "Graham", "lName": "Master", "number": "(612)-284-3678", "email": "senseibaybay@aol.com" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com" },
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov" },
  { "fName": "Dar", "lName": "Gandhi", "number": "(124)-233-6855", "email": "saltypeace@india.gov" }

];

const pplToFullLink = person => ({
  to: `/directory?fName=${person.fName}&lName=${person.lName}`,
  text: `${person.fName} ${person.lName}`,
  key: person.number
});

class Directory extends React.Component {

  componentWillMount() {
    this.query = parse(this.props.location.search.substr(1));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id === this.props.id) { this.query = parse(nextProps.location.search.substr(1)); }
  }

  displayFunc() {
    if (this.query.fName && this.query.lName) {
      return <Person query={this.query} />
    } else if (this.query.fName) {
      return <LinkList links={ppl.filter((elem) => elem.fName === this.query.fName).map((person) => pplToFullLink(person))} />
    } else if (this.query.lName) {
      return <LinkList links={ppl.filter((elem) => elem.lName === this.query.lName).map((person) => pplToFullLink(person))} />
    } else if (this.query.area) {
      return <LinkList links={ppl.filter((elem) => elem.number.substring(1, 4) === this.query.area).map((person) => pplToFullLink(person))} />
    } else {
      return <LinkList links={ppl.map((person) => pplToFullLink(person))} />
    }
  }

  render() {
    return (
      <div>
        <h1>Horizons Directory</h1>
        {this.displayFunc()}
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
      p.fName === this.props.query.fName &&
      p.lName === this.props.query.lName
    ));

    return person ? (
      <div>
        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>

        Not the {`${person.fName}`} you're looking for? {' '}
        <Link to={"/directory?fName=" + person.fName}>Find others</Link><br />
        <Link to="/directory">Back to listings</Link>
      </div>
    ) : (
        <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
      )
  }
}


export { Directory, Person };
