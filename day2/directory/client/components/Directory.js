import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const ppl = [
  { "fName": "Nihar", "lName": "Patil", "number": "(921)-664-2091", "email": "nihar@joinhorizons.com" },
  { "fName": "Nihar", "lName": "Patil", "number": "(421)-666-2022", "email": "puppysmacker94@hotmail.com" },
  { "fName": "Andrew", "lName": "Patil", "number": "(921)-654-2071", "email": "andrew@joinhorizons.com"},
  { "fName": "Nihar", "lName": "Patil", "number": "(608)-633-1254", "email": "kanyebae@tidal.com" },
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
        <Switch> 
          <Route path="/directory/surname/:lName" render={({match}) => 
            <LinkList links={ppl
              .filter(p => p.lName === match.params.lName)
              .map(pplToFullLink)
              }
            />}
          />
          <Route path="/directory/areacode/:areacode" render={({match}) => 
            <LinkList links={ppl
              .filter(p => p.number.substring(1, 4) === match.params.areacode)
              .map(pplToFullLink)
              }
            />}
          />
          <Route path="/directory/:fName/:lName" component={Person}/>
          <Route path="/directory/:fName" render={({match}) => 
            <LinkList links={ppl
              .filter(p => p.fName === match.params.fName)
              .map(pplToFullLink)
              }
            />}
          />
          <Route path="/directory" render={() => <LinkList links={ppl.map(pplToFullLink)}/>}/>
        </Switch>
        <Route path="/directory/:params" render={() => <Link to="/directory">Back to Listings </Link>}/>
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
    const person = ppl.find(p => {
      return (
        p.fName === this.props.match.params.fName &&
        p.lName === this.props.match.params.lName
      );
    });

    const fNamePath = "/directory/" + person.fName;
    const lNamePath = "/directory/surname/" + person.lName;
    const aCodePath = "/directory/areacode/" + person.number.substring(1, 4);

    return person ? (
      <div>
        <h2>{`${person.fName} ${person.lName}`}</h2>
        <h3>{person.number}</h3>
        <h3>{person.email}</h3>
        <div> Not the {`${person.fName}`} you're looking for? </div>
        {<Link to={fNamePath}>Find others with the same first name</Link>} <br/>
        {<Link to={lNamePath}>Find others with the same last name</Link>} <br/>
        {<Link to={aCodePath}>Find others with the same areacode</Link>} <br/>
      </div>
    ) : (
      <h2>No {`${person.fName} ${person.lName}`} was found.</h2>
    )
  }
}


export default Directory;
