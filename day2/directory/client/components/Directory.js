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
        <Route exact={true} path='/directory' component={Form} />
        <Switch>
          <Route path='/directory/:fName/:lName' component={Person} />
          <Route path='/directory' component={LinkList} />
        </Switch>
        <Route path='/directory/:anything' render={() => <Link to='/directory'>Back to Listings</Link>} />
      </div>
    );
  }
};

const Form = () => (
  <form style={{margin: '10px'}}>
    <h3>Filter</h3>
    First Name: <input style={{margin: '0 20px 0 0'}} type='text' name='fName' />
    Last Name: <input style={{margin: '0 20px 0 0'}} type='text' name='lName' />
    Area Code: <input style={{margin: '0 20px 0 0'}} type='text' name='areacode' />
    <input type='submit' value='Filter' />
  </form>
)

const LinkList = ({ location }) => {
  //convert query to object
  const query = parse(location.search.slice(1));
  console.log('QUERY', query);

  //assigning ppl to temp variable
  let links = ppl.slice();

  //filtering the people
  Object.keys(query).forEach(key => {
    switch (key) {
      case 'fName':
        links = links.filter(p => (p.fName === (query[key] || p.fName)));
        break;
      case 'lName':
        links = links.filter(p => (p.lName === (query[key] || p.lName)));
        break;
      case 'areacode':
        links = links.filter(p => (p.number.slice(1, 4) === (query[key] || p.number.slice(1, 4))));
        break;
    }
  })

  // convertying people to full links
  links = links.map(pplToFullLink)
  return (
    <ul>
      {links.map(link => (
        <li key={link.key}>
          <Link to={link.to}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );
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
        <Link to={`/directory/${person.fName}`}>Find Others</Link>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
