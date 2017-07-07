import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { parse } from 'qs'

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com" },
  { "fName": "Graham", "lName": "Smith", "number": "(610)-256-6599", "email": "graham@joinhorizons.com" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com" },
  { "fName": "Graham", "lName": "Master", "number": "(612)-284-3678", "email": "senseibaybay@aol.com" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com" },
  { "fName": "Darwish", "lName": "Gandhi", "number": "(124)-233-6755", "email": "saltypeace@india.gov" },
  {"fName": "Lisa", "lName": "Gandhi", "number": "(124)-253-6755"},
  {"fName": "Lisa", "lName": "Gandhi", "number": "(124)-263-6755"}

];

const pplToFullLink = person => ({
    to: `/subapp/directory/${person.fName}/${person.lName}`,
    text: `${person.fName} ${person.lName}`,
    key: person.number
});

const filter = query => {
  if(query.areacode) {
    return <LinkList links={ppl.filter(p => p.number.slice(1, 4) === query.areacode).map(pplToFullLink)}/>
  } else if (query.surname) {
    return <LinkList links={ppl.filter(p => p.lName === query.surname).map(pplToFullLink)}/>
  } else {
    return <LinkList links={ppl.map(pplToFullLink)}/>;
  }
}

class Directory extends React.Component {
  render() {
    return (
      <div>
        <h1>Horizons Directory</h1>
        <Switch>
          <Route path='/subapp/directory/:fName/:lName' exact component={Person} />
          <Route path='/subapp/directory/:fName' exact render={(props) => <LinkList links={ppl.filter(p => p.fName === props.match.params.fName).map(pplToFullLink)}/>}/>
          <Route path='/subapp/directory' render={(props) => filter(parse(props.location.search.substr(1)))} />
        </Switch>
        <Route path="/subapp/directory/:anything" render={() => <Link to="/subapp/directory"> Back to Listings</Link>}/>
        <Route path="/subapp/directory" render={(props) => {
          if(props.location.search) {
          return <Link to="/subapp/directory"> Back to Listings</Link>
        } else {
          return null;
        }
      }} />
      </div>
    );
  }
};

class LinkList extends React.Component {
  render() {
    const query = parse(location.search.substr(1));

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
      p.lName === this.props.match.params.lName
    ));

    return person ? (
      <div>
        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>

        Not the {`${person.fName}`} you're looking for? {' '}
        <Link to={`/subapp/directory/${person.fName}`}> Find others.</Link> <br></br>
        Not the {`${person.lName}`} you're looking for? {' '}
        <Link to={`/subapp/directory?surname=${person.lName}`}> Find others.</Link> <br></br>
        Not the areacode ({`${person.number.slice(1,4)})`} you're looking for? {' '}
        <Link to={`/subapp/directory?surname=${person.lName}`}> Find others.</Link> <br></br>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
