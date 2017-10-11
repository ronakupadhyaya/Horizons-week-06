import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
  { "fName": "Nihar", "lName": "Harhar", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com" },
  { "fName": "Nihar", "lName": "Kardashian", "number": "(608)-633-1254", "email": "kanyebae@tidal.com" },
  { "fName": "Graham", "lName": "Smith", "number": "(610)-256-6599", "email": "graham@joinhorizons.com" },
  { "fName": "Graham", "lName": "Slam", "number": "(611)-845-0967", "email": "cmonandslam@welcometothejam.com" },
  { "fName": "Graham", "lName": "Master", "number": "(612)-284-3678", "email": "senseibaybay@aol.com" },
  { "fName": "Graham", "lName": "Cracker", "number": "(616)-824-0567", "email": "cinnamonbear@yahoo.com" },
  { "fName": "Darwish", "lName": "Gani", "number": "(774)-123-6477", "email": "darwish@joinhorizons.com" },
  { "fName": "Bob", "lName": "Gani", "number": "(774)-123-9999", "email": "darwish@joinhorizons.com" },
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
        <Switch>
          <Route path='/directory' exact render={ () => <LinkList links={ppl.map(pplToFullLink)} />} />
          <Route path='/directory/surname/:lName' render={ (props) => <LinkList links={ppl
            .filter(p => p.lName === props.match.params.lName)
            .map(pplToFullLink)}/> } />
          <Route path='/directory/areacode/:number' render={ (props) => <LinkList links={ppl
            .filter(p => p.number.slice(1, 4) === props.match.params.number)
            .map(pplToFullLink)}/> } />
          <Route path='/directory/:fName/:lName' component={Person} /* render={ ({match})=> <Person match={match}/>} */ />
          <Route path='/directory/:fName' render={ (props) => <LinkList links={ppl
            .filter(p => p.fName === props.match.params.fName)
            .map(pplToFullLink)} />} />
        </Switch>
        <Route path='/directory/:anything' render={ () => <Link to='/directory'>Navigate back to all listings</Link> } />

        </div>
      );
    }
  };

  class LinkList extends React.Component {
    render() {
      return (
        this.props.links.length === 0 ? <h2>Nobody there!</h2> :
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
          <div>
            <Link to={'/directory/' + person.fName}>Find others with the same first name </Link>
          </div>
          <div>
            <Link to={'/directory/surname/' + person.lName}>Find others with the same last name</Link>
          </div>
          <div>
            <Link to={'/directory/areacode/' + person.number.slice(1, 4)}>Find others in the same area</Link>
          </div>
        </div>
      ) : (
        <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
      )
    }
  }


  export default Directory;
